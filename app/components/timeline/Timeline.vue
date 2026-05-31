<script setup lang="ts">
interface TimelineDataEntry {
  period: string;
  where: string;
  what: string;
  description: string;
}

const entries: TimelineDataEntry[] = [
  {
    period: '2021 - Now',
    where: 'Rotki Solutions GmbH',
    what: 'Frontend Lead/Infrastructure',
    description: 'Working with Vue.js/Typescript, Ansible & Docker Swarm.',
  },
  {
    period: '2018 - 2021',
    where: 'rotki',
    what: 'Open-source Contributor',
    description: 'Working with Vue.js/Typescript on the frontend.',
  },
  {
    period: '2018 - 2020',
    where: 'brainbot technologies AG',
    what: 'Software Engineer',
    description:
      'Raiden Network WebUI and part of the Raiden Light Client/Dapp team.',
  },
  {
    period: '2015 - 2018',
    where: 'arx.net S.A.',
    what: 'Senior Android Developer',
    description: 'Lead of the Android client of White Mobile Cloud.',
  },
  {
    period: '2013 - 2014',
    where: 'arx.net S.A.',
    what: 'Frontend Developer',
    description: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    period: '2012 - 2013',
    where: 'arx.net S.A.',
    what: 'Intern',
    description: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    period: '2011 - 2013',
    where: 'Perfect Edge Ltd',
    what: 'Software developer/Infrastructure',
    description:
      'Part of a small team working with Adobe Flex/ActionScript 3/PHP/MySQL.',
  },
  {
    period: '2004 - 2014',
    where: 'IT department, ATEI Thessalonikis',
    what: 'Bachelor\'s Degree',
    description: 'Studies',
  },
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
