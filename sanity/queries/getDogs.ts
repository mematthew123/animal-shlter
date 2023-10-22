import { client } from '../lib/client';
import groq from 'groq';

export async function getDogs() {
  return client.fetch(
    groq`*[_type == "Animals" && type == "dog"]{
      _id,
      name,
      type,
      slug,
      mainImage {
        alt,
        "image": asset->url
      },
      body,
      dogTemperament, 
      age,
    }`
  );
}

export async function getDog(slug: any) {
  return client.fetch(
    groq`*[_type == "Animals" && slug.current == "${slug}"][0]{
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
      dogTemperament, 
      age,
    }`
  );
}
