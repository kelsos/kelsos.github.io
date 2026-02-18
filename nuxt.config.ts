// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180',
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          href: '/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
        },
        { href: '/site.webmanifest', rel: 'manifest' },
        { color: '#5bbad5', href: '/safari-pinned-tab.svg', rel: 'mask-icon' },
      ],
      meta: [
        {
          content: '#262626',
          name: 'theme-color',
        },
        {
          content: '#262626',
          name: 'msapplication-TileColor',
        },
      ],
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  compatibilityDate: '2024-11-06',

  content: {
    build: {
      markdown: {
        highlight: {
          preload: [
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'diff',
            'shell',
            'markdown',
            'yaml',
            'bash',
            'ini',
          ],
          theme: {
            dark: 'material-theme-palenight',
            default: 'material-theme',
            light: 'material-theme-lighter',
          },
        },
      },
    },
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxt/content',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  ogImage: {
    defaults: {
      cacheMaxAge: 60 * 60 * 24 * 7, // 7 days
      component: 'OgImage',
      height: 630,
      width: 1200,
    },
    enabled: true,
  },

  robots: {
    allow: ['/'],
    disallow: ['/card/**'],
  },

  routeRules: {
    '/musicbeeremote/**': {
      redirect: {
        statusCode: 301,
        to: 'https://mbrc.kelsos.net/',
      },
    },
    '/news/**': {
      redirect: {
        statusCode: 301,
        to: '/blog',
      },
    },
  },

  runtimeConfig: {
    public: {
      analytics: 'G-NKE5157MM6',
      bluesky: 'https://bsky.app/profile/kelsos.bsky.social',
      email: 'mailto:kelsos@kelsos.net',
      facebook: 'https://facebook.com/kelsos',
      github: 'https://github.com/kelsos',
      keybase: 'https://keybase.io/kelsos',
      linkedin: 'https://gr.linkedin.com/in/kelsos',
    },
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  site: {
    defaultLocale: 'en',
    description: 'Software engineer specializing in open-source development with focus on privacy-preserving applications. Frontend Lead at Rotki.',
    name: 'Konstantinos Paparas Portfolio',
    url: 'https://kelsos.net',
  },

  sitemap: {
    exclude: ['/card/**'],
  },

  ssr: true,

  vite: {
    plugins: [tailwindcss()],
  },

});
