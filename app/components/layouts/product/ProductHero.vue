<template>
  <div class="flex flex-col gap-6 bg-white rounded-24 p-4">
    <h1 class="text-5 md:text-7 font-bold">{{ title }}</h1>
    <button class="z-10 mr-2" @click="isZoomed = true"><ZoomIn class="bg-[#00000080] p-2 w-10 h-10 rounded-13"/></button>
    <img :src="cover" @click="isZoomed = true" :alt="title" class="cursor-zoom-in h-[310px] w-full object-contain bg-primary-lighten rounded-16 -mt-[74px]">
  </div>
  <ImageModal :cover="cover" :is-zoomed="isZoomed" @close="isZoomed=false"/>  
</template>

<script lang="ts" setup>
import ZoomIn from '~/assets/img/icons/search-zoom-in.svg'
import ImageModal from './ImageModal.vue';

interface Props {
  title: string,
  cover: string
}

const props = defineProps<Props>()


const isZoomed = ref(false)

</script>