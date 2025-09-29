<script setup lang="ts">
const { title, description } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-900 to-zinc-800 p-16"
  >
    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="h-16 w-16 rounded-full bg-gradient-to-r from-red-600 to-orange-600" />
      <div>
        <h1 class="text-2xl font-bold text-white">
          Konstantinos Paparas
        </h1>
        <p class="text-lg text-zinc-300">
          kelsos.net
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col justify-center">
      <h1 class="text-6xl font-bold leading-tight text-white mb-6">
        {{ title || 'Privacy-First Open Source Software Engineer' }}
      </h1>
      <p class="text-2xl text-zinc-300 max-w-4xl">
        {{ description || 'Frontend Lead at Rotki building tools for financial privacy. Vue.js, TypeScript, Kotlin expertise.' }}
      </p>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-end">
      <div class="flex gap-6">
        <div class="text-zinc-400">
          <span class="text-zinc-500">Tech:</span>
          <span class="text-zinc-300">Vue.js • TypeScript • Kotlin • Python</span>
        </div>
      </div>
      <div class="text-zinc-400">
        Berlin, Germany
      </div>
    </div>
  </div>
</template>
