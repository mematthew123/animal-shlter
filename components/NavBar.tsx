'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  // this is for the navbar to hide when scrolling down

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' flex top-0 justify-between items-center mx-auto  text-black'>
      <div className='flex-shrink-0 p-4 '>
        <Link href='/' aria-label='Home'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='2em'
            width='2em'
            viewBox='0 0 512 512'
          >
            <path d='M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z' />
          </svg>
        </Link>
      </div>
      <ul className='hidden font-semibold text-lg sm:flex'>
        <li className='p-4'>
          <Link href='/dogs'>Dogs</Link>
        </li>
        <li className='p-4'>
          <Link href='/cats'>Cats</Link>
        </li>
        <li className='p-4'>
          <Link href='/about'>About</Link>
        </li>
        <li className='p-4'>
          <Link href='/contact'>Contact</Link>
        </li>
        <li className='p-4'>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      {/* Mobile Button */}
      <div onClick={handleNav} className='block sm:hidden p-4 '>
        {nav ? (
          <AiOutlineClose size={25} style={{ color: 'black' }} />
        ) : (
          <AiOutlineMenu size={25} style={{ color: 'black' }} />
        )}
      </div>

      {/* Overlay */}
      <div
        className={nav ? 'fixed inset-0 bg-black/70 z-10' : 'hidden'}
        onClick={handleNav}
      ></div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'overflow-hidden fixed top-0 left-0 w-[75%] h-screen bg-white p-10 ease-in-out duration-300 z-20'
            : 'fixed top-0 left-[-100%] h-screen bg-white p-10 ease-in-out duration-300 z-20'
        }
      >
        <div className='flex w-full items-center justify-between'>
          <div
            onClick={handleNav}
            className='rounded-full shadow-lg text-black shadow-gray-400 p-3 cursor-pointer'
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className='border-b border-gray-300 my-4'>
          <div className='mx-auto w-[85%] text-black md:w-[90%] py-4 overflow-x-hidden'></div>
        </div>
        <ul className='mt-8 text-black space-y-4'>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/dogs'>Dogs</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/cats'>Cats</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/about'>About</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
