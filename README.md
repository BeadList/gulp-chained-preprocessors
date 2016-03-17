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

```js
var chainedPreprocessors = require('gulp-chained-preprocessors');

gulp.task('preprocess', function() {
  var options = { all: { title: 'Hello World' } };
  gulp.src('./src/*')
    .pipe(chainedPreprocessors(options))
    .pipe(gulp.dest('./build/'));
});

```


[chained-preprocessors]: https://github.com/BeadWall/chained-preprocessors
