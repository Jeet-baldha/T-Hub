// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { TbMessageCircle2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout() {

    const state = ['Gujarat', 'Goa', 'Maharastra', 'Tamilnadu', 'Odisha'];
    const [billingDetails, setBillingDetails] = useState({
        state: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
        phone: '',
    });

    const [cartData, setCartData] = useState([]);
    const userID = useSelector(state => state.auth.userId);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('http://localhost:3000/user/cart', {
                    headers: {
                        "Content-Type": 'application/json',
                        "userID": userID
                    }
                })
                setCartData(data.data);
            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            customer: billingDetails,
            items: cartData,
            totalAmount: calculateTotalPrice(),
        }

        console.log(postData);
        try {
            const response = await axios.post("http://localhost:3000/checkout", postData, {
                headers: {
                    'userid': userID,
                    'Content-Type': 'application/json',
                }
            });

            const options = {
                key: "rzp_test_TZR7gvoGog8ry7",
                amount: response.data.amount,
                name: "T-hub",
                description: "Test Transaction",
                image: "https://avatars.githubusercontent.com/u/106021946?v=4",
                order_id: response.data.id,
                callback_url: "http://localhost:3000/paymentVerfication",
                prefill: {
                    name: postData.customer.firstName + " " + postData.customer.lastName,
                    email: postData.customer.email,
                    contact: postData.customer.phone
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#000000"
                }
            };

            var rzp = new window.Razorpay(options);
            rzp.open();
            e.preventDefault();
        } catch (error) {
            alert(error);
        }
    }



    const calculateTotalPrice = () => {
        return cartData.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>T-Hub Checkout: Stylish Steps to Secure Style</h1>
            </div>
            <div className=' p-5 mt-10 sm:p-10 flex flex-col md:flex-row w-full gap-7'>

                <form className='flex w-full flex-col md:flex-row md:gap-10' onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <div className=' bg-zinc-100 py-5 px-10 w-full rounded-sm flex items-center'>
                            <TbMessageCircle2 className=' inline-block text-xl mr-3 text-zinc-500'></TbMessageCircle2>
                            <span className=' text-zinc-500 font-normal'>Resturning customer ? <NavLink to={'/login'} className='text-black hover:cursor-pointer hover:text-zinc-300'>Click here to login </NavLink></span>
                        </div>

                        <div className='py-10'>
                            <h1 className='text-2xl font-noral text-zinc-700'>Billing Details </h1>
                            <div className='py-10 flex flex-col gap-5'>
                                <div>
                                    <label className='text-zinc-500'>State <span className=' text-red-500'>*</span></label>
                                    <select name='state' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'>
                                        {state.map((option) => (<option key={option} value={option}>{option}</option>))}
                                    </select>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>First name <span className=' text-red-500'>*</span></label>
                                    <input name='firstName' type='text' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='First name' required></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Last name <span className=' text-red-500'>*</span></label>
                                    <input name='lastName' type='text' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Last name' required ></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Address <span className=' text-red-500'>*</span></label>
                                    <input name='address' onChange={handleInputChange} type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Address' required ></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Town / city <span className=' text-red-500'>*</span></label>
                                    <input name='city' type='text' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Address' required ></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Email <span className=' text-red-500'>*</span></label>
                                    <input name='email' type='text' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Email' required ></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Phone <span className=' text-red-500'>*</span></label>
                                    <input name='phone' type='text' onChange={handleInputChange} className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Phone' required  ></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='  bg-zinc-100 py-5 px-10 w-full rounded-sm flex items-center'>
                            <TbMessageCircle2 className=' inline-block text-xl mr-3 text-zinc-500'></TbMessageCircle2>
                            <span className=' text-zinc-400 font-normal'>Have a Coupon ? <a className='text-black hover:cursor-pointer hover:text-zinc-400'>Click here enter your code </a></span>
                        </div>

                        <div className='w-full py-10'>
                            <h1 className='text-2xl font-noral text-zinc-700'>Your Order</h1>
                            <div className='my-10 bg-zinc-100 rounded-sm'>
                                <div className='p-10'>
                                    <h1 className='text-xl font-medium text-zinc-500 pb-3'> <span>Products</span> <span className=' float-right'>Totals</span></h1>
                                    <hr></hr>

                                    <div>
                                        {cartData.map(item => <p className='py-3' key={item.productID}><a className=' hover:text-zinc-400 hover:cursor-pointer'><span>{item.name}</span></a> <span className=' float-right'>&#x20b9; {item.price}</span></p>)}

                                        <p className='py-5 text-xl'><span>Cart Subtotal</span> <span className=' float-right'>&#x20b9; {calculateTotalPrice()}</span></p>
                                        <hr />
                                        <p className='py-5 text-xl'><span>Order Totals</span> <span className=' float-right'>&#x20b9; {calculateTotalPrice()}</span></p>
                                        <hr></hr>

                                    </div>
                                </div>
                            </div>
                            <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NWwRapmq6mf5Nk" async> </script>
                            <input type='submit' value={'Checkout'} className='w-full p-4 mt-1 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer'></input>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Checkout