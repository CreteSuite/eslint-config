module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    // core
    "@typescript-eslint/no-empty-interface": ['warn', {
      allowSingleExtends: true
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTaggedTemplates: true,
      allowTernary: false,
    }],
    '@typescript-eslint/no-use-before-define': 'off',
    'consistent-return': 'off',
    'import/no-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'newline-per-chained-call': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'no-use-before-define': 'off',
    'prefer-const': ['error', { 'destructuring': 'all' }],
    'radix': ['error', 'as-needed'],

    // basic formatting things, prettier is too strict
    'semi': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/semi': ['warn', 'never'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'operator-linebreak': 'off',

    // shadow customizing
    'no-shadow-restricted-names': 'error',
    '@typescript-eslint/no-shadow': ['warn', {
      'allow': [
        'err', // multiple catches should be avoided, but sometimes neccessary
        't', // t for nested nexus dsl
      ]
    }],

    // allow _ vars
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': ['warn',
      {
        'selector': 'variable',
        'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow'
      }
    ],

    // devs have autonomy to overwrite with description
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description'
    }],

    // unused-imports handles auto fix of unused imports, but allows vars to error
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      'vars': 'all',
      'varsIgnorePattern': '^_',
      'args': 'none', // define interfaces that makes sense, even if variable is unused (ex ctx)
      'ignoreRestSiblings': true
    }],

    // omit ForOfStatement from airbnb's default
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  }
}
