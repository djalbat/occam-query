'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require('./utilities/array');

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

module.exports = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImluZGV4IiwiYmV0d2VlbiIsImV4cHJlc3Npb24iLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7SUFFUUMsTSxHQUEwQkYsYyxDQUExQkUsTTtJQUFRQyxLLEdBQWtCSCxjLENBQWxCRyxLO0lBQU9DLE0sR0FBV0osYyxDQUFYSSxNOztJQUVqQkMsTTtBQUNKLGtCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFBQTs7QUFDdkMsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTUMsT0FBTyxHQUFLLEtBQUtELEtBQUwsSUFBYyxLQUFLRixVQUFwQixJQUFvQyxLQUFLRSxLQUFMLElBQWMsS0FBS0QsUUFBeEU7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtELEtBQUwsR0FBYSxDQUFiO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLQSxLQUFMLElBQWMsQ0FBZDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsVUFBSUosVUFBVSxHQUFHLENBQUMsQ0FBbEI7QUFBQSxVQUNJQyxRQUFRLEdBQUdJLE1BQU0sQ0FBQ0MsaUJBRHRCOztBQUdBLFVBQUlGLFVBQUosRUFBZ0I7QUFDZCxZQUFNRyxNQUFNLEdBQUcsMEJBQWY7QUFBQSxZQUNNQyxPQUFPLEdBQUdKLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkYsTUFBakIsQ0FEaEI7QUFBQSxZQUVNRyxXQUFXLEdBQUdkLE1BQU0sQ0FBQ1ksT0FBRCxDQUYxQjtBQUFBLFlBR01HLFVBQVUsR0FBR2QsS0FBSyxDQUFDVyxPQUFELENBSHhCO0FBQUEsWUFJTUksV0FBVyxHQUFHZCxNQUFNLENBQUNVLE9BQUQsQ0FKMUI7O0FBTUEsWUFBSUUsV0FBVyxLQUFLRyxTQUFwQixFQUErQjtBQUM3QmIsVUFBQUEsVUFBVSxHQUFHYyxRQUFRLENBQUNKLFdBQUQsQ0FBckI7O0FBRUEsY0FBSUMsVUFBVSxLQUFLRSxTQUFuQixFQUE4QjtBQUM1QlosWUFBQUEsUUFBUSxHQUFHRCxVQUFYO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJWSxXQUFXLEtBQUtDLFNBQXBCLEVBQStCO0FBQzdCWixVQUFBQSxRQUFRLEdBQUdhLFFBQVEsQ0FBQ0YsV0FBRCxDQUFuQjs7QUFFQSxjQUFJRCxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCYixZQUFBQSxVQUFVLEdBQUdDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBTUMsS0FBSyxHQUFHLENBQWQ7QUFBQSxVQUNNYSxNQUFNLEdBQUcsSUFBSWhCLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsUUFBdkIsRUFBaUNDLEtBQWpDLENBRGY7QUFHQSxhQUFPYSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBpbmRleCkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGlzQmV0d2VlbigpIHtcbiAgICBjb25zdCBiZXR3ZWVuID0gKCh0aGlzLmluZGV4ID49IHRoaXMuc3RhcnRJbmRleCkgJiYgKHRoaXMuaW5kZXggPD0gdGhpcy5lbmRJbmRleCkpO1xuXG4gICAgcmV0dXJuIGJldHdlZW47XG4gIH1cblxuICByZXNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaW5jcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCArPSAxO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IC0xLFxuICAgICAgICBlbmRJbmRleCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBpbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByZWFkO1xuIl19