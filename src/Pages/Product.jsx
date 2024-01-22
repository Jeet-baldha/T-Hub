/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import StarRating from '../components/StarRating'
import data from '../assets/Data/t-shirt'
import ProductCard from '../components/ProductCard'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

function Product() {

    const [product,setProduct] = useState({});
    const [activeImgUrl, setActiveImgUrl] = useState("");
    const [activeLink, setActiveLink] = useState("pd");
    const {id} = useParams()
    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const dataP = await axios.get(`http://localhost:3000/product/${id}`)
                setProduct(dataP.data);
                
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();   
        
    },[id,product])

    useEffect(() => {
            setActiveImgUrl(product.frontImage);
    },[id,product.frontImage])

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['red', 'green', 'blue', 'yellow'];

   

    const activeLinkStyle = {
        "color":"black",
        "borderBottom": "2px solid black",
    }


    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>Casual Coolness: Where Comfort Meets Fashion in Every Tee.</h1>
            </div>

            <div className='lg:p-20 py-20 sm:py-40' >
                <div className='flex gap-10 flex-col sm:flex-row'>
                    <div className='flex px-10 sm:px-0 gap-10'>
                        <div className=' flex-col gap-10 flex'>
                            <img className= {`w-16 sm:w-24 cursor-pointer`}
                            src={product.frontImage}  
                            onClick={(e) => setActiveImgUrl(e.target.src)}>
                            </img>
                            <img className=' w-16 sm:w-24 cursor-pointer' src={product.backImage} 
                            onClick={(e) => setActiveImgUrl(e.target.src)}
                            >

                            </img>
                        </div>
                        <div className='relative overflow-hidden'>
                            <img className='w-56 sm:w-96 lg:w-96 xl:w-96' src={activeImgUrl}></img>
                        </div>
                    </div>
                    <div className='w-full px-10 sm:px-0  md:px-20'>
                        <h1>{product.name}</h1>
                        <div className='flex gap-5'>
                            <StarRating rating={product.rating}></StarRating>
                            <span className='text-zinc-400'> {product.reviews ? product.reviews.length : 0} Review(s)</span>
                        </div>
                        <p className='font-bold text-xl pt-5'>&#x20b9; {product.price}</p>
                        <p className='py-5'>Available: {product.stock > 1 ?<span className=' text-emerald-500'>In stock</span> : <span className=' text-red-500'>out of stock</span> }  </p>
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
                            <p className=' text-zinc-400 sm:text-xl'>Categories: <span className=' text-zinc-600'> {product.category}</span> </p>
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


            <div>
                <div className='px-10 flex gap-10  md:text-xl font-medium text-zinc-400'>
                    <div onClick={() => setActiveLink("pd")} className=" hover:cursor-pointer duration-200 pb-3" style={activeLink === "pd" ? activeLinkStyle : null } >Product Description</div>
                    <div onClick={() => setActiveLink("ai")} className=' hover:cursor-pointer  duration-200 pb-3' style={activeLink === "ai" ? activeLinkStyle : null } >Addtional Information</div>
                    <div onClick={() => setActiveLink("re")} className=' hover:cursor-pointer  duration-200 pb-3' style={activeLink === "re" ? activeLinkStyle : null } >Review(0)</div>
                </div>
                <hr className='mx-10'></hr>
            </div>

            <div className='p-10 text-zinc-600'>
                <p>Coupling a blended linen construction with tailored style, the River Island HR Jasper Blazer will imprint a touch of dapper charm into your after-dark wardrobe. Our model is wearing a size medium blazer, and usually takes a size medium/38L shirt. He is 6’2 1/2” (189cm) tall with a 38” (96 cm) chest and a 31” (78 cm) waist.</p>
                <ul className='p-5 list-disc'>
                    <li>Length: 74cm</li>
                    <li>Regular fit</li>
                    <li>Notched lapels</li>
                    <li>Twin button front fastening</li>
                    <li>Front patch pockets; chest pocket</li>
                    <li>Internal pockets</li>
                    <li>Centre-back vent</li>
                    <li>Please refer to the garment for care instructions.</li>
                    <li>Length: 74cm</li>
                    <li>Material: Outer: 50% Linen & 50% Polyamide; Body Lining: 100% Cotton; Lining: 100% Acetate</li>
                </ul>
            </div>
            
            <div className='px-4'>
                <h1 className='py-10 text-3xl text-zinc-500 font-bold text-center'>Related Products</h1>
                <div className='flex sm:gap-10 gap-4 overflow-auto py-5'>

                {data.tshirts.map((tshirts) => (<div key={tshirts.id} ><ProductCard   {...tshirts} /></div>))}
                </div>
            </div>

        </div>
    )
}

export default Product