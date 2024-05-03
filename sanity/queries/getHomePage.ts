import { client } from '../lib/client';
import groq from 'groq';

export async function getHomePage() {
  return client.fetch(
    groq`*[_type == "homePage"][0]{
      heroSection,
      featureColumns,
      sideBySideSections
    }`
  );
}

