import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'name of product',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'product decription',
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
      name: 'price',
      type: 'number',
      title: 'product price',
    }),
    defineField({
      name: 'price_id',
      type: 'string',
      title: 'product price id',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'product image',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
