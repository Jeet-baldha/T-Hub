import React from 'react'
import { TbMessageCircle2 } from "react-icons/tb";
function Checkout() {

    const state = ['Gujarat','Goa','Maharastra','Tamilnadu','Odisha'];

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>T-Hub Checkout: Stylish Steps to Secure Style</h1>
            </div>
            <div className=' p-5 mt-10 sm:p-10 flex flex-col md:flex-row w-full gap-7'>

                <form className='flex w-full flex-col md:flex-row md:gap-10'>
                    <div className='w-full'>
                        <div className=' bg-zinc-100 py-5 px-10 w-full rounded-sm flex items-center'>
                            <TbMessageCircle2 className=' inline-block text-xl mr-3 text-zinc-500'></TbMessageCircle2>
                            <span className=' text-zinc-500 font-normal'>Resturning customer ? <a className='text-black hover:cursor-pointer hover:text-zinc-300'>Click here to login </a></span>
                        </div>

                        <div className='py-10'>
                            <h1 className='text-2xl font-noral text-zinc-700'>Billing Details </h1>
                            <div className='py-10 flex flex-col gap-5'>
                                <div>
                                    <label className='text-zinc-500'>State <span className=' text-red-500'>*</span></label>
                                    <select name='state' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'>
                                        {state.map((option) => (<option key={option}>{option}</option>))}
                                    </select>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>First name <span className=' text-red-500'>*</span></label>
                                    <input name='firstName' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='First name'></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Last name <span className=' text-red-500'>*</span></label>
                                    <input name='lastName' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Last name'></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Address <span className=' text-red-500'>*</span></label>
                                    <input name='addrress' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Address'></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Town / city <span className=' text-red-500'>*</span></label>
                                    <input name='addrress' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Address'></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Email <span className=' text-red-500'>*</span></label>
                                    <input name='email' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Email'></input>
                                </div>
                                <div>
                                    <label className='text-zinc-500'>Phone <span className=' text-red-500'>*</span></label>
                                    <input name='phone' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Phone'></input>
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
                                        <p className='py-3'><a className=' hover:text-zinc-400 hover:cursor-pointer'><span>Graphic Print V-Neck</span></a> <span className=' float-right'>&#x20b9; 29.99</span></p>
                                        <p className='py-3'><a className=' hover:text-zinc-400 hover:cursor-pointer'><span>Graphic Print V-Neck</span></a> <span className=' float-right'>&#x20b9; 29.99</span></p>
                                        <p className='py-5 text-xl'><span>Cart Subtotal</span> <span className=' float-right'>&#x20b9; 59.98</span></p>
                                        <hr />
                                        <p className='py-5 text-xl'><span>Order Totals</span> <span className=' float-right'>&#x20b9; 65.98</span></p>
                                        <hr></hr>

                                        <div className='pt-5 flex flex-col gap-5'>

                                            <div>
                                                <input name='paymentType' type='radio' className=' bg-black'></input>
                                                <label className='pl-5'>Direct bank transfer</label>
                                            </div>
                                            <div>
                                                <input name='paymentType' type='radio' className=' bg-black'></input>
                                                <label className='pl-5'>Credit card</label>
                                            </div>
                                            <div>
                                                <input name='paymentType' type='radio' className=' bg-black'></input>
                                                <label className='pl-5'>UPI</label>
                                            </div>
                                            <div>
                                                <input name='paymentType' type='radio' className=' bg-black'></input>
                                                <label className='pl-5'>Cash on delivery</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input type='submit' value={'Checkout'} className='w-full p-4 mt-1 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer'></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout