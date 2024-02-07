import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice'

function Register(
    {
        activeBtn,
    }
) {
    const [input, SetInput] = useState({
        username: '',
        password: '',
        phone: ''
    })

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInput = (e) => {
        SetInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/auth/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        })
            .then(response => response.json())
            .then(data => {
                if(data.authenticated){
                    alert(data.message);
                    const userId = data.userId;
                    dispatch(authLogin({ userId }));
                    navigate('/');
                }
                else{
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='pt-10 hidden' style={{ display: activeBtn === 'Register' ? 'block' : 'none' }}>
            <h1 className='text-center text-xl sm:text-2xl font-normal'>REGISTER TO YOUR A ACCOUNT</h1>
            username = {input.username}
            password = {input.password}
            phone = {input.phone}
            <form className='px-5 sm:px-10 py-5 flex gap-5 flex-col' onSubmit={handleRegister}>
                <div>
                    <label className='text-zinc-500'>Username <span className=' text-red-500'>*</span></label>
                    <input name='username' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Username' onChange={handleInput} ></input>
                </div>
                <div>
                    <label className='text-zinc-500'>Phone <span className=' text-red-500'>*</span></label>
                    <input name='phone' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Phone' onChange={handleInput}></input>
                </div>
                <div>
                    <label className='text-zinc-500'>Password <span className=' text-red-500'>*</span></label>
                    <input name='password' type='text' className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm' placeholder='Password' onChange={handleInput}></input>
                </div>
                <button type='submit' className=' float-left bg-black text-white px-4 py-3'>Register <IoArrowForward className='inline-block' /></button>
            </form>
        </div>
    )
}

export default Register