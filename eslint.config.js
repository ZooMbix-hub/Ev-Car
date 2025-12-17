import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'quotes': ['warn', 'single'],
      'prefer-const': 'warn',
      'indent': ['warn', 2],
      'semi': ['warn', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'react/prop-types': 0,
      'no-trailing-spaces': 'error',
      'no-useless-escape': 'warn'
    }
  },
])
