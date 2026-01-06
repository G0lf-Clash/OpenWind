import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore build artifacts and large generated data files
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/data/**',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React 17+ JSX transform (no need to import React)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'warn',

      // Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Vite React Fast Refresh safety
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Small quality-of-life rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'react/prop-types': 'off',
    },
  },

  // Disable rules that conflict with Prettier
  prettier,
];
