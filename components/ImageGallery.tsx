'use client';
import { useState } from 'react';

interface ImageGalleryProps {
  images: { image: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setEnlargedImage(imageUrl);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className='container mx-auto px-0 flex flex-col items-center justify-center w-full max-w-6xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
        {images?.map((img, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'
            onClick={() => handleImageClick(img.image)}
          >
            <div className='w-auto md:w-64 h-64 relative'>
              <img
                key={index}
                className='absolute top-0 left-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300'
                src={img.image}
                alt='dog'
                loading='lazy'
              />
            </div>
          </div>
        ))}
      </div>

      {enlargedImage && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50'>
          <img
            src={enlargedImage}
            alt='Enlarged dog image'
            className='max-w-3/4 max-h-3/4'
            onClick={closeEnlargedImage}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
