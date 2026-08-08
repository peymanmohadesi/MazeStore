<template>
     <Card title="دسته بندی" expaned>
    <div class="flex flex-col gap-4 pb-2">
    <CheckBox
      v-for="category in categories"
      :key="category.name"
      :model-value="selectedCategories.includes(category.name)"
      @update:model-value="toggleCategory(category.name, $event)"
    >
      <div class="flex items-center justify-between w-full">
        <span class="text-1 text-surface-lightgray">
          {{ category.name }}
        </span>

        <span :class="selectedCategories.includes(category.name) ? 'bg-primary' : 'bg-secondary'" class="text-1 text-surface-white w-6 h-6 flex items-center px-2 rounded-6">
          {{ convertNumberToPersian(category.count) }}
        </span>
      </div>
    </Checkbox>
  </div>
  </Card>
</template>

<script setup lang="ts">
import CheckBox from '~/components/ui/CheckBox/CheckBox.vue';
import Card from '../Card/Card.vue';
import { convertNumberToPersian } from '~/utils/convertNumberToPersian.ts'

interface Category {
  name: string
  count: number
}

const props = defineProps<{
  categories: Category[]
  selectedCategories: string[]
}>()

const emit = defineEmits<{
  'update:selectedCategories': [value: string[]]
}>()

const toggleCategory = (
  category: string,
  checked: boolean
) => {
  const selected = [...props.selectedCategories]

  if (checked) {
    if (!selected.includes(category)) {
      selected.push(category)
    }
  } else {
    const index = selected.indexOf(category)

    if (index !== -1) {
      selected.splice(index, 1)
    }
  }

  emit('update:selectedCategories', selected)
}
</script>