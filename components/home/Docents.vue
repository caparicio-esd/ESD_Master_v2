<template>
  <section class="docents_section container_center">
    <h2>Profes</h2>
    <div class="docents">
      <div class="docent" v-for="(docent, i) in docents" :key="i">
        <NuxtLink :to="`/docent/${slugify(docent.name)}`">
          <picture class="docent_picture">
            <img
              :src="`/images/mdi/docents/${docent.picture}`"
              :alt="docent.name"
            />
          </picture>
          <h3 class="docent_name">
            {{ docent.name }}
          </h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { body: docents_ } = await queryContent("docents/docents").findOne()
const docents = reactive(docents_)
const slugify = utilsSlugify
</script>

<style scoped lang="sass">
.docents_section
    @apply min-h-[50vh] my-20
    .docents
        @apply grid grid-cols-6 gap-6
        .docent
            @apply flex flex-col gap-1
            a
                @apply contents
            .docent_picture
                @apply h-40 block
                img
                    @apply object-cover h-full w-full object-center
            .docent_name
                @apply font-netto
</style>
