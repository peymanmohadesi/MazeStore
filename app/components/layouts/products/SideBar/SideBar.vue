<template>
  <aside class="sticky top-10 shrink-0 self-start">
    <div class="flex flex-col gap-4">
      <Search />

      <Sort v-model="sortBy" />

      <Category
        :categories="categories"
        :selected-categories="selectedCategories"
        @update:selected-categories="selectedCategories = $event"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import Category from './Category/Category.vue'
import Search from './Search/Search.vue'
import Sort from './Sort/Sort.vue'
import { useProducts } from '~/composables/useProducts.ts'

const {
  sortBy,
  categories,
  selectedCategories,
} = useProducts()
</script>