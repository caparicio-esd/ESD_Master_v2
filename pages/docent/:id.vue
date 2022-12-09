<template>
  <div>{{ docent }}...</div>
</template>

<script setup lang="ts">
const docent = useRoute().params.id
</script>

<style scoped></style>
