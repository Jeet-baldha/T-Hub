/* eslint-disable no-unused-vars */
import data from "../../src/assets/Data/t-shirt.js";
import {User} from "./database.js";

export const addToCart = async (req, res) => {

    if (req.headers.userid) {


        const productID = req.body.productID;
        const userID = req.headers.userid;

        const user = await User.findById(userID);
        const product = data.tshirts.find((tshirts) => tshirts.id === productID);

        const item = {
            productID: product.id,
            name: product.name,
            price: product.price,
            slug: product.slug,
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
        res.status(404).send({ message: "please login first" });
    }
}

export const getCart = async (req, res) => {
    if (req.headers.userid) {
        const user = await User.findById(req.headers.userid);
        res.status(200).send(user.cart);
    }
    else {
        res.status(404).send({ message: "You must be logged in" });
    }

}

export const deleteItem = async (req, res) => {

    const productID = req.body.productID;
    try {
        const result = await User.updateMany(
            { _id: req.headers.userid },
            { $pull: { cart: { productID: productID } } }
        );
        res.status(200).send({ message: "item deleted" });

    } catch (error) {
        res.status(404).send(error.message);
    }

}