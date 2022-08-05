module.exports = {
  plugins: ['jsx-control-statements', 'module-resolver'],
  extends: [
    'react-app',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  rules: {
    'react/jsx-no-undef': [2, { allowGlobals: true }],
  },
  env: {
    'jsx-control-statements/jsx-control-statements': true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
