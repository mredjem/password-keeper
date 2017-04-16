(function() {
  'use strict';

  module.exports = () => {

    const wiredep = require('wiredep');

    const root = './';
    const source = './src/';
    const dist = './dist/';
    const report = './report/';
    const temp = './tmp/';
    const clientApp = source + 'app/';
    const styles = source + 'styles/';

    const bowerFiles = wiredep({ devDependencies: true }).js;

    const bower = {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '..'
    };

    let config = {
      /**
       * Javascript files to analyze.
       */
      allJs: [
        './src/**/*.js',
        './*.js'
      ],
      clientApp: clientApp,
      css: source + 'styles/',
      dist: dist,
      index: source + 'index.html',

      /**
       * All javascript files besides specifications.
       */
      js: [
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        '!' + clientApp + '**/*.spec.js'
      ],
      jsOrder: [
        '**/app.module.js',
        '**/*.module.js',
        '**/*.js'
      ],
      report: report,
      root: root,
      scss: clientApp + '**/*.scss',
      source: source,
      styles: styles,
      temp: temp,
      templates: clientApp + '**/*.html',

      /**
       * Optimized files.
       */
      optimized: {
        app: 'app.js',
        vendor: 'vendor.js'
      },

      /**
       * Files to analyse with Plato.
       */
      plato: {
        js: clientApp + '**/*.js'
      },

      /**
       * Angular templates cache.
       */
      templateCache: {
        file: 'templates.js',
        options: {
          module: 'app.core',
          root: 'app/',
          standalone: false
        }
      },

      /**
       * NPM and Bower files.
       */
       bower: bower,
       packages: [
         './package.json',
         './bower.json'
       ],

       /**
        * Node settings.
        */
        defaultPort: '8001'
    };

    config.getWiredepOptions = getWiredepOptions;
    config.karma = getKarmaOptions();

    return config;

    //////////

    /**
     * Wiredep settings.
     */
    function getWiredepOptions() {
      const options = {
        bowerJson: config.bower.json,
        directory: config.bower.directory,
        ignorePath: config.bower.ignorePath
      };

      return options;
    }

    /**
     * Karma settings.
     */
    function getKarmaOptions() {
      const options = {
        files: [
          bowerFiles,
          clientApp + '**/*.module.js',
          clientApp + '**/*.js'
        ],
        exclude: [],
        preprocessors: {
          '**/*.js': ['electron']
        }
      };

      return options;
    }

  };

})();
