// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from 'react-icons/fa';
import data from '../assets/Data/t-shirt';
import {useNavigate} from 'react-router-dom'
import Login from '../components/Login';
import Register from '../components/Register';

function LoginSignup() {

    const [activeBtn, setActiveBtn] = useState("Login");
    const [inputData, setInputData] = useState({});
    const navigate = useNavigate();

   

    

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>Casual Coolness: Where Comfort Meets Fashion in Every Tee.</h1>
            </div>
            <div className='w-full flex justify-center p-5 sm:p-10'>

                <div className=' lg:w-1/2 border-2 border-black my-20'>
                    <div className='w-full flex justify-between'>
                        <button className='py-5 text-2xl px-10 bg-zinc-200 w-full' onClick={() => setActiveBtn("Login")} style={{ backgroundColor: activeBtn === 'Login' ? 'white' : 'rgb(228 228 231)' }}>Login</button>
                        <button className='text-2xl px-10 py-5 w-full ' onClick={() => setActiveBtn("Register")} style={{ backgroundColor: activeBtn === 'Register' ? 'white' : 'rgb(228 228 231)' }}>Register</button>
                    </div>
                    <hr></hr>
                    <Login activeBtn={activeBtn}></Login>
                    <Register activeBtn={activeBtn}></Register>
                    <hr></hr>
                    <h1 className='text-xl text-center mt-5'>{activeBtn} with your socials</h1>
                    <div className='py-5 flex items-center justify-center'>
                        <a className=' px-5 flex items-center hover:cursor-pointer'><FaFacebook className=' inline-block text-lg mr-3'></FaFacebook><span>Facebook</span></a>
                        <span>|</span>
                        <a className='px-5 flex items-center hover:cursor-pointer'><FaGoogle className=' inline-block mr-3 text-lg'></FaGoogle>Google</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup