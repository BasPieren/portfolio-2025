import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    ...pluginVue.configs['flat/essential'],
    {
        files: [ '**/*.{js,vue}' ],
        rules: {
            indent: [ 'error', 4 ],
            quotes: [ 'error', 'single' ],
            semi: [ 'error', 'always' ],
            'object-curly-newline': [ 'error', { 'multiline': true } ],
            'object-curly-spacing': [ 'error', 'always' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'comma-dangle': [ 'error', 'always-multiline' ],
            'vue/html-indent': [ 'error', 4 ],
            'vue/attribute-hyphenation': [ 'error', 'always' ],
            'vue/max-attributes-per-line': [ 'error', { 'singleline': 1 } ],
            'vue/first-attribute-linebreak': [ 'error', { 'multiline': 'below' } ],
            'vue/block-order': [ 'error', { order: [ 'template', 'script', 'style' ] } ],
            'vue/html-closing-bracket-newline': [ 'error', { 'singleline': 'never', 'multiline': 'always' } ],
            'vue/script-indent': [ 'error', 4 ],
            'vue/new-line-between-multi-line-property': [ 'error', { 'minLineOfMultilineProperty': 2 } ],
            'vue/multi-word-component-names': 'off',
        },
    },
);
