<template>
  <nav
    class="header_menu"
    :class="{ global_context: props.context == 'global' }"
  >
    <div class="header_menu_holder">
      <picture class="logo">
        <a href="/">
          <img
            :src="`/images/logo_${props.logoColor}.svg`"
            :alt="props.logoColor"
          />
        </a>
      </picture>
      <ul class="menu">
        <li class="menu_item">
          <a href="#">Inicio</a>
          <ul class="submenu"></ul>
        </li>
        <li class="menu_item">
          <a href="#">Inicio</a>
          <ul class="submenu">
            <li class="submenu_item">
              <a href="#"> Objetivos del Máster </a>
            </li>
            <li class="submenu_item">
              <a href="#"> Perfiles y salidas laborales </a>
            </li>
            <li class="submenu_item">
              <a href="#"> Asignaturas </a>
            </li>
            <li class="submenu_item">
              <a href="#"> Profesores </a>
            </li>
            <li class="submenu_item">
              <a href="#"> Empresas y prácticas </a>
            </li>
          </ul>
        </li>
        <li class="menu_item">
          <a href="#">Inicio</a>
          <ul class="submenu"></ul>
        </li>
        <li class="menu_item">
          <a href="#">Inicio</a>
          <ul class="submenu"></ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  logoColor?: "white" | "green"
  context?: "home" | "global"
}
const props = withDefaults(defineProps<Props>(), {
  logoColor: "green",
  context: "global"
})
</script>

<style scoped lang="sass">

.header_menu
    @apply font-netto h-full text-sm
    @apply p-4 border-r-2 border-opacity-30 border-white
    &.global_context
      @apply border-black border-opacity-10
    .header_menu_holder
      @apply w-[250px] sticky top-6 left-0
      .logo
          @apply flex
      .menu
        @apply flex flex-col gap-4 my-4 pl-[0.7rem]
        .menu_item
            > a
              @apply flex font-bold
            .submenu
              @apply flex flex-col gap-2 mt-4 opacity-80
              @apply empty:hidden
              .submenu_item
                  a
                    @apply flex
</style>
