<template>
  <div class="w-full max-w-[822px]">
    <div v-if="loading"
      class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <LoadingState/>
    </div>
    <ErrorState v-else-if="error">
      {{ error.message }}
    </ErrorState>

    <ErrorState v-else-if="!filteredProducts?.length">
      محصولی پیدا نشد.
    </ErrorState>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <ProductCard v-for="product in filteredProducts" :product="product"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts';
import LoadingState from './LoadingState.vue';
import ErrorState from './ErrorState.vue';
import ProductCard from './ProductCard.vue';

const {
  filteredProducts,
  loading,
  error,
} = useProducts()
</script>