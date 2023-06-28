<script setup lang="ts">
import ProjectEntry from '~/components/projects/Entry.vue';
import rotkiImg from '~/assets/img/projects/rotki.png';
import mbrcImg from '~/assets/img/projects/mbrc.jpg';
import raidenImg from '~/assets/img/projects/raiden.png';
import sikorkaImg from '~/assets/img/projects/sikorka.png';
import wmcImg from '~/assets/img/projects/wmc.png';

interface ProjectDetails {
  title: string;
  image: string;
  description: string;
  url: string;
}

const projects: ProjectDetails[] = [
  {
    title: 'rotki',
    description:
      'open source portfolio tracker, accounting and analytics tool that protects your privacy',
    image: rotkiImg,
    url: 'https://rotki.com',
  },
  {
    title: 'MusicBee Remote',
    description:
      'Android application and Plugin that allows controlling MusicBee remotely.',
    image: mbrcImg,
    url: 'https://mbrc.kelsos.net',
  },
  {
    title: 'Sikorka (Android App)',
    description:
      'Application that used light client to interact with smart-contracts. Part of a proof of location project.',
    image: sikorkaImg,
    url: 'https://github.com/Sikorkaio/android-app',
  },
  {
    title: 'Raiden Light Client',
    description:
      'JavaScript SDK, CLI and dApp to carry out fast, cheap, scalable off-chain token transfers.',
    image: raidenImg,
    url: 'https://github.com/raiden-network/light-client',
  },
  {
    title: 'Raiden WebUI',
    description: 'The frontend for the original Raiden Python Implementation',
    image: raidenImg,
    url: 'https://github.com/raiden-network/webui',
  },
  {
    title: 'White Mobile Cloud (Android App)',
    description:
      'White Label Cloud Backup/Restore Android application part of the White Mobile Cloud Platform',
    image: wmcImg,
    url: 'http://whitemobilecloud.com',
  },
];

const {
  public: { github },
} = useRuntimeConfig();
</script>

<template>
  <section class="items-center py-16 lg:h-screen px-4">
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="max-w-xl mx-auto">
        <div class="text-center text-4xl font-bold">Projects</div>
      </div>
      <div class="max-w-xl mx-auto mt-8">
        <p class="text-center text-sm text-gray-400">
          Here you can find a small curated list of projects I was involved with
          in the past.
          <br />
          For a more you can also visit my
          <a
            :href="github"
            target="_blank"
            rel="noreferrer nofollow"
            class="transition hover:text-primary-500"
            >GitHub</a
          >.
        </p>
      </div>
      <div class="mt-16 sm:mt-20">
        <ul
          role="list"
          class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <template v-for="project in projects" :key="project.title">
            <ProjectEntry :url="project.url" :img="project.image">
              <template #title> {{ project.title }}</template>
              {{ project.description }}
            </ProjectEntry>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>
