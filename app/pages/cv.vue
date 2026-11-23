<script setup lang="ts">
import { cvProjects, cvSummary, education, experience, languages, skillCategories } from '~/data/cv';

definePageMeta({ layout: 'cv' });

useSeoMeta({
  title: 'CV - Konstantinos Paparas',
  description: 'Curriculum vitae of Konstantinos Paparas, software engineer and Frontend Lead at Rotki.',
});

const {
  public: { email, github, linkedin },
} = useRuntimeConfig();

const strip = (url: string) => url.replace(/^(?:mailto:|https?:\/\/)/, '').replace(/\/$/, '');

const contacts = [
  { label: 'kelsos.net', href: 'https://kelsos.net' },
  { label: strip(email), href: email },
  { label: strip(github), href: github },
  { label: strip(linkedin).replace(/^\w+\./, ''), href: linkedin },
];
</script>

<template>
  <div class="cv-page mx-auto max-w-[210mm] px-4 py-8 print:p-0">
    <nav
      class="mb-4 flex items-center justify-between text-sm print:hidden"
      aria-label="CV actions"
    >
      <NuxtLink
        to="/"
        class="text-muted hover:text-fg transition-colors duration-200"
      >
        &larr; kelsos.net
      </NuxtLink>
      <a
        href="/cv.pdf"
        download="Konstantinos-Paparas-CV.pdf"
        class="inline-flex items-center gap-1.5 font-medium text-fg border-b border-accent pb-0.5 hover:text-accent transition-colors duration-200"
      >
        <Icon
          name="heroicons:arrow-down-tray"
          class="w-4 h-4 text-accent"
        />
        Download PDF
      </a>
    </nav>

    <article class="cv bg-white text-[#44403c] shadow-sm ring-1 ring-line px-6 py-8 sm:px-[16mm] sm:py-[14mm] print:shadow-none print:ring-0 print:p-0">
      <header class="border-b border-[#e7e2da] pb-5">
        <h1 class="font-display text-4xl font-medium tracking-tight text-[#1c1917]">
          Konstantinos Paparas
        </h1>
        <p class="mt-1 text-[15px] font-medium text-[#b45309]">
          Software Engineer · Frontend Lead
        </p>
        <ul class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-[#78716c]">
          <li>Berlin, Germany</li>
          <li
            v-for="contact in contacts"
            :key="contact.href"
          >
            <a
              :href="contact.href"
              class="hover:text-[#1c1917]"
            >
              {{ contact.label }}
            </a>
          </li>
        </ul>
        <p class="mt-4 text-[13px] leading-relaxed">
          {{ cvSummary }}
        </p>
      </header>

      <section class="mt-6">
        <h2 class="cv-heading">
          Experience
        </h2>
        <div
          v-for="entry in experience"
          :key="`${entry.company}-${entry.role}`"
          class="cv-entry mt-4"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-[14px] font-semibold text-[#1c1917]">
              {{ entry.role }}
              <span class="font-normal text-[#b45309]">· {{ entry.company }}</span>
            </h3>
            <span class="text-[12px] tabular-nums text-[#78716c]">{{ entry.period }}</span>
          </div>
          <ul class="mt-1.5 list-disc space-y-0.5 pl-4 text-[12.5px] leading-snug marker:text-[#b45309]">
            <li
              v-for="(item, i) in entry.highlights"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>
          <p
            v-if="entry.stack"
            class="mt-1 text-[11.5px] text-[#78716c]"
          >
            {{ entry.stack.join(' · ') }}
          </p>
        </div>
      </section>

      <section class="mt-6 cv-entry">
        <h2 class="cv-heading">
          Open-source Projects
        </h2>
        <div
          v-for="project in cvProjects"
          :key="project.title"
          class="mt-3"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-[14px] font-semibold text-[#1c1917]">
              <a
                :href="project.url"
                class="hover:text-[#b45309]"
              >
                {{ project.title }}
              </a>
            </h3>
            <span class="text-[12px] tabular-nums text-[#78716c]">{{ project.period }}</span>
          </div>
          <p class="mt-0.5 text-[12.5px] leading-snug">
            {{ project.description }}
          </p>
        </div>
      </section>

      <section class="mt-6 cv-entry">
        <h2 class="cv-heading">
          Skills
        </h2>
        <dl class="mt-3 grid grid-cols-[8.5rem_1fr] gap-x-4 gap-y-1 text-[12.5px] leading-snug">
          <template
            v-for="category in skillCategories"
            :key="category.name"
          >
            <dt class="font-medium text-[#1c1917]">
              {{ category.name }}
            </dt>
            <dd>{{ category.skills.join(' · ') }}</dd>
          </template>
        </dl>
      </section>

      <div class="mt-6 grid gap-6 sm:grid-cols-2 cv-entry">
        <section>
          <h2 class="cv-heading">
            Education
          </h2>
          <div
            v-for="entry in education"
            :key="entry.institution"
            class="mt-3 text-[12.5px]"
          >
            <p class="font-semibold text-[#1c1917]">
              {{ entry.degree }}, Computer Science
            </p>
            <p>{{ entry.institution }} · {{ entry.period }}</p>
          </div>
        </section>
        <section>
          <h2 class="cv-heading">
            Languages
          </h2>
          <ul class="mt-3 text-[12.5px] space-y-0.5">
            <li
              v-for="language in languages"
              :key="language"
            >
              {{ language }}
            </li>
          </ul>
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
.cv-heading {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1c1917;
  border-bottom: 1px solid #e7e2da;
  padding-bottom: 4px;
}

.cv-entry {
  break-inside: avoid;
}

@media print {
  .cv-page {
    max-width: none;
  }
}
</style>

<style>
@page {
  size: A4;
  margin: 14mm 16mm;
}

@media print {
  html,
  body {
    background: #fff !important;
  }
}
</style>
