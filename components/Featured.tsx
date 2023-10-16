import React from 'react';

export default function Featured() {
  return (
    <div className='bg-white mt-20 md:mt-40 py-20 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-16'>
          Featured Section
        </h1>
        <div className='flex flex-wrap -mx-4'>
          {[1, 2].map((item) => (
            <div key={item} className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
              <div className='flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover'
                    src='/ladyDog.jpg'
                    alt={`Descriptive Alt Text for Item ${item}`}
                  />
                </div>
                <div className='p-6 flex flex-col justify-between flex-1'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800 mb-3'>
                      Item Title {item}
                    </h3>
                    <p className='text-gray-600'>
                      Short description about the featured item {item}. This can
                      be a brief intro or an excerpt.
                    </p>
                  </div>
                  <a href='#' className='mt-6 text-blue-600 hover:underline'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
