import React from 'react'
import { FaFacebook, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

            <div id='footer-main' className='h-[auto] w-[70%] mt-20 flex justify-center gap-5'>
                <div id="footer-box" className='h-[200px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Social</h2>
                    <div id='icons' className='flex items-center gap-2 mt-3 text-lg'>
                        <FaFacebook />
                        <p>Facebook</p>
                    </div>

                    <div id='icons' className='flex items-center gap-2 text-lg'>
                        <FaXTwitter />
                        <p>X/Twitter</p>
                    </div>

                    <div id='icons' className='flex items-center gap-2 text-lg'>
                        <FaLinkedinIn />
                        <p>Linkdin</p>
                    </div>

                    <div id='icons' className='flex items-center gap-2 text-lg'>
                        <FaInstagram />
                        <p>Instagram</p>
                    </div>

                </div>

                <div id="footer-box" className='h-[d00px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>About</h2>
                    <p className='mt-3 text-lg'>Style Guide</p>
                    <p className='text-lg'>Featured</p>
                    <p className='text-lg'>Contact</p>
                    <p className='text-lg'>404</p>
                </div>

                <div id="footer-box" className='h-[d00px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Featured</h2>
                    <p className='mt-3 text-lg'>Demos</p>
                    <p className='text-lg'>Light Version</p>
                    <p className='text-lg'>Shepia Version</p>
                    <p className='text-lg'>Dark Version</p>
                </div>

                <div id="footer-box" className='h-[d00px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Membership</h2>
                    <p className='mt-3 text-lg'>Editor's Choice</p>
                    <p className='text-lg'>Membership</p>
                    <p className='text-lg'>Account Free</p>
                    <p className='text-lg'>Account Paid</p>
                </div>

                <div id="footer-box" className='h-[d00px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Resources</h2>
                    <p className='mt-3 text-lg'>Sign in</p>
                    <p className='text-lg'>Sign up</p>
                    <p className='text-lg'>Tags</p>
                    <p className='text-lg'>Authors</p>
                </div>

                <div id="footer-box" className='h-[d00px] w-[200px] flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Company</h2>
                    <p className='mt-3 text-lg'>Fueko</p>
                    <p className='text-lg'>Showcase</p>
                    <p className='text-lg'>Get Theme</p>
                </div>
            </div>

            <div id='footer-text' className=' w-[70%] mt-15 mb-15 flex justify-between'>
                <p>© 2025 Reiro. Published with Ghost and Reiro.</p>
                <button id='footer-btn' className='pt-3 pb-3 pl-8 pr-8 bg-green-400'><a href="/">See all Themes</a></button>
            </div>

        </>
    )
}

export default Footer