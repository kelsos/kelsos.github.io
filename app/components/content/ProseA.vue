<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    target?: string;
  }>(),
  {
    target: undefined,
  },
);
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-primary-500 hover:text-primary-400"
  >
    <slot />
  </NuxtLink>
</template>
