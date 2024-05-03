import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        { name: 'backgroundImage', type: 'image', title: 'Background Image' },
        { name: 'ctaPrimary', type: 'string', title: 'Primary CTA Label' },
        { name: 'ctaPrimaryLink', type: 'url', title: 'Primary CTA Link' },
        { name: 'ctaSecondary', type: 'string', title: 'Secondary CTA Label' },
        { name: 'ctaSecondaryLink', type: 'url', title: 'Secondary CTA Link' }
      ]
    }),
    defineField({
      name: 'featureColumns',
      title: 'Feature Columns',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Feature Name' },
          { name: 'description', type: 'text', title: 'Description' },
          { name: 'icon', type: 'image', title: 'Icon' }
        ]
      }]
    }),
    defineField({
      name: 'sideBySideSections',
      title: 'Side By Side Sections',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'image', type: 'image', title: 'Image' },
          { name: 'heading', type: 'string', title: 'Heading' },
          { name: 'description', type: 'text', title: 'Description' },
          { name: 'ctaLabel', type: 'string', title: 'CTA Label' },
          { name: 'ctaLink', type: 'url', title: 'CTA Link' }
        ]
      }]
    })
  ]
});
