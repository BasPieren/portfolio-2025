/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
    ],
    plugins: [
        'stylelint-declaration-strict-value',
        'stylelint-order',
        '@stylistic/stylelint-plugin',
    ],
    rules: {
        // stylelint built-in rules
        // @see: https://stylelint.io/user-guide/rules
        'at-rule-empty-line-before': [ 'always', {
            'except': [
                'first-nested',
            ],
            'ignore': [
                'blockless-after-same-name-blockless',
                'after-comment',
            ],
            'ignoreAtRules': [ 'include', 'layer', 'if', 'else' ],
        } ],
        'color-named': 'never',
        'declaration-empty-line-before':[ 'always', {
            'except': [
                'after-comment',
                'after-declaration',
                'first-nested',
            ],
        } ],
        'at-rule-no-unknown': null,
        'no-descending-specificity': null,
        'property-disallowed-list': [ 'float' ],
        'color-hex-length': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                'ignorePseudoClasses': [
                    'global',
                    'deep',
                ],
            },
        ],
        'selector-class-pattern': [
            '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
            {
                'resolveNestedSelectors': true,
                'message': function expected(selectorValue) {
                    return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
                },
            },
        ],

        // deprecated built-in stylelint rules, ported over to @stylistic/stylelint-plugin
        // @see: https://www.npmjs.com/package/@stylistic/stylelint-plugin
        '@stylistic/indentation': 4,
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/number-no-trailing-zeros': null,
        '@stylistic/block-closing-brace-newline-after': [ 'always', {
            'ignoreAtRules': [
                'if',
                'else',
            ],
        } ],

        // stylelint-scss specific rules
        // @see: https://www.npmjs.com/package/stylelint-config-standard-scss
        'scss/at-rule-no-unknown': true,
        'scss/at-else-empty-line-before': 'never',

        // enforce SCSS variables / CSS custom properties as values, with some exceptions
        // @see: https://www.npmjs.com/package/stylelint-declaration-strict-value
        'scale-unlimited/declaration-strict-value': [
            [ 'color', 'background-color', 'font-family', 'stroke', 'fill' ], { 'ignoreValues': [ 'transparent', 'inherit', '/#000/', '/#fff/', '/color-mix/', 'currentColor', 'initial' ] },
        ],

        // enforce order of properties
        // @see: https://www.npmjs.com/package/stylelint-order
        'order/order': [
            'custom-properties',
            'dollar-variables',
            {
                'type': 'at-rule',
                'name': 'extend',
            },
            {
                'type': 'at-rule',
                'name': 'include',
                'hasBlock': false,
            },
            'declarations',
            {
                'type': 'at-rule',
                'name': 'include',
                'hasBlock': true,
            },
            'rules',
        ],
        'order/properties-order': [
            'anchor-name',

            'content',

            'display',

            'grid',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',
            'justify-items',
            'align-items',
            'place-items',
            'justify-content',
            'align-content',
            'place-content',
            'grid-auto-row',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-row',
            'grid-column',
            'grid-area',
            'grid-row-start',
            'grid-row-end',
            'grid-column-start',
            'grid-column-end',
            'justify-self',
            'align-self',
            'place-self',

            'flex',
            'flex-wrap',
            'flex-direction',
            'justify-content',
            'align-items',
            'gap',

            'position',
            'top',
            'inset-block-start',
            'right',
            'inset-inline-end',
            'bottom',
            'inset-block-end',
            'left',
            'inset-inline-start',
            'transform',
            'z-index',

            'width',
            'inline-size',
            'min-width',
            'min-inline-size',
            'max-width',
            'max-inline-size',

            'height',
            'block-size',
            'min-height',
            'min-block-size',
            'max-height',
            'max-block-size',

            'margin',
            'margin-trim',
            'margin-top',
            'margin-block-start',
            'margin-right',
            'margin-inline-end',
            'margin-bottom',
            'margin-block-end',
            'margin-left',
            'margin-inline-start',

            'padding',
            'padding-top',
            'padding-block-start',
            'padding-right',
            'padding-inline-end',
            'padding-bottom',
            'padding-block-end',
            'padding-left',
            'padding-inline-start',

            'cwq',
            'cqh',
            'cqi',
            'cqb',
            'cqmin',
            'cqmax',

            'object-fit',
            'field-sizing',
            'overflow',
            'overflow-x',
            'overflow-y',
            'white-space',
            'text-overflow',
            'text-wrap',
            'word-break',
            'word-wrap',
            'overflow-wrap',

            'visibility',
            'opacity',

            'list-style',
            'list-style-type',

            'border',
            'border-top',
            'border-block-start',
            'border-right',
            'border-inline-end',
            'border-bottom',
            'border-block-end',
            'border-left',
            'border-inline-start',

            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',

            'font',
            'font-family',
            'font-weight',
            'font-style',
            'font-size',
            'line-height',
            'text-align',
            'text-transform',
            'text-indent',
            'text-decoration',

            'color',

            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'background-attachment',
            'background-clip',
            'background-origin',
            'box-shadow',

            'outline',
            'cursor',
            'pointer-events',
            '-webkit-tap-highlight-color',

            'transition',
            'animation',
            'animation-timeline',
            'animation-range',
        ],
    },
};
