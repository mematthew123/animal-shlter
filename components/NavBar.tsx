'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Navigation() {
    // State to manage the visibility of the mobile navigation
    const [nav, setNav] = useState(false);

    // State to manage the shadow of the navigation bar when scrolling
    const [shadow, setShadow] = useState(false);

    // Static state values for navigation background and link colors
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");

    // Toggle the visibility of the mobile navigation
    const handleNav = () => {
        setNav(!nav);
    };


    // Effect to add a shadow to the navigation bar when scrolling past a certain point
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (


        <div>
            {/* Desktop menu links */}
            <div className='flex float-right p-8 '>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/dogs'>Dogs</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/cats'>Cats</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/donate'>Donate</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/blog'>Blog</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden overflow-hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}

            {/* Overlay for mobile navigation */}
            {nav && (  // Only render the email icon when nav is true

                <div
                    className={
                        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
                    }
                >
                    {/* Side drawer for mobile navigation */}
                    <div
                        className={
                            nav
                                ? "  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                                : " fixed left-[-100%] top-0 p-10 ease-in duration-100"
                        }
                    >
                        <div>
                            {/* Close button for mobile navigation */}
                            <div className='flex w-full items-center justify-between'>
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Home
                                    </li>
                                </Link>
                                <Link href='/dogs'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Dogs
                                    </li>
                                </Link>
                                <Link href='/cats'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Cats
                                    </li>
                                </Link>
                                <Link href='/donate'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Donate
                                    </li>
                                </Link>
                                <Link href='/about'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        About
                                    </li>
                                </Link>
                                <Link href='/contact'>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className='md:pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5] overflow-hidden'>
                                    Social Media
                                </p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <a
                                        href='#'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaFacebookSquare />
                                        </div>
                                    </a>
                                    <a
                                        href='#'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaInstagramSquare />
                                        </div>
                                    </a>

                                    <Link href='/contact'>
                                        <div
                                            onClick={() => setNav(!nav)}
                                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                        >
                                            <AiOutlineMail />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
