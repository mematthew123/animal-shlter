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
    <div className='mx-auto py-2  px-0 flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-20 lg:pt-20 mb-10'>Meet {data[0].name}</h1>
      <div className=' flex justify-center w-full max-w-6xl'>
        {data.map((cat: Animal) => (
          <div key={cat._id}>
            <div className='flex justify-center'>
              <Image
                src={cat.mainImage?.image}
                alt={cat.name}
                width={500}
                height={500}
                className='rounded-t-lg mb-2 w-full h-[600px] object-cover cursor-pointer'
              />
            </div>
            <Separator />
            <ImageGallery images={cat.images} />
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
