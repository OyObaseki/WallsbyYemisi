import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          { title: 'Monochrome', value: 'monochrome' },
          { title: 'Azure Deep', value: 'azure-deep' },
          { title: 'Velvet Night', value: 'velvet-night' },
          { title: 'Terra Cotta', value: 'terra-cotta' }
        ]
      }
    }),
  ],
})
