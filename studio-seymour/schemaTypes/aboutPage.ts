import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'whoWeAre',
      title: 'Who We Are (intro paragraph)',
      type: 'text',
      rows: 5,
      description: 'Shown in the “Who We Are” section on the About page. Leave empty to use the built-in default text. Keep only one About page document.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About page' }
    },
  },
})
