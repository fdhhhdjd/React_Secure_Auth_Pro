module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src/'], // Adjust if your source directory is different
      },
      alias: {
        map: [
          ['@', './src'], // Adjust the path as necessary
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },

  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'import',
    'prefer-arrow',
    'react-refresh',
    'import',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-template-curly-in-string': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./**'],
      },
    ],
    'react/jsx-fragments': ['error', 'element'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@**/*',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', // or 'desc'
          caseInsensitive: true,
        },
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error', 'time', 'timeEnd'],
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
};
