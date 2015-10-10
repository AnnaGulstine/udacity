module.exports = function(grunt) {
	grunt.initConfig({
	  uglify: {
	    my_target: {
	      files: {
	        'js/main.min.js': ['js/main.js']
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['uglify']);
};