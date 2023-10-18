import { client } from '../lib/client';
import groq from 'groq';

export async function singleDog(slug: any) {
  return client.fetch(
    groq`*[_type == "Animals" && type == "dog" && slug.current == "${slug}"]{
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
      images[]{
        alt,
        "image": asset->url
      },
      body,
      dogTemperament, 
    }`
  );
}
