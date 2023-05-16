module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 14,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
      'react/react-in-jsx-scope': 0,
      'react/function-component-definition': 0,
      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'react/require-default-props': 0,
      'no-restricted-syntax': 0,
      'guard-for-in': 0,
      'import/extensions': 0,
      'react/jsx-props-no-spreading': 0,
   },
};
