<script setup lang="ts">
defineProps<{ img: string }>();
</script>

<template>
  <div
    class="relative z-10 flex items-center justify-center rounded-full shadow-md shadow-zinc-800/5 dark:bg-zinc-800 dark:ring-0 p-1"
  >
    <UAvatar
      size="md"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      :src="img"
    />
  </div>
</template>
