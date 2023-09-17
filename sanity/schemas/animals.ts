import { defineField, defineType } from 'sanity';


export default defineType({
  name: 'Animals',
  title: 'Animals',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Cat', value: 'cat' },
          { title: 'Dog', value: 'dog' },
        ],
        layout: 'radio', // Display as radio buttons
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the animal',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'age',
      title: 'Age',
      type: 'number',
      description: 'Age of the animal in years',
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color of the animal',
    }),

    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
      description: 'Breed of the animal',
    }),

    defineField({
      name: 'catTemperament',
      title: 'Temperament',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Playful', value: 'playful' },
          { title: 'Independent', value: 'independent' },
          { title: 'Cuddly', value: 'cuddly' },
        ],
      },
      hidden: ({ parent }) => parent?.type !== 'cat',
      description: 'Select the temperament(s) that best describe the cat.',
    }),
    defineField({
      name: 'dogTemperament',
      title: 'Temperament',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Playful', value: 'playful' },
          { title: 'Reactive', value: 'reactive' },
          { title: 'Cuddly', value: 'cuddly' },
          { title: 'Protective', value: 'protective' },
          { title: 'Loyal', value: 'loyal' },
          { title: 'Energetic', value: 'energetic' },
          { title: 'Lazy', value: 'lazy' },
          { title: 'Friendly', value: 'friendly' },
          { title: 'Aggressive', value: 'aggressive' },
          { title: 'Shy', value: 'shy' },
          { title: 'Calm', value: 'calm' },
          { title: 'Quiet', value: 'quiet' },
          { title: 'Loving', value: 'loving' },
          { title: 'Affectionate', value: 'affectionate' },
          { title: 'Intelligent', value: 'intelligent' },
          { title: 'Gentle', value: 'gentle' },
          { title: 'Confident', value: 'confident' },
        ],
      },
      hidden: ({ parent }) => parent?.type !== 'dog',
      description: 'Select the temperament(s) that best describe the dog.',
    }),
  ],
});
