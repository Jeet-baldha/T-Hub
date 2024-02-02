// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { logout as authLogout } from '../store/authSlice'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {

    const [boxDisplay, setBoxDisplay] = useState("hidden");
    const userId = useSelector(state => state.auth.userId);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        updatedUser();
    }, [userId])

    const updatedUser = () => {
        if (userId) {
            try {
                fetch("http://localhost:3000/user", {
                    method: "GET",
                    headers: {
                        "content-type": 'application/json',
                        userid: userId
                    }
                })
                    .then(response => response.json())
                    .then(data => setUser(data));
            } catch (error) {
                alert(error);
            }
        }
    }

    const handleLogout = () => {
        dispatch(authLogout());
        setUser(null); // or an empty object
    };

    return (
        <>
            <div className='xl:mx-28 bg-white overflow-hidden'>
                <div className=' flex justify-between items-center bg-black py-4 px-8 '>
                    <div className='text-zinc-300 text-nowrap hidden md:block'><span>Freeshipping for all order over &#x20b9;500. Now I keep calm and come here shopping</span></div>
                    <h1 className='text-white md:hidden text-xl'> T-Hub</h1>
                    <div className='flex w-1/2  justify-end gap-6'>
                        <FaSearch className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' />
                        <NavLink to={'/cart'}><IoIosCart className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' /></NavLink>
                        <NavLink onMouseEnter={() => setBoxDisplay("block")} onMouseLeave={() => setBoxDisplay("hidden")} > <IoPerson className=' text-zinc-300 text-xl hover:text-white hover:cursor-pointer' /></NavLink>

                        <div className={`absolute top-10 rounded-sm  xl:right-32 shadow-lg z-50 bg- font-semibold text-center ${boxDisplay}`} onMouseEnter={() => setBoxDisplay("block")} onMouseLeave={() => setBoxDisplay("hidden")}>
                            {user ? (
                                <>
                                    {/* User information and logout */}
                                    <li className='px-16 py-2 hover:cursor-pointer hover:bg-zinc-200 z-50 bg-white list-none'><NavLink to={`/user/${user.username}`}>{user.username}</NavLink></li>
                                    <hr></hr>
                                    <li className='px-16 py-2 hover:cursor-pointer hover:bg-zinc-200 duration-100 z-50 bg-white list-none' onClick={handleLogout}><a>Logout</a></li>
                                </>
                            ) : (
                                <>
                                    {/* Login and signup */}
                                    <li className='px-16 py-2 hover:cursor-pointer hover:bg-zinc-200 z-50 bg-white list-none'><NavLink to={'/login'}>Login</NavLink></li>
                                    <hr></hr>
                                    <li className='px-16 py-2 hover:cursor-pointer hover:bg-zinc-200 duration-100 z-50 bg-white list-none'><NavLink to={'/login'}>Sign up</NavLink></li>
                                </>
                            )}


                        </div>

                    </div>
                </div>

                <div className='py-10'>
                    <h1 className='text-black text-center font-extrabold text-3xl'>T-Hub</h1>
                </div>

                <div className='py-6 pt-0'>
                    <ul className='w-full flex justify-center gap-10 text-black text-opacity-70'>
                        <NavLink to={'/'} className={({ isActive }) => `hover:cursor-pointer ${isActive && "text-black border-b-2 border-black"} `}>Home</NavLink>
                        <NavLink to={'/category/children'} className={({ isActive }) => `hover:cursor-pointer  ${isActive && "text-black border-b-2 border-black"} `}>Children</NavLink>
                        <NavLink to={'/category/men'} className={({ isActive }) => `hover:cursor-pointer ${isActive && "text-black border-b-2 border-black"} `}>Men</NavLink>
                        <NavLink to={'/category/women'} className={({ isActive }) => `hover:cursor-pointer ${isActive && "text-black border-b-2 border-black"} `}>Women</NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar