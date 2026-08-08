<template>
  <Card title="فیلتر و جستجو">
    <div class="flex flex-col gap-4">
      <Input
      placeholder="عنوان محصول را وارد کن...">
        <template #rightIcon>
          <SearchIcon/>
        </template>
      </Input>
    <Button class="bg-primary text-white hover:bg-primary-light">جستجو</Button>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import Input from '~/components/ui/Input/Input.vue';
import Card from '../Card/Card.vue';
import SearchIcon from '~/assets/img/icons/search.svg'
import Button from '~/components/ui/Button/Button.vue';


</script>