module.exports = function (grunt) {

    // configure
    grunt.initConfig({
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
                dest: 'scripts/app.built.js'
            }
        }
    });

    // load
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');

    // register
    grunt.registerTask('default', ['jshint']);
};
