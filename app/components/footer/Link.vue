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
    class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
    target="_blank"
  >
    <span class="sr-only">
      <slot name="description" />
    </span>
    <slot />
  </a>
</template>
