<template>
  <div class="subject_layout container_center my-8">
    <h1>{{ subject.name }}</h1>
    <h2 class="mt-8 mb-4">Datos de la asignatura</h2>
    <div class="subject_meta">
      <div class="subject_meta_item">
        <div class="subject_meta_title">Docente(s): </div>
        <div class="subject_meta_content">
          <NuxtLink :to="`/docent/${slugify(subject.docent)}`">{{ subject.docent }}</NuxtLink>
        </div>
      </div>
      <div class="subject_meta_item">
        <div class="subject_meta_title">Tipo: </div>
        <div class="subject_meta_content">{{ subject.type }}</div>
      </div>
      <div class="subject_meta_item">
        <div class="subject_meta_title">Semestre: </div>
        <div class="subject_meta_content">{{ subject.semester }}. Semestre ({{ semesterClaim }})</div>
      </div>
      <div class="subject_meta_item">
        <div class="subject_meta_title">Créditos: </div>
        <div class="subject_meta_content">
          {{ subject.ects }} ECTS - equivale a {{ subject.ects * 25 }} horas
          ({{ subject.ects * 25 * 3 / 5 }} horas presenciales)
        </div>
      </div>
      <div class="subject_meta_item">
        <div class="subject_meta_content">
          <NuxtLink class="subject_meta_button" :to="subject.sylabus" target="_blank">Guía docente</NuxtLink>
        </div>
      </div>
    </div>
    <h2 class="mt-8 mb-4">Descripción</h2>
    <div class="subject_content">
      <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
    </div>
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
const semesterClaim = computed(() => {
  return subject.semester == 1 ? "septiembre - enero" : "febrero - junio"
})
const slugify = utilsSlugify
useHead({
  title: "ESD-MDI : " + subject.name
})
</script>

<style scoped lang="sass">
.subject_layout
    .subject_content
        max-width: 80ch
        p
            @apply mb-4
    .subject_meta
      .subject_meta_item
        @apply flex gap-1
        .subject_meta_title
          @apply font-bold
        .subject_meta_content
          .subject_meta_button
            @apply my-2 px-4 py-2 bg-primary inline-flex text-white rounded-full
</style>
