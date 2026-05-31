<script setup lang="ts">
defineProps<{
  tech: string;
}>();
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-line bg-surface-2 text-muted transition-colors duration-200"
  >
    {{ tech }}
  </span>
</template>
