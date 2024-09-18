import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['.vitepress/dist', '.vitepress/cache'],
  },
  eslintPluginPrettierRecommended,
];
