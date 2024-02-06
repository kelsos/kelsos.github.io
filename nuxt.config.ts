// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';

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
          content: '#ffffff',
          name: 'theme-color',
        },
        {
          content: '#da532c',
          name: 'msapplication-TileColor',
        },
      ],
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  colorMode: {
    preference: 'dark',
  },
  content: {
    documentDriven: false,
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
    sources: {
      content: {
        base: path.resolve(__dirname, 'content'),
        driver: 'fs',
      },
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
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
      analytics: '',
      email: '',
      facebook: '',
      github: '',
      keybase: '',
      linkedin: '',
      twitter: '',
    },
  },
  site: {
    url: 'https://kelsos.net',
  },
  sitemap: {
    exclude: ['/card/**'],
  },
  ssr: true,
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
  },
});
