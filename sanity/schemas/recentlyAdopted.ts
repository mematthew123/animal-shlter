import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'recentlyAdopted',
  title: 'Recently Adopted',
  type: 'document',
  fields: [
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});
