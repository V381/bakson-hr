module.exports = function(config){
  config.set({

    basePath : './',

    preprocessors: {
      "app/templates/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: "app/",
      prependPrefix: "templates/",

      moduleName: "my.templates"
    },

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-filter/dist/angular-filter.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/moment/moment.js',
      'app/components/**/*.js',
      'app/app.js',
      'app/view/*.html',
      'app/directives*/**/*.js',
      'app/templates*/*.html',
      'app/services*/**/*.js',
      'app/controllers*/**/*.js',
      'app/test*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
