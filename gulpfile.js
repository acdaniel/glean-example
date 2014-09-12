var gulp = require('gulp');
var assets = require('glean-gulp');

gulp.task('assets', function (cb) {
  gulp.src(['assets/**/*.js', 'assets/**/*.scss'], {read: false})
    .pipe(assets({
      registry: 'assets.json',
      host: 'localhost:3000',
      '.scss': {
        processor: require('glean-sass'),
        ext: '.css',
        compress: true
      },
      '.js': {
        processor: require('glean-browserify'),
        uglify: true
      }
    }))
    .pipe(gulp.dest('public'));
});
