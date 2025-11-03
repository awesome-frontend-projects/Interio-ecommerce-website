import {defineType, defineField} from 'sanity'

export const categoryImagesType = defineType({
  name: 'categoryImage',
  title: 'Category Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
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
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'quantity',
      title: 'Number of Items',
      type: 'number',
      description: 'Total number of products in this category.',
    }),
  ],
})
