// `@rushstack/eslint-patch` patches eslint so that shared configs can include
// plugins as dependencies. Without this patch, plugins have to be included as
// peer dependencies in studios.
//
// create-react-app https://github.com/facebook/create-react-app/blob/9673858a3715287c40aef9e800c431c7d45c05a2/packages/eslint-config-react-app/base.js#L11
// and next.js:     https://github.com/vercel/next.js/blob/0de84472eb565d5ecae1e6b71994f0cd46c8ecb9/packages/eslint-config-next/index.js#L7
// both use this
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['i18next', '@sanity/i18n'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },

  rules: {
    'i18next/no-literal-string': 'error',
    '@sanity/i18n/no-attribute-string-literals': 'error',
    '@sanity/i18n/no-attribute-template-literals': 'error',
    '@sanity/i18n/no-i18next-import': 'error',
  },

  overrides: [
    {
      files: [`**/*/test/**/*`, '**/*/__tests__/**/*', '**/*.test.{js,ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        '@sanity/i18n/no-attribute-string-literals': 'off',
        '@sanity/i18n/no-attribute-template-literals': 'off',
      },
    },
  ],
};
