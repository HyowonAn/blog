module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],

  settings: {
    "import/resolver": {
      node: { paths: [path.resolve('./src')]}
    }
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-unused-vars" : 1,
    "comma-dangle" : 0,
    "eol-last" : 0,
    "no-console" : 0,
    "indent": "off",
  },
};
