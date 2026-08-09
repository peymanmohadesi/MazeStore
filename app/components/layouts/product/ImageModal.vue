<template>
  <Teleport to="body">
    <div
      v-if="isZoomed"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6"
      @click.self="handleClose"
    >
      <img
        :src="cover"
        alt=""
        class="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
        @click="handleClose"
      />

      <button
        class="absolute right-5 top-5 text-3xl text-white"
        @click="handleClose"
      >
        ×
      </button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
interface Props {
  isZoomed: boolean,
  cover: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'close': [isZoomed: boolean]
}>()

const handleClose = () => {
  emit(
    'close',
    props.isZoomed
  )
}
</script>