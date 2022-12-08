<template>
  <div class="wrapper">
    <HeaderHome />
    <div class="layout">
      <div class="header_wrapper">
        <HeaderMenu />
      </div>
      <main>
        <slot />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.layout
  @apply grid grid-cols-[auto_1fr] grid-rows-[1fr_auto]
  @apply min-h-screen
  .header_wrapper
    @apply contents    
  footer
    @apply col-span-2
</style>