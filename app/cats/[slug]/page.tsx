import React from 'react';
import type { Animal } from '@/types';
import { singleCat } from '@/sanity/queries/singleCat';
import { AnimalCard } from '@/components/AnimalCard';
import Link from 'next/link';

// we are using the slug from the url to query the data for the single cat
export default async function Page({ params }: { params: any }) {
  const data = await singleCat(params.slug);
  console.log(data);

  return (
    <div className='mx-auto py-2 container flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-20 mb-10'>Dogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl'>
        {data.map((cat: Animal) => (
          <Link href={`/cats/${cat.slug.current}`} key={cat._id}>
            <AnimalCard
              key={cat._id}
              name={cat.name}
              description={(cat.body[0] as any).children[0].text}
              image={cat.mainImage?.image}
              type='dog'
              temperament={cat.catTemperament}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
