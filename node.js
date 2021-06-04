module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  env: { node: true, browser: false },
  rules: {
    'no-console': 'error',
    'global-require': 'off',
    'node/global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'off',
    'node/no-new-require': 'error',
    'no-path-concat': 'off',
    'node/no-path-concat': 'error',
    'no-process-env': 'off',
    'node/no-process-env': 'warn',
    'no-process-exit': 'off',
    'node/no-process-exit': 'error',
    'no-sync': 'off',
    'node/no-sync': 'error',
    'node/exports-style': 'error',
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error'
  }
}
