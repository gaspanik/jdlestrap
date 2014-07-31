var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
  ngrok = require('ngrok'),
  browserSync = require('browser-sync');

gulp.task('bs', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./dist"
    },
    notify: false,
    xip: false
  });
});

gulp.task('ngrok', function() {
  ngrok.connect(3000, function(err, url) {
    if (err) {
      throw new Error(err);
    } else {
      console.log('we got a tunnel', url);
    }
  });
});

gulp.task('jade', function() {
  gulp.src('src/templates/*.jade')
    .pipe($.jade())
    .pipe(gulp.dest('dist'))
    //  If you need prettify HTML, uncomment below 2 lines.
    //  .pipe($.prettify())
    //  .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('styles', function() {
  gulp.src('src/css/bootstrap.less')
    .pipe($.sourcemaps.init())
      .pipe($.less())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});


//  If you would like to customize bootstrap script, run 'npm run-script concat'.
gulp.task('scripts', function() {
  return gulp.src([
      'src/js/transition.js',
      'src/js/alert.js',
      'src/js/button.js',
      'src/js/carousel.js',
      'src/js/collapse.js',
      'src/js/dropdown.js',
      'src/js/modal.js',
      'src/js/tooltip.js',
      'src/js/popover.js',
      'src/js/scrollspy.js',
      'src/js/tab.js',
      'src/js/affix.js'
    ])
    //  .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.concat('bootstrap.tmp.js'))
    //  .pipe($.sourcemaps.write())
    .pipe(gulp.dest('src/js'))
    .pipe($.shell([
      'cat src/license.txt src/js/bootstrap.tmp.js > dist/js/bootstrap.min.js'
    ]));
});

gulp.task('watch', function() {
  gulp.watch(['src/css/**'], ['styles']);
  gulp.watch(['src/templates/**'], ['jade']);
});

// If you would like to open tunnel w/ ngrok, add 'ngrok' task into default task list.
// More info. https://ngrok.com/ | https://github.com/bubenshchykov/ngrok

gulp.task('default', ['bs', 'styles', 'jade', 'watch']);
