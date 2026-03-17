<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'

const store = usePortfolioStore()
const { projects } = store
</script>

<template>
  <section class="py-16 w-full" aria-labelledby="projects-heading">
    <div class="w-full max-w-4xl mx-auto px-6">
      <div class="flex items-center gap-4 w-full mb-12">
        <div class="flex-1 border-t border-secondary"></div>
        <h2 id="projects-heading" class="section-title">Projects</h2>
        <div class="flex-1 border-t border-secondary"></div>
      </div>

      <div class="space-y-6">
        <article
          v-for="project in projects"
          :key="project.id"
          class="bg-bg p-6 rounded-lg border border-secondary hover:border-primary hover:shadow-lg transition-all"
        >
          <div class="flex flex-col gap-4">
            <figure v-if="project.image" class="m-0">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visitar proyecto ${project.title}`"
                class="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                  width="800"
                  height="400"
                  class="w-full rounded-lg border border-bgSecondary object-contain bg-bgSecondary hover:border-primary transition-colors"
                  loading="lazy"
                />
              </a>
              <img
                v-else
                :src="project.image"
                :alt="project.title"
                width="800"
                height="400"
                class="w-full rounded-lg border border-bgSecondary object-contain bg-bgSecondary"
                loading="lazy"
              />
            </figure>
            <div>
              <div class="flex items-center gap-2 mb-3">
                <h3 class="text-xl">{{ project.title }}</h3>
              </div>
              <p class="text-secondary-p mb-4">{{ project.description }}</p>
              <ul v-if="project.tags?.length" class="flex flex-wrap gap-2">
                <li
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs px-3 py-1 bg-bgSecondary border border-accent text-accent rounded-full"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
