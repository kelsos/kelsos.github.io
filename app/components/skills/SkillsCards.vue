<script setup lang="ts">
import { skillCategories } from '~/data/cv';
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
