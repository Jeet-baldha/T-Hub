// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import data from '../assets/Data/t-shirt'
import { IoLocation } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataP = await axios.get(`http://localhost:3000/product/toprated`)
                setProducts(dataP.data);
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();   
        
    },[])

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>

            <div className='bg-image h-72 lg:h-128 md:h-96 flex flex-col '>
                <div className=' relative top-1/3'>
                    <h1 className='text-white px-10 w-3/4 md:w-2/4 lg:px-20 sm:text-3xl text-xl '>T-Hub - Your Ultimate T-Shirt Destination</h1>
                    <p className=' px-10 py-4 lg:px-20 md:w-3/4 w-full text-white'>Discover Style, Express Yourself – T-Hub, Where Every Thread Tells a Story</p>
                    <button className='lg:mx-20 mx-10 px-4 py-2 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Shop now</button>
                </div>
            </div>
            <div className='py-20 pb-10'>
                <h1 className='text-center pb-8 font-bold text-xl font-sans'>Welcome to T-Hub Store</h1>
                <h1 className='md:px-20 px-5 text-center text-zinc-900'> The one-stop hub for all your t-shirt needs! Explore our curated collection of trendy and unique t-shirts designed to elevate your style. Whether you are into casual comfort, statement graphics, or personalized prints, T-Hub has something for everyone. Shop the latest trends, express your individuality, and redefine your wardrobe with our quality and fashionable t-shirts.</h1>
            </div>

            <hr></hr>

            <div className='mt-20 grid p-14 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12  min-[500px]:grid-cols-3'>
                {products.map((tshirts) => (<div key={tshirts.id}><ProductCard  {...tshirts} /></div>))}
            </div>

            <div className='flex mt-20 py-10 px-10 w-full justify-between flex-col sm:flex-row sm:gap-3 gap-10  text-zinc-400'>

                <div className=' w-full sm:w-1/3'>
                    <div className='flex items-center p-2 text-black'>
                        <IoLocation className='text-xl font-bold '></IoLocation>
                        <h1 className=' font-bold pl-3 text-xl'>  FREE SHIPPING</h1>
                    </div>
                    <div>
                        <p>We provide a service free shipping for all oder over $100 and shipping on the worldwide. Safety and reliability.</p>
                    </div>
                </div>
                <div className=' w-full sm:w-1/3'>
                    <div className='flex items-center p-2 text-black'>
                        <MdHeadsetMic className='text-xl font-bold'></MdHeadsetMic>
                        <h1 className=' font-bold pl-3 text-xl'>SUPORT 24/7</h1>
                    </div>
                    <div>
                        <p>If you have any question about our product or our quality services, You can contat us whenever we alway support for you 24/7.</p>
                    </div>
                </div>
                <div className=' w-full sm:w-1/3'>
                    <div className='flex items-center p-2 text-black'>
                        <FaRupeeSign className='text-xl font-bold'></FaRupeeSign>
                        <h1 className=' font-bold pl-3 text-xl'>MONEY BACK</h1>
                    </div>
                    <div>
                        <p>With any our product that have problem with color. material, etc. We commitment return 100% money for customer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home