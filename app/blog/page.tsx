'use client';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types';
import Image from 'next/image';
import { getPosts } from '@/sanity/queries/getPosts';
import Link from 'next/link';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  return (
    <div className='container mx-auto px-4 mt-20'>
      <h1 className='text-5xl font-bold mb-10'>Blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {posts.map((post) => (
          <Link
            href='/blog/[slug]'
            as={`/blog/${post.slug.current}`}
            key={post.slug.current}
          >
            <div className='block hover:bg-gray-100 rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'>
              <div className='mb-4'>
                <Image
                  src={post.mainImage.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className='rounded-lg shadow-sm'
                />
              </div>
              <h2 className='text-2xl font-semibold mb-2'>{post.title}</h2>
              <p className='text-gray-600'>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
