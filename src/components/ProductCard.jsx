/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function ProductCard({
    name,
    frontImage,
    backImage,
    price,
    className
}) {

    const [hover, setHover] = useState(false);


    onmouseleave = () => {
        setTimeout(() => {
            setHover(false);
        },3000)
    }


    return (
        <div className={`sm:w-40 justify-self-center w-32 md:w-60   hover:cursor-pointer shadow-xl sm:shadow-2xl pb-4 rounded-md ${className}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className=' relativeh h-52 md:w-60 sm:w-40 w-32  sm:h-72 md:h-96 overflow-hidden'>
                <img className='product-image' src={hover ? backImage : frontImage}></img>
            </div>
            <div className=' flex flex-col text-center mt-2 relative bottom-0' >
                <span className=' text-sm md:text-lg'>{name}</span>
                <div> 
                <span className=' font-bold pr-2'>&#x20b9;{price}</span>
                <span className='line-through text-gray-400'>&#x20b9;50</span>
                </div>
                <button className=' text-sm self-center mt-2 hover:bg-black hover:text-white hover:cursor-pointer border-2 px-2 py-1 sm:px-4 sm:py-2 border-black'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard