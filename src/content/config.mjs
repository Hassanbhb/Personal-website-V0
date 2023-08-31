import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    pageTitle: z.string(),
    articleTitle: z.string(),
    author: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string()),
  })
});

export const collections = {
  'projects': projectsCollection
};