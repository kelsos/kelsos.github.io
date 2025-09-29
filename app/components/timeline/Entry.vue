<script setup lang="ts">
const { period, last = false } = defineProps<{
  period: string;
  last?: boolean;
}>();
</script>

<template>
  <div class="relative flex justify-between">
    <div class="hidden w-24 py-3 md:block">
      <h2 class="text-base font-medium text-zinc-400">
        {{ period }}
      </h2>
    </div>
    <div class="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden">
      <h2 class="text-base font-medium text-zinc-400">
        {{ period }}
      </h2>
    </div>
    <div class="flex flex-col items-center w-12 mr-4 md:w-24">
      <div>
        <div
          class="flex items-center justify-center w-12 h-12 border border-zinc-400 rounded-full"
        >
          <slot name="icon" />
        </div>
      </div>
      <div
        v-if="!last"
        class="w-px h-full bg-zinc-300"
      />
    </div>
    <div
      class="relative flex-1 mb-16 bg-zinc-800 rounded shadow md:mb-8"
    >
      <div
        class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4"
      >
        <div
          class="h-10 origin-top-right -rotate-45 bg-zinc-800 drop-shadow-lg"
        />
      </div>
      <div class="relative z-20 p-6">
        <p class="mb-2 text-xl font-bold text-zinc-400">
          <slot name="title" />
        </p>
        <p class="text-zinc-500">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
