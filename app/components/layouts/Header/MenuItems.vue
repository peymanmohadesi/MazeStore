<template>
    <ul class="flex flex-col md:flex-row items-right md:items-center justify-between gap-6 md:mr-[10%] lg:mr-[26%] text-2 text-secondary">
      <li class="group flex items-center gap-2 transition cursor-pointer hover:text-primary
        after:relative after:transition after:-bottom-5 after:-right-16 after:h-[5px] after:w-[5px] after:-ml-2 after:-translate-x-1/2 after:rounded-full after:bg-red-500 after:opacity-0 after:transition-opacity hover:after:opacity-100">
        <NuxtLink href="/" class="flex items-center gap-2">
          <windowsIcon class="transition w-4 h-4 text-secondary group-hover:text-primary"/>
          <span>لیست محصولات</span>
        </NuxtLink>
      </li>
      <li class="group flex items-center gap-2 transition cursor-pointer hover:text-primary
        after:relative after:transition after:-bottom-5 after:-right-14 after:h-[5px] after:w-[5px] after:-ml-2 after:-translate-x-1/2 after:rounded-full after:bg-red-500 after:opacity-0 after:transition-opacity hover:after:opacity-100"">
        <NuxtLink href="/support" class="flex items-center gap-2">
          <bookIcon class="transition w-4 h-4 text-secondary group-hover:text-primary"/>
          <span>دریافت مشاوره</span>
        </NuxtLink>
      </li>
      <li class="group flex items-center gap-2 transition cursor-pointer hover:text-primary
        after:relative after:transition after:-bottom-5 after:-right-14 after:h-[5px] after:w-[5px] after:-ml-2 after:-translate-x-1/2 after:rounded-full after:bg-red-500 after:opacity-0 after:transition-opacity hover:after:opacity-100"">
        <NuxtLink href="/common-questions" class="flex items-center gap-2">
          <supportIcon class="transition w-4 h-4 text-secondary group-hover:text-primary"/>
          <span>سوالات متداول</span>
        </NuxtLink>
      </li>
      <li class="group flex items-center gap-2 transition cursor-pointer hover:text-primary
        after:relative after:transition after:-bottom-5 after:-right-12 after:h-[5px] after:w-[5px] after:-ml-2 after:-translate-x-1/2 after:rounded-full after:bg-red-500 after:opacity-0 after:transition-opacity hover:after:opacity-100"">
        <NuxtLink href="/contact-us" class="flex items-center gap-2">
          <phone class="transition w-4 h-4 text-secondary group-hover:text-primary"/>
          <span>تماس با ما</span>
        </NuxtLink>
      </li>
    </ul>
</template>

<script lang="ts" setup>
  import windowsIcon from '~/assets/img/icons/windows.svg'
  import bookIcon from '~/assets/img/icons/book.svg'
  import supportIcon from '~/assets/img/icons/support.svg'
  import phone from '~/assets/img/icons/phone.svg'
</script>

<style>

</style>