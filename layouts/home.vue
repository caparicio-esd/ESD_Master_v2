<template>
  <div class="wrapper">
    <HeaderHome />
    <div class="layout">
      <div class="header_wrapper">
        <HeaderMenu />
      </div>
      <main>
        <div class="main_content">
          <slot />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.layout
  @apply grid grid-cols-[auto_1fr] grid-rows-[1fr_auto]
  @apply min-h-screen border-t-4 border-primary
  .header_wrapper
    @apply contents
  main
    .main_content
      @apply max-w-[1080px] w-[90%] mx-auto
  footer
    @apply col-span-2
</style>
