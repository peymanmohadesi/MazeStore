<template>
  <div class="relative w-full">
    <input
      type="text"
      :placeholder="placeholder"
      :value="inputValue"
      @input="handleInput"
      @change="handleChange"
      class="transition w-full h-[40px] rounded-12 bg-surface-lighter border focus:border-primary focus:outline-none px-4 py-3 text-2 text-surface-darkgray"
      :class="{
        'ps-10': $slots.rightIcon,
        'pe-10': inputValue
      }"
    />
    <div
      v-if="$slots.rightIcon"
      class="absolute start-4 top-1/2 -translate-y-1/2 flex items-center"
    >
      <slot name="rightIcon" />
    </div>
    <button
      v-if="inputValue"
      type="button"
      class="absolute end-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      @click="clearInput"
    >
      <Close/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { InputProps } from './input.types'
import Close from '~/assets/img/icons/close.svg'

const props = defineProps<InputProps>()

const emit = defineEmits<{
  change: [event: Event]
  input: [value: string]
}>()

const inputValue = ref(props.value ?? '')

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  inputValue.value = value

  emit('input', value)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const clearInput = () => {
  inputValue.value = ''

  emit('input', '')
}
</script>