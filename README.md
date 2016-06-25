# ro-edit
A simple video editing tool inspired by gulp.

## Features

### What `ro-edit` supports
It completely depends on what plugins you use but there're plugins as follows:
* `ro-merge`: Merging of files
* `ro-drop`: Removal of tracks
* `ro-shift`: AV-sync adjustment
* `ro-slice`: Trimming

### What `ro-edit` does not support
It also depends on the plugins but there're some basic limitations:
* It does not support any file format other than the MP4 and WebM, i.e. the input data need to be wrapped with either the MP4 or WebM container.
* It does not support mixed format, i.e. you can't merge an MP4 file with a WebM file.

## API

### Example
```js
import ro from 'ro-edit';
import merge from 'ro-merge';
import drop from 'ro-drop';
import shift from 'ro-shift';
import slice from 'ro-slice';

// Applies changes to a video file
ro.parse('./main.mp4')
.pipe(merge('./audio/**/sub.mp4')) // Adds secondary languages
.pipe(drop(1000)) // Removes track with the specified track-id
.pipe(shift(2000, -10)) // Repositions the specified track 10 seconds backward
.pipe(slice(10, 50)) // Trims the first 10 seconds and the last 10 seconds
.pipe(ro.render('./output.mp4')); // Done
```

### Methods

#### `parse(file, options)`
Creates a readable stream in object mode that generates `KontainerElement`

##### params

| name | type | description |
|---|---|---|
| `file` | String or ReadableStream | Specifies the input file |
| `options` | Object| TBD. |

##### return value
A readable stream

---
#### `render(file, options)`
Creates a writable stream that consumes `KontainerElement`

##### params
| name | type | description |
|---|---|---|
| `file` | String or WritableStream| Specifies the output file |
| `options` | Object| TBD. |

##### return value
A writable stream

## CLI
CLI (`ro`) automatically loads the plugin with the specified subcommand. So, the module needs to be installed locally or globally.


### List all the tracks contained in a file
```
$ ro ls file.mp4
```

### Merge files
```
$ ro merge main.webm audio/*/sub.webm > output.webm
```

### Remove a track from a file
```
$ cat file.mp4 | ro drop 999 > output.mp4
 => Removes a track (track-id=999)
```

### Av-sync adjustment
```
$ cat file.mp4 | ro shift 999 -10 > output.mp4
 => Shifts the track 10 seconds backward
```

### Trimming
```
$ cat file.webm | ro slice 10 50 > output.webm
 => Extract the middle of the file (10-49 seconds)
   i.e. cuts off the first 10 seconds and the last 10 seconds
   (supposing the original duration was 60 seconds.)
```
