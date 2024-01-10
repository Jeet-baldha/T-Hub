/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function ProductCard({
    name,
    frontImage,
    backImage,
    price
}) {

    const [hover, setHover] = useState(false);


    onmouseleave = () => {
        setTimeout(() => {
            setHover(false);
        },3000)
    }


    return (
        <div className='sm:w-60 justify-self-center w-60 hover:cursor-pointer shadow-2xl pb-4 overflow-hidden rounded-md'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className=' relative h-96 ease-in-out duration-300 overflow-hidden'>
                <img className='product-image' src={hover ? backImage : frontImage}></img>
            </div>
            <div className=' flex flex-col text-center mt-2' >
                <span>{name}</span>
                <div> 
                <span className=' font-bold pr-2'>&#x20b9;{price}</span>
                <span className='line-through text-gray-400'>&#x20b9;50</span>
                </div>
                <button className=' self-center mt-2 hover:bg-black hover:text-white hover:cursor-pointer border-2 px-4 py-2 border-black'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard