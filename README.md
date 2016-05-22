# ro-edit
A simple video editing tool written in JavaScript. It focuses on track composition, trimming, and av-sync adjustment.

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
import fs from 'fs';
import ro from 'ro-edit';

// Apply changes to a video file
fs.createReadStream('./main.mp4')
.pipe(ro.add('./audio-jp.mp4')) // Add second language
.pipe(ro.add('./audio-fr.mp4')) // Add another language
.pipe(ro.drop(0)) // Remove the first track
.pipe(ro.shift(1, -10)) // Shift the second track 10 seconds backward
.pipe(ro.slice(10, 50)) // Trim the first 10 seconds and the last 10 seconds
.pipe(fs.createWriteStream('./output.mp4')); // Done

// Or, you can inspect the stream to learn the structure of the file
fs.createReadStream('./main.mp4')
.pipe(ro.inspect((track, i) => {
  console.log(`Track[${i}]: type=${track.type} name=${track.name}`);
});
```

### Methods

#### `add(files)`
Merge files.

##### params

| name | type | description |
|---|---|---|
| `files` | String, file object, or array of those types| Specifies additional file(s) |

##### return value
A transform stream

---
#### `inspect(callback)`
Provides a way to inspect track information.

##### params
| name | type | description |
|---|---|---|
| `callback` | Function | A function with the following signature |

##### return value
A transform stream

###### params of `callback`
| name | type | description |
|---|---|---|
| `track` | Object | An object that holds `type`, `name`, `duration`, etc. of the track TBD.|

##### return value of `callback`
none

---
#### `drop(index)`
Removes the specified track from the file.

##### params
| name | type | description |
|---|---|---|
| index  | `Number` | The index of the track within the file |

##### return value
A transform stream

---
#### `shift(index, offset)`
Adjusts AV-sync by repositioning the specified track forward/backward according to the `offset`

##### params
| name | type | description |
|---|---|---|
| index  | `Number` | Index in the track info. |
| offset  | `Number` | Signed number in seconds. e.g. -10 means repositioning 10 seconds backward |

##### return value
A transform stream

---
#### `slice(start, end)`
Cuts off any other parts than the specified range of the file.

| name | type | description |
|---|---|---|
| start  | `Number` | The position in seconds. The first n seconds of the file will be cut off, where n = `start - 0`. The default value is 0. |
| end  | `Number` | The position in seconds. The last n seconds of the file will be cut off, where n = `the file's duration - end`. The default value is the file's duration. |

##### return value
A transform stream

---

## CLI

### List all the tracks contained in a file
```
$ ro ls file.mp4
```

### Remove a track from a file
```
$ cat file.mp4 | ro drop 0 > output.mp4
 => Removes the first track
```

### Adjust av-sync
```
$ cat file.mp4 | ro shift 0 -10 > output.mp4
 => Shifts the first track 10 seconds backward
```

### File composition
```
$ ro merge video.webm audio-en.webm audio-fr.webm > output.webm
```

### Trimming
```
$ cat file.webm | ro slice 10 50 > output.webm
 => Extract the middle of the file (10-49 seconds)
   i.e. cuts off the first 10 seconds and the last 10 seconds
   (supposing the original duration was 60 seconds.)
```
