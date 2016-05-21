import Kontainer from 'kontainer-js';
import {Timeline} from 'ro-edit';
import MP4 from '../helper/MP4';
import WebM from '../helper/WebM';

describe('Timeline', () => {

  describe('MP4', () => {

    beforeEach(() => {
    });

    it('should be able to get the information of all the tracks imported', () => {
      const tl = new Timeline();
      tl.import(MP4.fullAV);
      tl.import(MP4.audioOnly1);
      tl.import(MP4.audioOnly2);
      const tracks = tl.getTracks();

      expect(tracks).not.toBe(null);
    });
  });

  describe('WebM', () => {

    beforeEach(() => {
    });

    it('should be able to get the information of all the tracks imported', () => {
      const tl = new Timeline();
      tl.import(WebM.fullAV);
      tl.import(WebM.audioOnly1);
      tl.import(WebM.audioOnly2);
      const tracks = tl.getTracks();

      expect(tracks).not.toBe(null);
    });
  });
});
