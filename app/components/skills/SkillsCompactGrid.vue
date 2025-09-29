<script setup lang="ts">
interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'Python', 'Kotlin', 'Go', 'C#', 'JavaScript', 'Lua', 'Rust'],
  },
  {
    name: 'Frontend',
    skills: ['Vue.js 3', 'Nuxt.js', 'Angular', 'Tailwind CSS', 'PostCSS', 'Storybook', 'Vue I18n', 'Vite', 'Vitest'],
  },
  {
    name: 'Backend/Systems',
    skills: ['Python CLI', 'Go CLI', '.NET Framework', 'REST APIs'],
  },
  {
    name: 'Mobile',
    skills: ['Android', 'Kotlin', 'Architecture Components', 'Koin DI', 'Material Design'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Docker', 'Git', 'pytest', 'Vitest', 'Robolectric', 'MockK', 'npm', 'pnpm', 'uv', 'Gradle', 'ESLint'],
  },
  {
    name: 'Specialized',
    skills: ['CLI Development', 'Cross-platform Apps', 'Open Source', 'UI/UX Design Systems', 'Privacy-focused Apps', 'Developer Tooling'],
  },
];
</script>

<template>
  <section class="items-center py-16 lg:min-h-screen px-4">
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="max-w-xl mx-auto">
        <div class="text-center text-4xl font-bold">
          Skills & Technologies
        </div>
      </div>
      <div class="max-w-xl mx-auto mt-8">
        <p class="text-center text-sm text-gray-400">
          Technologies and tools I've worked with throughout my career
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="group"
        >
          <h3 class="text-lg font-semibold mb-3 text-gray-300 group-hover:text-white transition-colors">
            {{ category.name }}
          </h3>
          <div class="space-y-1">
            <div
              v-for="skill in category.skills"
              :key="skill"
              class="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-default"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
