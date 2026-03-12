<script setup lang="ts">
const { scrollProgress } = useScrollProgress()
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <div
      role="progressbar"
      :aria-valuenow="Math.round(scrollProgress)"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Scroll progress"
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-[width] duration-700 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <main class="w-full py-20 flex-1">
      <slot />
    </main>

    <footer class="py-10 text-center text-secondary text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Marcos López. Designed and built with passion.</p>
    </footer>
  </div>
</template>
