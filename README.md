# @sanity/eslint-config-i18n

An ESLint configuration to help with localizing Sanity Studios.

This package utilizes [@rushstack/eslint-patch](https://github.com/microsoft/rushstack/tree/ebee58403b1595027da7ef00a4d817d83ecbd737/eslint/eslint-patch#what-it-does) to include plugins as dependencies. This making installation easier and allows us to manage those dependencies for you.

Depends on:

- [`@sanity/eslint-plugin-i18n`](https://github.com/sanity-io/eslint-plugin-i18n)
  - Rule [`no-attribute-string-literals`](https://github.com/sanity-io/eslint-plugin-i18n#no-attribute-string-literals)
  - Rule [`no-attribute-template-literals`](https://github.com/sanity-io/eslint-plugin-i18n#no-attribute-template-literals)
- [`eslint-plugin-i18next`](https://github.com/edvardchen/eslint-plugin-i18next)
  - Rule [`no-literal-string`](https://github.com/edvardchen/eslint-plugin-i18next#rule-no-literal-string)

## Installation

### Install

```
yarn add eslint @sanity/eslint-config-i18n --dev
```

or

```
npm install eslint @sanity/eslint-config-i18n --save-dev
```

### Update the configuration

Update your `.eslintrc` to include `"@sanity/eslint-config-i18n"`

```
{
  "extends": [
    "@sanity/eslint-config-studio",
    "@sanity/eslint-config-i18n"
  ]
}
```

Optionally: If you wish to configure `@sanity/eslint-plugin-i18n`:

```json
{
  "extends": ["@sanity/eslint-config-studio", "@sanity/eslint-config-i18n"],
  "rules": {
    "@sanity/i18n/no-attribute-string-literals": [
      "error",
      // See https://github.com/sanity-io/eslint-plugin-i18n#rule-options
      {
        "ignores": {},
        "only": {},
        "mode": "extend"
      }
    ],
    "@sanity/i18n/no-attribute-template-literals": [
      "error",
      // See https://github.com/sanity-io/eslint-plugin-i18n#rule-options
      {
        "ignores": {},
        "only": {},
        "mode": "extend"
      }
    ]
  },
  "overrides": [
    // turn off these rules for your tests
    {
      "files": [
        "**/*/test/**/*",
        "**/*/__tests__/**/*",
        "**/*.test.{js,ts,tsx}"
      ],
      "rules": {
        "i18next/no-literal-string": "off",
        "@sanity/i18n/no-attribute-string-literals": "off",
        "@sanity/i18n/no-attribute-template-literals": "off"
      }
    }
  ]
}
```

## Release new version

Run ["CI & Release" workflow](https://github.com/sanity-io/eslint-config-i18n/actions).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
