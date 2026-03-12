<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'
const store = usePortfolioStore()
const { hero } = store
</script>

<template>
  <section
    class="flex flex-col items-start w-full max-w-4xl mx-auto px-6"
    aria-labelledby="hero-heading"
  >
    <h1 id="hero-heading" class="text-main font-bold">
      Hello, I'm <span class="text-primary">{{ hero.name }}</span>
    </h1>
    <p class="text-secondary text-lg font-semibold mt-2">{{ hero.role }}</p>
    <p class="text-secondary mt-4 leading-relaxed">
      {{ hero.info }}
    </p>
    <div class="flex items-center justify-start gap-4 mt-6">
      <a
        href="#projects-heading"
        class="bg-primary text-bg font-bold px-6 py-2 rounded-lg hover:bg-primaryHover hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out"
      >
        See projects
      </a>
      <button
        type="button"
        aria-label="Contact me for inquiries"
        class="bg-bg text-secondary font-bold px-6 py-2 rounded-lg cursor-pointer border border-secondary hover:scale-105 transition-all"
      >
        Contact me
      </button>
    </div>
  </section>
</template>
