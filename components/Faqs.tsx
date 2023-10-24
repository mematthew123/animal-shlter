import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function AccordionComponent() {
  return (
    <>
      <div className='text-center  '>
        <h1 className='text-4xl mb-20'>Frequently Asked Questions</h1>
      </div>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>What is a dog?</AccordionTrigger>
          <AccordionContent>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>How do you acquire a dog?</AccordionTrigger>
          <AccordionContent>
            Holla at ya boi and I&apos;ll hook you up 📲
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Can you teach a dog to code?</AccordionTrigger>
          <AccordionContent>
            I am currently working on a course for this. Stay tuned!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Can i bring my dog to the mall?</AccordionTrigger>
          <AccordionContent>
            Yes, but only if you&apos;re prepared to buy them a new outfit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default function Faqs() {
  return (
    <div className='bg-gray-100 mt-20 md:mt-40 py-20 sm:py-24   lg:py-32'>
      <div className='mx-auto max-w-xl mb-10 px-6 lg:max-w-7xl lg:px-8'>
        <AccordionComponent />
      </div>
    </div>
  );
}
