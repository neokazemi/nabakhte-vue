module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-class-pattern': null,
    'selector-max-universal': 10,
    'selector-max-compound-selectors': 10,
    'max-nesting-depth': 5
  }
}
