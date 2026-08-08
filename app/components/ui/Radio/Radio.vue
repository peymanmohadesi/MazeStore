<template>
  <label
    class="flex items-center gap-2 cursor-pointer select-none"
  >
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      class="sr-only"
      @change="handleChange"
    />

    <span
      class="w-5 h-5 rounded-full border border-2 flex items-center justify-center transition"
      :class="
        modelValue === value
          ? 'border-primary'
          : 'border-[#D1DBE8]'
      "
    >
      <span
        v-if="modelValue === value"
        class="w-2.5 h-2.5 rounded-full bg-primary"
      />
    </span>

    <span class="text-1 text-surface-lightgray">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  value: string
  label: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleChange = () => {
  emit('update:modelValue', props.value)
}
</script>