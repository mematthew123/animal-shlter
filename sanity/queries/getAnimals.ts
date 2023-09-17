import { client } from "../lib/client";
import groq from "groq";

  
export async function getAnimals() {
  return client.fetch(
    groq`*[_type == "Animals"]{
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
