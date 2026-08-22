import pluginNuxt from '@nuxt/eslint-plugin';
import rotki from '@rotki/eslint-config';

export default rotki({
  vue: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  stylistic: true,
  formatters: true,
}, {
  files: ['**/*.ts'],
  rules: {
    'perfectionist/sort-objects': 'error',
  },
}, {
  plugins: {
    nuxt: pluginNuxt,
  },
  rules: {
    'nuxt/no-page-meta-runtime-values': 'error',
    'nuxt/prefer-import-meta': 'error',
  },
}, {
  // Only meaningful on the Nuxt config itself. `nuxt/nuxt-config-keys-order` is
  // left off on purpose: it wants Nuxt's canonical key order, which contradicts
  // the alphabetical `perfectionist/sort-objects` applied to every .ts file.
  files: ['nuxt.config.ts'],
  rules: {
    'nuxt/no-nuxt-config-test-key': 'error',
  },
}, {
  files: [
    'vue-shims.d.ts',
    'modules/**/*.ts',
    'server/**/*.ts',
    'middleware/**/*.ts',
    'plugins/**/*.ts',
    'app/router.options.ts',
  ],
  rules: {
    'import/no-default-export': 'off',
  },
}, {
  // Code samples inside blog posts are illustrative; Nuxt config/route/component
  // snippets legitimately use `export default`, so don't flag them.
  files: ['content/**/*.md/**'],
  rules: {
    'import/no-default-export': 'off',
  },
});
