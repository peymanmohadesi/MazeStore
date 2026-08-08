import { z } from 'zod'

const ratingSchema = z.object({
  rate: z.number(),
  count: z.number(),
})

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: ratingSchema.optional(),
})

export const productsSchema = z.array(productSchema)

export type Product = z.infer<typeof productSchema>
export type SortOption =
  | 'count-asc'
  | 'count-desc'
  | 'rating-desc'
  | 'rating-asc'
  