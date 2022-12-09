// https://nuxt.com/docs/api/configuration/nuxt-config
export type MasterType = "mdi" | "mdec"
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ["@/assets/css/main.sass"],
  runtimeConfig: {
    master: "mdi" as MasterType,
    masterData: {
      mdi: {
        theme: "",
        root: "mdi"
      }
    }
  }
})
