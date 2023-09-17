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
  body: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: any[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[];
};
