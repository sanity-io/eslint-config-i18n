# @sanity/eslint-config-i18n

An ESLint configuration to help with localizing Sanity Studios.

This ESLint config provides rules to enforce specific code standards in internationalization practices, particularly focusing on strings literals in JSX. It aims to improve code quality and maintainability in projects with internationalization concerns.

Depends on:

- [`@sanity/eslint-plugin-i18n`](https://github.com/sanity-io/eslint-plugin-i18n)
  - Rule [`no-attribute-string-literals`](https://github.com/sanity-io/eslint-plugin-i18n#no-attribute-string-literals)
  - Rule [`no-attribute-template-literals`](https://github.com/sanity-io/eslint-plugin-i18n#no-attribute-template-literals)
- [`eslint-plugin-i18next`](https://github.com/edvardchen/eslint-plugin-i18next)
  - Rule [`no-literal-string`](https://github.com/edvardchen/eslint-plugin-i18next#rule-no-literal-string)

## Installation

### Install

```
pnpm add eslint @sanity/eslint-config-i18n --save-dev
```

or

```
npm install eslint @sanity/eslint-config-i18n --save-dev
```

### Update the configuration

Update your `eslint.config.mjs` to include `"@sanity/eslint-config-i18n"`

```diff
 import studio from '@sanity/eslint-config-studio'
+import i18n from '@sanity/eslint-config-i18n'

export default [
   ...studio,
+  ...i18n,
]
```

### Version compatibility

This package is designed to work with ESLint >= 9, which supports/uses the new ["flat configuration"](https://eslint.org/blog/2022/08/new-config-system-part-2/) format.

If you are using ESLint <= 8, you should install and use [`@sanity/eslint-config-i18n@1`](https://github.com/sanity-io/eslint-config-i18n/tree/v1.1.0).

## Release new version

Run ["CI & Release" workflow](https://github.com/sanity-io/eslint-config-i18n/actions).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
