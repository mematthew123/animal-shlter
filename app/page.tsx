import CallToAction from '@/components/CallToAction';
import Faqs from '@/components/Faqs';
import Featured from '@/components/Featured';
import Navigation from '@/components/NavBar';
import SideBySide from '@/components/SideBySide';
import {
  BoltIcon,
  GlobeAltIcon,
  ScaleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: ' Something about the shelter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Something else about the shelter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: StarIcon,
  },
  {
    name: 'Something additional about the shelter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
];
function Columns() {
  return (
    <div className='bg-white my-16 py-20 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Dogs and Cats for adoption</h2>
        <dl className='grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white'>
                  <feature.icon className='h-8 w-8' aria-hidden='true' />
                </div>
                <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className='  relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
              TRACS <span className='text-indigo-600'>Animal</span> Shelter
            </h1>
            <div className='mt-6 max-w-2xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/dogs'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
              src='https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'
              alt=''
              className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
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
      <Featured />

      <Faqs />
      <CallToAction />
    </>
  );
}
