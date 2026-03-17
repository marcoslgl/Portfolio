<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'
import { ref } from 'vue'

const portfolioStore = usePortfolioStore()

type SkillCategory = 'Frontend' | 'Backend' | 'Others'

const expandedCategories = ref<Record<SkillCategory, boolean>>({
  Frontend: false,
  Backend: false,
  Others: false,
})

const toggleCategory = (category: SkillCategory): void => {
  expandedCategories.value[category] = !expandedCategories.value[category]
}
</script>

<template>
  <section class="py-16 bg-bgSecondary w-full" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="section-title text-center">Technical Skills</h2>

    <ul
      class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-16 md:px-10 items-start"
    >
      <li
        v-for="(skill, category) in portfolioStore.skills"
        :key="category"
        class="border border-secondary rounded-lg p-6 shadow-md hover:bg-bgSecondary"
      >
        <button
          type="button"
          :aria-expanded="expandedCategories[category as SkillCategory]"
          :aria-controls="`${category}-skills-list`"
          @click="toggleCategory(category as SkillCategory)"
          class="w-full flex items-center p-6 justify-between gap-3 transition-opacity rounded px-2 py-1"
        >
          <div class="flex items-center gap-3">
            <img :src="skill.icon" class="w-6 h-6" loading="lazy" />
            <h3 class="text-xl font-bold text-primary text-left">{{ category }}</h3>
          </div>
          <img
            src="/icons/chevron.svg"
            :class="{ 'rotate-180': expandedCategories[category as SkillCategory] }"
            class="w-5 h-5 transition-transform duration-300 flex-shrink-0"
            aria-hidden="true"
            alt=""
          />
        </button>
        <div
          :id="`${category}-skills-list`"
          class="grid transition-[grid-template-rows] duration-300 ease-in-out"
          :class="
            expandedCategories[category as SkillCategory] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          "
          role="region"
          :aria-labelledby="`${category}-heading`"
        >
          <div class="overflow-hidden">
            <ul class="space-y-2 list-disc list-inside pt-2 pb-1">
              <li
                v-for="item in skill.items"
                :key="item"
                class="text-main marker:text-primary hover:text-primary transition-colors duration-300"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
