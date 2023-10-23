import React from 'react';
import Image from 'next/image';

export default function ThreeItemGrid() {
  return (
    <div className='mt-20 md:mt-40 py-20 sm:py-24 lg:py-32 p-6'>
      <div className='mx-auto '>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-16'>
          Three Item Grid
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* First Item */}
          <div className='flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <Image
              className='mb-6 rounded-md h-40 w-full object-cover'
              src='/smileyLadyDog.jpg'
              alt='Description of Image 1'
              height={500}
              width={500}
            />
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Item 1</h3>
            <p className='text-gray-600 mb-4'>
              Description for the first item in the grid.
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              Learn More
            </a>
          </div>

          {/* Second Item */}
          <div className='flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <Image
              className='mb-6 rounded-md h-40 w-full object-cover'
              src='/SmileyLadyDog.jpg'
              alt='Description of Image 2'
              height={500}
              width={500}
            />
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Item 2</h3>
            <p className='text-gray-600 mb-4'>
              Description for the second item in the grid.
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              Learn More
            </a>
          </div>

          {/* Third Item */}
          <div className='flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <Image
              className='mb-6 rounded-md h-40 w-full object-cover'
              src='/SmileyLadyDog.jpg'
              alt='Description of Image 3'
              height={500}
              width={500}
            />
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Item 3</h3>
            <p className='text-gray-600 mb-4'>
              Description for the third item in the grid.
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
