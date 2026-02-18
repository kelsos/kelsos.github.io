<script lang="ts" setup>
const {
  public: { analytics },
} = useRuntimeConfig();

useSeoMeta({
  title: 'Konstantinos Paparas (Kelsos) - Privacy-First Open Source Software Engineer',
  description: 'Software engineer specializing in open-source development with focus on privacy-preserving applications. Frontend Lead at Rotki building tools for financial privacy.',
  keywords: 'konstantinos paparas, kelsos, portfolio, software engineer, vue.js, typescript, kotlin, android, rotki, privacy, open source, berlin',
  author: 'Konstantinos Paparas',
  ogTitle: 'Konstantinos Paparas (Kelsos) - Privacy-First Open Source Software Engineer',
  ogDescription: 'Software engineer specializing in open-source development with focus on privacy-preserving applications. Frontend Lead at Rotki building tools for financial privacy.',
  ogImage: '/img/author.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogType: 'website',
  ogUrl: 'https://kelsos.net',
  ogSiteName: 'Konstantinos Paparas Portfolio',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Konstantinos Paparas (Kelsos) - Privacy-First Open Source Software Engineer',
  twitterDescription: 'Software engineer specializing in open-source development with focus on privacy-preserving applications. Frontend Lead at Rotki.',
  twitterImage: '/img/author.jpg',
  themeColor: '#262626',
});

useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-mt-4',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-neutral-400 bg-neutral-800',
  },
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${analytics}`,
      type: 'text/javascript',
      async: true,
    },
  ],
});

if (import.meta.client) {
  window.dataLayer = window.dataLayer || [];

  const gtag = function (...args: unknown[]) {
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
