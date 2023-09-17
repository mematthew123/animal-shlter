import { client } from '../lib/client';
import groq from 'groq';

export async function getCats() {
  return client.fetch(
    groq`*[_type == "Animals" && type == "cat"]{
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
