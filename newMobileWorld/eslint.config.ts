import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/Pods/**',
      '**/build/**',
      '**/android/**',
      '**/ios/**',
      '**/coverage/**',
      'babel.config.js',
      'metro.config.js',
      'react-native.config.js',
      'jest.config.ts',
      'commitlint.config.ts',
      'scripts/fontScript.js',
      'scripts/imagesScript.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  react.configs.flat.recommended,
  reactHooks.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-native': reactNative,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react-native/no-unused-styles': 'warn',
    },
  },
  eslintConfigPrettier,
);
