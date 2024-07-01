module.exports = {
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],

    'scss/at-import-partial-extension': 'always'
    // 'scss/at-import-partial-extension-blacklist': ['']
  },
  ignoreFiles: ['**/*.js', '**/*.md', '**/*.css'],
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  extends: 'stylelint-config-standard-scss'
}
