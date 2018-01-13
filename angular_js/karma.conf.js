//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/ngmap/build/scripts/ng-map.min.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'app.js',
      'app.controller.js',
	    '**/*.spec.js',
	    '!(bower_components|vendor)/**/*.js',
       '**/*.template.html'
    
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    preprocessors: {
        '**/*.html':['ng-html2js']
            },
    browsers: ['Chrome','Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
