module.exports = function(grunt){    
    require('load-grunt-tasks')(grunt);

    var config = grunt.file.readYAML('gruntConfig.yml');

    grunt.initConfig({

        copy:{
            main: {
                files: [
                {expand: true, src: ['src/**'], dest: 'dist/'}
                ]
            }
        },

        // sass:{
        //     dist:{
        //         src: config.jsSrcDir + 'style.js',
        //         dest: config.cssDir + 'style.css'
        //     }
        // },

        // concat:{
        //     dist:{
        //         src: config.jsSrcDir +'*.js',
        //         dest: config.jsConcatDir + 'main.js'
        //     }
        // },

        jshint:{
            all:[
            'gruntfile.js',
            config.jsSrcDir + '*.js'
            ]
        },

        watch:{
            copy:{
                files: 'src/**',
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('default',[
        //'jshint',
        // 'copy',
        'watch'
        ]);
};