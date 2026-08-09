<template>
  <div 
    v-if="searchQuery || (sortBy && sortBy !== 'count-asc') || selectedCategories.length"
  class="rounded-24 p-4 bg-white flex items-center justify-between flex-wrap shadow-[0px_10px_40px_0px_#0000000D] text-3 text-surface-darkgray">
    <span class="hidden md:block">فیلترهای اعمال شده</span>
    
    <div class="flex items-center justify-between flex-wrap gap-3">
      <Chip
        v-if="searchQuery"
        id="search"
        :label="searchQuery"
        @close="handleClose"
      >
      <template>
        <SearchIcon class="text-secondary"/>
      </template>
      </Chip>
      <Chip
        v-if="sortBy"
        id="sort"
        :label="sortLabel()"
        @close="handleClose"
      >
      <template>
        <PriceDown :class="sortBy=='rating-asc' ? 'rotate-180' : ''" class="text-secondary"/>
      </template>
      </Chip>
      <Chip
        v-if="selectedCategories.length"
        id="category"
        label="دسته بندی"
        @close="handleClose"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Chip from '~/components/ui/Chip/Chip.vue';
import SearchIcon from '~/assets/img/icons/search.svg'
import PriceDown from '~/assets/img/icons/price-down.svg'
import { useProducts } from '~/composables/useProducts';

const { searchQuery, resetSearch, sortBy, updateSort, selectedCategories, updateCategories} = useProducts()

const sortMap:{
  'count-asc': string,
  'count-desc': string,
  'rating-desc': string,
  'rating-asc': string
} = {
  'count-asc': 'تعداد',
  'count-desc': 'تعداد',
  'rating-desc': 'رتبه',
  'rating-asc': 'رتبه'
}

const sortLabel = () => {
  return sortMap[sortBy.value]
}

const handleClose = (id: string) => {
  if(id == "search") {
    resetSearch()
  }
  if(id == "sort") {
    updateSort('count-asc')
  }
  if(id == "category") {
    updateCategories([])
  }
  
}

</script>