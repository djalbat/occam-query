'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array');

var second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth;

var Spread = function () {
  function Spread(startIndex, endIndex, index) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.index = index;
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

      var index = 0,
          spread = new Spread(startIndex, endIndex, index);

      return spread;
    }
  }]);

  return Spread;
}();

module.exports = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcHJlYWQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpbmRleCIsImJldHdlZW4iLCJleHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxtQkFBUixDQUF2Qjs7SUFFUUMsTSxHQUEwQkYsYyxDQUExQkUsTTtJQUFRQyxLLEdBQWtCSCxjLENBQWxCRyxLO0lBQU9DLE0sR0FBV0osYyxDQUFYSSxNOztJQUVqQkMsTTtBQUNKLGtCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFBQTs7QUFDdkMsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsVUFBWSxLQUFLRCxLQUFMLElBQWMsS0FBS0YsVUFBcEIsSUFBb0MsS0FBS0UsS0FBTCxJQUFjLEtBQUtELFFBQXhFOztBQUVBLGFBQU9FLE9BQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtELEtBQUwsSUFBYyxDQUFkO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFJSixhQUFhLENBQUMsQ0FBbEI7QUFBQSxVQUNJQyxXQUFXSSxPQUFPQyxpQkFEdEI7O0FBR0EsVUFBSUYsVUFBSixFQUFnQjtBQUNkLFlBQU1HLFNBQVMsMEJBQWY7QUFBQSxZQUNNQyxVQUFVSixXQUFXSyxLQUFYLENBQWlCRixNQUFqQixDQURoQjtBQUFBLFlBRU1HLGNBQWNkLE9BQU9ZLE9BQVAsQ0FGcEI7QUFBQSxZQUdNRyxhQUFhZCxNQUFNVyxPQUFOLENBSG5CO0FBQUEsWUFJTUksY0FBY2QsT0FBT1UsT0FBUCxDQUpwQjs7QUFNQSxZQUFJRSxnQkFBZ0JHLFNBQXBCLEVBQStCO0FBQzdCYix1QkFBYWMsU0FBU0osV0FBVCxDQUFiOztBQUVBLGNBQUlDLGVBQWVFLFNBQW5CLEVBQThCO0FBQzVCWix1QkFBV0QsVUFBWDtBQUNEO0FBQ0Y7O0FBRUQsWUFBSVksZ0JBQWdCQyxTQUFwQixFQUErQjtBQUM3QloscUJBQVdhLFNBQVNGLFdBQVQsQ0FBWDs7QUFFQSxjQUFJRCxlQUFlRSxTQUFuQixFQUE4QjtBQUM1QmIseUJBQWFDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBTUMsUUFBUSxDQUFkO0FBQUEsVUFDTWEsU0FBUyxJQUFJaEIsTUFBSixDQUFXQyxVQUFYLEVBQXVCQyxRQUF2QixFQUFpQ0MsS0FBakMsQ0FEZjs7QUFHQSxhQUFPYSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIGluZGV4KSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIGNvbnN0IGJldHdlZW4gPSAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG5cbiAgICByZXR1cm4gYmV0d2VlbjtcbiAgfVxuXG4gIGluY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAtMSxcbiAgICAgICAgZW5kSW5kZXggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbikge1xuICAgICAgY29uc3QgcmVnRXhwID0gL1xcWyhcXGQrKT8oXFwuXFwuXFwuKT8oXFxkKyk/XS8sXG4gICAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcmVhZDtcbiJdfQ==