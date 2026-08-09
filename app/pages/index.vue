<template>
    <div class="flex flex-col gap-4 w-full pb-4">
        <Button v-if="isMobile" @click="mobileFilterHandler" class="bg-primary text-white hover:bg-primary-lighen">فیلتر و جستجو</Button>
        <FilterBar/>
        <ProductsList/>

        <BottomSheet v-model="isMobileFilterOpen">
            <div class="flex flex-col gap-4">
                <Search />

                <Sort
                    :model-value="sortBy"
                    @update:model-value="updateSort"
                />

                <Category
                    :categories="categories"
                    :selected-categories="selectedCategories"
                    @update:selected-categories="updateCategories"
                />
                <Button @click="isMobileFilterOpen=false" class="text-primary bg-white border border-primary hover:text-white hover:border-none hover:bg-primary">اعمال فیلترها</Button>
            </div>
        </BottomSheet>
    </div>
</template>

<script setup lang="ts">
import FilterBar from '~/components/layouts/products/FIlterBar/FilterBar.vue';
import ProductsList from '~/components/layouts/products/List/ProductsList.vue';
import BottomSheet from '~/components/ui/BottomSheet/BottomSheet.vue';
import Button from '~/components/ui/Button/Button.vue';
import { useDevice } from '~/composables/useDevice';
import Category from '~/components/layouts/products/SideBar/Category/Category.vue';
import Search from '~/components/layouts/products/SideBar/Search/Search.vue';
import Sort from '~/components/layouts/products/SideBar/Sort/Sort.vue';
import { useProducts } from '~/composables/useProducts'

definePageMeta({
    layout: 'list'
})

const {
  sortBy,
  categories,
  selectedCategories,
  updateSort,
  updateCategories,
} = useProducts()

const { isMobile } = useDevice()
const isMobileFilterOpen = ref(false)

const mobileFilterHandler = () => {
    isMobileFilterOpen.value = true;
}

</script>