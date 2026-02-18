<script setup lang="ts">
interface SkillCategory {
  name: string;
  skills: string[];
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
    skills: ['Docker', 'Ansible', 'Git', 'pytest', 'Vitest', 'Robolectric', 'MockK', 'npm', 'pnpm', 'uv', 'Gradle', 'ESLint'],
  },
  {
    name: 'Specialized',
    skills: ['CLI Development', 'Cross-platform Apps', 'Open Source', 'UI/UX Design Systems', 'Privacy-focused Apps', 'Developer Tooling'],
  },
];
</script>

<template>
  <section
    id="skills"
    aria-label="Expertise"
    class="items-center py-16 px-4 min-h-screen"
  >
    <SectionHeader>
      <template #title>
        Expertise
      </template>
      Technologies and tools I've worked with throughout my career
    </SectionHeader>
    <div class="max-w-3xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="category in skillCategories"
          :key="category.name"
        >
          <h3 class="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-3">
            {{ category.name }}
          </h3>
          <p class="text-sm leading-relaxed text-neutral-400">
            {{ category.skills.join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
