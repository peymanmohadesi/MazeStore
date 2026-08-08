<template>
  <div class="min-h-screen bg-surface-mainback">
  <Header/>
  <MobileMenu/>

    <div class="flex min-h-screen">
      <main class="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-[1112px] mx-auto">
        <div class="flex gap-6">
          <SideBar v-if="!isMobile"/>
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from "~/components/layouts/Header/Header.vue"
  import MobileMenu from "~/components/layouts/Header/MobileMenu.vue";
  import SideBar from "~/components/layouts/products/SideBar/SideBar.vue";
  import { useDevice } from "~/composables/useDevice";

  const { isMobile } = useDevice()
</script>
