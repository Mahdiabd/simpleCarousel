module.exports = {
    docs: {
        options: {
            globals: {
                'title': 'Simple Carousel with ReactJs and BaconJs'
            }
        },
        files: [
            {
                expand: true,
                cwd: 'src/docs',
                src: ['**/*', '!**/*.inc.html'],
                dest: 'dist/docs'
            }
        ]
    }
};
