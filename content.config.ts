import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      schema: z.object({
        category: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        title: z.string(),
      }),
      source: 'blog/*.md',
      type: 'page',
    }),
  },
});
