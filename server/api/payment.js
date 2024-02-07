import { instance } from "./paymrntInstance.js";

export const checkout = async (req, res) => {

    const option = {
        amount: Number(req.body.totalAmount * 100),
        currency: "INR",
    }
    const response = await instance.orders.create(option)

    res.status(200).send(response);
}

export const paymentVerfication = (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expextedSignature = crypto.createHmac("sha256", "BILWOmcmWucxG6Y03AmR14Ls")
        .update(body.toString())
        .digest('hex')

    if (razorpay_signature === expextedSignature) {
        res.redirect('http://localhost:5173/')
    }
    else {
        res.sta(404).send({ sucess: false })

    }

}