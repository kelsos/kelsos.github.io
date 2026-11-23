<script setup lang="ts">
import { education, experience } from '~/data/cv';

interface TimelineDataEntry {
  period: string;
  where: string;
  what: string;
  description: string;
}

const entries: TimelineDataEntry[] = [
  ...experience.map(({ period, company, role, summary }) => ({ period, where: company, what: role, description: summary })),
  ...education.map(({ period, institution, degree }) => ({ period, where: institution, what: degree, description: 'Studies' })),
];
</script>

<template>
  <section
    id="timeline"
    aria-label="Experience"
    class="max-w-5xl mx-auto px-6 py-20 md:py-28"
  >
    <SectionHeader eyebrow="01 / Experience">
      <template #title>
        A decade of building
      </template>
      The roles and teams that shaped how I work.
    </SectionHeader>

    <div
      v-reveal
      class="mt-14 border-t border-line"
    >
      <div
        v-for="(entry, i) in entries"
        :key="i"
        class="grid gap-2 py-6 border-b border-line md:grid-cols-[8rem_1fr] md:gap-8"
      >
        <span class="text-sm font-medium tabular-nums text-muted md:pt-0.5">
          {{ entry.period }}
        </span>
        <div>
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-base font-medium text-fg">
              {{ entry.what }}
            </h3>
            <span class="text-sm text-accent">
              {{ entry.where }}
            </span>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-body">
            {{ entry.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
