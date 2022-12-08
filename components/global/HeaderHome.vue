<template>
  <header class="header">
    <section class="header_home">
      <HeaderMenu logoColor="white" />
      <picture class="header_home_picture">
        <img src="/images/slider_mdi.png" alt="slider_mdi" />
      </picture>
      <div class="header_home_content">
        <h1>Máster en Diseño Interactivo</h1>
        <h2>Máster en Enseñanzas artísticas</h2>
        <h3>Promoción 22/23</h3>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts"></script>

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

    .header_home_content
        @apply col-start-2 col-span-1 row-start-1 row-span-1
        @apply self-center flex flex-col gap-2
        h1
            @apply text-3xl
        h2
            @apply text-2xl
        h3
            @apply text-lg
</style>
