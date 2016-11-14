module.exports = function(config) {
  config.set({

    basePath: './app',
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
      'bower_components/angular-material-icons/angular-material-icons.js',
      'bower_components/angular-material-data-table/dist/md-data-table.js',
      'javascripts/app.js',
      'javascripts/components/**/index.js',
      'javascripts/components/**/*.js',
      'javascripts/view*/**/*.router.js',
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
