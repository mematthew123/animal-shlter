import React from 'react';
import type { Animal } from '@/types';
import { singleDog } from '@/sanity/queries/singleDog';
import { AnimalCard } from '@/components/AnimalCard';
import { Separator } from '@/components/ui/separator';
import ImageGallery from '@/components/ImageGallery';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

// we are using the slug from the url to query the data for the single dog
export default async function Page({ params }: { params: any }) {
  const data = await singleDog(params.slug);
  console.log(data);

  // We do not want to useState here because we want to use the server to render the page
  // so we will use the images we get from the query to render the page and then use the
  // useState in the ImageGallery component to handle the enlarged image

  return (
    <div className='mx-auto py-2  px-0 flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-20 lg:pt-20 mb-10'>Meet {data[0].name}</h1>
      <div className=' flex justify-center w-full max-w-6xl'>
        {data.map((dog: Animal) => (
          <div key={dog._id}>
            <div className='flex justify-center'>
              <Image
                src={dog.mainImage?.image}
                alt={dog.name}
                width={500}
                height={500}
                className='rounded-t-lg mb-2 w-full h-[600px] object-cover cursor-pointer'
              />
            </div>
            <Separator />
            <ImageGallery images={dog.images} />
          </div>
        ))}
      </div>
      <Separator />
      <p className='text-xl font-semibold mt-10'>About {data[0].name}</p>
      <div className='flex prose prose-lg mx-auto'>
        <PortableText value={data[0].body} />
      </div>
    </div>
  );
}
