// eslint-disable-next-line no-unused-vars
import React from 'react'
import StarRating from '../components/StarRating'
import { NavLink } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

function Cart() {
    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>T-Hub Checkout: Stylish Steps to Secure Style</h1>
            </div>

            <div className='mt-10 p-5 sm:mt-20 lg:p-10 '>
                <div className=' flex w-full justify-between gap-5 sm:flex-row flex-col'>
                    <div className=' flex justify-center flex-wrap gap-y-5 w-full '>
                        <div className=' bg-zinc-50 p-5 w-full flex sm:gap-20 gap-10'>
                            <div className=' w-20 lg:w-32'>
                                <img src='static/T-shirts/Graphic-Print-V-Neck-front-side.jpg'></img>
                            </div>
                            <div className='lg:p-5 text-sm sm:text-base'>
                                <h1 className=' xl:text-2xl font-bold'>Graphic Print V Neck</h1>
                                <div>
                                    <span className=' font-bold pr-2'>&#x20b9;29.99</span>
                                    <span className='line-through text-gray-400'>&#x20b9;50</span>
                                </div>
                                <StarRating />
                                <span>Review (0)</span>
                                <p className='py-1'>Available: <span className=' text-emerald-500'>In stock</span></p>
                                <div className=' flex gap-5 font-medium'>
                                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white'><MdDeleteForever className=' inline-block mr-1' /> Delete</button>
                                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white'><IoBagCheckOutline className=' inline-block mr-1' /> Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-zinc-50 p-5 w-full flex sm:gap-20 gap-10'>
                            <div className=' w-20 lg:w-32'>
                                <img src='static/T-shirts/Graphic-Print-V-Neck-front-side.jpg'></img>
                            </div>
                            <div className='lg:p-5 text-sm sm:text-base'>
                                <h1 className=' xl:text-2xl font-bold'>Graphic Print V Neck</h1>
                                <div>
                                    <span className=' font-bold pr-2'>&#x20b9;29.99</span>
                                    <span className='line-through text-gray-400'>&#x20b9;50</span>
                                </div>
                                <StarRating />
                                <span>Review (0)</span>
                                <p className='py-1'>Available: <span className=' text-emerald-500'>In stock</span></p>
                                <div className=' flex gap-5 font-medium'>
                                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white'><MdDeleteForever className=' inline-block mr-1' /> Delete</button>
                                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white'><IoBagCheckOutline className=' inline-block mr-1' /> Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full sm:w-96 bg-zinc-50 h-full p-5'>
                        <h1 className='text-base font-medium text-zinc-500 pb-2'> PRICE DETAILS</h1>
                        <hr></hr>
                        <div className='py-5 text-black'>
                            <p>Price (3 items) <span className=' float-right'>&#x20b9; 98.97</span> </p>
                            <p>Discount <span className=' float-right text-green-500'>- &#x20b9; 30</span> </p>
                            <div>Delivery charge <p className=' float-right'> <span className='line-through'>&#x20b9;10 </span> <span className='text-green-500'> free</span></p> </div>
                        </div>
                        <hr></hr>
                        <div className=' md:text-xl py-5 font-medium'>
                            <h1 className=' inline-block'>Total amount</h1>
                            <h1 className=' inline-block float-right'>&#x20b9; 60 </h1>
                        </div>
                        <hr></hr>
                        <p className=' pt-3 text-green-500 font-medium'> You will save &#x20b9; 40 on this order</p>
                    </div>
                </div>
                <button className='mb-5 w-full overflow-hidden mt-20 p-4 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer'><NavLink to={'/checkout'}  >Checkout</NavLink></button>
            </div>

        </div>
    )
}

export default Cart