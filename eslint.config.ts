import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: [ '**/*.{ts,mts,tsx,vue}' ],
    },

    {
        name: 'app/files-to-ignore',
        ignores: [ '**/dist/**', '**/dist-ssr/**', '**/coverage/**' ],
    },

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
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
            'vue/first-attribute-linebreak': [ 'error', { 'singleline': 'below' } ],
            'vue/component-tags-order': [ 'error', { order: [ 'template', 'script', 'style' ] } ],
            'vue/html-closing-bracket-newline': [ 'error', { 'singleline': 'never', 'multiline': 'always' } ],
            'vue/script-indent': [ 'error', 4 ],
            'vue/new-line-between-multi-line-property': [ 'error', { 'minLineOfMultilineProperty': 2 } ],
        },
    },
);
