<template>
  <article
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
          <NuxtLink :to="`/product/${product.id}`" class="inline-flex items-center justify-center gap-2 rounded-16 px-4 py-3 text-2 transition text-primary border border-surface-mainback w-full text-3 hover:bg-primary-lighter !py-2">
            <span>مشاهده جزئیات</span>
            <LeftArrow/>
          </NuxtLink>
        </div>
      </article>
</template>

<script lang="ts" setup>
import LeftArrow from '~/assets/img/icons/arrow-left.svg'
import type { Product } from '~/types/product';


  defineProps<{
    product: Product
  }>()
</script>