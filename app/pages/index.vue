<template>
    <div class="flex flex-col">
        <FilterBar/>
        <List/>
    </div>
</template>

<script>
    import FilterBar from '~/components/layouts/products/FIlterBar/FilterBar.vue';
    import List from '~/components/layouts/products/List/List.vue';

    definePageMeta({
        layout: 'list'
    })

</script>