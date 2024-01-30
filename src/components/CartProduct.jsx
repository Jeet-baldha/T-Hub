import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import { MdDeleteForever } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import {  useSelector } from 'react-redux';


function CartProduct({
    productId,
    deleteItem

}) {
    const [product,setProduct] = useState({});
    const userId = useSelector(state => state.auth.userId);
    useEffect(() => {

        async function  fetchData () {
            const data = await axios.get('http://localhost:3000/product',{
                    headers:{
                        "Content-Type": "application/json",
                        "id": productId
                    }
            })
            setProduct(data.data);
        }

        fetchData();

        
        

    },[])


   
    return (
        <div className=' bg-zinc-100 rounded-sm p-5 w-full flex sm:gap-20 gap-10'>
            <div className=' w-20 lg:w-32'>
                <img src={product.frontImage}></img>
            </div>
            <div className='lg:p-5 text-sm sm:text-base'>
                <NavLink to={`/product/${product.slug}`}>
                    <h1 className=' xl:text-2xl font-bold'>{product.name}</h1>
                </NavLink>
                <div>
                    <span className=' font-bold pr-2'>&#x20b9;{product.price}</span>
                    <span className='line-through text-gray-400'>&#x20b9;50</span>
                </div>
                <StarRating rating={product.rating} />
                <span>Reviews ({product.reviews ? product.reviews.length : 0})</span>
                <p className='py-1'>Available: <span className=' text-emerald-500'>In stock</span></p>
                <div className=' flex gap-5 font-medium'>
                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white' onClick={() => {deleteItem(productId)}} value={productId} ><MdDeleteForever className=' inline-block mr-1' /> Delete</button>
                    <button className='flex items-center border-2 border-black px-1 lg:px-3 py-1 hover:bg-black hover:text-white'><IoBagCheckOutline className=' inline-block mr-1' /> Buy</button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct