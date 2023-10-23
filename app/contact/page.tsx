import React from 'react';

export default function page() {
  return (
    <div>
      {/* Main Contact Section */}
      <section className='flex items-center lg:h-screen mt-20 '>
        <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
          {/* Header */}
          <div className='px-4 mb-10 md:text-center md:mb-20'>
            <p className='mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400'>
              Get In Touch
            </p>
            <h2 className='pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300'>
              Contact Us
            </h2>

            {/* Divider */}
            <div className='flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
              <div className='flex-1 h-2 bg-blue-200'></div>
              <div className='flex-1 h-2 bg-blue-400'></div>
              <div className='flex-1 h-2 bg-blue-300'></div>
            </div>
          </div>

          {/* Description */}
          <p className='text-xl mb-6 md:text-center'>
            Visit us at our location or get in touch for any inquiries.
          </p>

          {/* Google Map Embed */}
          <div className='w-full max-w-6xl h-96 rounded-lg overflow-hidden mb-8'>
            <iframe
              width='100%'
              height='100%'
              src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Your%20Address%20Here+(Your%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
              title='Google Map'
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:text-center '>
            <div>
              <label className='text-lg block mb-1'>Our Location</label>
              <p className='text-2xl font-semibold'>
                123 Main St, Your City, Your Country
              </p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Phone</label>
              <p className='text-2xl font-semibold'>(123) 456-7890</p>
            </div>
            <div>
              <label className='text-lg block mb-1'>Email</label>
              <p className='text-2xl font-semibold'>contact@yourdomain.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
