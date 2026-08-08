<template>
   <Card title="مرتب سازی" expaned>
    <div class="flex flex-col gap-4 pb-2">
      <Radio
        v-for="option in sortOptions"
        :key="option.value"
        v-model="sortBy"
        :value="option.value"
        :label="option.label"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Radio from '~/components/ui/Radio/Radio.vue';
import type { SortOption } from '~/types/product'
import Card from '../Card/Card.vue';

const props = defineProps<{
  modelValue: SortOption
}>()

const emit = defineEmits<{
  'update:modelValue': [value: SortOption]
}>()

const sortBy = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const sortOptions = [
  {
    value: 'price-asc',
    label: 'تعداد: کم به زیاد',
  },
  {
    value: 'price-desc',
    label: 'تعداد: زیاد به کم',
  },
  {
    value: 'rating-desc',
    label: 'رتبه: زیاد به کم',
  },
  {
    value: 'rating-asc',
    label: 'رتبه: کم به زیاد',
  },
] satisfies {
  value: SortOption
  label: string
}[]
</script>