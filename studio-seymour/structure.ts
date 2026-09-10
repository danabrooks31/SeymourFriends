import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website content')
    .items([
      S.documentTypeListItem('aboutPage').title('About page'),
      S.documentTypeListItem('boardPage').title('Board of Directors'),
      S.documentTypeListItem('trip').title('Trips'),
    ])
