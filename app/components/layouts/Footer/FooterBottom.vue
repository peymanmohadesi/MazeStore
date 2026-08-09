<template>
  <div class="bg-[#f8f9fc] w-full p-8">
    <div class="w-full max-w-[1112px] mx-auto flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
      <div class="flex flex-col gap-4 mr-0 md:mr-[30%]">
        <p class="text-2 text-surface-gray max-w-[360px] text-center">تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هرگونه کپی برداری پیگرد قانونی دارد.</p>
        <div class="flex items-center justify-between w-full max-w-[184px] mx-auto">
          <a href="#">
            <span class="transition w-6 h-6 p-1 bg-primary-sociallight transition hover:bg-primary rounded-full flex items-center justify-center group-hover:bg-primary">
              <Icon name="fa-linkedin" class="text-2 text-white"/>
            </span>
          </a>
          <a href="#">
            <span class="transition w-6 h-6 p-1 bg-primary-sociallight transition hover:bg-primary rounded-full flex items-center justify-center group-hover:bg-primary">
              <Icon name="fa-youtube-play" class="text-2 text-white"/>
            </span>
          </a>
          <a href="#">
            <span class="transition w-6 h-6 p-1 bg-primary-sociallight transition hover:bg-primary rounded-full flex items-center justify-center group-hover:bg-primary">
              <Icon name="fa-twitter" class="text-2 text-white"/>
            </span>
          </a>
          <a href="#">
            <span class="transition w-6 h-6 p-1 bg-primary-sociallight transition hover:bg-primary rounded-full flex items-center justify-center group-hover:bg-primary">
              <Icon name="fa-instagram" class="text-2 text-white"/>
            </span>
          </a>

          <a href="#" class="flex items-center">
            <Icon name="fa-telegram" class="transition text-7 text-primary-sociallight transition hover:text-primary group-hover:text-primary"/>
          </a>
        </div>
      </div>
      <div class="flex gap-4">
        <span class="bg-white p-4 rounded-lg">
          <Samandehi/>
        </span>
        <span class="bg-white p-4 rounded-lg">
          <Enamad/>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Samandehi from '~/assets/img/footer/samandehi.svg'
  import Enamad from '~/assets/img/footer/enamad.svg'
</script>