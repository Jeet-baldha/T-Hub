import { OrderModel } from "./database.js"

export const orders = async (req, res) => {
    
    if (req.headers.userid) {
        const order = await OrderModel.find({user: req.headers.userid});

        res.status(200).send({message:'ok'});
    }
    else {
        res.status(404).send({ message: "You must be logged in" });
    }

}