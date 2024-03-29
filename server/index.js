/* eslint-disable no-unused-vars */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash'
import multer from 'multer';
import { login, register, logout, user } from './api/authentication.js';
import { User, Image, product} from './api/database.js';
import { orders } from './api/order.js';
import { getProduct, productCategory, topratedProduct } from './api/product.js';
import { addToCart, deleteItem, getCart } from './api/cart.js';
import { checkout, paymentVerification } from './api/payment.js';
import { addProduct } from './api/admin.js';



const app = express();
app.use(cors());
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

passport.use(User.createStrategy());
passport.serializeUser((User, done) => { done(null, User); })
passport.deserializeUser((User, done) => { done(null, User); })

app.get('/', (req, res) => {
    res.send('welcome');
})


app.post('/auth/user/register', register);
app.post('/auth/user/login', login);
app.get('/auth/user/logout', logout);
app.get('/user', user)

app.get('/user/order', orders)

app.post('/checkout', checkout)
app.post('/paymentVerfication', paymentVerification)

app.get('/:category/products', productCategory)
app.get('/product/toprated', topratedProduct)
app.get('/product/:slug', getProduct)

app.post('/user/addToCart', addToCart)
app.get('/user/cart', getCart)
app.post('/user/cart/deleteItem', deleteItem)


app.post('/addProduct', upload.fields([{ name: 'frontImage', maxCount: 1 }, { name: 'backImage', maxCount: 1 }]),addProduct);



app.listen(PORT, () => {
    console.log('server listening on port: ' + PORT);
})