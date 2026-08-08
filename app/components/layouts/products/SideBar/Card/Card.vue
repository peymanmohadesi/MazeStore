<template>
  <div class="bg-white rounded-24 w-[266px] p-4">
    <div class="text-surface-gray text-2">{{ title }}</div>
    <div class="mt-4">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SideBarCardProps } from './Card.types';

  withDefaults(
    defineProps<SideBarCardProps>(),
    {
      title: "",
      expaned: false
    }
  )
</script>

<style>

</style>