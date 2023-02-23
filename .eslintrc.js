// @ts-check

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["./index.js"],
};

module.exports = eslintConfig;
