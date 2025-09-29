<script setup lang="ts">
import Avatar from '~/components/Avatar.vue';

interface TimelineDataEntry {
  period: string;
  where: string;
  what: string;
  description: string;
  image: string;
}

const entries: TimelineDataEntry[] = [
  {
    period: '2021 - Now',
    where: 'Rotki Solutions GmbH',
    what: 'Frontend Lead/Infrastructure',
    image: '/img/timeline/rotki.png',
    description: 'Working with Vue.js/Typescript, Ansible & Docker Swarm.',
  },
  {
    period: '2018 - 2021',
    where: 'rotki',
    what: 'Open-source Contributor',
    image: '/img/timeline/rotki.png',
    description: 'Working with Vue.js/Typescript on the frontend.',
  },
  {
    period: '2018 - 2020',
    where: 'brainbot technologies AG',
    what: 'Software Engineer',
    image: '/img/timeline/brainbot.jpg',
    description:
      'Raiden Network WebUI and part of the Raiden Light Client/Dapp team.',
  },
  {
    period: '2015 - 2018',
    where: 'arx.net S.A.',
    what: 'Senior Android Developer',
    image: '/img/timeline/arxnet.png',
    description: 'Lead of the Android client of White Mobile Cloud.',
  },
  {
    period: '2013 - 2014',
    where: 'arx.net S.A.',
    what: 'Frontend Developer',
    image: '/img/timeline/arxnet.png',
    description: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    period: '2012 - 2013',
    where: 'arx.net S.A.',
    what: 'Intern',
    image: '/img/timeline/arxnet.png',
    description: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    period: '2011 - 2013',
    where: 'Perfect Edge Ltd',
    what: 'Software developer/Infrastructure',
    image: '/img/timeline/perfectedge.png',
    description:
      'Part of a small team working with Adobe Flex/ActionScript 3/PHP/MySQL.',
  },
  {
    period: '2004 - 2014',
    where: 'IT department, ATEI Thessalonikis',
    what: 'Bachelor\'s Degree',
    image: '/img/timeline/teithess.png',
    description: 'Studies',
  },
];
</script>

<template>
  <section
    id="timeline"
    class="items-center py-16 min-h-screen"
  >
    <SectionHeader>
      <template #title>
        Timeline
      </template>
      My professional journey and experience
    </SectionHeader>
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="w-full mx-auto lg:max-w-3xl mt-8">
        <template
          v-for="(entry, i) in entries"
          :key="i"
        >
          <TimelineEntry
            :period="entry.period"
            :last="i + 1 === entries.length"
          >
            <template #icon>
              <Avatar
                :img="entry.image"
                class="ring-1 ring-zinc-300"
              />
            </template>
            <template #title>
              <TextTitle>
                <span>{{ entry.where }}</span>
                <span> - </span>
                <span class="font-normal text-zinc-400">{{ entry.what }}</span>
              </TextTitle>
            </template>
            <TextDescription>
              {{ entry.description }}
            </TextDescription>
          </TimelineEntry>
        </template>
      </div>
    </div>
  </section>
</template>
