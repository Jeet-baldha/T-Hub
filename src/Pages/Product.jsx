import React, { useState } from 'react'
import StarRating from '../components/StarRating'

function Product() {

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['red', 'green', 'blue', 'yellow'];


    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>Casual Coolness: Where Comfort Meets Fashion in Every Tee.</h1>
            </div>

            <div className='lg:p-20 py-20' >
                <div className='flex gap-10 flex-col sm:flex-row'>
                    <div className=' flex-col gap-10 hidden sm:flex'>
                        <img className=' w-20' src='static/T-shirts/Graphic-Print-V-Neck-front-side.jpg'></img>
                        <img className=' w-20 opacity-20' src='static/T-shirts/Graphic-Print-V-Neck-back-side.png'></img>
                        <img className=' w-20 opacity-20' src='static/T-shirts/Graphic-Print-V-Neck-front-side.jpg'></img>
                    </div>
                    <div className='relative overflow-hidden sm:self-auto self-center'>
                        <img className='w-72 sm:w-96 lg:w-96 xl:w-96' src='../public/static/T-shirts/Graphic-Print-V-Neck-front-side.jpg'></img>
                    </div>
                    <div className='w-full px-10 sm:px-0  md:px-20'>
                        <h1>Graphic Print V-Neck</h1>
                        <div className='flex gap-5'>
                            <StarRating></StarRating>
                            <span className='text-zinc-400'>0 Review(s)</span>
                        </div>
                        <p className='font-bold text-xl pt-5'>&#x20b9; 29.99</p>
                        <p className='py-5'>Available: <span className=' text-emerald-500'>In stock</span></p>
                        <hr></hr>
                        <p className='py-5 text-zinc-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum eros idoni rutrum fermentum. Proin nec felis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                        <hr></hr>
                        <div className='py-5'>
                            <div>
                                <div className='py-5'>
                                    <p>Size<span className=' text-red-600'>*</span></p>
                                    <select className='w-full p-2 mt-2 border-black border rounded-sm'>
                                        <option>choose a size that you like...</option>
                                        {sizes.map((option) => (<option key={option}>{option}</option>))}
                                    </select>
                                </div>

                                <div className='py-5'>
                                    <p>Color<span className=' text-red-600'>*</span></p>
                                    <select className='w-full p-2 mt-2 border-black border rounded-sm'>
                                        <option>choose a color that you like...</option>
                                        {colors.map((option) => (<option key={option}>{option}</option>))}
                                    </select>
                                </div>

                                <span className=' text-red-600'>* Field Requried</span>
                            </div>

                        </div>

                        <div>
                            <p className=' text-zinc-400 sm:text-xl'>Categories: <span className=' text-zinc-600'> Men, T-shirt, Short T-Shirt</span> </p>
                        </div>

                        <div className='flex justify-around py-10'>
                        <div>
                            <button className='hover:bg-black hover:text-white hover:cursor-pointer border-2 px-4 py-2 border-black'>Add to cart</button>
                        </div>
                        <div>
                            <button className='hover:bg-black hover:text-white hover:cursor-pointer border-2 px-4 py-2 border-black'>Shop now</button>
                        </div>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product