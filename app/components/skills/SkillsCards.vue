<script setup lang="ts">
interface SkillCategory {
  name: string;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'Python', 'Kotlin', 'Go', 'C#', 'JavaScript', 'Lua', 'Rust'],
    description: 'Primary and secondary programming languages',
  },
  {
    name: 'Frontend',
    skills: ['Vue.js 3', 'Nuxt.js', 'Angular', 'Tailwind CSS', 'PostCSS', 'Storybook', 'Vue I18n', 'Vite', 'Vitest'],
    description: 'Modern web frameworks and tools',
  },
  {
    name: 'Backend/Systems',
    skills: ['Python CLI', 'Go CLI', '.NET Framework', 'REST APIs'],
    description: 'Server-side and system programming',
  },
  {
    name: 'Mobile',
    skills: ['Android', 'Kotlin', 'Architecture Components', 'Koin DI', 'Material Design'],
    description: 'Native Android development stack',
  },
  {
    name: 'Tools & DevOps',
    skills: ['Docker', 'Ansible', 'Git', 'pytest', 'Vitest', 'Robolectric', 'MockK', 'npm', 'pnpm', 'uv', 'Gradle', 'ESLint'],
    description: 'Development and deployment tools',
  },
  {
    name: 'Specialized',
    skills: ['CLI Development', 'Cross-platform Apps', 'Open Source', 'UI/UX Design Systems', 'Privacy-focused Apps', 'Developer Tooling'],
    description: 'Domain expertise and focus areas',
  },
];
</script>

<template>
  <section class="items-center py-16 px-4 min-h-screen">
    <SectionHeader>
      <template #title>
        Skills & Technologies
      </template>
      Technologies and tools I've worked with throughout my career
    </SectionHeader>
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="group relative p-6 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-zinc-800/50 rounded-2xl opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
          />
          <div class="relative z-10">
            <h3 class="text-xl font-bold mb-2 text-gray-200 group-hover:text-orange-500 transition-colors">
              {{ category.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-4">
              {{ category.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <TechBadge
                v-for="skill in category.skills"
                :key="skill"
                :tech="skill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
