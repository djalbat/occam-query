'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array');

var second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth;

var Spread = function () {
  function Spread(startIndex, endIndex) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.index = 0;
  }

  _createClass(Spread, [{
    key: 'isBetween',
    value: function isBetween() {
      var between = this.index >= this.startIndex && this.index <= this.endIndex;

      return between;
    }
  }, {
    key: 'incrementIndex',
    value: function incrementIndex() {
      this.index += 1;
    }
  }], [{
    key: 'fromExpression',
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

      var spread = new Spread(startIndex, endIndex);

      return spread;
    }
  }]);

  return Spread;
}();

module.exports = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcHJlYWQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpbmRleCIsImJldHdlZW4iLCJleHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxtQkFBUixDQUF2Qjs7SUFFUUMsTSxHQUEwQkYsYyxDQUExQkUsTTtJQUFRQyxLLEdBQWtCSCxjLENBQWxCRyxLO0lBQU9DLE0sR0FBV0osYyxDQUFYSSxNOztJQUVqQkMsTTtBQUNKLGtCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLFVBQVksS0FBS0QsS0FBTCxJQUFjLEtBQUtGLFVBQXBCLElBQW9DLEtBQUtFLEtBQUwsSUFBYyxLQUFLRCxRQUF4RTs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLRCxLQUFMLElBQWMsQ0FBZDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsVUFBSUosYUFBYSxDQUFDLENBQWxCO0FBQUEsVUFDSUMsV0FBV0ksT0FBT0MsaUJBRHRCOztBQUdBLFVBQUlGLFVBQUosRUFBZ0I7QUFDZCxZQUFNRyxTQUFTLDBCQUFmO0FBQUEsWUFDTUMsVUFBVUosV0FBV0ssS0FBWCxDQUFpQkYsTUFBakIsQ0FEaEI7QUFBQSxZQUVNRyxjQUFjZCxPQUFPWSxPQUFQLENBRnBCO0FBQUEsWUFHTUcsYUFBYWQsTUFBTVcsT0FBTixDQUhuQjtBQUFBLFlBSU1JLGNBQWNkLE9BQU9VLE9BQVAsQ0FKcEI7O0FBTUEsWUFBSUUsZ0JBQWdCRyxTQUFwQixFQUErQjtBQUM3QmIsdUJBQWFjLFNBQVNKLFdBQVQsQ0FBYjs7QUFFQSxjQUFJQyxlQUFlRSxTQUFuQixFQUE4QjtBQUM1QlosdUJBQVdELFVBQVg7QUFDRDtBQUNGOztBQUVELFlBQUlZLGdCQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JaLHFCQUFXYSxTQUFTRixXQUFULENBQVg7O0FBRUEsY0FBSUQsZUFBZUUsU0FBbkIsRUFBOEI7QUFDNUJiLHlCQUFhQyxRQUFiO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQU1jLFNBQVMsSUFBSWhCLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsQ0FBZjs7QUFFQSxhQUFPYyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGlzQmV0d2VlbigpIHtcbiAgICBjb25zdCBiZXR3ZWVuID0gKCh0aGlzLmluZGV4ID49IHRoaXMuc3RhcnRJbmRleCkgJiYgKHRoaXMuaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpO1xuXG4gICAgcmV0dXJuIGJldHdlZW47XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByZWFkO1xuIl19