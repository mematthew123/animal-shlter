import React from 'react'
import type { Animal } from "@/types";
import { getCats } from '@/sanity/queries/getCats';
import { AnimalCard } from '@/components/AnimalCard';
import Link from 'next/link';


export default async function page() {
    const data = await getCats();
    return (
        <div className="mx-auto py-2 container flex flex-col items-center justify-center">
            <h1 className="text-4xl mt-20 mb-10">Cats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
                {data.map((cat: Animal) => (
                    <Link href={`/cats/${cat.slug.current}`} key={cat._id}>
                    <AnimalCard
                        key={cat._id}
                        name={cat.name}
                        description={(cat.body[0] as any).children[0].text}
                        image={cat.mainImage?.image}
                        type="cat"
                        temperament={cat.catTemperament}
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}

