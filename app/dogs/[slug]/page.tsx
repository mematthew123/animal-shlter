import React from 'react';
import type { Animal } from '@/types';
import { singleDog } from '@/sanity/queries/singleDog';
import { AnimalCard } from '@/components/AnimalCard';
import Link from 'next/link';

// we are using the slug from the url to query the data for the single dog
export default async function Page({ params }: { params: any }) {
  const data = await singleDog(params.slug);
  console.log(data);

  return (
    <div className='mx-auto py-2 md:container px-0 flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-20 lg:pt-20 mb-10'>Meet {data[0].name}</h1>
      <div className=' flex justify-center w-full max-w-6xl'>
        {data.map((dog: Animal) => (
          <Link href={`/dogs/${dog.slug.current}`} key={dog._id}>
            <AnimalCard
              key={dog._id}
              name={dog.name}
              description={(dog.body[0] as any).children[0].text}
              image={dog.mainImage?.image}
              imageClassName='rounded-t-lg w-full h-auto object-cover'
              type='dog'
              temperament={dog.dogTemperament}
              className='container mx-auto w-full lg:w-3/4 h-auto lg:py-10 lg:px-10 my-4 lg:my-20'
              fullDescription
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
