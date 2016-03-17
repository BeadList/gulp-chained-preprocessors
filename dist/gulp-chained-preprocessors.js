'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _chainedPreprocessors = require('chained-preprocessors');

var _chainedPreprocessors2 = _interopRequireDefault(_chainedPreprocessors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Buffer, module */


var gulpChainedPreprocessors = function gulpChainedPreprocessors(options) {
  return _through2.default.obj(function (file, enc, gulpCb) {
    var contents = file.contents.toString('utf8');
    var extensions = _chainedPreprocessors2.default.extensionsToPreprocess(file.path);
    var path = _chainedPreprocessors2.default.preprocessedName(file.path);

    _chainedPreprocessors2.default.render(contents, extensions, options, function (err, result) {
      if (err) {
        gulpCb(err, null);
        return;
      }
      file.contents = new Buffer(result);
      file.path = path;
      gulpCb(err, file);
    });
  });
};

module.exports = gulpChainedPreprocessors;
exports.default = gulpChainedPreprocessors;