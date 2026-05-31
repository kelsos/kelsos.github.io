<script setup lang="ts">
defineProps<{
  eyebrow?: string;
}>();

defineSlots<{
  default?: () => unknown;
  title: () => unknown;
}>();
</script>

<template>
  <div class="max-w-2xl">
    <div
      v-if="eyebrow"
      class="flex items-center gap-3"
    >
      <span class="h-px w-8 bg-accent" />
      <span class="text-xs font-medium uppercase tracking-widest text-muted">
        {{ eyebrow }}
      </span>
    </div>
    <h2 class="mt-4 font-display text-3xl md:text-4xl font-medium tracking-tight text-fg">
      <slot name="title" />
    </h2>
    <p
      v-if="$slots.default"
      class="mt-4 text-base leading-relaxed text-body"
    >
      <slot />
    </p>
  </div>
</template>
