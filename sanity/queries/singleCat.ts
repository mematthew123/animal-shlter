import { client } from '../lib/client';
import groq from 'groq';

export async function singleCat(slug: any) {
  return client.fetch(
    groq`*[_type == "Animals" && type == "cat" && slug.current == "${slug}"]{
      _id,
      name,
      type,
      slug{
        current,
        _type

      },
      mainImage {
        alt,
        "image": asset->url
      },
      body,
    catTemperament, 
    }`
  );
}
