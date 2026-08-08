<template>
   <article
        v-for="product in 10"
        :key="product"
        class="rounded-24 p-2 bg-white flex flex-col shadow-[0px_10px_40px_0px_#0000000D]"
      >
       <div
          class="w-[210px] h-32 object-contain bg-primary-lighten rounded-24 p-2 animate-[pulse_1s_ease-in-out_infinite]"
        />
        <div class="p-2 pt-0 flex flex-col gap-3 justify-between">
          <div class="mt-4 w-full bg-surface-lighter h-5 rounded-16 animate-[pulse_1.5s_ease-in-out_infinite]"/>
          <div class="bg-surface-lighter w-full h-8 rounded-16 animate-[pulse_1.5s_ease-in-out_infinite]"/>
        </div>
    </article>
</template>

<script lang="ts" setup>

</script>

<style>

</style>