import { client } from '../lib/client';
import groq from 'groq';

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        title,
        slug,
        mainImage {
            alt,
            "image": asset->url
        },
        body,
        publishedAt,
        excerpt,
        }`
  );
}
