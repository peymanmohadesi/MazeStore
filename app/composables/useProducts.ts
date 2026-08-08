import { getProducts } from '~/services/products.service'
import type { SortOption } from '~/types/product'

export const useProducts = () => {
  const {
    data: products,
    pending: loading,
    error,
    refresh,
  } = useAsyncData(
    'products',
    getProducts
  )

  const searchInput = useState<string>(
    'products-search-input',
    () => ''
  )

  const searchQuery = useState<string>(
    'products-search-query',
    () => ''
  )

  const selectedCategories = useState<string[]>(
    'products-selected-categories',
    () => []
  )

  const sortBy = useState<SortOption>(
    'products-sort',
    () => 'price-asc'
  )

  const categories = computed(() => {
    const categoryMap = new Map<string, number>()

    for (const product of products.value ?? []) {
      const count = categoryMap.get(product.category) ?? 0

      categoryMap.set(product.category, count + 1)
    }

    return Array.from(categoryMap.entries()).map(
      ([name, count]) => ({
        name,
        count,
      })
    )
  })

  const filteredProducts = computed(() => {
    let result = [...(products.value ?? [])]

    const query = searchQuery.value
      .trim()
      .toLowerCase()

    if (query) {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(query)
      )
    }

    if (selectedCategories.value.length > 0) {
      result = result.filter((product) =>
        selectedCategories.value.includes(
          product.category
        )
      )
    }

    result.sort((a, b) => {
      switch (sortBy.value) {
        case 'price-asc':
          return a.price - b.price

        case 'price-desc':
          return b.price - a.price

        case 'rating-desc':
          return (
            (b.rating?.rate ?? 0) -
            (a.rating?.rate ?? 0)
          )

        case 'rating-asc':
          return (
            (a.rating?.rate ?? 0) -
            (b.rating?.rate ?? 0)
          )

        default:
          return 0
      }
    })

    return result
  })

  const search = () => {
    searchQuery.value = searchInput.value.trim()
  }

  const toggleCategory = (category: string) => {
    if (selectedCategories.value.includes(category)) {
      selectedCategories.value =
        selectedCategories.value.filter(
          (item) => item !== category
        )

      return
    }

    selectedCategories.value.push(category)
  }

  const clearFilters = () => {
    searchInput.value = ''
    searchQuery.value = ''
    selectedCategories.value = []
    sortBy.value = 'price-asc'
  }

  return {
    products,
    filteredProducts,
    categories,
    searchInput,
    searchQuery,
    selectedCategories,
    sortBy,
    loading,
    error,

    search,
    toggleCategory,
    clearFilters,
    refresh,
  }
}