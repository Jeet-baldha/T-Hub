import React from 'react'

function OrderProductCard() {
    return (
        <div className=' w-full px-10 py-3 flex gap-5 bg-white shadow-sq'>
                <img className=' w-10 h-auto' src="../static/T-shirts/Graphic-Print-V-Neck-back-side.png"></img>
            <div className=' flex justify-between w-full flex-wrap'>
                <p>Graphic-Print-V-Neck</p>
            <p>&#x20b9; 651</p>
            <p> <span className=' w-1 h-1 rounded bg-red-600'></span> Pending</p>
            </div>
        </div>
    )
}

export default OrderProductCard