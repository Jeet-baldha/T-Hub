import dotenv from 'dotenv';
dotenv.config();

import razorpay from 'razorpay'

export const instance = new razorpay({
    key_id: "rzp_test_TZR7gvoGog8ry7",
    key_secret:"BILWOmcmWucxG6Y03AmR14Ls"
});



