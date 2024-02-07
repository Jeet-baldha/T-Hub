import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import PersonalInfo from '../../components/ProfileComponents/PersonalInfo';
import ManageAddress from '../../components/ProfileComponents/ManageAddress';
import Setting from '../../components/ProfileComponents/Setting';
import Orders from '../../components/ProfileComponents/Orders';



function Profile() {

    const { username } = useParams();
    const userID = useSelector(state => state.auth.userId)
    const [activeComponent, setActiveComponent] = useState("PI");

    return (
        <>
            <div className='xl:mx-28 bg-white overflow-hidden'>
                <div className='flex gap-5 p-10'>
                    <div className=' w-80 flex flex-col gap-5'>
                        <div className=' px-5 py-5 shadow-sq'>
                            <h1 className=''>Hello,</h1>
                            <h1 className=' font-bold text-xl'>T-hub customer</h1>
                        </div>
                        <div className='shadow-sq'>
                            <div className='px-5 py-3 hover:bg-black hover:text-white flex items-center justify-between hover:cursor-pointer'>
                                <h1 className='flex items-center gap-3 font-medium' onClick={() => setActiveComponent('OR')}  ><BsBagCheckFill></BsBagCheckFill><span>My Order </span></h1>
                                <IoIosArrowForward className='mt-1'></IoIosArrowForward>
                            </div>
                            <hr></hr>
                            <div className='font-medium'>
                                <ul>
                                    <li className=' hover:bg-black hover:text-white px-5 py-3 hover:cursor-pointer ' onClick={() => setActiveComponent('PI')} >Profile Information</li>
                                    <li className='py-3 px-5 hover:bg-black hover:text-white hover:cursor-pointer' onClick={() => setActiveComponent('MA')} >Manage address</li>
                                    <li className='px-5 py-3 hover:bg-black hover:text-white hover:cursor-pointer' onClick={() => setActiveComponent('SE')}  >Setting</li>
                                </ul>
                            </div>
                            <hr className='p-0'></hr>
                            <div className='py-3 px-5 flex items-center gap-3 font-bold hover:text-white hover:bg-black hover:cursor-pointer'>
                                <AiOutlineLogin className='font-bold'></AiOutlineLogin>
                                Logout
                            </div>
                        </div>
                    </div>


                    <div className='px-5 w-full '>

                        {activeComponent === 'PI' && <PersonalInfo />}
                        {activeComponent === 'MA' && <ManageAddress />}
                        {activeComponent === 'SE' && <Setting />}
                        {activeComponent === 'OR' && <Orders />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile