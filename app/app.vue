<script lang="ts" setup>
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

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
  ogType: 'website',
  ogUrl: 'https://kelsos.net',
  ogSiteName: 'Konstantinos Paparas Portfolio',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Konstantinos Paparas (Kelsos) - Privacy-First Open Source Software Engineer',
  twitterDescription: 'Software engineer specializing in open-source development with focus on privacy-preserving applications. Frontend Lead at Rotki.',
});

// Site-wide default OG image, rendered at build by the Satori template
// (app/components/OgImage/Site.satori.vue). Pages can override per-route.
defineOgImage('Site', {
  title: 'Privacy-First Open Source Software Engineer',
  description: 'Frontend Lead at Rotki building tools for financial privacy. Vue.js, TypeScript, Kotlin.',
});

useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-mt-4',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-body bg-bg',
  },
  script: [
    // No-flash theme: set the `dark` class before paint based on the stored
    // preference (key `theme`, matching useTheme) or the system setting.
    {
      innerHTML:
        '(function(){try{var s=localStorage.getItem(\'theme\');var m=window.matchMedia(\'(prefers-color-scheme: dark)\').matches;var d=s===\'dark\'||((s===null||s===\'auto\')&&m);document.documentElement.classList.toggle(\'dark\',d);}catch(e){document.documentElement.classList.add(\'dark\');}})();',
      tagPosition: 'head',
    },
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
