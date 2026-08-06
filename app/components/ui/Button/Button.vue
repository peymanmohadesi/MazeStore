<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded-16 px-4 py-3 text-2"
    :type="type"
    :disabled="disabled || loading"
  >
    <Spinner v-if="loading" class="ml-2" />

    <slot />
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from '~/components/ui/Button/button.types.ts';
  import Spinner from '../Spinner/Spinner.vue'

  withDefaults(
    defineProps<ButtonProps>(),
    {
      type: 'button',
      loading: false,
      disabled: false,
    }
  )
</script>
