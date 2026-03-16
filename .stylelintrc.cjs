/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-order'],
  rules: {
    'no-duplicate-selectors': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-no-qualifying-type': [
      true,
      { ignore: ['attribute', 'class'] }
    ],
    'selector-attribute-quotes': 'always',
    'declaration-no-important': true,
    'font-weight-notation': 'numeric',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'rule-empty-line-before': 'always',
    'selector-pseudo-element-colon-notation': 'single',

    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(?:-[a-z0-9]+)*)(__[a-z0-9]+(?:-[a-z0-9]+)*)?(--[a-z0-9]+(?:-[a-z0-9]+)*)?$',
      {
        message: 'Expected class selector to be BEM (block__element--modifier)'
      }
    ],

    'keyframes-name-pattern': [
      '^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be snake_case'
      }
    ],

    'order/properties-alphabetical-order': true
  }
}