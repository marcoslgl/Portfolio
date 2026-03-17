<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'

const store = usePortfolioStore()

const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const handleContactClick = () => {
  store.activateContactHighlight()
  scrollToElement('footer')
}
</script>

<template>
  <section
    class="flex flex-col items-start w-full max-w-4xl mx-auto px-6 py-12"
    aria-labelledby="hero-heading"
  >
    <img
      src="/images/profile.jpg"
      alt="Profile picture of Marcos López"
      class="mb-6 w-48 h-48 rounded-3xl object-cover shadow-lg"
      width="192"
      height="192"
      loading="eager"
      fetchpriority="high"
    />

    <h1
      id="hero-heading"
      class="py-6 text-4xl md:text-5xl"
      style="contain: paint; min-height: 2rem"
    >
      Hello, I'm <span class="text-primary">Marcos López</span>
    </h1>

    <p class="text-secondary text-lg font-semibold mt-4" aria-label="Professional role">
      Full-Stack Developer
    </p>

    <p class="text-secondary-p mt-4 max-w-2xl" role="doc-subtitle">
      I create functional and intuitive web experiences. Passionate about clean code and modern
      design.
    </p>

    <div class="flex items-center justify-start gap-4 mt-8">
      <button
        type="button"
        @click="scrollToElement('projects-heading')"
        class="bg-primary text-bg font-bold px-6 py-2 rounded-lg hover:bg-primaryHover hover:-translate-y-1 hover:shadow-lg transition-all flex items-center gap-2"
        aria-label="View my projects and work"
      >
        See projects
        <img src="/icons/arrow.svg" class="w-4 h-4" alt="" />
      </button>

      <button
        type="button"
        @click="handleContactClick"
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
