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




const app = express();
app.use(cors());
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(session({
    secret:"T-huun has no secret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:24*60*60*1000
    }
}))


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect("mongodb://localhost:27017/T-hub");


const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    address:String,
    phone:String,
    orders:[],
    reviews:[],
    cart:[]
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', userSchema);

passport.use(User.createStrategy());
passport.serializeUser((User,done) => {done(null,User);})
passport.deserializeUser((User,done) => {done(null,User);})




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
            console.log(err);
            res.send('User registration failed');
        } else {
            // Correct the structure of passport.authenticate
            passport.authenticate('local')(req, res, () => {
                res.send(newUser._id);
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
            return res.status(401).json({ message: info.message });
        }
        req.logIn(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.status(200).json({ message: 'User login successful' });
        });
    })(req, res, next);
});



app.post('/user/register',register);



app.get('/user/logout',(req,res,next) => {
    req.logout((err) => {
        if(err) {return next(err);}
        res.send("user logout")
    })
})

app.get('/user',(req,res) => {

    if(req.isAuthenticated){
        console.log(req.user);
        res.send(req.user);
    }
    else{
        res.send("user not found");
    }

})

app.get('/user/order',async (req,res) => {

    if(req.isAuthenticated){
        res.send(req.user);
    }
    else{
        res.send("please login first");
    }

})



app.get('/', (req, res) => {
    res.send('welcome');
})

app.get('/product/toprated', (req, res) => {
    const products = data.tshirts.filter((tshirts) => tshirts.rating >= 4);
    res.send(products)
})

app.get('/:category/products', (req, res) => {
    let category = req.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    const products = data.tshirts.filter((tshirts) => tshirts.category === category);
    res.send(products)
})


app.get('/product/:slug', (req, res) => {
    const products = data.tshirts.find((tshirts) => tshirts.slug === req.params.slug);
    res.send(products);
})

app.listen(PORT, () => {

    console.log('server listening on port: ' + PORT);

})