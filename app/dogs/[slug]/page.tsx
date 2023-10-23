import React from 'react';
import type { Animal } from '@/types';
import { singleDog } from '@/sanity/queries/singleDog';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/ImageGallery';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function Page({ params }: { params: any }) {
  const data = await singleDog(params.slug);

  return (
    <div className='mx-auto py-6 px-4 flex flex-col items-center justify-center space-y-10'>
      <h1 className='text-5xl font-bold mt-20 lg:pt-20'>Meet {data[0].name}</h1>

      <div className='flex justify-center w-full max-w-6xl space-y-6'>
        {data.map((dog: Animal) => (
          <div key={dog._id} className='space-y-6'>
            <Image
              src={dog.mainImage?.image}
              alt={dog.name}
              width={500}
              height={500}
              className='rounded-lg shadow-lg w-full h-[600px] object-cover cursor-pointer'
            />
            <Separator />
            <ImageGallery images={dog.images} />
          </div>
        ))}
      </div>

      <Separator />

      {data.map((dog: Animal) => (
        <div key={dog._id} className='space-y-6'>
          <h2 className='text-3xl font-semibold'>About {data[0].name}</h2>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-lg block mb-1'>Special Needs</label>
              <p className='text-2xl font-semibold'>
                {dog.specialNeeds ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with kids</label>
              <p className='text-2xl font-semibold'>
                {dog.goodWithKids ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with dogs</label>
              <p className='text-2xl font-semibold'>
                {dog.goodWithDogs ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Good with cats</label>
              <p className='text-2xl font-semibold'>
                {dog.goodWithCats ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Vaccinated</label>
              <p className='text-2xl font-semibold'>
                {dog.vaccinated ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Age</label>
              <p className='text-2xl font-semibold'>{dog.age}</p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Breed</label>
              <p className='text-2xl font-semibold'>{dog.breed}</p>
            </div>
          </div>

          <div className='flex prose prose-lg mx-auto'>
            <PortableText value={dog.body} />
          </div>
        </div>
      ))}
    </div>
  );
}
