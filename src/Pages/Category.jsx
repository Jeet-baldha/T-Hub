// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import data from '../assets/Data/t-shirt'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

function Category() {

    const [products, setProducts] = useState([]);
    let { category } = useParams();

    useEffect(() => {

        const fetchData = async () => {

            try {
                const dataP = await axios.get(`http://localhost:3000/${category}/products`)
                setProducts(dataP.data);
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();   
        

    }, [category])

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>Casual Coolness: Where Comfort Meets Fashion in Every Tee.</h1>
            </div>
            <div className='p-10 mt-20 flex-col sm:flex-row flex justify-between w-full items-center'>
                <h1 className='text-xl hidden sm:block'>Show all results {data.tshirts.length}</h1>
                <div>
                    <select className='border-2 border-black px-3 py-1 sm:px-5 sm:py-3 text-sm sm:text-xl'>
                        <option>sort by newness</option>
                        <option>sort by popularity</option>
                        <option>sort by price:high to low</option>
                        <option>sort by price:low to high</option>
                    </select>
                </div>
            </div>
            <div className=' grid xl:p-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 :gap-10 md:gap-20 min-[500px]:grid-cols-3'>
                {products.map((tshirts) => (<div key={tshirts.id}><ProductCard  {...tshirts} /></div>))}
            </div>
        </div>
    )
}

export default Category