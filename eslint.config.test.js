import baseConfig from './index.js'

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
      },
    },
  },
]
