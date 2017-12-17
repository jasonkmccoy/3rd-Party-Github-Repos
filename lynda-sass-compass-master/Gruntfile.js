/*global module:true*/
module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-autoprefixer');

        grunt.initConfig({
                uglify: {
                    my_target: {
                        files: {
                            '_/js/script.min.js': ['_/components/js/*.js']
                        } //files
                    } //my_target
                }, //uglify
                autoprefixer: {
                    options: {
                        // We need to `freeze` browsers versions for testing purposes.
                        browsers: ['opera 12', 'ff 15', 'chrome 25']
                    },

                    single_file: {
                        src: '_/components/sass/styles.scss',
                        dest: '_/css/styles.css'
                    }
                }, // autoprefixer
                compass: {
                    dev: {
                        options: {
                            config: 'config.rb'
                        } //options
                    } //dev
                }, //compass
                watch: {
                    options: {
                        livereload: true
                    },
                    scripts: {
                        files: ['_/components/js/*.js'],
                        tasks: ['uglify']
                    }, //script
                    sass: {
                        files: ['_/components/sass/*.scss'],
                        tasks: ['compass:dev']
                    }, //sass
                    html: {
                        files: ['*.html']
                    }
                } //watch
            }) //initConfig
        grunt.registerTask('default', 'watch');
    } //exports
