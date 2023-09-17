import React from 'react'
import type { Animal } from "@/types";
import { getCats } from '@/sanity/queries/getCats';
import Image from 'next/image';

export default async function page() {

    const data = await getCats();
    
    return (
        <div>
            <h1>Cats</h1>
            {data.map((cat: Animal) => (

                <div key={cat._id}>
                    <h2>{cat.name}</h2>
                    <p>Type: {cat.type}</p>
                    {cat.mainImage && (
                        <Image
                            src={cat.mainImage.image}

                            alt={cat.name}
                            width={200}  // Adjust width and height as needed
                            height={200}
                        />
                    )}

                    <div>
                        {cat.body.map((block, index) => (
                            <p key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

