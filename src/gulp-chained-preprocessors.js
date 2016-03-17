/*global Buffer, module */
import through from 'through2';
import chainedPreprocessors from 'chained-preprocessors';

let gulpChainedPreprocessors = (options) => {
  return through.obj(function(file, enc, gulpCb) {
    let contents = file.contents.toString('utf8');
    let extensions = chainedPreprocessors.extensionsToPreprocess(file.path);
    let path = chainedPreprocessors.preprocessedName(file.path);

    chainedPreprocessors.render(contents, extensions, options, (err, result) => {
      if(err) {
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
export default gulpChainedPreprocessors;
