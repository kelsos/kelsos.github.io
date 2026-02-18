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
    class="items-center py-16 min-h-screen"
  >
    <SectionHeader>
      <template #title>
        Experience
      </template>
      My professional journey and experience
    </SectionHeader>
    <div class="max-w-3xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="mt-8 space-y-0">
        <div
          v-for="(entry, i) in entries"
          :key="i"
          class="py-5"
          :class="{ 'border-b border-neutral-600': i < entries.length - 1 }"
        >
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-base font-medium text-neutral-200">
              {{ entry.where }}
            </h3>
            <span class="text-sm text-neutral-500 tabular-nums shrink-0">
              {{ entry.period }}
            </span>
          </div>
          <p class="mt-1 text-sm text-neutral-500">
            {{ entry.what }}
          </p>
          <p class="mt-2 text-sm leading-relaxed text-neutral-400">
            {{ entry.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
