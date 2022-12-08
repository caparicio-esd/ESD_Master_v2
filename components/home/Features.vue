<template>
  <section class="features">
    <article class="feature" v-for="(feature, i) in features" :key="i">
      <picture class="feature_pic">
        <img :src="feature.picture" :alt="feature.title" />
      </picture>
      <div class="feature_content">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.text }}</p>
      </div>
      <div class="feature_blank"></div>
    </article>
  </section>
</template>

<script setup lang="ts">
const { features: features_ } = await queryContent(
  "home/section_features"
).findOne()
const features = reactive(features_)
</script>

<style scoped lang="sass">
.features
  @apply flex flex-col gap-10 my-8
  .feature
    @apply flex gap-8 even:flex-row-reverse items-center
    .feature_pic, .feature_blank
      @apply shrink-0 w-[180px]
      img
    .feature_content
      h3
        @apply text-lg
      p
</style>
