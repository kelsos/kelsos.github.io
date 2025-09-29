<script setup lang="ts">
defineProps<{
  url: string;
  ariaLabel: string;
}>();
</script>

<template>
  <a
    :href="url"
    :aria-label="ariaLabel"
    class="text-gray-400 hover:text-gray-500"
    target="_blank"
  >
    <span class="sr-only">
      <slot name="description" />
    </span>
    <slot />
  </a>
</template>
