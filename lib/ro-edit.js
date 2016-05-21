(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrackInfo = function TrackInfo(_ref) {
  var index = _ref.index;
  var type = _ref.type;
  var name = _ref.name;
  var duration = _ref.duration;
  var segmentLength = _ref.segmentLength;

  _classCallCheck(this, TrackInfo);

  this.index = index; // A unique id for this TrackInfo instance
  this.type = type; // 'video' or 'audio' or 'subtitle'
  this.name = name; // A descriptive name for this TrackInfo instance
  this.duration = duration; // Duration in seconds.
  this.segmentLength = segmentLength; // Segment length in seconds. This is the minimum unit of editing.
};

var Timeline = exports.Timeline = function () {
  function Timeline() {
    _classCallCheck(this, Timeline);
  }

  // Incorporates the specified KontainerElement into this Timeline instance.


  _createClass(Timeline, [{
    key: "import",
    value: function _import(element) {}

    // Returns a list of objects that holds track information.

  }, {
    key: "getTracks",
    value: function getTracks() {}

    // Removes the specified track from this Timeline instance.

  }, {
    key: "drop",
    value: function drop(index) {}

    // Adjusts AV-sync by repositioning the specified track forward/backward according to the offset

  }, {
    key: "shift",
    value: function shift(index, offset) {}

    // Cuts off any other parts than the specified range of the file.

  }, {
    key: "slice",
    value: function slice(start, end) {}

    // Returns a KontainerElement after applying any changes made to this Timeline instance so far.

  }, {
    key: "export",
    value: function _export() {}
  }]);

  return Timeline;
}();

},{}]},{},[1]);
