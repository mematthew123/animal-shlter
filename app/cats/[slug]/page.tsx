import React from 'react';
import type { Animal } from '@/types';
import { singleCat } from '@/sanity/queries/singleCat';
import { AnimalCard } from '@/components/AnimalCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/ImageGallery';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

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
        <div key={cat._id} className='space-y-6'>
          <h2 className='text-3xl font-semibold'>About {data[0].name}</h2>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-lg block mb-1'>Special Needs</label>
              <p className='text-2xl font-semibold'>
                {cat.specialNeeds ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with kids</label>
              <p className='text-2xl font-semibold'>
                {cat.goodWithKids ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with Dogs</label>
              <p className='text-2xl font-semibold'>
                {cat.goodWithDogs ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with cats</label>
              <p className='text-2xl font-semibold'>
                {cat.goodWithCats ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Vaccinated</label>
              <p className='text-2xl font-semibold'>
                {cat.vaccinated ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Age</label>
              <p className='text-2xl font-semibold'>{cat.age}</p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Breed</label>
              <p className='text-2xl font-semibold'>{cat.breed}</p>
            </div>
          </div>

          <div className='flex prose prose-lg mx-auto'>
            <PortableText value={cat.body} />
          </div>
        </div>
      ))}
    </div>
  );
}
