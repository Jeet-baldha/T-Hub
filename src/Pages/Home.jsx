import React from 'react'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import data from '../assets/Data/t-shirt'

function Home() {
    return (
        <div className='mx-28 bg-white p-10 pt-0'>

            <div className='bg-image flex flex-col '>
                <div className=' relative top-1/3'>
                <h1 className='text-white  px-20 w-2/4 text-3xl '>T-Hub - Your Ultimate T-Shirt Destination</h1>
                <p className='px-20 py-4 w-full text-white'>Discover Style, Express Yourself – T-Hub, Where Every Thread Tells a Story</p>
                <Button label={"Shop now"}/>
                </div>
            </div>


            <div className='py-20 pb-10'>
                <h1 className='text-center pb-8 font-bold text-xl font-sans'>Welcome to T-Hub Store</h1>
                <h1 className='px-20 text-center text-zinc-900'> The one-stop hub for all your t-shirt needs! Explore our curated collection of trendy and unique t-shirts designed to elevate your style. Whether you're into casual comfort, statement graphics, or personalized prints, T-Hub has something for everyone. Shop the latest trends, express your individuality, and redefine your wardrobe with our quality and fashionable t-shirts.</h1>
            </div>

            <hr></hr>
    
            <div className='mt-20 grid grid-cols-4 gap-y-12 gap-20'>
                {data.tshirts.map((tshirts) => (<ProductCard key={tshirts.id} {...tshirts} />))}
            </div>
        </div>
    )
}

export default Home