import { getSinglePost } from '@/sanity/queries/getSinglePost';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function Page({ params }: { params: any }) {
  const data = await getSinglePost(params.slug);
  return (
    <div className='mx-auto py-6 px-4 flex flex-col items-center justify-center space-y-10'>
      <h1 className='text-5xl font-bold mt-20 lg:pt-20'>{data[0].title}</h1>
      <Image
        src={data[0].mainImage.image}
        alt={data[0].title}
        width={600}
        height={400}
        className='rounded-lg shadow-sm content-center align-middle'
      />
      <div className='prose'>
        <PortableText value={data[0].body} />
      </div>
    </div>
  );
}
