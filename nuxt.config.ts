// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxthq/ui',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileColor',
          content: '#da532c',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    },
  },
  sitemap: {
    siteUrl: 'https://kelsos.net',
    exclude: ['/card/**'],
  },
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
  },
  colorMode: {
    preference: 'dark',
  },
  content: {
    documentDriven: false,
    sources: {
      content: {
        driver: 'fs',
        base: path.resolve(__dirname, 'content'),
      },
    },
    highlight: {
      theme: {
        light: 'material-lighter',
        default: 'material-default',
        dark: 'material-palenight',
      },
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
    },
  },
  runtimeConfig: {
    public: {
      keybase: '',
      facebook: '',
      twitter: '',
      github: '',
      linkedin: '',
      email: '',
      analytics: '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  routeRules: {
    '/musicbeeremote/**': {
      redirect: {
        to: 'https://mbrc.kelsos.net/',
        statusCode: 301,
      },
    },
    '/news/**': {
      redirect: {
        to: '/blog',
        statusCode: 301,
      },
    },
  },
});
