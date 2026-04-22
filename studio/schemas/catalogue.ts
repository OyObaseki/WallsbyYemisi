import { defineType, defineField } from 'sanity'

export const catalogue = defineType({
  name: 'catalogue',
  title: 'Catalogue',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'designsCount',
      title: 'Number of Designs Available',
      type: 'number',
    }),
    defineField({
      name: 'images',
      title: 'Catalogue Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})
