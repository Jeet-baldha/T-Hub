import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className='xl:mx-28 bg-white overflow-hidden'>
            <hr></hr>
            <div className='flex py-10  p-10 justify-between gap-10 lg:flex-nowrap flex-wrap text-zinc-500'>
                <div>
                    <h1 className='text-3xl font-bold pb-10 text-black'>T-Hub</h1>
                    <p className=' text-justify pb-5'>Elevate your style with T-Hub premium t-shirts, where comfort meets fashion in every thread.</p>
                    <hr></hr>
                    <div className='flex gap-5 items-center py-5'>
                        <IoLocation className='text-3xl' />
                        <span>Tramba, Rajkot , Gujrat 360020</span>
                    </div>
                    <hr></hr>
                    <div className='flex gap-5 items-center py-5'>
                        <MdEmail className='text-2xl' />
                        <span>jeetbaldha12@gmail.com</span>

                    </div>
                    <hr></hr>
                    <div className='flex gap-5 items-center py-5'>
                        <FaPhoneAlt className='text-xl' />
                        <span>+91 6351480462</span>
                        <hr></hr>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold pb-10 text-black'>Explore</h1>
                    <ul className=' w-24'>
                        <li className='pb-2' ><MdKeyboardDoubleArrowRight className=' inline-block' />Shop</li><hr />
                        <li className='pb-2'><MdKeyboardDoubleArrowRight className=' inline-block' />Category</li><hr />
                        <li className='pb-2'><MdKeyboardDoubleArrowRight className='inline-block' />Style</li><hr />
                        <li className='pb-2'><MdKeyboardDoubleArrowRight className='inline-block' />Discount</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold pb-10 text-black'>About us</h1>
                    <p className=' text-justify'>T-Hub: Where style meets self-expression. Explore our range of high-quality t-shirts designed to showcase your unique personality with fashion-forward flair.</p>
                </div>
                <div>
                    <h1 className='font-bold pb-10 text-black'>Conatact us</h1>
                    <p className=' text-justify pb-5'>Have questions, feedback, or just want to say hello? Reach out to our friendly customer support team. We're here to assist you on your T-Hub journey.</p>
                    <hr></hr>
                    <div className='py-5 flex justify-between text-3xl'>
                        <FaFacebook />
                        <AiFillInstagram />
                        <FaSquareXTwitter />
                        <FaYoutube />
                        <FaDiscord />
                    </div>
                </div>
            </div>
            <div className='p-3 text-center text-white bg-black'><p>© 2024 T-Hub. All Rights Reserved.</p>
            <p>Terms of Service | Privacy Policy | Return Policy</p>
             {/* Feel free to customize the content based on your specific brand messaging and values. */}
             </div>
        </div>
    )
}

export default Footer