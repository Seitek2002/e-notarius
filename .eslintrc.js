module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base'
  ],
  overrides: [],
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-use-before-define': 0,
    'no-restricted-syntax': ['error', 'BinaryExpression[operator=\'of\']'],
    'no-tabs': 'error',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'vue/no-v-html': 'off',

    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'camelcase': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',
    'lines-between-class-members': 'off',
    'no-console': 'warn',
    'no-mixed-operators': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    // allow debugger during development only
    'no-debugger': 'error',

    // need to remove this shit
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'default-case': 'off',
    'no-unused-expressions': 'off',
    'prefer-destructuring': 'warn',
    'no-undef': 'warn',
    'no-empty': 'warn',
    'max-len': ['off', 120],
    // 'simple-import-sort/imports': 'warn',
    'vue/multi-word-component-names': 'off'
  }
}
