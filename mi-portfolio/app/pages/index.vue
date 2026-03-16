<script setup lang="ts">
import Hero from '~/components/Hero.vue'

const AboutMe = defineAsyncComponent(() => import('~/components/AboutMe.vue'))
const Projects = defineAsyncComponent(() => import('~/components/Projects.vue'))
const Skills = defineAsyncComponent(() => import('~/components/Skills.vue'))
</script>

<template>
  <Hero />
  <Suspense>
    <template #default>
      <AboutMe />
    </template>
    <template #fallback>
      <div class="h-64"></div>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <Projects />
    </template>
    <template #fallback>
      <div class="h-96"></div>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <Skills />
    </template>
    <template #fallback>
      <div class="h-96"></div>
    </template>
  </Suspense>
</template>
