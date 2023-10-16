import React from 'react';

const LeftSide = () => {
  return (
    <div className='flex mt-14 md:mt-20 mr-10 lg:py-20 py-4 w-full md:w-2/3 flex-wrap md:flex-nowrap items-center bg-gray-100 p-6 rounded-lg shadow-md'>
      <div className='w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:mr-6'>
        <img
          src='/ladyDog.jpg'
          alt='Descriptive Alt Text'
          className='w-full h-auto rounded-md shadow-sm'
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
    <div className='flex mt-14 md:mt-20 ml-auto w-full lg:py-20 py-4   md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 p-6 rounded-lg shadow-md'>
      <div className='w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:ml-6'>
        <img
          src='/ladyDog.jpg'
          alt='Descriptive Alt Text'
          className='w-full h-auto rounded-md shadow-sm'
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
    <div>
      <LeftSide />
      <div className='h-20 lg:h-40' />
      <RightSide />
    </div>
  );
}
