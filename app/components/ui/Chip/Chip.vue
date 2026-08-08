<template>
  <span class="flex items-center justify-between p-2 rounded-16 gap-3 bg-primary-lighter text-secondary">
    <slot/>
    <label>{{ label }}</label>
    <ChipClose @click="handleClose" class="cursor-pointer"/>
  </span>
</template>

<script lang="ts" setup>
import ChipClose from "~/assets/img/icons/chipClose.svg"

interface Props {
  id: string
  label: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'close': [id: string]
}>()

const handleClose = () => {
  emit(
    'close',
    props.id
  )
}
</script>