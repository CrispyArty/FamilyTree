import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['external', 'builtin', 'parent', 'sibling', 'internal', 'index', 'object'],
          pathGroups: [
            {
              pattern: './*.module.css',
              group: 'object',
            },
            {
              pattern: '@**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@**/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: [],
        },
      ],
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-console': ['warn'],
      // '@typescript-eslint/naming-convention': [
      //   'error',
      //   {
      //     selector: 'interface',
      //     format: ['PascalCase'],
      //     custom: {
      //       regex: '^I[A-Z]',
      //       match: true,
      //     },
      //   },
      // ],
    },
  }),
  eslintConfigPrettier,
];

export default eslintConfig;
