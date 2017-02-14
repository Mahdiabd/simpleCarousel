module.exports = function ( grunt ) {
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-notify');

    var target = grunt.option('target') || 'dev';

    grunt.loadNpmTasks('grunt-env');
    grunt.task.run('env:' + target);

    require('load-grunt-config')(grunt, {
        data: { //data passed into config.  Can use with <%= test %>
            pkg: grunt.file.readJSON('package.json')
        },
        jitGrunt: {
            staticMappings: {
                env            : 'grunt-env',
                eslint         : 'gruntify-eslint',
                includereplace : 'grunt-include-replace',
                sasslint       : 'grunt-sass-lint'
            }
        }
    });

    grunt.registerTask('test', 'Run tests for all your browsers', function () {
        // Skip testing
    });

    grunt.registerTask('watcher', 'Grunt Watches and Browserify Watches', function () {
        var watchers = [
            'browserify:docsWatch',

            'browserify:unitTestsWatch',
            'browserify:integrationTestsWatch'
        ];
        var child;

        watchers.forEach(function (watch) {
            child = grunt.util.spawn({
                grunt: true,
                args: watch
            }, function (error, result, code) {
                grunt.log.writeln(watch + ': Result');
                grunt.log.writeln(error);
                grunt.log.writeln(result);
                grunt.log.writeln(code);
            });
            child.stdout.pipe(process.stdout);
            child.stderr.pipe(process.stderr);
        });

        grunt.task.run('watch');
    });
};
