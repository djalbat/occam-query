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
    key: "fromSpreadExpression",
    value: function fromSpreadExpression(spreadExpression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY;

      if (spreadExpression) {
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

      var index = 0,
          spread = new Spread(startIndex, endIndex, index);
      return spread;
    }
  }]);

  return Spread;
}();

exports["default"] = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpbmRleCIsImJldHdlZW4iLCJzcHJlYWRFeHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQ3ZDLFNBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLE9BQU8sR0FBSyxLQUFLRCxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQXhFO0FBRUEsYUFBT0UsT0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRCxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0EsS0FBTCxJQUFjLENBQWQ7QUFDRDs7O3lDQUUyQkUsZ0IsRUFBa0I7QUFDNUMsVUFBSUosVUFBVSxHQUFHLENBQUMsQ0FBbEI7QUFBQSxVQUNJQyxRQUFRLEdBQUdJLE1BQU0sQ0FBQ0MsaUJBRHRCOztBQUdBLFVBQUlGLGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1HLE1BQU0sR0FBRywwQkFBZjtBQUFBLFlBQ01DLE9BQU8sR0FBR0osZ0JBQWdCLENBQUNLLEtBQWpCLENBQXVCRixNQUF2QixDQURoQjtBQUFBLFlBRU1HLFdBQVcsR0FBRyxtQkFBT0YsT0FBUCxDQUZwQjtBQUFBLFlBR01HLFVBQVUsR0FBRyxrQkFBTUgsT0FBTixDQUhuQjtBQUFBLFlBSU1JLFdBQVcsR0FBRyxtQkFBT0osT0FBUCxDQUpwQjs7QUFNQSxZQUFJRSxXQUFXLEtBQUtHLFNBQXBCLEVBQStCO0FBQzdCYixVQUFBQSxVQUFVLEdBQUdjLFFBQVEsQ0FBQ0osV0FBRCxDQUFyQjs7QUFFQSxjQUFJQyxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCWixZQUFBQSxRQUFRLEdBQUdELFVBQVg7QUFDRDtBQUNGOztBQUVELFlBQUlZLFdBQVcsS0FBS0MsU0FBcEIsRUFBK0I7QUFDN0JaLFVBQUFBLFFBQVEsR0FBR2EsUUFBUSxDQUFDRixXQUFELENBQW5COztBQUVBLGNBQUlELFVBQVUsS0FBS0UsU0FBbkIsRUFBOEI7QUFDNUJiLFlBQUFBLFVBQVUsR0FBR0MsUUFBYjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ01hLE1BQU0sR0FBRyxJQUFJaEIsTUFBSixDQUFXQyxVQUFYLEVBQXVCQyxRQUF2QixFQUFpQ0MsS0FBakMsQ0FEZjtBQUdBLGFBQU9hLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIGluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIGNvbnN0IGJldHdlZW4gPSAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG5cbiAgICByZXR1cm4gYmV0d2VlbjtcbiAgfVxuXG4gIHJlc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKHNwcmVhZEV4cHJlc3Npb24pIHtcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIGluZGV4KTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdfQ==