module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    'airbnb/rules/react',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    '@cretesuite/eslint-config',
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts', '.d.ts', '.tsx']
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off', // I think we should set a preference, just not sure which
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  }
}
