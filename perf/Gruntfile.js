module.exports = function(grunt) {
	grunt.initConfig({
	 uglify: {
	    my_target: {
	      files: {
	        'js/main.min.js': ['js/main.js'],
	        'js/perfmatters.min.js': ['js/perfmatters.js']
	      }
	    }
	  },

  htmlmin: {                                    
    dist: {                                      
      options: {                               
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   
        'index.html': 'src.index.html', 
        'pizza.html': 'src.pizza.html'
      }
    }
  },

    cssmin: {
  		options: {
    		shorthandCompacting: false,
    		roundingPrecision: -1
  		},
  		target: {
   			files: {
      			'css/pizza.min.css': ['css/bootstrap-grid.css', 'css/pizzaStyle.css'],
      			'css/css.min.css': ['css/print.css', 'css/style.css']
    		}
  		}
	},

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['uglify' , 'htmlmin', 'cssmin']);
};