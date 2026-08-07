<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        dir="rtl"
        class="fixed inset-0 z-50"
      >
        <div
          class="absolute inset-0 bg-[#13172f]/55"
          @click="closeMobileMenu"
        />
        <aside
          class="absolute right-0 top-0 flex h-full w-[70%] max-w-[360px] flex-col bg-white shadow-2xl"
        >
          <div
            class="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 px-5"
          >
            <h2 class="text-lg font-semibold text-secondary">
              منو
            </h2>

            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full text-secondary transition hover:bg-gray-100"
              @click="closeMobileMenu"
            >
              <Icon
                name="lucide:x"
                class="h-6 w-6"
              />
            </button>
          </div>
          <div class="p-6">
            <MenuItems/>
          </div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useHeader } from "~/composables/header/useHeader";
import MenuItems from "./MenuItems.vue";

const {
  isMobileMenuOpen,
  closeMobileMenu,
  call,
} = useHeader();
</script>