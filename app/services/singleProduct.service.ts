import { productSchema, type Product } from '~/types/product'
import { createApi } from './api'

export const getSingleProduct = async (id: number): Promise<Product> => {
  const api = createApi()

  const response = await api.get(`/products/${id}`)

  const result = productSchema.safeParse(response.data)

  if (!result.success) {
    console.error('Invalid products response:', result.error)

    throw new Error('اطلاعات دریافت‌شده از سرور معتبر نیست.')
  }

  return result.data
}