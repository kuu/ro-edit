import Kontainer from 'kontainer-js';

export function createMergeFunction(promise, options) {
  let mvhd;
  let mdat;
  let tracks = [];

  promise.then((files) => {
    // Update props
    mvhd.modificationTime = new Date();
    mvhd.nextTrackId += tracks.length;
    mvhd.duration = tracks.reduce((a, b) => Math.max(a.duration, b.durtion), 0);

    // Interleave all chunks
    files.forEach(() => {

    });

    // Update chunk offsets
  });

  return function merge(type, props, children) {
    if (type === 'mvhd') {
      mvhd = props;
    } else if (type === 'mdat') {
      mdat = props;
    } else if (type === 'trak') {
      tracks.push(_parseTrack(children));
    }
  }
}

function _parseTrack(children) {

}
