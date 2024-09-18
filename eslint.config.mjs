import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: ['.vitepress/dist', '.vitepress/cache'],
  },
  eslintConfigPrettier,
];
