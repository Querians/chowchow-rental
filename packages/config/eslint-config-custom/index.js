module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
