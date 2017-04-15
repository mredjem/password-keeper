(function() {
  'use strict';

  const del = require('del');
  const glob = require('glob');
  const path = require('path');
  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({ lazy: true });

  const config = require('./gulp.config')();

  const port = process.env.PORT || config.defaultPort;

  /**
   * List the available tasks.
   */
  gulp.task('help', $.taskListing);
  gulp.task('default', ['help']);

  /**
   * Create a coverage report.
   * @return {Stream}
   */
  gulp.task('vet', () => {
    return gulp
      .src(config.allJs)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jshint.reporter('fail'));
  });

  /**
   * Create a visualizer report.
   * @return {Stream}
   */
  gulp.task('plato', () => {
    const plato = require('plato');

    const files = glob.sync(config.plato.js);
    const excludeFiles = /.*\.spec\.js/;
    const outputDir = config.report = 'plato';

    const options = {
      title: 'Plato coverage report',
      exclude: excludeFiles
    };

    plato.inspect(files, outputDir, options, onPlatoComplete);

    function onPlatoComplete(report) {
      const overview = plato.getOverviewReport(report);
      log(overview.summary);
    }

  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('wiredep', () => {
    const wiredep = require('wiredep').stream;
    const options = config.getWiredepOptions();

    return gulp
      .src(config.index)
      .pipe(wiredep(options))
      .pipe(inject(config.js, '', config.jsOrder))
      .pipe(gulp.dest(config.source));
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('clean-code', () => {
    return del(config.temp);
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('templates', ['clean-code'], () => {
    return gulp
      .src(config.templates)
      .pipe($.htmlmin())
      .pipe($.angularTemplatecache(
        config.templateCache.file,
        config.templateCache.options
      ))
      .pipe(gulp.dest(config.temp));
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('inject', ['wiredep', 'styles', 'templates'], () => {
    return gulp
      .src(config.index)
      .pipe(inject(config.css))
      .pipe(gulp.dest(config.source));
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('clean-styles', () => {
    const files = [
      config.styles + '**/*css'
    ];
    return del(files);
  });

  /**
   * Compile the sassy stylesheets.
   * @return {Stream}
   */
  gulp.task('styles', ['clean-styles'], () => {
    return gulp
      .src(config.scss)
      .pipe($.plumber())
      .pipe($.sass())
      .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
      .pipe($.flatten())
      .pipe(gulp.dest(config.styles));
  });

  /**
   * Watch for change on sassy stylesheets.
   */
  gulp.task('sass-watcher', () => {
    gulp.watch([config.scss], ['styles']);
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('optimize', ['clean-dist'], () => {
    const htmlIndexFilter = $.filter('!**/index.html', { restore: true });

    const cssFilter = $.filter('**/*.css', { restore: true });
    const jsAppFilter = $.filter('**/', { restore: true });
    const jsVendorFilter = $.filter('**/', { restore: true });

    const templateCache = config.temp + config.templateCache.file;

    return gulp
      .src(config.index)
      .pipe($.plumber())
      // inject templates
      .pipe(inject(templateCache, 'templates'))
      // extract assets
      .pipe($.useref({ searchPath: './' }))
      // minify css
      .pipe(cssFilter)
      .pipe($.pleeease())
      .pipe(cssFilter.restore)
      // uglify app js
      .pipe(jsAppFilter)
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe(getHeader())
      .pipe(jsAppFilter.restore)
      // uglify vendor js
      .pipe(jsVendorFilter)
      .pipe($.uglify())
      .pipe(jsVendorFilter.restore)
      // hash file names
      .pipe(htmlIndexFilter)
      .pipe($.rev())
      .pipe(htmlIndexFilter.restore)
      .pipe($.revReplace())
      // print result to dist folder
      .pipe(gulp.dest(config.dist));
  });

  /**
   *
   * @return {Stream}
   */
  gulp.task('build', ['optimize'], () => {
    log('Building application...');

    const message = {
      title: 'Running `gulp build`',
      message: 'Building application to distribution folder'
    };
    notify(message);
  });

  /**
   * Delete the distribution folder.
   * @return {Stream}
   */
  gulp.task('clean-dist', () => {
    return clean(config.dist);
  });

  /**
   *
   */
  gulp.task('serve-dev', () => {
    serve(true);
  });

  ////////////////

  /**
   * Start a local web server to serve resources.
   * @return {Stream}
   */
  function serve(isDev) {
    const options = {
      root: [config.root, config.source],
      livereload: true,
      port: port
    };

    return $.connect.server(options);
  }

  /**
   * Delete the specified glop files pattern.
   * @param {Array} files
   * @return {Promise}
   */
  function clean(files) {
    return del(files);
  }

  /**
   * Inject files in specified order and at specified tag comment.
   * @param {Array} src glob pattern for source files
   * @param {String} label the start tag
   * @param {Array} order the glob pattern for sorting files
   * @return {Stream}
   */
  function inject(src, label, order) {
    let options = {};
    if (label) {
      options.starttag = '<!-- inject:' + label + '.js -->';
    }

    return $.inject(orderSrc(src, order), options);
  }

  /**
   * Order the specified source files.
   * @param {Array} src
   * @param {Array} order
   * @return {Stream}
   */
  function orderSrc(src, order) {
    return gulp
      .src(src)
      .pipe($.if(order, $.order(order)));
  }

  /**
   * Send an OS level notification.
   * @param {Object} message
   */
  function notify(message) {
    const notifier = require('node-notifier');

    const options = {
      icon: path.join(__dirname, 'gulp.png'),
      sound: true,
      wait: false
    };

    notifier.notify(Object.assign(message, options));
  }

  /**
   * Return the header to add to files.
   * @return {String}
   */
  function getHeader() {
    const pkg = require('./package.json');
    const banner = ['/**',
      ' * <%= pkg.name %> - <%= pkg.description %>' +
      ' * @version <%= pkg.version %>' +
      ' * @author <%= pkg.author %>' +
      ' * @link <%= pkg.homepage %>' +
      ' * @license <%= pkg.license %>' +
      ' */' +
      ''].join('\n');

    return $.header(banner, { pkg: pkg });
  }

  /**
   * Log message to console.
   * @param {String} msg
   */
  function log(msg) {
    $.util.log(msg);
  }

  module.exports = gulp;

})();
