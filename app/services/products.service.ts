import { productsSchema, type Product } from '~/types/product'
import { createApi } from './api'

export const getProducts = async (): Promise<Product[]> => {
  const api = createApi()

  const response = await api.get('/products')

  const result = productsSchema.safeParse(response.data)

  if (!result.success) {
    console.error('Invalid products response:', result.error)

    throw new Error('اطلاعات دریافت‌شده از سرور معتبر نیست.')
  }

  return result.data
}