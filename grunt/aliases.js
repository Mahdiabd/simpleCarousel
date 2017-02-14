module.exports = {
    'default': ['lint', 'build'],

    'lint'     : ['lint-js', 'lint-css'],
    'lint-js'  : ['eslint:application'],
    'lint-css' : ['sasslint'],

    'build': [
        'build-js',
        'build-docs',
        'build-styles'
    ],

    'build-js'      : ['build-js-prod'],
    'build-js-dev'  : ['browserify:docs'],
    'build-js-prod' : [
        'browserify:docs'
    ],

    'build-docs'        : ['includereplace:docs'],

    'build-styles'      : 'build-styles-prod',
    'build-styles-prod' : ['sass:all', 'lint-css'],
    'build-styles-dev' : ['sass:dev', 'lint-css'],

    'build-tests': [
        'browserify:unitTests',
        'browserify:integrationTests',
        'build-styles',
        'replace:cssTestExternalFix'
    ]
};
