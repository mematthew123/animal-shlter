import Image from 'next/image';
import { getAnimals } from '../sanity/queries/getAnimals';
import React from 'react';
import type { Animal } from "@/types";
import Navigation from '@/components/NavBar';






export default async function Home() {
  const data = await getAnimals();
  console.log(data);



  return (
    <main>
      <Navigation />
      <h1>Animals</h1>
      {data.map((animal: Animal) => (
        <div key={animal._id}>
          <h2>{animal.name}</h2>
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
    </main>
  );
}
