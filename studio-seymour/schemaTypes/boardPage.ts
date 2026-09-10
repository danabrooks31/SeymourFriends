import { defineField, defineType } from 'sanity'

export const boardPageType = defineType({
  name: 'boardPage',
  title: 'Board of Directors',
  type: 'document',
  fields: [
    defineField({
      name: 'asOf',
      title: 'As of date',
      type: 'string',
      description: 'Shown at the bottom of the Board page, e.g. “As of August 2026”. Keep only one Board of Directors document.',
    }),
    defineField({
      name: 'officers',
      title: 'Officers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              description: 'President, Vice President, Treasurer, etc.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'since',
              title: 'Since',
              type: 'string',
              description: 'Optional, e.g. “Since 2019”.',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'role' },
          },
        },
      ],
    }),
    defineField({
      name: 'directors',
      title: 'Directors at Large',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'note',
              title: 'Note',
              type: 'string',
              description:
                'Optional extra line, e.g. “Spanish Liaison” or “Chapel Hill Parks & Rec Representative”.',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'note' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Board of Directors' }
    },
  },
})
