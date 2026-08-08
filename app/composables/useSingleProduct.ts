import { getSingleProduct } from '~/services/singleProduct.service'

export const useProduct = (id: number) => {
  const {
    data: product,
    pending: loading,
    error,
    refresh,
  } = useAsyncData(
    `product-${id}`,
    () => getSingleProduct(id)
  )

  return {
    product,
    loading,
    error,
  }
}