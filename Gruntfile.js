module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n",
                // banner: ";var ENCOM = (function(ENCOM, THREE, document){\n\n",
                // footer: "\nENCOM.Globe = Globe; return ENCOM;\n\n})(ENCOM || {}, THREE, document);"
            },
            dist: {
                src: [
                    'src/point.js',
                    'src/face.js',
                    'src/tile.js',
                    'src/hexasphere.js'
                    // 'src/*.js',
                ],
                dest: 'build/<%= pkg.name %>'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            tasks: ['concat'],
            files: ['src/*.js', 'main.js', 'index.html', 'styles.css', 'Gruntfile.js']
        },

        // copy: {
        //     main : {
        //         files: [
        //         {
        //             src: 'bower_components/quadtree2/quadtree2.js',
        //             dest: 'include/quadtree2.js'
        //         },
        //         {
        //             src: 'bower_components/vec2/vec2.js',
        //             dest: 'include/vec2.js'
        //         }]
        //     }
        // }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');


};