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
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description:
                'A short description of the image for accessibility and SEO',
            },
          ],
          options: {
            hotspot: true, // Enables hotspot for precise control of how images are cropped
          },
        },
      ],
    }),
  ],
});
