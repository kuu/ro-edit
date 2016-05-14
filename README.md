# ro-edit
A simple video editing tool written in JavaScript. It focuses on track composition, trimming, and av-sync adjustment. `ro-edit` is built on top of [`kontainer-js`](https://www.npmjs.com/package/kontainer-js) so it can be used on Node.js and in the browser.

## Features

### What `ro-edit` supports
* Retrieval of track information
* Removal of tracks
* Merging two separate files into one
* AV-sync adjustment
* Trimming

### What `ro-edit` does not support
* It does not support any file format other than MP4 and WebM, i.e. any input data need to be wrapped with either MP4 or WebM container.
* It does not support mixed format, i.e. you can't merge an MP4 file with a WebM file.
* It does not perform any trans-coding, i.e. all the editing is done without decoding or encoding of media data.
* It does not support any mixing of audio, i.e. multiple audio tracks are not be merged and each track keeps its original number of channels.

## API

### Example
```js
import Kontainer from 'kontainer-js';
import {Timeline} from 'ro-edit';

// Parse MP4 files and create KontainerElements
const mainTrack = Kontainer.createElementFromBuffer(fs.readFileSync('./video.mp4'));
const audioTrackJapanese = Kontainer.createElementFromBuffer(fs.readFileSync('./audio-jp.mp4'));
const audioTrackFrench = Kontainer.createElementFromBuffer(fs.readFileSync('./audio-fr.mp4'));

// Create a new file from the above three tracks
const tl = new Timeline();
tl.import(mainTrack);
tl.import(audioTrackJapanese);
tl.import(audioTrackFrench);

// Get track information
const tracks = tl.getTracks();

// Remove all video tracks
tracks.forEach(track => {
  if (track.type === 'video') {
    tl.drop(track.index);
  }
});

// Cut off the first 10 seconds
tl.slice(10);

// Write the result into a file
fs.writeFileSync('audio-only.mp4', Kontainer.render(tl.export()));

```

### `class Timeline`
Represents a media file with multiple tracks that share the same timeline.

#### `import(element)`
Incorporates the specified `KontainerElement` into this `Timeline` instance.

##### params

| name | type | description |
|---|---|---|
| element | `KontainerElement` | An element obtained via `kontainer-js` |

##### return value
none

#### `getTracks()`
Returns a list of objects that holds track information.

##### params
none

##### return value
| type | description |
|---|---|
| [`TrackInfo`] | A list of `TrackInfo` instances. |

#### `drop(index)`
Removes the specified track from this `Timeline` instance.

##### params
| name | type | description |
|---|---|---|
| index  | `Number` | Index in the track info. |

##### return value
none

#### `shift(index, offset)`
Adjusts AV-sync by repositioning the specified track forward/backward according to the `offset`

##### params
| name | type | description |
|---|---|---|
| index  | `Number` | Index in the track info. |
| offset  | `Number` | Signed number in seconds. e.g. -10 means repositioning 10 seconds backward |

##### return value
none

#### `slice(start, end)`
Cuts off any other parts than the specified range of the file.

| name | type | description |
|---|---|---|
| start  | `Number` | The position in seconds. The first n seconds of the file will be cut off, where n = `start - 0`. The default value is 0. |
| end  | `Number` | The position in seconds. The last n seconds of the file will be cut off, where n = `the file's duration - end`. The default value is the file's duration. |

##### return value
none

#### `export()`
Returns a `KontainerElement` after applying any changes made to this `Timeline` instance so far.

##### params
none

##### return value
| type | description |
|---|---|
| `KontainerElement` | The result of the editing. |

### `class TrackInfo`
Holds some properties of a track.

#### properties
| name | type | description |
|---|---|---|
| index  | `Number` | A unique id for this `TrackInfo` instance |
| type  | `String` | 'video' or 'audio' or 'subtitle' |
| name  | `String` | A descriptive name for this `TrackInfo` instance |
| duration  | `Number` | Duration in seconds. |
| segmentLength  | `Number` | Segment length in seconds. This is the minimum unit of editing. |

## CLI

### List all the tracks contained in a file
```
$ ro ls file.mp4
```

### Remove a track from a file
```
$ cat file.mp4 | ro drop 0
 => Removes the first track
```

### Adjust av-sync
```
$ cat file.mp4 | ro shift 0 -10
 => Shifts the first track 10 seconds backward
```

### Composite files
```
$ ro merge video.webm audio-en.webm audio-fr.webm
```

### Trim a file
```
$ cat file.webm | ro slice 10 50
 => Extract the middle of the file (10-49 seconds)
   i.e. cuts off the first 10 seconds and the last 10 seconds
   (supposing the original duration was 60 seconds.)
```
