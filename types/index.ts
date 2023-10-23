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
  childFriendly?: string[];
  energyLevel?: string[];
  specialNeeds: any;
  age: number;
  weight: number;
  color: string;
  breed: string;
  spayedNeutered: boolean;
  houseTrained: boolean;
  vaccinated: boolean;
  goodWithKids: boolean;
  goodWithCats: any;
  goodWithDogs: any;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  mainImage: {
    alt: string;
    image: string;
  };
  body: PortableTextBlock[];
  publishedAt: string;
  excerpt: string;
};
