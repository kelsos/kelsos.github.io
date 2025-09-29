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
  },
} satisfies Config;
