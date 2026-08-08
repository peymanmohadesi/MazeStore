import { getProducts } from '~/services/products.service'
import type { SortOption } from '~/types/product'

export const useProducts = () => {
  const route = useRoute()
  const router = useRouter()

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

  const syncFiltersFromUrl = () => {
    searchInput.value =
      typeof route.query.search === 'string'
        ? route.query.search
        : ''

    searchQuery.value =
      typeof route.query.search === 'string'
        ? route.query.search
        : ''

    selectedCategories.value =
      typeof route.query.categories === 'string'
        ? route.query.categories.split(',').filter(Boolean)
        : []

    const sort = route.query.sort

    if (
      sort === 'price-asc' ||
      sort === 'price-desc' ||
      sort === 'rating-desc' ||
      sort === 'rating-asc'
    ) {
      sortBy.value = sort
    } else {
      sortBy.value = 'price-asc'
    }
  }

  const syncFiltersToUrl = async () => {
    const query: Record<string, string> = {}

    if (searchQuery.value) {
      query.search = searchQuery.value
    }

    if (selectedCategories.value.length > 0) {
      query.categories =
        selectedCategories.value.join(',')
    }

    if (sortBy.value !== 'price-asc') {
      query.sort = sortBy.value
    }

    await router.replace({
      query,
    })
  }

  syncFiltersFromUrl()

  const categories = computed(() => {
    const categoryMap = new Map<string, number>()

    for (const product of products.value ?? []) {
      const count =
        categoryMap.get(product.category) ?? 0

      categoryMap.set(
        product.category,
        count + 1
      )
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

  const search = async () => {
    searchQuery.value =
      searchInput.value.trim()

    await syncFiltersToUrl()
  }

  const toggleCategory = async (
    category: string
  ) => {
    if (selectedCategories.value.includes(category)) {
      selectedCategories.value =
        selectedCategories.value.filter(
          (item) => item !== category
        )
    } else {
      selectedCategories.value.push(category)
    }

    await syncFiltersToUrl()
  }

  const changeSort = async (
    sort: SortOption
  ) => {
    sortBy.value = sort

    await syncFiltersToUrl()
  }

  const clearFilters = async () => {
    searchInput.value = ''
    searchQuery.value = ''
    selectedCategories.value = []
    sortBy.value = 'price-asc'

    await router.replace({
      query: {},
    })
  }

  const syncToUrl = async () => {
    const query: Record<string, string> = {}

    if (searchQuery.value) {
      query.search = searchQuery.value
    }

    if (selectedCategories.value.length) {
      query.category =
        selectedCategories.value.join(',')
    }

    if (sortBy.value !== 'price-asc') {
      query.sort = sortBy.value
    }

    await router.replace({
      query
    })
  }

  const updateSort = async (value: SortOption) => {
    sortBy.value = value

    await syncToUrl()
  }

  const updateCategories = async (value: string[]) => {
    selectedCategories.value = value

    await syncToUrl()
  }

  const resetSearch = () => {
    searchQuery.value = ""
    searchInput.value = ""
    search()
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
    changeSort,
    clearFilters,
    refresh,
    updateCategories,
    updateSort,
    resetSearch
  }
}