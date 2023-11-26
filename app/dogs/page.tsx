'use client';
import React from 'react';
import type { Animal } from '@/types';
import { getDogs } from '@/sanity/queries/getDogs';
import { AnimalCard } from '@/components/AnimalCard';
import { revalidateTag } from 'next/cache';

export default async function page() {
  const data = await getDogs();
  revalidateTag('data'); // pass a string argument instead of a function

  return (
    <div className='mx-auto py-6 container flex flex-col items-center justify-center space-y-8'>
      <h1 className='text-5xl font-bold mt-20'>Dogs</h1>
      <div className='text-center space-y-4'>
        <p className='text-2xl'>Help us find these dogs a loving home.</p>
        <p className='text-xl'>
          Inquire today about adopting your new best friend!
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl'>
        {data.map((dog: Animal) => (
          <AnimalCard
            key={dog._id}
            name={dog.name}
            description={(dog.body[0] as any).children[0].text}
            image={dog.mainImage?.image}
            type='dog'
            temperament={dog.dogTemperament?.slice(0, 2)}
            onCardClick={() => {
              window.location.href = `/dogs/${dog.slug.current}`; // Navigate to the dog's page when the card is clicked
            }}
          />
        ))}
      </div>
    </div>
  );
}
