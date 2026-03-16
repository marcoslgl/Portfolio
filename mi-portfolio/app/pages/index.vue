<script setup lang="ts">
// Lazy load components fuera de viewport para mejorar LCP
const Projects = defineAsyncComponent(() => import('~/components/Projects.vue'))
const Skills = defineAsyncComponent(() => import('~/components/Skills.vue'))
</script>
<template>
  <Hero class="pb-20" />
  <Suspense>
    <template #default>
      <Projects class="pb-20" />
    </template>
    <template #fallback>
      <div class="pb-20 h-96"></div>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <Skills class="pb-20" />
    </template>
    <template #fallback>
      <div class="pb-20 h-96"></div>
    </template>
  </Suspense>
</template>
