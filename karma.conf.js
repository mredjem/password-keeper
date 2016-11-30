module.exports = config => {

  config.set({
    basePath: './src',
    frameworks: ['jasmine'],
    port: 9876,
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-jasmine',
      'karma-electron'
    ],
    logLevel: config.LOG_INFO,
    browsers: ['Electron'],
    captureTimeout: 60000,
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-material-icons/angular-material-icons.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'javascripts/app.js',
      'javascripts/components/**/index.js',
      'javascripts/components/**/*.js',
      'javascripts/view*/**/index.js',
      'javascripts/view*/**/*.controller.js',
      '../tests/**/*.test.js'
    ],
    preprocessors: {
      '**/*.js': ['electron']
    },
    client: {
      useIframe: false
    }
  });

};
