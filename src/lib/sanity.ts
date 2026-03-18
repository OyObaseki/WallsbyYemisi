import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-17', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: false, // set to `false` to bypass the edge cache
});
