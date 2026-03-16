import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import data from '~/content/data.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  const portfolio = ref(data)

  const projects = computed(() => portfolio.value.projects)
  const skills = computed(() => portfolio.value.skills)
  return {
    projects,
    skills,
  }
})
