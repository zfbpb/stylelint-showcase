// stylelint.config.mjs
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'value-keyword-case': null,

    'selector-class-pattern': [
      '^([a-z0-9]+(?:-[a-z0-9]+)*)(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$',
      {
        message: 'Class names must follow BEM naming.',
      },
    ],

    'declaration-property-value-disallowed-list': [
      {
        '/.*/': ['/^.*\\s{2,}.*$/'],
      },
      {
        message: 'Property values must not contain multiple consecutive spaces.'
      },
    ],

    'font-family-name-quotes': 'always-where-required',
    'length-zero-no-unit': true,

    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/load-partial-extension': 'never',
    'scss/percent-placeholder-pattern': null,
    'scss/dollar-variable-pattern': '^[a-z0-9-]+$',
    'scss/at-mixin-pattern': '^[a-z0-9-]+$',
    'scss/at-function-pattern': '^[a-z0-9-]+$',
    'scss/double-slash-comment-empty-line-before': ['always', {
      except: ['inside-block'],
    }],

    '@stylistic/indentation': 2,
    '@stylistic/linebreaks': 'unix',
    '@stylistic/max-empty-lines': 1,
    '@stylistic/no-empty-first-line': true,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/string-quotes': 'single',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      }
    ],
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-closing-brace-space-before': null,
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    '@stylistic/declaration-block-semicolon-newline-after': 'always',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/property-case': 'lower',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-space-before': 'never',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-space-before': 'never',
  },
}
