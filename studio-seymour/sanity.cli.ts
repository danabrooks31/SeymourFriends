import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '3o35dm5b',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
