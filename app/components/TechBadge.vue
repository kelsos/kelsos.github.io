<script setup lang="ts">
defineProps<{
  tech: string;
}>();
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-neutral-600 bg-neutral-700 text-neutral-400 transition-colors duration-200"
  >
    {{ tech }}
  </span>
</template>
