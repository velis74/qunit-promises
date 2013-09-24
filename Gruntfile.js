/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    datetime: Date.now(),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      'default': {
        src: [ 'Gruntfile.js', 'qunit-promises.js' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-deps-ok');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['deps-ok', 'jshint']);
};