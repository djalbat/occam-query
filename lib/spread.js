"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("./utilities/array");

var second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth;

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
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImluZGV4IiwiYmV0d2VlbiIsImV4cHJlc3Npb24iLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0lBRVFDLE0sR0FBMEJGLGMsQ0FBMUJFLE07SUFBUUMsSyxHQUFrQkgsYyxDQUFsQkcsSztJQUFPQyxNLEdBQVdKLGMsQ0FBWEksTTs7SUFFRkMsTTtBQUNuQixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQ3ZDLFNBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLE9BQU8sR0FBSyxLQUFLRCxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQXhFO0FBRUEsYUFBT0UsT0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRCxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0EsS0FBTCxJQUFjLENBQWQ7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQUlKLFVBQVUsR0FBRyxDQUFDLENBQWxCO0FBQUEsVUFDSUMsUUFBUSxHQUFHSSxNQUFNLENBQUNDLGlCQUR0Qjs7QUFHQSxVQUFJRixVQUFKLEVBQWdCO0FBQ2QsWUFBTUcsTUFBTSxHQUFHLDBCQUFmO0FBQUEsWUFDTUMsT0FBTyxHQUFHSixVQUFVLENBQUNLLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGhCO0FBQUEsWUFFTUcsV0FBVyxHQUFHZCxNQUFNLENBQUNZLE9BQUQsQ0FGMUI7QUFBQSxZQUdNRyxVQUFVLEdBQUdkLEtBQUssQ0FBQ1csT0FBRCxDQUh4QjtBQUFBLFlBSU1JLFdBQVcsR0FBR2QsTUFBTSxDQUFDVSxPQUFELENBSjFCOztBQU1BLFlBQUlFLFdBQVcsS0FBS0csU0FBcEIsRUFBK0I7QUFDN0JiLFVBQUFBLFVBQVUsR0FBR2MsUUFBUSxDQUFDSixXQUFELENBQXJCOztBQUVBLGNBQUlDLFVBQVUsS0FBS0UsU0FBbkIsRUFBOEI7QUFDNUJaLFlBQUFBLFFBQVEsR0FBR0QsVUFBWDtBQUNEO0FBQ0Y7O0FBRUQsWUFBSVksV0FBVyxLQUFLQyxTQUFwQixFQUErQjtBQUM3QlosVUFBQUEsUUFBUSxHQUFHYSxRQUFRLENBQUNGLFdBQUQsQ0FBbkI7O0FBRUEsY0FBSUQsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QmIsWUFBQUEsVUFBVSxHQUFHQyxRQUFiO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQU1DLEtBQUssR0FBRyxDQUFkO0FBQUEsVUFDTWEsTUFBTSxHQUFHLElBQUloQixNQUFKLENBQVdDLFVBQVgsRUFBdUJDLFFBQXZCLEVBQWlDQyxLQUFqQyxDQURmO0FBR0EsYUFBT2EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBpbmRleCkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGlzQmV0d2VlbigpIHtcbiAgICBjb25zdCBiZXR3ZWVuID0gKCh0aGlzLmluZGV4ID49IHRoaXMuc3RhcnRJbmRleCkgJiYgKHRoaXMuaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpO1xuXG4gICAgcmV0dXJuIGJldHdlZW47XG4gIH1cblxuICByZXNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaW5jcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCArPSAxO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IC0xLFxuICAgICAgICBlbmRJbmRleCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBpbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG4iXX0=