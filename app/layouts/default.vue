<template>
  <div class="min-h-screen bg-surface-mainback">
    <Header />

    <div class="flex min-h-screen">
      <main class="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-[1112px] mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '~/layouts/Header.vue'
</script>
