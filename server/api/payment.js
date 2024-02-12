    import { instance } from "./paymentInstance.js";
    import crypto from "crypto";
    import { User, OrderModel } from "./database.js";



    export const checkout = async (req, res) => {

        const option = {
            amount: Number(req.body.totalAmount * 100),
            currency: "INR",
        }

        const response = await instance.orders.create(option);

        try {

            const { customer, items, totalAmount } = req.body;
            const userID = req.headers.userid;


            const order = new OrderModel({
                user: userID,
                razorpay_order_id:response.id,
                customer,
                items,
                totalAmount,
                status: 'Pending',
            });


            await order.save();
            // const updateResponse = User.updateOne({_id:userID},{$set:{cart:null}})
            // console.log(updateResponse)

        } catch (error) {
            res.status(404).send(error);
        }

        res.status(200).send(response);
    }

    export const paymentVerification = async (req, res) => {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expextedSignature = crypto.createHmac("sha256", "BILWOmcmWucxG6Y03AmR14Ls")
            .update(body.toString())
            .digest('hex')

        if (razorpay_signature === expextedSignature) {

            try {

                const order = await OrderModel.updateOne({ razorpay_order_id: razorpay_order_id },{$set:{status:'Paid'}});

                if(order.acknowledged === true) {
                    res.redirect('http://localhost:5173/');
                }
                else{
                    res.status(400).send(order.acknowledged);
                }

            } catch (error) {
                console.error("Error updating order details:", error);
                res.status(500).send({ success: false, error: "Internal Server Error" });
            }
        }
        else {
            res.status(404).send({ sucess: false })

        }

    }