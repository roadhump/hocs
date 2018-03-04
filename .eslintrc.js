module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.js'],
      env: {
        jest: true,
      },
    },
  ],
};
