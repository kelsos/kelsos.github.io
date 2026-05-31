<script setup lang="ts">
import ProjectEntry from '~/components/projects/Entry.vue';

interface ProjectDetails {
  title: string;
  image: string;
  description: string;
  url: string;
  tech: string[];
}

const projects: ProjectDetails[] = [
  {
    title: 'rotki',
    description:
      'open source portfolio tracker, accounting and analytics tool that protects your privacy',
    image: '/img/projects/rotki.png',
    url: 'https://rotki.com',
    tech: ['Vue.js', 'TypeScript', 'Python', 'Open Source', 'Portfolio'],
  },
  {
    title: 'MusicBee Remote',
    description:
      'Android application and Plugin that allows controlling MusicBee remotely.',
    image: '/img/projects/mbrc.jpg',
    url: 'https://mbrc.kelsos.net',
    tech: ['Android', 'Kotlin', 'C#'],
  },
  {
    title: 'Sikorka (Android App)',
    description:
      'Application that used light client to interact with smart-contracts. Part of a proof of location project.',
    image: '/img/projects/sikorka.png',
    url: 'https://github.com/Sikorkaio/android-app',
    tech: ['Android', 'Java', 'Ethereum', 'Web3'],
  },
  {
    title: 'Raiden Light Client',
    description:
      'JavaScript SDK, CLI and dApp to carry out fast, cheap, scalable off-chain token transfers.',
    image: '/img/projects/raiden.png',
    url: 'https://github.com/raiden-network/light-client',
    tech: ['TypeScript', 'Vue.js', 'Ethereum', 'Open Source'],
  },
  {
    title: 'Raiden WebUI',
    description: 'The frontend for the original Raiden Python Implementation',
    image: '/img/projects/raiden.png',
    url: 'https://github.com/raiden-network/webui',
    tech: ['Angular', 'TypeScript', 'Ethereum', 'Open Source'],
  },
  {
    title: 'White Mobile Cloud (Android App)',
    description:
      'White Label Cloud Backup/Restore Android application part of the White Mobile Cloud Platform',
    image: '/img/projects/wmc.png',
    url: 'https://whitemobilecloud.com',
    tech: ['Android', 'Kotlin'],
  },
];

const {
  public: { github },
} = useRuntimeConfig();

const [featured, ...rest] = projects;
</script>

<template>
  <section
    id="projects"
    aria-label="Selected Work"
    class="max-w-5xl mx-auto px-6 py-20 md:py-28"
  >
    <SectionHeader eyebrow="02 / Selected Work">
      <template #title>
        Things I've shipped
      </template>
      A curated selection of projects and contributions.
    </SectionHeader>

    <a
      v-if="featured"
      v-reveal
      :href="featured.url"
      target="_blank"
      rel="noreferrer nofollow"
      class="group mt-14 grid gap-6 rounded-xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10 md:p-8"
    >
      <div class="order-2 md:order-1">
        <span class="text-xs font-medium uppercase tracking-widest text-accent">
          Featured
        </span>
        <h3 class="mt-3 font-display text-2xl md:text-3xl font-medium text-fg">
          {{ featured.title }}
        </h3>
        <p class="mt-3 text-base leading-relaxed text-body">
          {{ featured.description }}
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <TechBadge
            v-for="techItem in featured.tech"
            :key="techItem"
            :tech="techItem"
          />
        </div>
        <span class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors duration-200 group-hover:text-accent">
          Visit project
          <Icon
            name="heroicons:arrow-up-right"
            class="w-4 h-4"
          />
        </span>
      </div>
      <NuxtImg
        :src="featured.image"
        :alt="featured.title"
        class="order-1 w-full rounded-lg border border-line object-cover md:order-2"
        loading="lazy"
      />
    </a>

    <ul
      role="list"
      class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
    >
      <template
        v-for="project in rest"
        :key="project.title"
      >
        <ProjectEntry
          :url="project.url"
          :img="project.image"
          :name="project.title"
          :tech="project.tech"
        >
          <template #title>
            {{ project.title }}
          </template>
          {{ project.description }}
        </ProjectEntry>
      </template>
    </ul>

    <p class="mt-12 text-sm text-muted">
      For more projects and contributions, visit my
      <a
        :href="github"
        target="_blank"
        rel="noreferrer nofollow"
        class="font-medium text-accent hover:text-accent-hover transition-colors duration-200"
      >
        GitHub profile
      </a>
    </p>
  </section>
</template>
