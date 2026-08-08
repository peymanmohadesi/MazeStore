<template>
  <div class="flex flex-col gap-4 bg-white rounded-24 p-4">
    <h1 class="text-۷">{{ title }}</h1>
    <button @click="zoomInHandler" class="z-10 -mb-16 mr-2"><ZoomIn class="bg-[#00000080] p-2 w-10 h-10 rounded-13"/></button>
    <img :src="cover" :alt="title" class="h-[310px] w-full object-contain bg-primary-lighten rounded-16">
  </div>
</template>

<script lang="ts" setup>
import ZoomIn from '~/assets/img/icons/search-zoom-in.svg'

interface Props {
  title: string,
  cover: string
}

const props = defineProps<Props>()

const zoomInHandler = () => {
  if(typeof window !== "undefined")
    window.open(props.cover)
}

</script>