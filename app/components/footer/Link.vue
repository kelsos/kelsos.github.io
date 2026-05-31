<script setup lang="ts">
defineProps<{
  url: string;
  ariaLabel: string;
}>();

defineSlots<{
  default: () => unknown;
  description: () => unknown;
}>();
</script>

<template>
  <a
    :href="url"
    :aria-label="ariaLabel"
    class="text-muted hover:text-fg transition-colors duration-200"
    target="_blank"
  >
    <span class="sr-only">
      <slot name="description" />
    </span>
    <slot />
  </a>
</template>
