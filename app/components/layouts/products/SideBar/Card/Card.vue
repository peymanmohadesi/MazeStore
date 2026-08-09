<template>
  <div class="bg-white rounded-24 w-full md:w-[266px] p-4 shadow-[0px_2px_3px_0px_#00000008]">
    <div class="flex items-center justify-between">
      <div class="text-surface-gray text-2">{{ title }}</div>
      <Button v-if="expaned" @click="toggleCardOpen" :class="isOpenState ? '!p-0' : '!p-0 rotate-180'">
        <ArrowDown/>
      </Button>
    </div>
    <div v-if="!expaned || isOpenState" class="mt-4">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '~/components/ui/Button/Button.vue';
import type { SideBarCardProps } from './Card.types';
import ArrowDown from '~/assets/img/icons/arrow-down.svg'
import { useFilterCard } from '~/composables/useFilterCard'

  const props = withDefaults(
    defineProps<SideBarCardProps>(),
    {
      title: "",
      expaned: false,
      isOpen: true
    }
  )

  const { isOpenState, toggleCardOpen }= useFilterCard(props.isOpen)
</script>