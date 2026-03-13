<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'

const store = usePortfolioStore()
const { hero } = store

const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    class="flex flex-col items-start w-full max-w-4xl mx-auto px-6 py-12"
    aria-labelledby="hero-heading"
  >
    <h1 id="hero-heading" class="text-main font-bold text-4xl md:text-5xl whitespace-nowrap">
      Hello, I'm <span class="text-primary">{{ hero.name }}</span>
    </h1>

    <p class="text-secondary text-lg font-semibold mt-4" aria-label="Professional role">
      {{ hero.role }}
    </p>

    <p class="text-secondary mt-4 leading-relaxed max-w-2xl" role="doc-subtitle">
      {{ hero.info }}
    </p>

    <div class="flex items-center justify-start gap-4 mt-8">
      <button
        type="button"
        @click="scrollToElement('projects-heading')"
        class="bg-primary text-bg font-bold px-6 py-2 rounded-lg hover:bg-primaryHover hover:-translate-y-1 hover:shadow-lg transition-all flex items-center gap-2"
        aria-label="View my projects and work"
      >
        See projects
        <img src="/images/icons/arrow.svg" class="w-4 h-4" alt="" />
      </button>

      <button
        type="button"
        class="bg-bg text-secondary font-bold px-6 py-2 rounded-lg cursor-pointer border border-secondary hover:text-primary hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all"
        aria-label="Open contact form or contact information"
      >
        Contact me
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: auto;
}
</style>
