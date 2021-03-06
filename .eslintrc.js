module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    /* 'plugin:react/recommended' */
  ],
  'parserOptions': {
    'ecmaVersion': 11
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 'error'
  }
}