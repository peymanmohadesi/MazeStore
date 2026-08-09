<template>
  <footer class="w-full bg-white rounded-[16px_16px_0_0]">
    <div class="flex flex-col gap-10">
      <div class="w-full max-w-[1112px] mx-auto p-8 pt-28 md:pt-8">
        <div class="flex justify-between flex-wrap">
          <p class="hidden md:block text-2 text-surface-gray mt-32">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</p>
          <FooterCol title="دسترسی سریع" :items="items"/>
          <FooterCol title="راهنمای سایت" :items="items2"/>
          <FooterCol title="شبکه‌های اجتماعی" :items="items3"/>
        </div>
      </div>
      <FooterBottom/>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FooterBottom from './FooterBottom.vue';
import FooterCol from './FooterCol.vue';
import { items, items2, items3 } from './consts.ts'

</script>