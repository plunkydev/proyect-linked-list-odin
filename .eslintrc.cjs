module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'n/no-unpublished-require': [
      'error',
      {
        allowModules: ['webpack-merge', 'html-webpack-plugin', 'mini-css-extract-plugin'],
      },
    ],
  },
  ignorePatterns: ['dist/', 'node_modules/'],
};
