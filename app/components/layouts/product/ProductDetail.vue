<template>
  <div class="flex flex-col gap-4 bg-white rounded-24 p-4">
    <h2 class="text-6">مشخصات فنی</h2>
    <div class="flex flex-col gap-4 md:gap-2 w-full">
      <div v-for="item in productDetail" class="flex flex-col md:flex-row items-center gap-3 md:gap-2 min-h-12 w-full items-stretch">
        <div class="bg-surface-lighter min-h-12 w-full md:w-[172px] p-4 rounded-16 md:rounded-[4px_16px_16px_4px] text-3 text-surface-grayblue flex items-center">{{ item?.label }}</div>
        <div class="bg-surface-lighter min-h-12 w-full p-4 rounded-16 md:rounded-[16px_4px_4px_16px] text-2 text-surface-darkblue flex items-center">{{ item?.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product';
import { convertNumberToPersian } from '~/utils/convertNumberToPersian'

interface Props {
  product: Product | undefined
}

const props = defineProps<Props>()

const product = computed(() => props.product)

const productDetail = computed(() => [
  {
    label: 'قیمت',
    value: `${convertNumberToPersian(product?.value?.price || 0)} تومان`
  },{
    label: 'توضیحات',
    value: props.product?.description
  },{
    label: 'دسته بندی',
    value: props.product?.category
  },{
    label: 'رتبه',
    value: convertNumberToPersian(product?.value?.rating?.rate || 0)
  },{
    label: 'تعداد',
    value: convertNumberToPersian(product?.value?.rating?.count || 0)
  }
])

</script>