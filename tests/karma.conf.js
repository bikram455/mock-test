//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            '../app/bower_components/angular/angular.js',
            '../app/bower_components/angular-ui-router/release/angular-ui-router.js',
            '../app/bower_components/angular-mocks/angular-mocks.js',

            //Files
            '../app/app.module.js',
            '../app/app.config.js',
            '../app/components/login/login.controller.js',

            //spec files
            // 'spec/config/config.spec.js',
            'specs/components/login/login.spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        singleRun: true
    });
};
