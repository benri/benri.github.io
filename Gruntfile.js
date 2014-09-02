//Gruntfile
module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: './assets/compass/config.rb',
        }
      },
    },
    wiredep: {
      target: {
        src: [
          './index.html',   // .html support...
        ],
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },
    watch: {
      css: {
        files: ['./assets/compass/sass/*.css'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      bower_dep: {
        files: ['./bower_components/*'],
        tasks: ['wiredep'],
        options: {
          livereload: true,
        }
      },
      dev: {
        files: './index.html',
        options: {
          livereload: true,
        }
      }
    }

  });

  // Plugin loading
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definition
  grunt.registerTask('default', ['watch']);

};