<template>
  <div class="min-h-screen bg-surface-mainback">
  <Header/>
  <MobileMenu/>

    <div class="flex min-h-screen">
      <main class="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-[1112px] mx-auto">
        <slot />
      </main>
    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
  import Footer from "~/components/layouts/Footer/Footer.vue";
import Header from "~/components/layouts/Header/Header.vue"
  import MobileMenu from "~/components/layouts/Header/MobileMenu.vue";
</script>
