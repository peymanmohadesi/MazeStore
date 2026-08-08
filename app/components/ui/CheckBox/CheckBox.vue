<template>
  <label class="flex items-center gap-3 cursor-pointer select-none">
    <input
      type="checkbox"
      :checked="modelValue"
      class="sr-only"
      @change="handleChange"
    />

    <span
      class="flex shrink-0 items-center justify-center w-4 h-4 rounded-6 border transition rounded"
      :class="
        modelValue
          ? 'bg-primary border-primary'
          : 'bg-white border-[#D1DBE8]'
      "
    >
      <svg
        v-if="modelValue"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <span class="flex-1">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLInputElement).checked
  )
}
</script>