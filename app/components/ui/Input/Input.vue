<template>
  <div class="relative w-full">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      @change="handleChange"
      class="transition w-full h-[40px] rounded-12 bg-surface-lighter border focus:border-primary focus:outline-none px-4 py-3 text-2 text-surface-darkgray"
      :class="{
        'ps-12': $slots.rightIcon,
        'pe-10': modelValue
      }"
    />

    <div
      v-if="$slots.rightIcon"
      class="absolute start-4 top-1/2 -translate-y-1/2 flex items-center border-l border-[#D1DBE8] pl-2 h-6"
    >
      <slot name="rightIcon" />
    </div>

    <button
      v-if="modelValue"
      type="button"
      class="absolute end-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      @click="clearInput"
    >
      <Close />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { InputProps } from './input.types'
import Close from '~/assets/img/icons/close.svg'

defineProps<InputProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [event: Event]
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  emit('update:modelValue', value)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const clearInput = () => {
  emit('update:modelValue', '')
}
</script>