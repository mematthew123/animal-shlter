'use client';
import React, { useState } from 'react';
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
  onCardClick?: () => void;
  age?: number;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({
  image,
  name,
  description,
  temperament,
  className = '',
  imageClassName = '',
  onCardClick,
  age,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => {
        if (onCardClick) {
          onCardClick();
        }
      }}
      className={`border p-4 rounded-lg transition-shadow duration-300 ${className}`}
      style={{ cursor: 'pointer' }}
    >
      {image && (
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`w-full h-64 object-contain aspect-auto rounded-t-lg ${imageClassName}`}
        />
      )}
      <Separator />
      <div className='p-2 space-y-4'>
        <h2 className='text-xl font-semibold'>{name}</h2>
        {age && <p className='text-gray-600'>{age} years old</p>}

        {isExpanded && (
          <>
            <p className='text-gray-600'>{description}</p>
            <div className='mt-4'>
              <h3 className='text-lg font-medium mb-2'>Temperament:</h3>
              <div className='grid grid-cols-2 gap-2'>
                {temperament?.map((temp) => (
                  <span
                    key={temp}
                    className='inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800'
                  >
                    {temp}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent outer div onClick from triggering
            setIsExpanded(!isExpanded);
          }}
          className='text-blue-500 hover:underline'
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};
