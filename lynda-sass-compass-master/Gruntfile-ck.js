/*global module:true*/module.exports = function(e) {
    e.loadNpmTasks("grunt-contrib-uglify");
    e.loadNpmTasks("grunt-contrib-watch");
    e.loadNpmTasks("grunt-contrib-compass");
    e.loadNpmTasks("grunt-autoprefixer");
    e.initConfig({
        uglify: {
            my_target: {
                files: {
                    "_/js/script.min.js": [ "_/components/js/*.js" ]
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: [ "opera 12", "ff 15", "chrome 25" ]
            },
            single_file: {
                src: "_/components/sass/styles.scss",
                dest: "_/css/styles.css"
            }
        },
        compass: {
            dev: {
                options: {
                    config: "config.rb"
                }
            }
        },
        watch: {
            options: {
                livereload: !0
            },
            scripts: {
                files: [ "_/components/js/*.js" ],
                tasks: [ "uglify" ]
            },
            sass: {
                files: [ "_/components/sass/*.scss" ],
                tasks: [ "compass:dev" ]
            },
            html: {
                files: [ "*.html" ]
            }
        }
    });
    e.registerTask("default", "watch");
};