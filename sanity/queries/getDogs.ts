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
      body
    }`
  );
}
