<script setup lang="ts">
const skills = {
  Languages: 'TypeScript • Python • Kotlin • Go • C# • JavaScript • Lua • Rust',
  Frontend: 'Vue.js 3 • Nuxt.js • Angular • Tailwind CSS • Vite • Storybook',
  Backend: 'Python CLI • Go CLI • .NET • REST APIs',
  Mobile: 'Android • Kotlin • Architecture Components • Material Design',
  DevOps: 'Docker • Git • Testing • CI/CD • Package Management',
  Focus: 'Open Source • Privacy-first • Developer Tools • Design Systems',
};
</script>

<template>
  <section class="items-center py-16 lg:min-h-screen px-4">
    <div class="justify-center max-w-4xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="max-w-xl mx-auto">
        <div class="text-center text-4xl font-bold">
          Skills & Technologies
        </div>
      </div>
      <div class="mt-16 space-y-4 max-w-3xl mx-auto">
        <div
          v-for="(skillList, category) in skills"
          :key="category"
          class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 py-3 border-b border-gray-800/50 last:border-0"
        >
          <div class="sm:w-32 flex-shrink-0 text-sm font-medium text-gray-400">
            {{ category }}
          </div>
          <div class="text-sm text-gray-300 leading-relaxed">
            {{ skillList }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
