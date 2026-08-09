<template>
  <div class="flex items-center gap-4 mt-2 md:-mt-2 mb-2 text-3 text-surface-socialback">
    <NuxtLink to="/"><Home/></NuxtLink>
    <BreadCrumpArrow/>
    <span v-for="(item, index) in itemsList" class="flex items-center gap-4">
        <NuxtLink :to="!index ? '/' : `/?category=${category}`">{{ item }}</NuxtLink>
        <BreadCrumpArrow v-if="(index + 1) != itemsList.length"/>  
    </span>
  </div>
</template>

<script lang="ts" setup>
  import Home from '~/assets/img/icons/home.svg'
  import BreadCrumpArrow from '~/assets/img/icons/bread-crumb-arrow.svg'

  interface Props {
    category: string
  }

const props = defineProps<Props>()

  const itemsList = computed(() => [
    'لیست محصولات',
    props.category
  ])
</script>

<style>

</style>