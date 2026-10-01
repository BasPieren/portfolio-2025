/** @type {import('stylelint').Config} */
export default {
    // only rules that catch mistakes, formatting is left to oxfmt
    // @see: https://www.npmjs.com/package/stylelint-config-recommended
    extends: ['stylelint-config-recommended'],
    rules: {
        // flat BEM selectors trigger this without being a real problem
        'no-descending-specificity': null,
        // allow Vue's scoped style pseudo-classes
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'deep'],
            },
        ],
        // native CSS nesting does not concatenate, so `&__element` / `&--modifier` silently match nothing
        'selector-nested-pattern': [
            '^(?!&[_-])',
            {
                message:
                    'Write BEM elements and modifiers as full class names, native CSS nesting does not concatenate "&"',
            },
        ],
    },
};
