<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core';

const { y } = useWindowScroll();
// height is a reactive dependency so the bar recalculates on resize, not only scroll.
const { height: windowHeight } = useWindowSize();

const scrollProgress = computed(() => {
  if (!import.meta.client)
    return 0;

  const scrollableHeight = document.documentElement.scrollHeight - windowHeight.value;
  if (scrollableHeight <= 0)
    return 0;

  const progress = (y.value / scrollableHeight) * 100;
  return Math.min(100, Math.max(0, progress));
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-px z-[60]">
    <div
      class="h-full bg-accent transition-all duration-300 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    />
  </div>
</template>
