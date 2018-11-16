module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        watch: {
            files: ['**/*.js'],
            tasks: ['test']
        },
        shell: {
            test: 'npm test --force'
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['shell:test']);
};
