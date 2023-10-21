import React from 'react';
import Image from 'next/image';
import { Separator } from './ui/separator';

interface AnimalCardProps {
  image?: string;
  name: string;
  description?: string;
  type: 'dog' | 'cat';
  temperament?: string[];
  className?: string;
  imageClassName?: string;

  fullDescription?: boolean; // DUE TO USING LINE CLAMP IN THE ANIMAL CARD, WE NEED TO ADD A FULL DESCRIPTION PROP TO SHOW THE FULL DESCRIPTION ON THE SINGLE DOG PAGE...NOT SURE WHY I AM SHOUTING
}

export const AnimalCard: React.FC<AnimalCardProps> = ({
  image,
  name,
  description,
  type,
  temperament,
  className = '', // Default to an empty string if no className is provided
  fullDescription = false,
  imageClassName = '',
}) => {
  console.log(temperament);
  return (
    <div
      className={`border p-4 rounded-lg  transition-shadow duration-300 ${className}`}
    >
      {image && (
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`w-full h-64 object-contain aspect-auto rounded-t-lg ${
            imageClassName ?? ''
          }`}
        />
      )}
      <Separator />
      <div className='p-2'>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p
          className={`text-gray-600 mt-2 ${
            fullDescription ? '' : 'line-clamp-1'
          }`}
        >
          {description}
        </p>{' '}
        <div className=' grid grid-cols-2 gap-2 mt-4'>
          {temperament?.map((temp) => (
            <span
              key={temp}
              className='inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800'
            >
              {temp}
            </span>
          ))}
        </div>
        <span
          className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${
            type === 'dog'
              ? 'bg-blue-200 text-blue-800'
              : 'bg-pink-200 text-pink-800'
          }`}
        >
          {type}
        </span>
      </div>
    </div>
  );
};
