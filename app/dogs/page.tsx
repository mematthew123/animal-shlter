import React from 'react'
import type { Animal } from "@/types";
import { getDogs } from '@/sanity/queries/getDogs';
import Image from 'next/image';

export default async function page() {

  const data = await getDogs();
  return (
    <div> 
      <h1>Dogs</h1>
      {data.map((dog: Animal) => (
        
        <div key={dog._id}>
          <h2>{dog.name}</h2>
          <p>Type: {dog.type}</p>
          {dog.mainImage && (
            <Image
              src={dog.mainImage.image}

              alt={dog.name}
              width={200}  // Adjust width and height as needed
              height={200}
            />
          )}

          <div>
            {dog.body.map((block, index) => (
              <p key={index}>{block.children[0].text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}