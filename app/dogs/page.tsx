import React from 'react'
import type { Animal } from "@/types";
import { getDogs } from '@/sanity/queries/getDogs';
import Image from 'next/image';

export default async function page() {
  const data = await getDogs();
  return (
    <div className=" mx-auto py-2 container flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-20 mb-10">Dogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {data.map((dog: Animal) => (
          <div key={dog._id} className="flex flex-col items-center space-y-6">
            <h2 className="text-4xl">{dog.name}</h2>
            <p className="text-xl">Type: {dog.type}</p>
            {dog.mainImage && (
              <Image
                src={dog.mainImage.image}
                alt={dog.name}
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
            )}
            <div className="space-y-4">
              {dog.body.map((block, index) => (
                <p key={index} className="text-lg">{block.children[0].text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}