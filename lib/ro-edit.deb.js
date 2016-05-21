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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sUyxHQUNKLHlCQUEwRDtBQUFBLE1BQTdDLEtBQTZDLFFBQTdDLEtBQTZDO0FBQUEsTUFBdEMsSUFBc0MsUUFBdEMsSUFBc0M7QUFBQSxNQUFoQyxJQUFnQyxRQUFoQyxJQUFnQztBQUFBLE1BQTFCLFFBQTBCLFFBQTFCLFFBQTBCO0FBQUEsTUFBaEIsYUFBZ0IsUUFBaEIsYUFBZ0I7O0FBQUE7O0FBQ3hELE9BQUssS0FBTCxHQUFhLEtBQWIsQztBQUNBLE9BQUssSUFBTCxHQUFZLElBQVosQztBQUNBLE9BQUssSUFBTCxHQUFZLElBQVosQztBQUNBLE9BQUssUUFBTCxHQUFnQixRQUFoQixDO0FBQ0EsT0FBSyxhQUFMLEdBQXFCLGFBQXJCLEM7QUFDRCxDOztJQUdVLFEsV0FBQSxRO0FBQ1gsc0JBQWM7QUFBQTtBQUViOzs7Ozs7OzRCQUdNLE8sRUFBUyxDQUVmOzs7Ozs7Z0NBR1csQ0FFWDs7Ozs7O3lCQUdJLEssRUFBTyxDQUVYOzs7Ozs7MEJBR0ssSyxFQUFPLE0sRUFBUSxDQUVwQjs7Ozs7OzBCQUdLLEssRUFBTyxHLEVBQUssQ0FFakI7Ozs7Ozs4QkFHUSxDQUVSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFRyYWNrSW5mbyB7XG4gIGNvbnN0cnVjdG9yKHtpbmRleCwgdHlwZSwgbmFtZSwgZHVyYXRpb24sIHNlZ21lbnRMZW5ndGh9KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4OyAvLyBBIHVuaXF1ZSBpZCBmb3IgdGhpcyBUcmFja0luZm8gaW5zdGFuY2VcbiAgICB0aGlzLnR5cGVcdD0gdHlwZTsgLy8gJ3ZpZGVvJyBvciAnYXVkaW8nIG9yICdzdWJ0aXRsZSdcbiAgICB0aGlzLm5hbWVcdD0gbmFtZTsgLy8gQSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGlzIFRyYWNrSW5mbyBpbnN0YW5jZVxuICAgIHRoaXMuZHVyYXRpb25cdD0gZHVyYXRpb247IC8vIER1cmF0aW9uIGluIHNlY29uZHMuXG4gICAgdGhpcy5zZWdtZW50TGVuZ3RoID0gc2VnbWVudExlbmd0aDsgLy8gU2VnbWVudCBsZW5ndGggaW4gc2Vjb25kcy4gVGhpcyBpcyB0aGUgbWluaW11bSB1bml0IG9mIGVkaXRpbmcuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIC8vIEluY29ycG9yYXRlcyB0aGUgc3BlY2lmaWVkIEtvbnRhaW5lckVsZW1lbnQgaW50byB0aGlzIFRpbWVsaW5lIGluc3RhbmNlLlxuICBpbXBvcnQoZWxlbWVudCkge1xuXG4gIH1cblxuICAvLyBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIHRoYXQgaG9sZHMgdHJhY2sgaW5mb3JtYXRpb24uXG4gIGdldFRyYWNrcygpIHtcblxuICB9XG5cbiAgLy8gUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIHRyYWNrIGZyb20gdGhpcyBUaW1lbGluZSBpbnN0YW5jZS5cbiAgZHJvcChpbmRleCkge1xuXG4gIH1cblxuICAvLyBBZGp1c3RzIEFWLXN5bmMgYnkgcmVwb3NpdGlvbmluZyB0aGUgc3BlY2lmaWVkIHRyYWNrIGZvcndhcmQvYmFja3dhcmQgYWNjb3JkaW5nIHRvIHRoZSBvZmZzZXRcbiAgc2hpZnQoaW5kZXgsIG9mZnNldCkge1xuXG4gIH1cblxuICAvLyBDdXRzIG9mZiBhbnkgb3RoZXIgcGFydHMgdGhhbiB0aGUgc3BlY2lmaWVkIHJhbmdlIG9mIHRoZSBmaWxlLlxuICBzbGljZShzdGFydCwgZW5kKSB7XG5cbiAgfVxuXG4gIC8vIFJldHVybnMgYSBLb250YWluZXJFbGVtZW50IGFmdGVyIGFwcGx5aW5nIGFueSBjaGFuZ2VzIG1hZGUgdG8gdGhpcyBUaW1lbGluZSBpbnN0YW5jZSBzbyBmYXIuXG4gIGV4cG9ydCgpIHtcblxuICB9XG59XG4iXX0=
