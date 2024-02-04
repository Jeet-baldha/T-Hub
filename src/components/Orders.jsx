import React from 'react'
import OrderProductCard from './OrderProductCard'

function Orders() {
  return (
    <div>
      <div className=' flex flex-col gap-4'>
        <OrderProductCard />
        <OrderProductCard />
        <OrderProductCard />
        <OrderProductCard />
      </div>
    </div>
  )
}

export default Orders