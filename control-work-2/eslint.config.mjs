import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig(
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'allure-results/**',
      'allure-report/**',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintConfigPrettier,
);
