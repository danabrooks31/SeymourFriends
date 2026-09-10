import { defineField, defineType } from 'sanity'

export const tripType = defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Trip name',
      type: 'string',
      description:
        'Shown as the heading, e.g. “Portugal River Cruise - November 9-17, 2026”.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Short description',
      type: 'text',
      rows: 2,
      description: 'One or two lines under the trip name.',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first. Example: 1, then 2.',
      initialValue: 10,
    }),
    defineField({
      name: 'preview',
      title: 'Flyer / photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Photo description (for accessibility)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points under the trip, one item per line.',
    }),
    defineField({
      name: 'pdf',
      title: 'Trip details PDF',
      type: 'file',
      options: { accept: '.pdf,application/pdf' },
    }),
    defineField({
      name: 'pdfLabel',
      title: 'PDF link text',
      type: 'string',
      initialValue: 'View full trip details (PDF)',
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subtitle',
      media: 'preview',
    },
  },
})
