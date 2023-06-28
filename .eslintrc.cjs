module.exports = {
  extends: ['@rotki'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['i18n-t'],
      },
    ],
  },
};
