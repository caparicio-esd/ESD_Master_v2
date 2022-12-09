<template>
  <div class="subject_layout container_center my-8">
    <h1>{{ subject.name }}</h1>
    <div class="subject_content">
      <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
    </div>
    {{ subject }}...
  </div>
  <HomeSubjects title="Otras asignaturas" :avoidedSubjects="[subject.name]" />
</template>

<script setup lang="ts">
const subjectParam = useRoute().params.id
const { body: subjects } = await queryContent("subjects/subjects").findOne()
const subject_ = subjects.find(
  (subject: any) => utilsSlugify(subject.name) == subjectParam
)
const subject = reactive(subject_)
const paragraphs = subject.description
  .split("\n")
  .filter((a: string) => a !== "")
</script>

<style scoped lang="sass">
.subject_layout
    .subject_content
        max-width: 80ch
        p
            @apply mb-4
</style>
