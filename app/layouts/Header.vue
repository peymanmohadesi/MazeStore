<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between h-[120px] rounded-[0_0_32px_32px] px-4 py-4 shadow-header bg-surface-white"
  >
    <div class="w-full max-w-[1112px] mx-auto flex justify-between items-center">
      <ul class="flex items-center justify-between gap-4 mr-[26%] text-2">
        <li class="flex items-center gap-2">

          <span>لیست محصولات</span>
        </li>
        <li class="flex items-center gap-2">
          
          <span>دریافت مشاوره</span>
        </li>
      </ul>
      <Button @click="call" class="bg-primary text-surface-white text-3">
        <span>تماس</span>
        
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Button from '~/components/ui/Button/Button.vue';

  const call = ()=> {
    if(typeof window !== undefined) {
      window?.open("tel:09904994187")
    }
  }
</script>