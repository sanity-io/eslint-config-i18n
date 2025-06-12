// @ts-check

import i18next from 'eslint-plugin-i18next'
import sanityI18n from '@sanity/eslint-plugin-i18n'

export default [
  {
    name: '@sanity/eslint-config-i18n/recommended',
    plugins: {
      'i18next': i18next,
      '@sanity/i18n': sanityI18n,
    },
    rules: {
      'i18next/no-literal-string': 'error',
      '@sanity/i18n/no-attribute-string-literals': 'error',
      '@sanity/i18n/no-attribute-template-literals': 'error',
      '@sanity/i18n/no-i18next-import': 'error',
    },
  },
  {
    name: '@sanity/eslint-config-i18n/test-overrides',
    files: ['**/*/test/**/*', '**/*/__tests__/**/*', '**/*.test.{js,ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      '@sanity/i18n/no-attribute-string-literals': 'off',
      '@sanity/i18n/no-attribute-template-literals': 'off',
    },
  },
]
