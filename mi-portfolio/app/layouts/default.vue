<script setup lang="ts">
const { scrollProgress } = useScrollProgress()
const store = usePortfolioStore()
const progress = computed(() => Math.round(scrollProgress.value))
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <div
      role="progressbar"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Scroll progress"
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-[width] duration-700 ease-out will-change-[width]"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <main class="w-full py-20 flex-1">
      <slot />
    </main>

    <footer id="footer" class="py-10 text-center text-secondary text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Marcos López. Designed and built with passion.</p>
      <div class="flex flex-row items-center justify-center gap-4 mt-4 w-fit mx-auto p-2">
        <a
          href="https://github.com/marcoslgl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          :class="[
            'transition-all hover:scale-110 text-primary',
            store.highlightContactIcons && 'ring-2 ring-primary rounded-lg scale-110 animate-pulse',
          ]"
        >
          <img src="/icons/github.svg" alt="GitHub" class="w-8 h-8" />
        </a>
        <a
          href="mailto:marcoslgl2004@gmail.com"
          aria-label="Send me an email"
          :class="[
            'transition-all hover:scale-110 text-primary',
            store.highlightContactIcons && 'ring-2 ring-primary rounded-lg scale-110 animate-pulse',
          ]"
        >
          <img src="/icons/mail.svg" alt="Gmail" class="w-8 h-8" />
        </a>
      </div>
    </footer>
  </div>
</template>
