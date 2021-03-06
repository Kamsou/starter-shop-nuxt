import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['tailwindcss/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  publicRuntimeConfig:{
    API_URL: process.env.API_URL
  },
})
