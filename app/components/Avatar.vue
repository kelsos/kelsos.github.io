<script setup lang="ts">
const { alt = '' } = defineProps<{ img: string; alt?: string }>();
</script>

<template>
  <div
    class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-surface-2 ring-1 ring-line"
  >
    <NuxtImg
      class="w-10 h-10 rounded-full object-cover"
      loading="lazy"
      decoding="async"
      :src="img"
      :alt="alt"
      width="40"
      height="40"
    />
  </div>
</template>
