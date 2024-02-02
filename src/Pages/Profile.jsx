import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";



function Profile() {

    const { username } = useParams();
    const userID = useSelector(state => state.auth.userId)

    return (
        <>
            <div className='xl:mx-28 bg-white overflow-hidden'>
                <div className='flex gap-5 p-10'>
                    <div className=' w-80 flex flex-col gap-5'>
                        <div className=' bg-zinc-100 px-5 py-5'>
                            <h1 className=''>Hello,</h1>
                            <h1 className=' font-bold text-xl'>T-hub customer</h1>
                        </div>
                        <div className='bg-zinc-100'>
                            <div className='px-5 py-3 hover:bg-black hover:text-white flex items-center justify-between hover:cursor-pointer'>
                                <h1 className='flex items-center gap-3 font-medium'><BsBagCheckFill></BsBagCheckFill><span>My Order </span></h1>
                                <IoIosArrowForward className='mt-1'></IoIosArrowForward>
                            </div>
                            <hr></hr>
                            <div className='font-medium'>
                                <ul>
                                    <li className=' hover:bg-black hover:text-white px-5 py-3 hover:cursor-pointer '>Profile Information</li>
                                    <li className='py-3 px-5 hover:bg-black hover:text-white hover:cursor-pointer'>Manage address</li>
                                    <li className='px-5 py-3 hover:bg-black hover:text-white hover:cursor-pointer'>Setting</li>
                                </ul>
                            </div>
                                <hr className='p-0'></hr>
                                <div className='py-3 px-5 flex items-center gap-3 font-bold hover:text-white hover:bg-black hover:cursor-pointer'>
                                    <AiOutlineLogin className='font-bold'></AiOutlineLogin>
                                    Logout
                                </div>
                        </div>
                    </div>


                    <div className='bg-zinc-100 p-20 w-full h-128'>
                        <h1> {userID}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile