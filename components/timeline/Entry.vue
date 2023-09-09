<script setup lang="ts">
withDefaults(
  defineProps<{
    period: string;
    last?: boolean;
  }>(),
  {
    last: false,
  },
);
</script>

<template>
  <div class="relative flex justify-between">
    <div class="hidden w-24 py-3 md:block">
      <h2 class="text-base font-medium text-zinc-700 dark:text-zinc-400">
        {{ period }}
      </h2>
    </div>
    <div class="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden">
      <h2 class="text-base font-medium text-zinc-700 dark:text-zinc-400">
        {{ period }}
      </h2>
    </div>
    <div class="flex flex-col items-center w-10 mr-4 md:w-24">
      <div>
        <div
          class="flex items-center justify-center w-10 h-10 border border-zinc-500 rounded-full dark:border-zinc-400"
        >
          <slot name="icon" />
        </div>
      </div>
      <div v-if="!last" class="w-px h-full bg-zinc-300" />
    </div>
    <div
      class="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-zinc-800"
    >
      <div
        class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4"
      >
        <div
          class="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-zinc-800 drop-shadow-lg"
        />
      </div>
      <div class="relative z-20 p-6">
        <p class="mb-2 text-xl font-bold text-zinc-600 dark:text-zinc-400">
          <slot name="title" />
        </p>
        <p class="text-zinc-700 dark:text-zinc-500">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
