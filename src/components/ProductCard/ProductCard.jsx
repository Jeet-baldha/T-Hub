    /* eslint-disable no-unused-vars */
    /* eslint-disable react/prop-types */
    import React, { useState } from 'react'
    import { NavLink } from 'react-router-dom';
    import CartBtn from '../Button/CartBtn';


    function ProductCard({product}) {

        const [hover, setHover] = useState(false);
        

        onmouseleave = () => {
            setTimeout(() => {
                setHover(false);
        },3000)
        }

        
        const calculatePrice = () => product.price - (product.discount * product.price) / 100;

        return (
            <div className={` sm:w-32 justify-self-center w-32  md:w-52 h-full  hover:cursor-pointer shadow-sq sm:shadow-sq pb-4 rounded-md`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className=' relativeh h-52 md:w-52 sm:w-36 w-32  sm:h-72 md:h-96 overflow-hidden'>
                    <NavLink to={`/product/${product.slug}`}><img className='product-image md:w-52 sm:w-36 w-32' src={hover ? `data:${product.backImage.contentType};base64,${product.backImage.data}` :`data:${product.frontImage.contentType};base64,${product.frontImage.data}` }></img></NavLink>


                </div>
                <div className=' flex flex-col text-center mt-2 relative bottom-0' >
                    <span className=' text-sm md:text-lg'>{product.name}</span>
                    <div> 
                    <span className=' font-bold pr-2'>&#x20b9;{calculatePrice()}</span>
                    <span className='line-through text-gray-400'>&#x20b9;{product.price}</span>
                    </div>
                    <CartBtn  id={product._id}></CartBtn>
                </div>
            </div>
        )
    }

    export default ProductCard