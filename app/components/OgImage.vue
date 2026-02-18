<script setup lang="ts">
const { title, description } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between bg-neutral-800 p-16"
  >
    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="h-16 w-16 rounded-full bg-neutral-600" />
      <div>
        <h1 class="text-2xl font-bold text-white">
          Konstantinos Paparas
        </h1>
        <p class="text-lg text-neutral-400">
          kelsos.net
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col justify-center">
      <h1 class="text-6xl font-light leading-tight tracking-tight text-white mb-6">
        {{ title || 'Privacy-First Open Source Software Engineer' }}
      </h1>
      <p class="text-2xl text-neutral-400 max-w-4xl">
        {{ description || 'Frontend Lead at Rotki building tools for financial privacy. Vue.js, TypeScript, Kotlin expertise.' }}
      </p>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-end">
      <div class="flex gap-6">
        <div class="text-neutral-400">
          <span class="text-neutral-500">Tech:</span>
          <span class="text-neutral-300">Vue.js · TypeScript · Kotlin · Python</span>
        </div>
      </div>
      <div class="text-neutral-500">
        Berlin, Germany
      </div>
    </div>
  </div>
</template>
