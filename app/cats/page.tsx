'use client';
import React from 'react';
import type { Animal } from '@/types';
import { getCats } from '@/sanity/queries/getCats';
import { AnimalCard } from '@/components/AnimalCard';

export default async function page() {
  const data = await getCats();
  return (
    <div className='mx-auto py-6 container flex flex-col items-center justify-center space-y-8'>
      <h1 className='text-5xl font-bold mt-20'>Cats</h1>
      <div className='text-center space-y-4'>
        <p className='text-2xl'>Help us find these cats a loving home.</p>
        <p className='text-xl'>
          Inquire today about adopting your new best friend!
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl'>
        {data.map((cat: Animal) => (
          <AnimalCard
            key={cat._id}
            name={cat.name}
            description={(cat.body[0] as any).children[0].text}
            image={cat.mainImage?.image}
            type='cat'
            temperament={cat.catTemperament?.slice(0, 2)}
            onCardClick={() => {
              window.location.href = `/cats/${cat.slug.current}`; // Navigate to the cats's page when the card is clicked
            }}
          />
        ))}
      </div>
    </div>
  );
}
