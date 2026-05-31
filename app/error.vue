<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{ error: NuxtError }>();

const code = computed(() => error?.statusCode ?? 500);
const isNotFound = computed(() => code.value === 404);
const heading = computed(() => (isNotFound.value ? 'Page not found' : 'Something went wrong'));
const message = computed(() =>
  isNotFound.value
    ? 'The page you\'re looking for doesn\'t exist or may have moved.'
    : 'An unexpected error occurred. Please try again in a moment.',
);

// error.vue renders outside app.vue, so the head essentials (lang, theme class,
// and the no-flash theme script) have to be re-declared here.
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-mt-4',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-body bg-bg',
  },
  script: [
    {
      innerHTML:
        '(function(){try{var s=localStorage.getItem(\'theme\');var m=window.matchMedia(\'(prefers-color-scheme: dark)\').matches;var d=s===\'dark\'||((s===null||s===\'auto\')&&m);document.documentElement.classList.toggle(\'dark\',d);}catch(e){document.documentElement.classList.add(\'dark\');}})();',
      tagPosition: 'head',
    },
  ],
});

useSeoMeta({
  title: () => `${code.value} · ${heading.value}`,
  robots: 'noindex, follow',
});
</script>

<template>
  <NuxtLayout name="default">
    <main
      aria-label="Error"
      class="max-w-5xl mx-auto px-6 py-28 md:py-40 min-h-[60vh] flex flex-col items-start justify-center"
    >
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-accent" />
        <p class="text-xs font-medium uppercase tracking-widest text-muted">
          Error {{ code }}
        </p>
      </div>

      <p
        class="mt-6 font-display text-7xl md:text-9xl font-medium leading-none tracking-tight text-fg"
        aria-hidden="true"
      >
        {{ code }}
      </p>

      <h1 class="mt-6 font-display text-3xl md:text-4xl font-medium tracking-tight text-fg">
        {{ heading }}
      </h1>

      <p class="mt-4 max-w-md text-base leading-relaxed text-body">
        {{ message }}
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
        <button
          type="button"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-fg border-b border-accent pb-1 transition-colors duration-200 hover:text-accent"
          @click="clearError({ redirect: '/' })"
        >
          Back home
          <Icon
            name="heroicons:arrow-right"
            class="w-4 h-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
        <NuxtLink
          to="/blog"
          class="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
        >
          Read the blog &rarr;
        </NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>
