<script setup lang="ts">
defineProps<{ img: string }>();
</script>

<template>
  <div
    class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-md shadow-zinc-800/5 bg-zinc-800 ring-0"
  >
    <NuxtImg
      class="w-10 h-10 rounded-full object-cover"
      loading="lazy"
      decoding="async"
      :src="img"
      alt="Avatar"
      width="40"
      height="40"
    />
  </div>
</template>
