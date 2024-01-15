import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from 'react-icons/fa';

function LoginSignup() {

    const [activeBtn, setActiveBtn] = useState("login");

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <div className='product-bg-image h-40 lg:h-96 md:h-96'>
                <h1 className='text-white px-10 w-full md:w-2/4 lg:px-20 sm:text-3xl text-xl relative top-1/3'>Casual Coolness: Where Comfort Meets Fashion in Every Tee.</h1>
            </div>
            <div className='w-full flex justify-center p-10'>

                <div className=' w-1/2 border-2 border-black mt-20'>
                    <div className='w-full flex justify-between'>
                        <button className='py-5 text-2xl px-10 bg-zinc-200 w-full' onClick={() => setActiveBtn("Login")}>Login</button>
                        <button className='text-2xl px-10 py-5 w-full ' onClick={() => setActiveBtn("Register")}>Register</button>
                    </div>
                    <hr></hr>
                    <div className='p-10' style={{ display: activeBtn === 'Login' ? 'block' : 'none' }}>
                        <h1 className='text-center text-2xl font-normal'>LOGIN TO YOUR A ACCOUNT</h1>
                        <form className='p-10 flex gap-5 flex-col'>
                            <div>
                                <label className='text-zinc-500'>Username <span className=' text-red-500'>*</span></label>
                                <input name='username' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Username'></input>
                            </div>
                            <div>
                                <label className='text-zinc-500'>password <span className=' text-red-500'>*</span></label>
                                <input name='password' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='password'></input>
                            </div>
                            <div>
                                <input type='checkbox'></input>
                                <span className='pl-2'>keep me logged in</span>
                                <span className=' float-right text-sky-500'><a>Forgot your password ?</a></span>
                            </div>
                            <button type='submit' className=' float-left bg-black text-white px-4 py-3'>Login <IoArrowForward className='inline-block' /></button>
                        </form>
                    </div>
                    <div className='p-10 hidden' style={{ display: activeBtn === 'Register' ? 'block' : 'none' }}>
                        <h1 className='text-center text-2xl font-normal'>REGISTER TO YOUR A ACCOUNT</h1>
                        <form className='p-10 flex gap-5 flex-col'>
                            <div>
                                <label className='text-zinc-500'>Username <span className=' text-red-500'>*</span></label>
                                <input name='username' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Username'></input>
                            </div>
                            <div>
                                <label className='text-zinc-500'>Phone <span className=' text-red-500'>*</span></label>
                                <input name='phone' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Phone'></input>
                            </div>
                            <div>
                                <label className='text-zinc-500'>password <span className=' text-red-500'>*</span></label>
                                <input name='password' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='password'></input>
                            </div>
                            <button type='submit' className=' float-left bg-black text-white px-4 py-3'>Register <IoArrowForward className='inline-block' /></button>
                        </form>

                        <hr></hr>
                    </div>
                        <hr></hr>
                        <h1 className='text-xl text-center mt-10'>{activeBtn} with your social</h1>
                    <div className='py-10 flex items-center justify-center'>

                        <a className=' px-5'><FaFacebook className=' inline-block text-lg mr-3'></FaFacebook><span>Facebook</span></a>
                        <span>|</span>
                        <a className='px-5'><FaGoogle className=' inline-block mr-3 text-lg'></FaGoogle>Google</a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup