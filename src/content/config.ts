import { z, defineCollection } from "astro:content"

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
  }),
})

export const collections = {
  post: postCollection,
}
