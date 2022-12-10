<template>
  <div class="home">
    <HomeFeatures />
    <HomePresentation />
    <HomeSubjects />
    <HomeDocents />
    <HomeCompanies />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
  scrollToTop: true
})
useHead({
  title: "ESD - Máster en Diseño Interactivo"
})
</script>

<style scoped lang="sass"></style>
