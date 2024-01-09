/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-style': ['error', 'last'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': 'off',
    'quote-props': 'off',
  }
};