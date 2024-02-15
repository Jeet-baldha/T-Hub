import mongoose from 'mongoose';
import passportLocalMongoose from "passport-local-mongoose";
import {Buffer} from 'buffer'


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

export const User = mongoose.model('user', userSchema);

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the UserModel
        required: true,
    },
    razorpay_order_id: String,
    customer: Object, // Adjust the schema based on your customer details
    items: Array, // Adjust the schema based on your item details
    totalAmount: Number,
    paymentMethod: String,
    status: String,
}, { timestamps: true });

export const OrderModel = mongoose.model('Order', orderSchema);



const imageSchema = new mongoose.Schema({
    image: {
        type: Buffer,
        required: true,
    },
});

export const Image = mongoose.model('Image', imageSchema);



const productSchema = {
    name: String,
    price: Number,
    discount: Number,
    slug:String,
    stock: Number,
    category: String,
    frontImage: {
        data: Buffer,
        contentType: String,
    },
    backImage:{
        data: Buffer,
        contentType: String,
    },
    rating:Number,
    reviews:Array
}

export const product = mongoose.model('products',productSchema);





