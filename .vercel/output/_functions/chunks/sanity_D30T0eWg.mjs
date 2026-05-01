import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "9x1w2hv6",
  dataset: "production",
  apiVersion: "2024-03-17",
  // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: false
  // set to `false` to bypass the edge cache
});

export { sanityClient as s };
