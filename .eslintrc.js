module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 2],
    'require-jsdoc': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'linebreak-style': 0
  }
};
