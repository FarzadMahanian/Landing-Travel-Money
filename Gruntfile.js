module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scss: {
                files: ['scss/**/*.scss', 'scss/*.scss'],
                tasks: ['sass:development']
            },
            html: {
                files: ['pug/**/*.pug'],
                tasks: ['pug:compile']
            },
            i18n: {
                files: ['pug/locales/*.json'],
                tasks: ['pug:compile']
            }
        },
        sass: {
            development: {
                options: {
                    style: 'expanded',
                    lineNumber: true
                },
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: '*.scss',
                    dest: 'css/',
                    ext: '.css'
                }]
            },
            production: {
                options: {
                    style: 'compressed',
                    lineNumbers: false
                },
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: '*.scss',
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                mangle: true
            },
            target: {
                files: {
                    'js/main.js': ['<%= appFolder %>js/main.js']
                }
            }
        },

        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    i18n: {
                        locales: 'pug/locales/*.json',
                        namespace: '$i18n'
                    },
                    root: {
                        localeExtension: true,
                        locales: 'pug/locales/en.json',
                        namespace: '$i18n'
                    },
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'pug/',
                    src: '*.pug',
                    dest: './',
                    ext: '.html'
                }]
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'dependencies/slider',
                        src: ['en/**', 'tr/**', 'az/**', 'ru/**'],
                        dest: './'
                    }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    base: './',
                    keepalive: true,
                    hostname: 'localhost'
                }
            }
        }

    });

    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-pug-i18n');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['sass:development']);
    grunt.registerTask('develop', ['sass:development', 'pug:compile', 'copy:main', 'watch']);
    grunt.registerTask('production', ['sass:production', 'pug:compile', 'copy:main']);
    grunt.registerTask('server', ['connect:server']);
};
