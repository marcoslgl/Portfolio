import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import data from '~/content/data.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  const portfolio = ref(data)
  const highlightContactIcons = ref(false)

  const projects = computed(() => portfolio.value.projects)
  const skills = computed(() => portfolio.value.skills)

  const activateContactHighlight = () => {
    highlightContactIcons.value = true
    setTimeout(() => {
      highlightContactIcons.value = false
    }, 3000)
  }

  return {
    projects,
    skills,
    highlightContactIcons,
    activateContactHighlight,
  }
})
