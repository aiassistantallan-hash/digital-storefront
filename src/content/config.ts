import { defineCollection, z } from 'astro:content';

const products = defineCollection({
    type: 'content',
    schema: z.object({
          title: z.string(),
          description: z.string(),
          price: z.number(),
          category: z.string(),
          icon: z.string().optional(),
          tags: z.array(z.string()).optional(),
          featured: z.boolean().default(false),
          buyUrl: z.string().optional(),
    }),
});

export const collections = { products };
