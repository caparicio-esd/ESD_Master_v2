<template>
  <header class="header">
    <section class="header_home">
      <HeaderMenu logoColor="white" context="home" />
      <picture class="header_home_picture">
        <img :src="picture.src" :alt="picture.alt" />
      </picture>
      <div class="header_home_content">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h3>{{ promotion }}</h3>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
const { title, subtitle, promotion, picture } = await queryContent(
  "home/header"
).findOne()
</script>

<style scoped lang="sass">
.header_home
    @apply h-screen bg-primary text-white
    @apply grid grid-cols-[auto_1fr]
    @apply font-netto
    .header_menu
        @apply col-start-1 col-span-1 row-start-1 row-span-1 self-start
    .header_home_picture
        @apply col-start-2 col-span-1 row-start-1 row-span-1
        @apply self-end w-full flex justify-center
        img
          @apply w-[90%] max-w-[1080px] mx-auto

    .header_home_content
        @apply col-start-2 col-span-1 row-start-1 row-span-1
        @apply self-center flex flex-col gap-2 w-[90%] max-w-[1080px] mx-auto
        h1
            @apply text-3xl
        h2
            @apply text-2xl
        h3
            @apply text-lg
</style>
