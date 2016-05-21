class TrackInfo {
  constructor({index, type, name, duration, segmentLength}) {
    this.index = index; // A unique id for this TrackInfo instance
    this.type	= type; // 'video' or 'audio' or 'subtitle'
    this.name	= name; // A descriptive name for this TrackInfo instance
    this.duration	= duration; // Duration in seconds.
    this.segmentLength = segmentLength; // Segment length in seconds. This is the minimum unit of editing.
  }
}

export class Timeline {
  constructor() {

  }

  // Incorporates the specified KontainerElement into this Timeline instance.
  import(element) {

  }

  // Returns a list of objects that holds track information.
  getTracks() {
    return null;
  }

  // Removes the specified track from this Timeline instance.
  drop(index) {

  }

  // Adjusts AV-sync by repositioning the specified track forward/backward according to the offset
  shift(index, offset) {

  }

  // Cuts off any other parts than the specified range of the file.
  slice(start, end) {

  }

  // Returns a KontainerElement after applying any changes made to this Timeline instance so far.
  export() {

  }
}
