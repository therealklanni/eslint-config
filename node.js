module.exports = {
  env: { node: true, browser: false },
  extends: ['./base'],
  rules: {
    'no-console': 'off',
    'global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-sync': 'error'
  }
}
