<template>
  <div class="w-full max-w-[822px]">
    <div v-if="loading">
      در حال دریافت محصولات...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>

    <div v-else-if="!filteredProducts?.length">
      محصولی پیدا نشد.
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <article
        v-for="product in filteredProducts"
        :key="product.id"
        class="rounded-24 p-2 bg-white flex flex-col shadow-[0px_10px_40px_0px_#0000000D]"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-32 object-contain bg-primary-lighten rounded-24 p-2"
        />
        <div class="p-2 pt-0 flex flex-col gap-3 justify-between h-full">
          <h2 class="font-bold mt-4 text-3 line-clamp-1">
            {{ product.title }}
          </h2>
          <Button class="text-primary border border-surface-mainback w-full text-3 hover:bg-primary-lighter !py-2">
            <span>مشاهده جزئیات</span>
            <LeftArrow/>
          </Button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button/Button.vue';
import { useProducts } from '~/composables/useProducts';
import LeftArrow from '~/assets/img/icons/arrow-left.svg'
import { truncate } from '~/utils/trancate'

const {
  filteredProducts,
  loading,
  error,
} = useProducts()
</script>