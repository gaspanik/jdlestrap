var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
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

gulp.task('watch', function() {
  gulp.watch(['src/css/**'], ['styles']);
  gulp.watch(['src/templates/**'], ['jade']);
});

gulp.task('default', ['bs', 'styles', 'jade', 'watch']);
