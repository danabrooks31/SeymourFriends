import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index'

/** Default matches your Sanity project; override with SANITY_STUDIO_PROJECT_ID in .env if needed. */
const DEFAULT_PROJECT_ID = '3o35dm5b'

const projectId = (
  process.env.SANITY_STUDIO_PROJECT_ID || DEFAULT_PROJECT_ID
).trim()
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Seymour Friends',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
