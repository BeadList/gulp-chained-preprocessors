Gulp Chained Preprocessors
=====================

Gulp renderer for [chained preprocessors][chained-preprocessors]

Installation
------------

```shell
npm install --save-dev gulp-chained-preprocessors
```

Install preprocessors you want to use, i.e.:

```shell
npm install --save coffee-script node-sass handlebars commonmark ejs

```


Usage
-----

In basic usage you just pass same options as you would pass to
[chained preprocessors][chained-preprocessors]. And some of the options this
plugin try to figure out itself like `sass.includePaths` for including sass
files relatively to the file.

```js
var chainedPreprocessors = require('gulp-chained-preprocessors');

gulp.task('preprocess', function() {
  var options = { all: { title: 'Hello World' } };
  gulp.src('./src/*')
    .pipe(chainedPreprocessors(options))
    .pipe(gulp.dest('./build/'));
});

```

You can also pass options dependent on file:

```js
var chainedPreprocessors = require('gulp-chained-preprocessors');

gulp.task('preprocess', function() {
  var options = (file) => {
    { all: { title: file.path } }
  };
  gulp.src('./src/*')
    .pipe(chainedPreprocessors(options))
    .pipe(gulp.dest('./build/'));
});

```
n
[chained-preprocessors]: https://github.com/BeadWall/chained-preprocessors
