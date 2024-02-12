// eslint-disable-next-line no-unused-vars
import React,{useEffect, useState} from 'react'
import OrderProductCard from '../ProductCard/OrderProductCard'
import axios from 'axios';
import { useSelector } from 'react-redux';

function Orders() {

  const [orders,setOrders] = useState([]);
  const userID = useSelector(state => state.auth.userId);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await axios.get('http://localhost:3000/user/order', {
                headers: {
                    "Content-Type": 'application/json',
                    "userID": userID
                }
            })
            setOrders(data.data);
        } catch (error) {
            console.log(error);
        }

    }

    fetchData();
}, [userID])

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