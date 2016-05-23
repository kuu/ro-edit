import fs from 'fs';
import path from 'path';
import ro from 'ro-edit';

const TEST_CONTENTS_PATH = path.join(__dirname, '../contents');

describe('ro', () => {
  const stream = require('stream');
  class OutputStream extends stream.Writable {
    constructor(cb, options) {
      super(options);
      this.data = null;
      this.on('finish', () => {
        expect(this.data).not.toBe(null);
        expect(this.data.length).not.toBe(0);
        cb();
      });
    }

    _write(chunk, encoding, done) {
      if (this.data) {
        this.data = Buffer.concat([this.data, chunk]);
      } else {
        this.data = chunk;
      }
      done();
    }
  }

  describe('MP4', () => {
    const MP4_PATH = path.join(TEST_CONTENTS_PATH, 'MP4');

    beforeEach(() => {
    });

    it('should be able to get the information of all the tracks imported', (done) => {
      const mainAV = path.join(MP4_PATH, 'main-av.mp4');
      const subA = path.join(MP4_PATH, 'a-only.mp4');

      fs.createReadStream(mainAV)
      .pipe(ro.add(subA))
      .pipe(new OutputStream(done));
    }, 60000);
  });

  describe('WebM', () => {
    const WEBM_PATH = path.join(TEST_CONTENTS_PATH, 'WebM');

    beforeEach(() => {
    });

    it('should be able to get the information of all the tracks imported', (done) => {
      const mainAV = path.join(WEBM_PATH, 'main-av.webm');
      const subA = path.join(WEBM_PATH, 'a-only.webm');

      fs.createReadStream(mainAV)
      .pipe(ro.add(subA))
      .pipe(new OutputStream(done));
    }, 60000);
  });
});
