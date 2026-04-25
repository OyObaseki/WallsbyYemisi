import { defineType, defineField } from 'sanity'

export const newArrivals = defineType({
  name: 'newArrivals',
  title: 'New Arrivals Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'New Arrivals',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      description: 'Text below the heading',
    }),
    defineField({
      name: 'frames',
      title: 'Frames',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'murals',
      title: 'Murals',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'product' }, { type: 'catalogue' }] },
      ],
    }),
  ],
})
