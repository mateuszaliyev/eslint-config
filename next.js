// @ts-check

const { readdirSync, statSync } = require("node:fs");
const { builtinModules } = require("node:module");
const path = require("node:path");
const { cwd } = require("node:process");

/**
 * @returns {string[]}
 */
const getSrcDirectories = () => {
  const rootPath = path.resolve(cwd());
  const srcDirectoryName = "src";
  const srcPath = path.resolve(rootPath, srcDirectoryName);

  const rootDirectory = readdirSync(rootPath);

  if (!rootDirectory.includes(srcDirectoryName)) return [];
  if (!statSync(srcPath).isDirectory()) return [];

  return readdirSync(srcPath);
};

const nodeBuiltinModules = builtinModules.join("|");

const srcDirectories = getSrcDirectories();

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  env: {
    es6: true,
  },
  extends: ["./index.js", "next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "react/display-name": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          [`^(${nodeBuiltinModules})(\\/.*|$)`],
          ["^react"],
          ["^next"],
          ["^@?\\w"],
          ...srcDirectories.map((directory) => [
            `^(@\\/${directory})(\\/.*|\\u0000$|$)`,
          ]),
          ["^\\u0000"],
          ["^\\.\\.(?!\\/?$)", "^\\.\\.\\/?$"],
          ["^\\.\\/(?=.*\\/)(?!\\/?$)", "^\\.(?!\\/?$)", "^\\.\\/?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
};

module.exports = eslintConfig;
