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
    class="max-w-5xl mx-auto px-6 py-20 md:py-28"
  >
    <SectionHeader eyebrow="03 / Expertise">
      <template #title>
        Tools of the trade
      </template>
      Technologies and tools I've worked with throughout my career.
    </SectionHeader>

    <div
      v-reveal
      class="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-2"
    >
      <div
        v-for="category in skillCategories"
        :key="category.name"
      >
        <h3 class="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-fg">
          <span class="h-1 w-1 rounded-full bg-accent" />
          {{ category.name }}
        </h3>
        <p class="text-sm leading-relaxed text-body">
          {{ category.skills.join(' · ') }}
        </p>
      </div>
    </div>
  </section>
</template>
