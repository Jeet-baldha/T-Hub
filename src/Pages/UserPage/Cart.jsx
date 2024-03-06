// eslint-disable-next-line no-unused-vars
import React, { useEffect, useId, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CartProduct from '../../components/ProductCard/CartProduct'
import axios from 'axios'
import { useSelector } from 'react-redux'
function Cart() {

    const [cartData, setCartData] = useState([]);
    const userID = useSelector(state => state.auth.userId);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const data = await axios.get('http://localhost:3000/user/cart', {
                headers: {
                    "Content-Type": 'application/json',
                    "userID": userID
                }
            })
            setCartData(data.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
       fetchData();
    }, [])

    const deleteItem = (productId) => {

        fetch('http://localhost:3000/user/cart/deleteItem', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "userid": userID
            },
            body: JSON.stringify({
                productID: productId
            })
        })
            .then(response => response.json())
            .then((data) => {
                fetchData();
                alert(data.message)
            }
            )
            .catch(err => alert(err));
    }

    const calculateTotalPrice = () => {
        return cartData.length > 0 && cartData.reduce((total, item) => total + item.price, 0);
    };




    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>T-Hub Checkout: Stylish Steps to Secure Style</h1>
            </div>

            <div className='mt-10 p-5 sm:mt-20 lg:p-10 '>
                <div className=' flex w-full justify-between gap-5 sm:flex-row flex-col'>
                    <div className=' flex justify-center flex-wrap gap-y-5 w-full '>
                        {cartData.length > 0 ? cartData.map((product) => <CartProduct key={product.productID} deleteItem={deleteItem} productId={product.productID} slug={product.slug} />) : <h1 className=' font-bold text-xl'>Please add item in  cart</h1>}
                    </div>
                    <div className=' w-full sm:w-96 bg-zinc-100 h-full p-5 rounded-sm'>
                        <h1 className='text-base font-medium text-zinc-500 pb-2'> PRICE DETAILS</h1>
                        <hr></hr>
                        <div className='py-5 text-black'>
                            <p>Price ({cartData.length} items) <span className=' float-right'>&#x20b9; {calculateTotalPrice()}</span> </p>
                            <p>Discount <span className=' float-right text-green-500'>- &#x20b9; 0</span> </p>
                            <div>Delivery charge <p className=' float-right'> <span className='line-through'>&#x20b9;10 </span> <span className='text-green-500'> free</span></p> </div>
                        </div>
                        <hr></hr>
                        <div className=' md:text-xl py-5 font-medium'>
                            <h1 className=' inline-block'>Total amount</h1>
                            <h1 className=' inline-block float-right'>&#x20b9; {calculateTotalPrice()}  </h1>
                        </div>
                        <hr></hr>
                        <p className=' pt-3 text-green-500 font-medium'> You will save &#x20b9; 40 on this order</p>
                    </div>
                </div>
                <button className='mb-5 w-full overflow-hidden mt-20 p-4 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer' onClick={() => cartData.length > 0 ? navigate('/checkout') : alert("please add item into cart")} > <NavLink>Checkout</NavLink></button>
            </div>

        </div>
    )
}

export default Cart