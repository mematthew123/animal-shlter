import React from 'react'
import type { Animal } from "@/types";
import { getCats } from '@/sanity/queries/getCats';
import Image from 'next/image';

export default async function page() {
    const data = await getCats();
    return (
        <div className=" mx-auto py-2 container flex flex-col items-center justify-center">
            <h1 className="text-4xl mt-20 mb-10">Cats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
                {data.map((cat: Animal) => (
                    <div key={cat._id} className="flex flex-col items-center space-y-6">
                        <h2 className="text-4xl">{cat.name}</h2>
                        <p className="text-xl">Type: {cat.type}</p>
                        {cat.mainImage && (
                            <Image
                                src={cat.mainImage.image}
                                alt={cat.name}
                                width={200}  // Adjust width and height as needed
                                height={200}
                            />
                        )}
                        <div className="space-y-4">
                            {cat.body.map((block, index) => (
                                <p key={index} className="text-lg">{block.children[0].text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

