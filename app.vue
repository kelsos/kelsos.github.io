<script lang="ts" setup>
import { get, isClient } from '@vueuse/core';

const {
  public: { analytics },
} = useRuntimeConfig();

useHead({
  title: 'Konstantinos Paparas (Kelsos)',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    {
      key: 'description',
      name: 'description',
      content:
        'The portfolio website of Konstantinos Paparas, Software Engineer',
    },
    {
      name: 'keywords',
      content: 'konstantinos paparas, kelsos, portfolio, software engineer',
    },
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-mt-4',
  },
  bodyAttrs: {
    class: 'antialiased font-sans dark:text-gray-200 dark:bg-zinc-900',
  },
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${get(analytics)}`,
      type: 'text/javascript',
      async: true,
    },
  ],
});

if (isClient) {
  window.dataLayer = window.dataLayer || [];

  const gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };

  gtag('js', new Date());
  gtag('config', analytics);
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
