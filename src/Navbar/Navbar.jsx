import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <div className='xl:mx-28 bg-white overflow-hidden'>
                <div className=' flex justify-between items-center bg-black py-4 px-8 '>
                    <div className='text-zinc-300 text-nowrap hidden md:block'><span>Freeshipping for all order over &#x20b9;500. Now I keep calm and come here shopping</span></div>
                    <h1 className='text-white md:hidden text-xl'> T-Hub</h1>
                    <div className='flex w-1/2  justify-end gap-6'>
                        <FaSearch className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' />
                        <IoIosCart className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' />
                        <IoPerson className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' />
                    </div>
                </div>

                <div className='py-10'>
                    <h1 className='text-black text-center font-extrabold text-3xl'>T-Hub</h1>
                </div>

                <div className='py-6 pt-0'>
                    <ul className='w-full flex justify-center gap-10 text-black text-opacity-70'>
                        <li className='hover:cursor-pointer'>Home</li>
                        <li className='hover:cursor-pointer'>Children</li>
                        <li className='hover:cursor-pointer'>Men</li>
                        <li className='hover:cursor-pointer'>Women</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar