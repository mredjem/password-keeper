module.exports = function(config) {
  config.set({

    basePath: './src',
    frameworks: ['jasmine'],
    autoWatch: true,
    plugins: [
      'karma-jasmine',
      'karma-electron'
    ],
    browsers: ['Electron'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material.js',
      'javascripts/app.js',
      'javascripts/components/**/index.js',
      'javascripts/components/**/*.js',
      'javascripts/view*/**/index.js',
      'javascripts/view*/**/*.controller.js',
      '../test/*.test.js'
    ],
    preprocessors: {
      '**/*.js': ['electron']
    },
    client: {
      useIframe: false
    }

  });
};
