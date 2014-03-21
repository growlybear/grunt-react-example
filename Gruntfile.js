module.exports = function (grunt) {

    // configure
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            client: [
                'Gruntfile.js'
            ],
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['react_components/**/*.jsx'],
                dest: 'js/dist/bundle.js'
            }
        },

        watch: {
            react: {
                files: 'react_components/*.jsx',
                tasks: ['browserify']
            }
        }
    });

    // load
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    // register
    grunt.registerTask('default', ['jshint', 'browserify']);
};
