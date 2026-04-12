import { defineType, defineField } from 'sanity'

export const productVariant = defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: '20x30 Inches', value: '20x30' },
          { title: '24x36 Inches', value: '24x36' },
          { title: '27x42 Inches', value: '27x42' },
          { title: '36x48 Inches', value: '36x48' }
        ]
      }
    }),
    defineField({
      name: 'frame',
      title: 'Frame Type',
      type: 'string',
      options: {
        list: [
          { title: 'Frameless', value: 'frameless' },
          { title: 'Framed', value: 'framed' }
        ]
      }
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.integer(),
    }),
  ],
})
