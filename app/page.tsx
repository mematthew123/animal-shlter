import CallToAction from '@/components/CallToAction';
import Faqs from '@/components/Faqs';
import Masonry from '@/components/Masonary';
import SideBySide from '@/components/SideBySide';
import ThreeItemGrid from '@/components/ThreeItemGrid';
import { BoltIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { getHomePage } from '@/sanity/queries/getHomePage';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { get } from 'http';

export const revalidate = 10;


// we want to use the data from the sanity query to populate the page
async function Columns() {
  // get data from sanity
  const data = await getHomePage();

  
  return (
    <div className='bg-white my-16 py-20 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='sr-only'>Feature Columns</h2>
        <dl className='grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3'>
          {data.featureColumns.map((column: any) => (
            <div key={column.name} className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md'>
                  <BoltIcon className='w-6 h-6 text-white' />
                </div>
                <p className='ml-16 text-lg font-semibold text-gray-900'>{column.name}</p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-600'>
              {column.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );


}
export default async function Home() {

const data = await getHomePage();

  return (
    <>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 '>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
             {data.heroSection.title}
            </h1>
            <div className='mt-6 z-0 max-w-2xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-lg leading-8 text-gray-600'>
                {data.heroSection.subtitle}
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/dogs'
                  className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  View Dogs
                </a>
                <a
                  href='/cats'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  View Cats
                </a>
              </div>
            </div>
            <Image
              src={urlForImage(data.heroSection.backgroundImage).url()}
              alt=''
              className='mt-10 aspect-[6/5] z-0 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
      {/* three columns */}
      <Columns />
      <SideBySide />
      <Masonry />
      <ThreeItemGrid />
      {/* <Featured /> */}
      <Faqs />
      <CallToAction />
    </>
  );
}
