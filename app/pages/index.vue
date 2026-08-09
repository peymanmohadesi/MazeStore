<template>
    <div class="flex flex-col gap-4 w-full pb-4">
        <FilterBar/>
        <ProductsList/>
    </div>
</template>

<script setup lang="ts">
    import FilterBar from '~/components/layouts/products/FIlterBar/FilterBar.vue';
    import ProductsList from '~/components/layouts/products/List/ProductsList.vue';

    definePageMeta({
        layout: 'list'
    })

</script>