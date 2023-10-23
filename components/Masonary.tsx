import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function Masonry() {
  // Sample data for adopted dogs
  const adoptedDogs = [
    { id: 1, img: '/sample.jpg', alt: 'Adopted Dog 1' },
    { id: 2, img: '/sample.jpg', alt: 'Adopted Dog 2' },
    { id: 3, img: '/sample.jpg', alt: 'Adopted Dog 3' },
    { id: 4, img: '/sample.jpg', alt: 'Adopted Dog 4' },
    { id: 5, img: '/sample.jpg', alt: 'Adopted Dog 5' },
    { id: 6, img: '/sample.jpg', alt: 'Adopted Dog 6' },
    { id: 7, img: '/sample.jpg', alt: 'Adopted Dog 7' },

    // TODO: Replace with data from Sanity
  ];

  return (
    <div className='mt-20  md:mt-40 py-24 px-4  max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-16'>
        Previously Adopted Dogs
      </h1>
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16'>
        {adoptedDogs.map((dog, index) => (
          <div
            key={dog.id}
            className={`bg-gray-100 overflow-hidden 
                        ${
                          index % 5 === 0
                            ? ' col-span-1 lg:row-span-2 lg:col-span-2'
                            : ''
                        }
                        ${
                          index % 4 === 0
                            ? ' col-span-1  lg:col-span-1 lg:row-span-2'
                            : ''
                        }`}
          >
            <Image
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'
              src={dog.img}
              alt={dog.alt}
              height={500}
              width={500}
            />
          </div>
        ))}
      </div>

      <Separator className='my-4' />
      <div className='text-center mt-10'>
        <p className='text-gray-600 text-lg font-semibold mb-4'>
          All dogs deserve a loving home.
        </p>
        <a
          aria-label='View all dogs'
          href='/dogs'
          className='bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300'
        >
          View All Dogs
        </a>
      </div>
    </div>
  );
}
