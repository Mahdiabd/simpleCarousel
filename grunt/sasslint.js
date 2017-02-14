module.exports = function () {
    return {
        options: {
            configFile : '.sass-lint.yml'
        },
        target: [
            'src/styles/**/*.scss'
        ]
    };
};
