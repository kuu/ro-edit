import isStream from 'is-stream';
import fs from 'fs';
import Kontainer from 'kontainer-js';
import MP4 from './MP4';
import WebM from './WebM';

function _createMergeTransform(files, options) {
  let merge = null;
  const transform = Kontainer.transform((...params) => {
    merge && merge(...params);
  });
  transform.on('format', (format) => {
    if (merge) {
      return;
    }
    //console.log(`format event: ${format}`);
    if (format === 'mp4') {
      merge = MP4.createMergeFunction(files, options);
    } else if (format === 'webm') {
      merge = WebM.createMergeFunction(files, options);
    }
  });
  return transform;
}

function add(files) {
  let toBeMerged;

  if (Array.isArray(files)) {
    toBeMerged = files;
  } else {
    toBeMerged = [files];
  }
  toBeMerged = toBeMerged.filter((file, i) => {
    if (isStream(file)) {
      return true;
    } else if (typeof file === 'string') {
      toBeMerged[i] = fs.createReadStream(file);
      return true;
    } else {
      return false;
    }
  });
  return _createMergeTransform(toBeMerged);
}

function inspect(callback) {

}

function drop(index) {

}

function shift(index, offset) {

}

function slice(start, end) {

}

export default {
  add,
  inspect,
  drop,
  shift,
  slice
}
