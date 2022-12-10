<template>
  <section class="subject_section container_center">
    <h2>{{ props.title }}</h2>
    <table class="subjects">
      <tr class="subject_header">
        <th class="subject_header_item">Título</th>
        <th class="subject_header_item">Profesor/a</th>
        <th class="subject_header_item">Tipo</th>
        <th class="subject_header_item">Semestre</th>
        <th class="subject_header_item">ECTS</th>
      </tr>
      <tr class="subject" v-for="(subject, i) in subjects" :key="i">
        <td class="subject_title">
          <NuxtLink :to="`/subject/${slugify(subject.name)}`">
            {{ subject.name }}
          </NuxtLink>
        </td>
        <td class="subject_docent">
          <NuxtLink :to="`/docent/${slugify(subject.docent)}`">
            {{ subject.docent }}
          </NuxtLink>
        </td>
        <td class="subject_type">
          {{ subject.type }}
        </td>
        <td class="subject_semester">
          <span>{{ subject.semester }}</span>
        </td>
        <td class="subject_ects">
          <span>{{ subject.ects }}</span>
        </td>
      </tr>
    </table>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ title?: string; avoidedSubjects?: string[] }>(),
  {
    title: "Asignaturas",
    // @ts-ignore
    avoidedSubjects: []
  }
)
const { body: subjects_ } = await queryContent("subjects/subjects").findOne()
const subjects = reactive(
  subjects_.filter((sub: any) => !props.avoidedSubjects!.includes(sub.name))
)
const slugify = utilsSlugify
</script>

<style scoped lang="sass">
.subject_section
    @apply min-h-[50vh] my-8
    .subject_header
        .subject_header_item
            @apply text-left py-2
            &:nth-child(n+4)
                @apply text-right


    .subjects
        @apply w-full
        .subject
            @apply border-b-2 last:border-0
            > *
                @apply py-1
            .subject_title
            .subject_docent
            .subject_type
            .subject_semester
                @apply text-right
                span
                    @apply bg-slate-200 font-bold px-2 py-1 rounded-full text-sm
            .subject_ects
                @apply text-right
                span
                    @apply bg-slate-200 font-bold px-2 py-1 rounded-full text-sm
</style>
