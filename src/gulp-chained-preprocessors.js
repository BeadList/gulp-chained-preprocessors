/*global Buffer, module */
import path from 'path';
import through from 'through2';
import chainedPreprocessors from 'chained-preprocessors';

let gulpChainedPreprocessors = (inOptions) => {
  return through.obj(function(file, enc, gulpCb) {
    let contents = file.contents.toString('utf8');
    let extensions = chainedPreprocessors.extensionsToPreprocess(file.path);
    let resultPath = chainedPreprocessors.preprocessedName(file.path);
    let options;
    if(typeof inOptions == 'function') {
      options = inOptions(file);
    } else {
      options = Object.assign({}, inOptions);
    }
    options.sass = options.sass || {};
    options.sass.includePaths = options.sass.includePaths ||
      [path.dirname(file.path)];
    chainedPreprocessors.render(contents, extensions, options, (err, result) => {
      if(err) {
        gulpCb(err, null);
        return;
      }
      file.contents = new Buffer(result);
      file.path = resultPath;
      gulpCb(err, file);
    });
  });
};

module.exports = gulpChainedPreprocessors;
export default gulpChainedPreprocessors;
