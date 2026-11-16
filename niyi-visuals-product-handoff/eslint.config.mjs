import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs['flat/recommended'],
  { files: ['**/*.astro'], languageOptions: { parserOptions: { parser: ts.parser } } },
  { files: ['src/**/*.ts', 'src/**/*.tsx'], languageOptions: { globals: { URL: 'readonly', console: 'readonly', HTMLAnchorElement: 'readonly', MouseEvent: 'readonly', document: 'readonly', window: 'readonly', HTMLElement: 'readonly', HTMLDialogElement: 'readonly', HTMLButtonElement: 'readonly', HTMLImageElement: 'readonly', HTMLDetailsElement: 'readonly', IntersectionObserver: 'readonly', requestAnimationFrame: 'readonly' } } },
];
