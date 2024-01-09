/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Button from './Button';

function ProductCard({
    name,
    frontImage,
    backImage,
    price
}) {

    const [hover, setHover] = useState(false);


    onmouseleave = () => {
        setHover(false);
    }


    return (
        <div className=' w-60 hover:cursor-pointer inline-block'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className=' w-60 ease-in-out duration-300'>
                <img src={hover ? frontImage : backImage}></img>
            </div>
            <div className=' flex flex-col text-center mt-2'>
                <span>{name}</span>
                <div> 
                <span className=' font-bold pr-2'>&#x20b9;{price}</span>
                <span className='line-through text-gray-400'>&#x20b9;140</span>
                </div>
                <button className=' self-center mt-2 hover:bg-black hover:text-white hover:cursor-pointer border-2 px-4 py-2 border-black'>Add to cart</button>
            </div>
            <div className='flex'>

            </div>
        </div>
    )
}

export default ProductCard