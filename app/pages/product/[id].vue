<template>
    <div class="flex flex-col gap-4">
        <ProductHero :title="product?.title || ''" :cover="product?.image || ''"/>
        <ProductDetail :product="product"/>
        <div class="h-10"/>
    </div>
</template>

<script setup lang="ts">
import ProductDetail from '~/components/layouts/product/ProductDetail.vue'
import ProductHero from '~/components/layouts/product/ProductHero.vue'
import { useProduct } from '~/composables/useSingleProduct'

const route = useRoute()

const productId = Number(route.params.id)

const {
  product,
  loading,
  error,
} = useProduct(productId)
</script>