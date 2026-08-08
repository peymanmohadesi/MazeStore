<template>
    {{ productId }}
</template>

<script setup lang="ts">
const route = useRoute()

const productId = route.params.id

</script>