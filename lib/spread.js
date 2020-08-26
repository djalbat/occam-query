"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("./utilities/array");

var _constants = require("./constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spread = /*#__PURE__*/function () {
  function Spread(startIndex, endIndex, unique, index) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.unique = unique;
    this.index = index;
  }

  _createClass(Spread, [{
    key: "isBetween",
    value: function isBetween() {
      var between = this.index >= this.startIndex && this.index <= this.endIndex;
      return between;
    }
  }, {
    key: "resetIndex",
    value: function resetIndex() {
      this.index = 0;
    }
  }, {
    key: "incrementIndex",
    value: function incrementIndex() {
      this.index += 1;
    }
  }], [{
    key: "fromSpreadExpression",
    value: function fromSpreadExpression(spreadExpression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY,
          unique = false;

      if (spreadExpression) {
        if (spreadExpression === _constants.UNIQUE_SPREAD_EXPRESSION) {
          unique = true;
        } else {
          var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/,
              matches = spreadExpression.match(regExp),
              secondMatch = (0, _array.second)(matches),
              thirdMatch = (0, _array.third)(matches),
              fourthMatch = (0, _array.fourth)(matches);

          if (secondMatch !== undefined) {
            startIndex = parseInt(secondMatch);

            if (thirdMatch === undefined) {
              endIndex = startIndex;
            }
          }

          if (fourthMatch !== undefined) {
            endIndex = parseInt(fourthMatch);

            if (thirdMatch === undefined) {
              startIndex = endIndex;
            }
          }
        }
      }

      var index = 0,
          spread = new Spread(startIndex, endIndex, unique, index);
      return spread;
    }
  }]);

  return Spread;
}();

exports["default"] = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJpbmRleCIsImJldHdlZW4iLCJzcHJlYWRFeHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJVTklRVUVfU1BSRUFEX0VYUFJFU1NJT04iLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLE1BQWxDLEVBQTBDQyxLQUExQyxFQUFpRDtBQUFBOztBQUMvQyxTQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyxPQUFPLEdBQUssS0FBS0QsS0FBTCxJQUFjLEtBQUtILFVBQXBCLElBQW9DLEtBQUtHLEtBQUwsSUFBYyxLQUFLRixRQUF4RTtBQUVBLGFBQU9HLE9BQVA7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS0QsS0FBTCxHQUFhLENBQWI7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtBLEtBQUwsSUFBYyxDQUFkO0FBQ0Q7Ozt5Q0FFMkJFLGdCLEVBQWtCO0FBQzVDLFVBQUlMLFVBQVUsR0FBRyxDQUFDLENBQWxCO0FBQUEsVUFDSUMsUUFBUSxHQUFHSyxNQUFNLENBQUNDLGlCQUR0QjtBQUFBLFVBRUlMLE1BQU0sR0FBRyxLQUZiOztBQUlBLFVBQUlHLGdCQUFKLEVBQXNCO0FBQ3BCLFlBQUlBLGdCQUFnQixLQUFLRyxtQ0FBekIsRUFBbUQ7QUFDakROLFVBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTU8sTUFBTSxHQUFHLDBCQUFmO0FBQUEsY0FDTUMsT0FBTyxHQUFHTCxnQkFBZ0IsQ0FBQ00sS0FBakIsQ0FBdUJGLE1BQXZCLENBRGhCO0FBQUEsY0FFTUcsV0FBVyxHQUFHLG1CQUFPRixPQUFQLENBRnBCO0FBQUEsY0FHTUcsVUFBVSxHQUFHLGtCQUFNSCxPQUFOLENBSG5CO0FBQUEsY0FJTUksV0FBVyxHQUFHLG1CQUFPSixPQUFQLENBSnBCOztBQU1BLGNBQUlFLFdBQVcsS0FBS0csU0FBcEIsRUFBK0I7QUFDN0JmLFlBQUFBLFVBQVUsR0FBR2dCLFFBQVEsQ0FBQ0osV0FBRCxDQUFyQjs7QUFFQSxnQkFBSUMsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QmQsY0FBQUEsUUFBUSxHQUFHRCxVQUFYO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJYyxXQUFXLEtBQUtDLFNBQXBCLEVBQStCO0FBQzdCZCxZQUFBQSxRQUFRLEdBQUdlLFFBQVEsQ0FBQ0YsV0FBRCxDQUFuQjs7QUFFQSxnQkFBSUQsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QmYsY0FBQUEsVUFBVSxHQUFHQyxRQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsVUFBTUUsS0FBSyxHQUFHLENBQWQ7QUFBQSxVQUNNYyxNQUFNLEdBQUcsSUFBSWxCLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxLQUF6QyxDQURmO0FBR0EsYUFBT2MsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUsIGluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIGNvbnN0IGJldHdlZW4gPSAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG5cbiAgICByZXR1cm4gYmV0d2VlbjtcbiAgfVxuXG4gIHJlc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcblxuICAgIGlmIChzcHJlYWRFeHByZXNzaW9uKSB7XG4gICAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiA9PT0gVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSwgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuIl19