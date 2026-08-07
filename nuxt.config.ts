// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  vite: {
    plugins: [
      svgLoader()
    ]
  }
})