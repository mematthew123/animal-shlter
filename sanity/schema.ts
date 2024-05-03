import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import animals from './schemas/animals';
import recentlyAdopted from './schemas/recentlyAdopted';
import homePage from './schemas/homePage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, animals, recentlyAdopted,homePage],
};
