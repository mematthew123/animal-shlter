import { PortableTextBlock } from 'sanity';

export type Animal = {
  _id: string;
  name: string;
  type: string;
  slug: {
    _type: string;
    current: string;
  };
  mainImage: {
    alt: string;
    image: string;
  };
  images: {
    alt: string;
    image: string;
  }[];
  body: PortableTextBlock[];
  dogTemperament?: string[];
  catTemperament?: string[];
};
