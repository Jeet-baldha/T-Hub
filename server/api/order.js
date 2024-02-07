import User from "./database.js";




export const order = async (req, res) => {

    if (req.headers.userid) {
        const user = await User.findById(req.headers.userid);
        res.send(user);
    }
    else {
        res.status(404).send('please login');
    }

}

export const addOrder = async (req, res) => {

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


        res.status(200).send({ message: 'Order updated successfully' });
    }
    else {
        res.status(404).send("please login");
    }


}