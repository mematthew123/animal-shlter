import React from 'react';
import type { Animal } from '@/types';
import { singleCat } from '@/sanity/queries/singleCat';
import { AnimalCard } from '@/components/AnimalCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/ImageGallery';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import {
  CatIcon,
  Dog,
  DogIcon,
  HomeIcon,
  PocketKnife,
  PocketKnifeIcon,
  School2Icon,
  SyringeIcon,
} from 'lucide-react';

// we are using the slug from the url to query the data for the single cat
export default async function Page({ params }: { params: any }) {
  const data = await singleCat(params.slug);
  console.log(data);
  return (
    <div className='mx-auto py-6 px-4 flex flex-col items-center justify-center space-y-10'>
      <h1 className='text-5xl font-bold mt-20 lg:pt-20'>Meet {data[0].name}</h1>

      <div className='flex justify-center w-full max-w-6xl space-y-6'>
        {data.map((cat: Animal) => (
          <div key={cat._id} className='space-y-6'>
            <Image
              src={cat.mainImage?.image}
              alt={cat.name}
              width={500}
              height={500}
              className='rounded-lg shadow-lg w-full h-[600px] object-cover cursor-pointer'
            />
            <Separator />
            <ImageGallery images={cat.images} />
          </div>
        ))}
      </div>

      <Separator />

      {data.map((cat: Animal) => (
        <div key={cat._id} className='space-y-6 text-center max-w-prose'>
          <h2 className='text-3xl font-semibold'>About {cat.name}</h2>
          <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
            {/* Special Needs */}
            <div className='flex items-center space-x-2'>
              <svg className='w-5 h-5 text-blue-500'>{/* Icon SVG */}</svg>
              <span className='text-lg font-medium'>Special Needs</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.specialNeeds
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {cat.specialNeeds ? 'Yes' : 'No'}
            </div>

            {/* Good with Kids */}
            <div className='flex items-center space-x-2'>
              <School2Icon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>Good with Kids</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.goodWithKids
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.goodWithKids ? 'Yes' : 'No'}
            </div>

            {/* Good with Dogs */}
            <div className='flex items-center space-x-2'>
              <DogIcon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>Good with Dogs</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.goodWithDogs
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.goodWithDogs ? 'Yes' : 'No'}
            </div>

            {/* Good with Cats */}
            <div className='flex items-center space-x-2'>
              <CatIcon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>Good with Cats</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.goodWithCats
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.goodWithCats ? 'Yes' : 'No'}
            </div>

            {/* Spayed/Neutered */}
            <div className='flex items-center space-x-2'>
              <PocketKnifeIcon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>Spayed/Neutered</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.spayedNeutered
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.spayedNeutered ? 'Yes' : 'No'}
            </div>

            {/* House Trained */}
            <div className='flex items-center space-x-2'>
              <HomeIcon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>House Trained</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.houseTrained
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.houseTrained ? 'Yes' : 'No'}
            </div>

            {/* Vaccinated */}
            <div className='flex items-center space-x-2'>
              <SyringeIcon className='w-5 h-5 text-blue-500' />
              <span className='text-lg font-medium'>Vaccinated</span>
            </div>
            <div
              className={`px-4 py-2 rounded-full shadow-lg ${
                cat.vaccinated
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {cat.vaccinated ? 'Yes' : 'No'}
            </div>

            {/* Age */}
            <div className='flex items-center space-x-2'>
              <svg className='w-5 h-5 text-blue-500'>{/* Icon SVG */}</svg>
              <span className='text-lg font-medium'>Age</span>
            </div>
            <div className='px-4 py-2 rounded-full shadow-lg'>
              {cat.age} years
            </div>

            {/* Breed */}
            <div className='flex items-center space-x-2'>
              <svg className='w-5 h-5 text-blue-500'>{/* Icon SVG */}</svg>{' '}
              <span className='text-lg font-medium'>Breed</span>
            </div>
            <div className='px-4 py-2 rounded-full shadow-lg'>{cat.breed}</div>
          </div>

          <Separator />

          <div className='flex prose text-xl prose-lg mx-auto'>
            <PortableText value={cat.body} />
          </div>
          {/* Adoption Fee Highlight */}
          <div className='mt-6 flex justify-center items-center'>
            <div className='bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg'>
              <svg
                className='w-5 h-5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 8v8m4-4H8'></path>
                <path d='M20.488 9c-.864-5.569-7.957-7.951-11.049-4.288C6.95.95.793 3.454 1.512 9c-.864 5.569 2.807 10.425 8.007 10.425H12c5.2 0 8.352-4.856 7.488-10.425z'></path>
              </svg>
              <span className='text-lg font-semibold'>
                Adoption Fee:{' '}
                <span className='text-xl'>$ {cat.adoptionFee}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
