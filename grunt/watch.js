module.exports = {
    js: {
        files: ['src/**/*.js'],
        tasks: [
            'newer:eslint:application' // 'lint-js',
        ]
    },
    docs: {
        files: ['src/docs/**/*'],
        tasks: ['build-docs']
    },
    styles: {
        files: ['src/styles/*.scss'],
        tasks: ['build-styles-dev', 'replace:cssTestExternalFix']
    }
};
