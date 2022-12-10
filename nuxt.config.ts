// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es-ES"
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    }
  },
  css: ["@/assets/css/main.sass"]
})
