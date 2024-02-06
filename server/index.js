/* eslint-disable no-unused-vars */
import express from 'express';
import bodyParser from 'body-parser';
import data from '../src/assets/Data/t-shirt.js'
import cors from 'cors'
import mongoose from 'mongoose';
import session from 'express-session';
import { Strategy as LocalStrategy } from "passport-local";
import passport from 'passport';
import flash from 'connect-flash'
import passportLocalMongoose from 'passport-local-mongoose'
import { instance } from './paymrntInstance.js'
import crypto from 'crypto'



const app = express();
app.use(cors());
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(session({
    secret: "T-huun has no secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/T-hub");


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    address: String,
    phone: String,
    orders: [],
    reviews: [],
    cart: []
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', userSchema);

passport.use(User.createStrategy());
passport.serializeUser((User, done) => { done(null, User); })
passport.deserializeUser((User, done) => { done(null, User); })




passport.use(new LocalStrategy((usernameOrPhone, password, done) => {
    User.findOne({ $or: [{ username: usernameOrPhone }, { phone: usernameOrPhone }] })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username or phone.' });
            }
            user.authenticate(password, (err, authenticatedUser) => {
                if (err) {
                    return done(err);
                }
                if (!authenticatedUser) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, authenticatedUser);
            });
        })
        .catch(err => {
            return done(err);
        });
}));

const register = (req, res) => {
    const username = req.body.username;
    const phone = req.body.phone;
    const password = req.body.password;

    User.register({ username: username, phone: phone }, password, (err, newUser) => {
        if (err) {
            res.send({ message: err.message });
        } else {
            // Correct the structure of passport.authenticate
            passport.authenticate('local')(req, res, () => {
                res.send({
                    message: 'User register successful',
                    authenticated: true,
                    userId: newUser._id,
                });
            });
        }
    });
};

app.post('/user/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                message: info.message,
                authenticated: false
            });
        }
        req.logIn(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.status(200).json({
                message: 'User login successful',
                authenticated: true,
                userId: user._id,
            });
        });
    })(req, res, next);
});

app.post('/user/register', register);


app.get('/user/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.send("user logout")
    })
})

app.get('/user', async (req, res) => {

    if (req.headers.userid) {
        const user = await User.findById(req.headers.userid);
        res.send(user);
    }
    else {
        res.send("user not found");
    }

})

app.get('/user/order', async (req, res) => {

    if (req.isAuthenticated()) {
        const user = await User.findById(req.user._id);
        res.send(user.orders);
    }
    else {
        res.send("please login first");
    }

})

app.post('/user/order', async (req, res) => {

    const userId = req.headers.userid;
    if (userId) {



        const order = {
            orderID: new Date().getTime() + userId,      // A unique identifier for the order
            customer: {
                firstName: String,                              // First name of the customer
                lastName: String,                               // Last name of the customer
                email: String,
                phone: Number,
                state: String,
                city: String,
                address: String                                  // Email address of the customer
            },
            items: [
                {
                    productId: 2,                               // MongoDB-generated unique identifier for the product
                    productName: String,                        // Name of the product               
                    price: Number,                              // Price of the product
                },
            ],
            totalAmount: Number,
            orderDate: new Date().toLocaleDateString(),         // Date and time when the order was placed
            paymentMethod: String,                               // Order status (e.g., "pending", "shipped", "delivered")
            status: String
        }

        order.customer = req.body.customer;
        order.items = req.body.items;
        order.totalAmount = req.body.totalAmount;
        order.paymentMethod = req.body.paymentMethod;
        order.status = "pending";



        const result = await User.updateOne(
            { _id: userId },
            { $push: { orders: order } }
        )


        res.send({ message: 'Order updated successfully' });
    }
    else {
        res.send("please login");
    }


})

app.post('/checkout', async (req, res) => {



    const option = {
        amount: Number(req.body.totalAmount * 100),
        currency: "INR",
    }
    const response = await instance.orders.create(option)


    res.status(200).send(response);
})

app.get('/', (req, res) => {
    res.send('welcome');
})

app.post('/paymentVerfication', (req, res) => {
    
    const { razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expextedSignature = crypto.createHmac("sha256","BILWOmcmWucxG6Y03AmR14Ls")
                                    .update(body.toString())
                                    .digest('hex')

    if(razorpay_signature === expextedSignature){
        res.send({sucess:true})
    }
    else{
        res.send({sucess:false})

    }




})

app.get('/:category/products', (req, res) => {
    let category = req.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    const products = data.tshirts.filter((tshirts) => tshirts.category === category);
    res.send(products)
})

app.get('/product/toprated',  (req, res) => {
    const product = data.tshirts.filter((tshirts) => tshirts.rating > 4);

    res.send(product);
})


app.get('/product/:slug', (req, res) => {
    const products = data.tshirts.find((tshirts) => tshirts.slug === req.params.slug);
    res.send(products);
})

app.get('/product', (req, res) => {
    const products = data.tshirts.find((tshirts) => tshirts.id == req.headers.id);
    res.send(products);
})

app.post('/user/addToCart', async (req, res) => {

    if (req.headers.userid) {


        const productID = req.body.productID;
        const userID = req.headers.userid;

        const user = await User.findById(userID);
        const product = data.tshirts.find((tshirts) => tshirts.id === productID);

        const item = {
            productID: product.id,
            name: product.name,
            price: product.price
        }

        if (user.cart.find((item) => item.productID === productID)) {
            res.send({ message: "You already have this product in your cart" });
        }
        else {
            const result = await User.updateOne(
                { _id: userID },
                { $push: { cart: item } }
            )
            res.status(200).send({ message: "added to cart" });
        }

    }
    else {
        res.send({ message: "please login first" });
    }
})

app.get('/user/cart', async (req, res) => {
    if (req.headers.userid) {
        const user = await User.findById(req.headers.userid);
        res.send(user.cart);
    }
    else {
        res.send({ message: "You must be logged in" });
    }

})

app.post('/user/cart/deleteItem', async (req, res) => {

    const productID = req.body.productID;
    try {
        const result = await User.updateMany(
            { _id: req.headers.userid },
            { $pull: { cart: { productID: productID } } }
        );
        res.send({ message: "item deleted" });

    } catch (error) {
        res.send(error.message);
    }


})

app.listen(PORT, () => {

    console.log('server listening on port: ' + PORT);

})