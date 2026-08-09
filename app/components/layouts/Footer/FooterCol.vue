<template>
  <section class="flex flex-col gap-6 py-8 md:py-0">
    <div class="text-6 text-surface-darkgray font-bold">{{ title }}</div>
    <div class="flex flex-col gap-3">
      <NuxtLink v-for="link in items" :to="link.link" class="group transition text-2 text-surface-darkblue hover:text-primary flex items-center gap-3">
        <span v-if="link.icon !== 'fa-telegram' && link.icon" class="transition w-6 h-6 bg-surface-socialback rounded-full flex items-center justify-center group-hover:bg-primary">
          <Icon :name="link.icon" class="text-3 text-white"/>
        </span>
        <Icon v-else-if="link.icon" :name="link.icon" class="transition text-7 text-surface-socialback group-hover:text-primary"/>
        {{ link.label }}
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  items?: {
    label: string
    link?: string
    icon?: string
  }[]
}

const props = defineProps<Props>()
</script>