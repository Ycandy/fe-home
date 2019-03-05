module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  parserOptions: {
    parser: 'babel-eslint'
  },
  // required to lint *.vue files
  plugins: [
    'html', 'vue'
  ],
  settings: {
    "html/html-extensions": ['.html', '.vue']
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'func-style': ["error", "declaration", { "allowArrowFunctions": true }]
  }
}
