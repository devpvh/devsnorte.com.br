module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/files/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'out/css/',
                ext: '.min.css'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
}
