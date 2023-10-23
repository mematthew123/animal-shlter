import { client } from '../lib/client';
import groq from 'groq';

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == "${slug}"]{
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
