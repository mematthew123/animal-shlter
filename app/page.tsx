import Image from 'next/image';
import { getAnimals } from '../sanity/queries/getAnimals';
import React from 'react';
import type { Animal } from "@/types";


export default async function Home() {
  const data = await getAnimals();
  console.log(data);

  return (
    <>
      <div>
        <div className=' flex  flex-col items-center justify-center  py-2'>
          {data.map((animal: Animal) => (
            <div key={animal._id}>
              <h2 className='  mt-96 text-4xl'>{animal.name}</h2>
              <p>Type: {animal.type}</p>
              {animal.mainImage && (
                <Image
                  src={animal.mainImage.image}

                  alt={animal.name}
                  width={200}  // Adjust width and height as needed
                  height={200}
                />
              )}
              <div>
                {animal.body.map((block, index) => (
                  <p key={index}>{block.children[0].text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
