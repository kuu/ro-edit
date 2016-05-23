import fs from 'fs';
import Kontainer from 'kontainer-js';
import MP4 from './MP4';
import WebM from './WebM';
import {throwException} from './util';

export function add(files) {
  let toBeMerged;

  if (Array.isArray(files)) {
    toBeMerged = files;
  } else {
    toBeMerged = [files];
  }
  toBeMerged = toBeMerged.filter((file, i) => {
    if (typeof file === 'string') {
      toBeMerged[i] = fs.createReadStream(file);
      return true;
    } else {
      return false;
    }
  });
  return _createMergeTransform(toBeMerged);
}

function _createMergeTransform(files, options) {
  let merge = null;
  // Create TransfromStream
  const transform = Kontainer.transform((...params) => {
    merge && merge(...params);
  }, {ignoreUnknown: true, until: promise});

  // Read files
  const promise = Promise.resolve().then(() => {
    return _waitForInput(transform);
  }).then(() => {
    return _readFiles(files);
  }).catch((err) => {
    throwException(`Invalid file. ${err.stack}`);
  });

  // Detect the container format
  transform.on('format', (format) => {
    if (merge) {
      return;
    }
    //console.log(`format event: ${format}`);
    if (format === 'mp4') {
      merge = MP4.createMergeFunction(promise, options);
    } else if (format === 'webm') {
      merge = WebM.createMergeFunction(promise, options);
    }
  });
  return transform;
}

function _waitForInput(transform) {
  return new Promise((fulfill, reject) => {
    transform.on('pipe', (input) => {
      input.on('end', () => {
        fulfill();
      });
    });
    transform.on('error', (err) => {
      reject(err);
    });
  });
}

function _readFiles(files) {
  const promises = files.map((file) => {
    return new Promise((fulfill, reject) => {
      fs.readFile(file, (err, buf) => {
        if (err) {
          reject(err);
        } else {
          fulfill(buf);
        }
      })
    });
  });
  return Promise.all(promises);
}
