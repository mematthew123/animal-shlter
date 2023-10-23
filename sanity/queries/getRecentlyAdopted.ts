import { client } from '../lib/client';
import groq from 'groq';

export async function getRecentlyAdopted() {
  return client.fetch(
    groq`*[_type == "recentlyAdopted"]{
            _id,
  "galleryImages": gallery[].asset->url
            }`
  );
}
