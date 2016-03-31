/*global require */
var gulp = require('gulp');
var chainedPreprocessors = require('../../src/gulp-chained-preprocessors');
var through2 = require('through2');

gulp.task('default', function() {
  var options = function(file) {

    return {
      all:
      {
        primaryColor: file.color,
        environment: 'development'
      }
    };
  };

  gulp.src(['./stylesheets/styles.css.sass.ejs'])
    .pipe(through2.obj(function(file, enc, cb) {
      file.color = 'yellow';
      cb(null, file);
    }))
    .pipe(chainedPreprocessors(options))
    .pipe(gulp.dest('../../temp/test'));
});
