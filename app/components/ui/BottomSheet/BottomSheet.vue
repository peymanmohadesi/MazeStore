<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 bg-black/40"
        @click="close"
      />
    </Transition>

    <Transition name="sheet">
      <div
        v-if="modelValue"
        class="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white"
        @click.stop
      >
        <div class="flex justify-center py-3">
          <div class="h-1 w-10 rounded-full bg-gray-300" />
        </div>

        <div class="max-h-[80vh] overflow-y-auto px-4 pb-6">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  "update:modelValue": [value: boolean]
}>()

const close = () => {
  emit("update:modelValue", false)
}
</script>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.3s ease;
}

.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>