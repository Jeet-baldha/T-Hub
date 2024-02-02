/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux';

function Login(
    {
        activeBtn
    }
) {

    const dispatch = useDispatch();
    const [input,SetInput] =  useState({
        username:'',
        password:'',
    })
    const navigate = useNavigate();

    const handleInput = (e) => {
        SetInput({...input,[e.target.name]: e.target.value})
    }

    const handleLogin = (e) => {
        e.preventDefault();

        try {
            fetch('http://localhost:3000/user/login',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
    
                body: JSON.stringify(input)
            })
            .then((response) => response.json())
            .then(data => {
                if(data.authenticated){
                    const userId = data.userId;
                    dispatch(authLogin({userId})); 
                    navigate('/')
                }
                else{
                    navigate('/login');
                    alert(data.message);
    
                }
    
            })
        } catch (error) {
            alert(error.message);
        }
        
    }

    return (
        <div className='pt-10' style={{ display: activeBtn === 'Login' ? 'block' : 'none' }}>
                        <h1 className='text-center text-xl sm:text-2xl font-normal'>LOGIN TO YOUR A ACCOUNT</h1>
                        username = {input.username}
                        password = {input.password}
                        <form className='px-5 sm:px-10 py-5 flex gap-5 flex-col'  onSubmit={handleLogin} >
                            <div>
                                <label className='text-zinc-500'>Username <span className=' text-red-500'>*</span></label>
                                <input name='username' onChange={handleInput} type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Username'></input>
                            </div>
                            <div>
                                <label className='text-zinc-500'>Password <span className=' text-red-500'>*</span></label>
                                <input name='password' onChange={handleInput} type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Password'></input>
                            </div>
                            <div>
                                <input type='checkbox'></input>
                                <span className='pl-2'>keep me logged in</span>
                                <span className=' float-right text-sky-500'><a>Forgot your password ?</a></span>
                            </div>
                            <button type='submit' className=' float-left bg-black text-white px-4 py-3'>Login <IoArrowForward className='inline-block' /></button>
                        </form>
        </div>
    )
}

export default Login