module.exports = function (grunt) {

    // configure
    grunt.initConfig({
        jshint: {
            client: [
                'Gruntfile.js'
            ],
        }
    });

    // load
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // register
    grunt.registerTask('default', ['jshint']);
};
