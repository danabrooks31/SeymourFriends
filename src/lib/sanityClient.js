import { createClient } from '@sanity/client'

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production'
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2024-01-01'

export function getSanityClient() {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })
}

export const TRIPS_QUERY = `*[_type == "trip" && defined(name) && name != ""] | order(sortOrder asc, name asc) {
  _id,
  name,
  subtitle,
  "preview": preview.asset->url,
  "previewAlt": preview.alt,
  highlights,
  "pdfUrl": pdf.asset->url,
  pdfLabel
}`

export const BOARD_QUERY = `*[_type == "boardPage"][0]{
  asOf,
  officers[]{ role, name, since },
  directors[]{ name, note }
}`

export function mapSanityTrips(docs) {
  if (!Array.isArray(docs)) return []
  return docs
    .filter((doc) => doc?.name && String(doc.name).trim())
    .map((doc) => {
      const pdfUrl = doc.pdfUrl && String(doc.pdfUrl).trim()
      const label = (doc.pdfLabel && String(doc.pdfLabel).trim()) ||
        'View full trip details (PDF)'
      return {
        id: doc._id,
        name: String(doc.name).trim(),
        subtitle: doc.subtitle ? String(doc.subtitle).trim() : '',
        preview: doc.preview || '',
        previewAlt: doc.previewAlt ? String(doc.previewAlt).trim() : '',
        highlights: (doc.highlights || [])
          .map((item) => String(item || '').trim())
          .filter(Boolean),
        links: pdfUrl ? [{ label, href: pdfUrl }] : [],
      }
    })
}

export function mapSanityBoard(doc) {
  if (!doc) return null
  const officers = (doc.officers || [])
    .filter((person) => person?.name && person?.role)
    .map((person) => ({
      role: String(person.role).trim(),
      name: String(person.name).trim(),
      since: person.since ? String(person.since).trim() : '',
    }))
  const directors = (doc.directors || [])
    .filter((person) => person?.name)
    .map((person) => ({
      name: String(person.name).trim(),
      note: person.note ? String(person.note).trim() : '',
    }))
  if (officers.length === 0 && directors.length === 0) return null
  return {
    asOf: doc.asOf ? String(doc.asOf).trim() : '',
    officers,
    directors,
  }
}
