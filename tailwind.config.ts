import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.{md,yml,json,json5,csv}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
} satisfies Config;
