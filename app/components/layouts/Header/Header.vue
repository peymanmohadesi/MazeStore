<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between h-[80px] md:h-[120px] rounded-[0_0_32px_32px] px-4 py-4 shadow-header bg-surface-white"
  >
    <div class="w-full max-w-[1112px] mx-auto flex justify-between items-center">
      <Button v-if="isMobile" class="bg-white border border-primary text-primary w-10 h-10 !p-1 !rounded-8" @click="openMobileMenu">
        <Icon name="lucide:menu" class="w-4 h-4"/>
      </Button>
      <MenuItems v-if="!isMobile"/>
      <Button @click="call" class="flex absolute md:static left-4 bg-white md:bg-primary text-primary md:text-surface-white hover:bg-primary-light text-3 px-6 border border-primary md:border-0 !px-3 !md:px-4 rounded-8">
        <span v-if="!isMobile">تماس</span>
          <phone2 class="!w-4 !h-4"/>
      </Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import Button from '~/components/ui/Button/Button.vue';
  import phone2 from '~/assets/img/icons/phone2.svg'
  import { useHeader } from '~/composables/header/useHeader';
  import { useDevice } from '~/composables/useDevice.ts';
  import MenuItems from './MenuItems.vue';

  const { call, openMobileMenu } = useHeader()
  const { isMobile } = useDevice();
</script>