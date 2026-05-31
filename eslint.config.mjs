import rotki from '@rotki/eslint-config';
import pluginNuxt from 'eslint-plugin-nuxt';

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
    ...pluginNuxt.configs.base.rules,
    ...pluginNuxt.configs.recommended.rules,
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
