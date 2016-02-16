module.exports = function(grunt) {

  var path = require('path');
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    /**
    * path to task.js files, defaults to grunt dir
    */
    configPath: path.join(process.cwd(), 'tasks/configs'),
    jitGrunt: {
      customTasksDir: 'tasks/calls'
    }

  });

};
