import { defineType, defineField } from 'sanity'

export const trending = defineType({
  name: 'trending',
  title: 'Trending Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Trending',
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
  ],
})
