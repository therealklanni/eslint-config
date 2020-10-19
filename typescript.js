/* eslint-disable no-magic-numbers */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['./base', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/array-type': 'error',
    // must disable the base rule as it can report incorrect errors
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { constructors: 'no-public' }
      }
    ],
    // must disable the base rule as it can report incorrect errors
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // must disable the base rule as it can report incorrect errors
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    // must disable the base rule as it can report incorrect errors
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],
    // must disable the base rule as it can report incorrect errors
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    // must disable the base rule as it can report incorrect errors
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    // must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    // must disable the base rule as it can report incorrect errors
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/return-await': 'warn',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    // must disable the base rule as it can report incorrect errors
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/unified-signatures': 'error'
  }
}
