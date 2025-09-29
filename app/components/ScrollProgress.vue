<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();

const scrollProgress = computed(() => {
  if (import.meta.client) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const progress = (y.value / scrollableHeight) * 100;
    return Math.min(100, Math.max(0, progress));
  }
  return 0;
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-1 z-[60] bg-zinc-800/20">
    <div
      class="h-full bg-gradient-to-r from-red-600 to-orange-600 transition-all duration-300 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    />
  </div>
</template>
