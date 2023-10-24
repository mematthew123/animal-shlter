'use client';
import Image from 'next/image';
import { getPosts } from '@/sanity/queries/getPosts';
import { BlogPost } from '@/types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Separator } from './ui/separator';

export default function ThreeItemGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  return (
    <div className='mt-20 md:mt-40 py-20 sm:py-24 lg:py-32 p-6'>
      <div className='mx-auto '>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-16'>
          Keep up on the latest news
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* First Item */}
          {posts.map((post) => (
            <Link
              href='/blog/[slug]'
              as={`/blog/${post.slug.current}`}
              key={post.slug.current}
            >
              <div className='flex flex-col bg-gray-100 rounded-md shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                <Image
                  className='mb-6 rounded-md h-40 w-full object-cover'
                  src={post.mainImage.image}
                  alt='blog photo'
                  height={500}
                  width={500}
                />
                <h3 className='text-xl font-bold text-gray-800 mb-4'>
                  {post.title}
                </h3>
                <p className='text-gray-600 mb-4'>
                  Description for the first item in the grid.
                </p>
                <p className='text-blue-600 hover:underline'>Learn More</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex justify-center mt-16'>
          <Separator />
        </div>
      </div>
    </div>
  );
}
