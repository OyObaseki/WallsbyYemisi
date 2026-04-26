import { defineType, defineField } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
    }),
  ],
})
