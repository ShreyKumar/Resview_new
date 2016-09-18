module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: "js/*.js",
        dest: "build/main.js"
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/style.min.css': ['build/css/*.css']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify', 'sass', 'cssmin'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['public/scss/*.scss'],
        tasks: ['uglify', 'sass', 'cssmin']
      }
    }
  });
  /* See answer to SASS here: http://stackoverflow.com/questions/39555122/sass-installation-issues*/
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch','uglify', 'sass', 'cssmin']);
}
