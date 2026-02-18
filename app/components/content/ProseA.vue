<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string;
    target?: string;
    title?: string;
  }>(),
  {
    target: undefined,
    title: undefined,
  },
);

const isExternal = computed<boolean>(() => props.href.startsWith('http://') || props.href.startsWith('https://'));
</script>

<template>
  <a
    v-if="isExternal"
    :href="href"
    :title="title"
    :target="target || '_blank'"
    rel="noopener noreferrer"
    class="text-slate-400 hover:text-slate-300 transition-colors duration-200"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="href"
    :title="title"
    :target="target"
    class="text-slate-400 hover:text-slate-300 transition-colors duration-200"
  >
    <slot />
  </NuxtLink>
</template>
