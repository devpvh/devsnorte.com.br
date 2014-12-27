module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            options: {
                paths: ["out/css/"],
                compress: true
            },
            src: {
                files: {
                    "out/css/styles.css": "src/files/less/styles.less"
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less']);
}
