/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'

function CartBtn({ id }) {

    const userID = useSelector(state => state.auth.userId);
        
    const addToaCart = () => {
        if (userID) {

            fetch('http://localhost:3000/user/addToCart', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    'userId': userID
                },
                body: JSON.stringify({
                    productID: id
                })
            })
                .then(response => response.json())
                .then((data) => alert(data.message))
                .catch(err => alert(err));
        }
        else {
            alert('Please login first');
        }

    }

    return (
        <button className=' text-sm self-center mt-2 hover:bg-black hover:text-white hover:cursor-pointer border-2 px-2 py-1 sm:px-4 sm:py-2 border-black' onClick={addToaCart}>Add to cart</button>
    )
}

export default CartBtn