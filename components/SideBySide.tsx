import React from 'react';
import Image from 'next/image';

const LeftSide = () => {
  return (
    <div className='flex border-2  my-16 py-20 sm:py-24  border-green-500 mt-20 md:mt-40 mr-auto w-full lg:py-20  md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md'>
      <div className='w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:mr-6'>
        <Image
          src='/SmileyLadyDog.jpg'
          alt='Descriptive Alt Text'
          className='w-full h-auto rounded-md shadow-sm'
          height={500}
          width={500}
        />
      </div>
      <div className='w-full md:w-1/2'>
        <h3 className='text-2xl font-bold mb-4'>Your Heading Here</h3>
        <p className='text-gray-700 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <a href='#' className='text-blue-600 hover:underline'>
          Read More
        </a>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className='flex border-2  my-16 py-20 sm:py-24  border-green-500 mt-20 md:mb-40 ml-auto w-full lg:py-20  md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md'>
      <div className='w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:ml-6'>
        <Image
          src='/manDog.jpg'
          alt='Descriptive Alt Text'
          className='w-full h-auto rounded-md shadow-sm'
          height={500}
          width={500}
        />
      </div>
      <div className='w-full md:w-1/2'>
        <h3 className='text-2xl font-bold mb-4'>Your Heading Here</h3>
        <p className='text-gray-700 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <a href='#' className='text-blue-600 hover:underline'>
          Read More
        </a>
      </div>
    </div>
  );
};
export default function SideBySide() {
  return (
    <div className=' border-2 md:mt-40 border-pink-500 mx-auto'>
      <LeftSide />
      <div className='h-20 lg:h-40' />
      <RightSide />
    </div>
  );
}
