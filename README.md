# @matali/eslint-config

Personal,
[shareable ESLint configuration](https://eslint.org/docs/latest/extend/shareable-configs)
for [TypeScript](https://typescriptlang.org/) and [Next.js](https://nextjs.org/)
projects.

## Features

- Autofixable sorting of:
  - [destructured object keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys),
  - [imports](https://github.com/lydell/eslint-plugin-simple-import-sort)
    including folders inside of `/src` directory,
  - [interface and type keys](https://github.com/infctr/eslint-plugin-typescript-sort-keys),
  - [object keys](https://github.com/namnm/eslint-plugin-sort-keys),
  - [React props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md).
- Autofixable
  [removal of unused imports](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md).
- [Prettier compatibility](https://github.com/prettier/eslint-config-prettier).
- Recommended [ESLint](https://eslint.org/docs/latest/rules/),
  [Next.js](https://nextjs.org/docs/basic-features/eslint#eslint-plugin) and
  [typescript-eslint](https://typescript-eslint.io/rules/) rules.

## Installation

```
npm install --save-dev @matali/eslint-config @typescript-eslint/parser eslint typescript
```

```
yarn add --dev @matali/eslint-config @typescript-eslint/parser eslint typescript
```

```
pnpm add --save-dev @matali/eslint-config @typescript-eslint/parser eslint typescript
```

## Usage

Specify the parser for TypeScript files in your `.eslintrc.*` configuration
file, provide a path to your project's `tsconfig.json` and add `@matali` to the
`extends` array.

```json
{
  "extends": ["@matali"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

In Next.js projects extend `@matali/eslint-config/next` instead.

```json
{
  "extends": ["@matali/eslint-config/next"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Authors

- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev))

## License

[MIT](./LICENSE)
