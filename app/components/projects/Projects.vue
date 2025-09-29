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
</script>

<template>
  <section class="items-center py-16 px-4 min-h-screen">
    <SectionHeader>
      <template #title>
        Projects
      </template>
      A curated list of projects I've been involved with
    </SectionHeader>
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="mt-16 sm:mt-20">
        <ul
          role="list"
          class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <template
            v-for="project in projects"
            :key="project.title"
          >
            <ProjectEntry
              :url="project.url"
              :img="project.image"
              :tech="project.tech"
            >
              <template #title>
                {{ project.title }}
              </template>
              {{ project.description }}
            </ProjectEntry>
          </template>
        </ul>
      </div>
      <div class="mt-16 text-center">
        <p class="text-sm text-gray-400">
          For more projects and contributions, visit my
          <a
            :href="github"
            target="_blank"
            rel="noreferrer nofollow"
            class="text-orange-500 hover:text-orange-400 transition-colors font-medium"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
