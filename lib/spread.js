"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("./utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spread = /*#__PURE__*/function () {
  function Spread(startIndex, endIndex, index) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
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
    key: "fromExpression",
    value: function fromExpression(expression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY;

      if (expression) {
        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/,
            matches = expression.match(regExp),
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

      var index = 0,
          spread = new Spread(startIndex, endIndex, index);
      return spread;
    }
  }]);

  return Spread;
}();

exports["default"] = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpbmRleCIsImJldHdlZW4iLCJleHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQ3ZDLFNBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLE9BQU8sR0FBSyxLQUFLRCxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQXhFO0FBRUEsYUFBT0UsT0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRCxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0EsS0FBTCxJQUFjLENBQWQ7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQUlKLFVBQVUsR0FBRyxDQUFDLENBQWxCO0FBQUEsVUFDSUMsUUFBUSxHQUFHSSxNQUFNLENBQUNDLGlCQUR0Qjs7QUFHQSxVQUFJRixVQUFKLEVBQWdCO0FBQ2QsWUFBTUcsTUFBTSxHQUFHLDBCQUFmO0FBQUEsWUFDTUMsT0FBTyxHQUFHSixVQUFVLENBQUNLLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGhCO0FBQUEsWUFFTUcsV0FBVyxHQUFHLG1CQUFPRixPQUFQLENBRnBCO0FBQUEsWUFHTUcsVUFBVSxHQUFHLGtCQUFNSCxPQUFOLENBSG5CO0FBQUEsWUFJTUksV0FBVyxHQUFHLG1CQUFPSixPQUFQLENBSnBCOztBQU1BLFlBQUlFLFdBQVcsS0FBS0csU0FBcEIsRUFBK0I7QUFDN0JiLFVBQUFBLFVBQVUsR0FBR2MsUUFBUSxDQUFDSixXQUFELENBQXJCOztBQUVBLGNBQUlDLFVBQVUsS0FBS0UsU0FBbkIsRUFBOEI7QUFDNUJaLFlBQUFBLFFBQVEsR0FBR0QsVUFBWDtBQUNEO0FBQ0Y7O0FBRUQsWUFBSVksV0FBVyxLQUFLQyxTQUFwQixFQUErQjtBQUM3QlosVUFBQUEsUUFBUSxHQUFHYSxRQUFRLENBQUNGLFdBQUQsQ0FBbkI7O0FBRUEsY0FBSUQsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QmIsWUFBQUEsVUFBVSxHQUFHQyxRQUFiO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBQUEsVUFDTWEsTUFBTSxHQUFHLElBQUloQixNQUFKLENBQVdDLFVBQVgsRUFBdUJDLFFBQXZCLEVBQWlDQyxLQUFqQyxDQURmO0FBR0EsYUFBT2EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgaW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpc0JldHdlZW4oKSB7XG4gICAgY29uc3QgYmV0d2VlbiA9ICgodGhpcy5pbmRleCA+PSB0aGlzLnN0YXJ0SW5kZXgpICYmICh0aGlzLmluZGV4IDw9IHRoaXMuZW5kSW5kZXgpKTtcblxuICAgIHJldHVybiBiZXR3ZWVuO1xuICB9XG5cbiAgcmVzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGluY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAtMSxcbiAgICAgICAgZW5kSW5kZXggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgY29uc3QgcmVnRXhwID0gL1xcWyhcXGQrKT8oXFwuXFwuXFwuKT8oXFxkKyk/XS8sXG4gICAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuIl19