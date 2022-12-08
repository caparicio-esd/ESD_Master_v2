// https://nuxt.com/docs/api/configuration/nuxt-config
import NuxtErrorBoundary from "nuxt"

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ["@/assets/css/main.sass"]
})
