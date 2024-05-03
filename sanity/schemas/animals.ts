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
          { title: 'Other', value: 'other'}
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
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
      name: 'weight',
      title: 'Weight',
      type: 'number',
      description: 'Weight of the animal in pounds',
    }),

    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
      description: 'Breed of the animal',
    }),

    defineField({
      name: 'declawed',
      title: 'Declawed',
      type: 'boolean',
      description: 'Is the cat declawed?',
      hidden: ({ parent }) => parent?.type !== 'cat',
    }),

    defineField({
      name: 'houseTrained',
      title: 'House Trained',
      type: 'boolean',
      description: 'Is the animal house trained?',
    }),

    defineField({
      name: 'spayedNeutered',
      title: 'Spayed/Neutered',
      type: 'boolean',
      description: 'Is the animal spayed/neutered?',
    }),

    defineField({
      name: 'vaccinated',
      title: 'Vaccinated',
      type: 'boolean',
      description: 'Is the animal vaccinated?',
    }),

    defineField({
      name: 'goodWithKids',
      title: 'Good With Kids',
      type: 'boolean',
      description: 'Is the animal good with kids?',
    }),

    defineField({
      name: 'goodWithDogs',
      title: 'Good With Dogs',
      type: 'boolean',
      description: 'Is the animal good with dogs?',
    }),

    defineField({
      name: 'goodWithCats',
      title: 'Good With Cats',
      type: 'boolean',
      description: 'Is the animal good with cats?',
    }),

    defineField({
      name: 'specialNeeds',
      title: 'Special Needs',
      type: 'boolean',
      description: 'Does the animal have special needs?',
    }),

    defineField({
      name: 'specialNeedsDescription',
      title: 'Special Needs Description',
      type: 'string',
      description: "Description of the animal's special needs",
      hidden: ({ parent }) => !parent?.specialNeeds,
    }),

    defineField({
      name: 'adoptionFee',
      title: 'Adoption Fee',
      type: 'number',
      description: 'Adoption fee for the animal',
    }),

    defineField({
      name: 'adoptionFeeWaived',
      title: 'Adoption Fee Waived',
      type: 'boolean',
      description: 'Is the adoption fee waived?',
    }),

    defineField({
      name:'otherType',
      title: 'Other Type',
      type: 'string',
      description: 'Type of animal if other',
      hidden: ({ parent }) => parent?.type !== 'other',
    }),

    defineField({
      name: 'catEnergyLevel',
      title: 'Energy Level',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High', value: 'high' },
        ],
      },
      hidden: ({ parent }) => parent?.type !== 'cat',
      description: 'Select the energy level that best describes the cat.',
    }),

    defineField({
      name: 'dogEnergyLevel',
      title: 'Energy Level',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High', value: 'high' },
        ],
      },
      hidden: ({ parent }) => parent?.type !== 'dog',
      description: 'Select the energy level that best describes the dog.',
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
          { title: 'Energetic', value: 'energetic' },
          { title: 'Lazy', value: 'lazy' },
          { title: 'Friendly', value: 'friendly' },
          { title: 'Aggressive', value: 'aggressive' },
          { title: 'Shy', value: 'shy' },
        ],
      },
      hidden: ({ parent }) => parent?.type !== 'dog',
      description: 'Select the temperament(s) that best describe the dog.',
    }),
  ],
});
