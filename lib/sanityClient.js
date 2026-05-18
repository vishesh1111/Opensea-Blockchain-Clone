import sanityClient from '@sanity/client'

// Configuration is sourced from environment variables so secrets are never
// committed to the repo. See `.env.local.example` for required values.
export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dsd23iko',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-03-25',
  // Read-only token if present. Leave undefined for public datasets.
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
