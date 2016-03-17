/*global __dirname describe it beforeEach */

import { expect } from 'chai';
import { exec } from 'child_process';
import fs from 'fs';
import rimraf from 'rimraf';

describe('chainedPreprocessors', function() {
  this.timeout(5000);

  it('generates file with proper file and contents', (done) => {
    let cwd = __dirname + '/fixtures';
    let resultPath = __dirname + '/../temp/test/styles.css';
    rimraf.sync(resultPath);
    exec('gulp', { cwd }, (err, stdout) => {
      expect(fs.existsSync(resultPath)).to.equal(true);
      expect(fs.readFileSync(resultPath).toString()).to
        .equal('.header {\n  background: red;\n  font-weight: bold; }\n');
      done();
    });
  });
});
