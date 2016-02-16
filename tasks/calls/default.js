module.exports = function(grunt) {
  grunt.registerTask('default', ['less:development', 'browserSync', 'watch']);
};
