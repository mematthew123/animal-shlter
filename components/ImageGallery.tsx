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
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl'>
        {images?.map((img, index) => (
          <img
            key={index}
            className='rounded-t-lg w-full h-auto object-cover cursor-pointer'
            src={img.image}
            alt='dog'
            onClick={() => handleImageClick(img.image)}
          />
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
