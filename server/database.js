import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
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

export default User;