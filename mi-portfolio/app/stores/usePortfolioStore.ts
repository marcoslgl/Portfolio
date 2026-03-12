import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import data from '~/content/data.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  const portfolio = ref(data)

  const hero = computed(() => portfolio.value.hero)
  const projects = computed(() => portfolio.value.projects)
  return {
    hero,
    projects,
  }
})
