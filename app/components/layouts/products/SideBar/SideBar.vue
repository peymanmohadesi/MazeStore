<template>
  <aside class="sticky top-10 shrink-0 self-start">
    <div class="flex flex-col gap-4">
      <Search />

      <Sort
        :model-value="sortBy"
        @update:model-value="updateSort"
      />

      <Category
        :categories="categories"
        :selected-categories="selectedCategories"
        @update:selected-categories="updateCategories"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import Category from './Category/Category.vue'
import Search from './Search/Search.vue'
import Sort from './Sort/Sort.vue'
import { useProducts } from '~/composables/useProducts'

const {
  sortBy,
  categories,
  selectedCategories,
  updateSort,
  updateCategories,
} = useProducts()
</script>