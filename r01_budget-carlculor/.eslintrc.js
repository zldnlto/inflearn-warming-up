module.exports = {
  root: true,
  extends: ['plugin:tailwindcss/recommended', 'prettier'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      // parser: '@typescript-eslint/parser',
      parser: 'babel-eslint',
    },
  ],
};
