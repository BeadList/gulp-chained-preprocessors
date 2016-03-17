/*global require */
var gulp = require('gulp');
var chainedPreprocessors = require('../../src/gulp-chained-preprocessors');

gulp.task('default', function() {
  var options = {
    all:
    {
      primaryColor: 'red',
      environment: 'development'
    }
  };
  gulp.src(['./styles.css.sass.ejs'])
    .pipe(chainedPreprocessors(options))
    .pipe(gulp.dest('../../temp/test'));
});
