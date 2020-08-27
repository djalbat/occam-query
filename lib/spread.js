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
    key: "isUnique",
    value: function isUnique() {
      return this.unique;
    }
  }, {
    key: "isBetween",
    value: function isBetween() {
      var between = this.index >= this.startIndex && this.index <= this.endIndex;
      return between;
    }
  }, {
    key: "reset",
    value: function reset() {
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
          endIndex = Infinity,
          unique = false;

      if (spreadExpression !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJpbmRleCIsImJldHdlZW4iLCJzcHJlYWRFeHByZXNzaW9uIiwiSW5maW5pdHkiLCJVTklRVUVfU1BSRUFEX0VYUFJFU1NJT04iLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLE1BQWxDLEVBQTBDQyxLQUExQyxFQUFpRDtBQUFBOztBQUMvQyxTQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtELE1BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsT0FBTyxHQUFLLEtBQUtELEtBQUwsSUFBYyxLQUFLSCxVQUFwQixJQUFvQyxLQUFLRyxLQUFMLElBQWMsS0FBS0YsUUFBeEU7QUFFQSxhQUFPRyxPQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtELEtBQUwsR0FBYSxDQUFiO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLQSxLQUFMLElBQWMsQ0FBZDtBQUNEOzs7eUNBRTJCRSxnQixFQUFrQjtBQUM1QyxVQUFJTCxVQUFVLEdBQUcsQ0FBQyxDQUFsQjtBQUFBLFVBQ0lDLFFBQVEsR0FBR0ssUUFEZjtBQUFBLFVBRUlKLE1BQU0sR0FBRyxLQUZiOztBQUlBLFVBQUlHLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQUlBLGdCQUFnQixLQUFLRSxtQ0FBekIsRUFBbUQ7QUFDakRMLFVBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTU0sTUFBTSxHQUFHLDBCQUFmO0FBQUEsY0FDTUMsT0FBTyxHQUFHSixnQkFBZ0IsQ0FBQ0ssS0FBakIsQ0FBdUJGLE1BQXZCLENBRGhCO0FBQUEsY0FFTUcsV0FBVyxHQUFHLG1CQUFPRixPQUFQLENBRnBCO0FBQUEsY0FHTUcsVUFBVSxHQUFHLGtCQUFNSCxPQUFOLENBSG5CO0FBQUEsY0FJTUksV0FBVyxHQUFHLG1CQUFPSixPQUFQLENBSnBCOztBQU1BLGNBQUlFLFdBQVcsS0FBS0csU0FBcEIsRUFBK0I7QUFDN0JkLFlBQUFBLFVBQVUsR0FBR2UsUUFBUSxDQUFDSixXQUFELENBQXJCOztBQUVBLGdCQUFJQyxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCYixjQUFBQSxRQUFRLEdBQUdELFVBQVg7QUFDRDtBQUNGOztBQUVELGNBQUlhLFdBQVcsS0FBS0MsU0FBcEIsRUFBK0I7QUFDN0JiLFlBQUFBLFFBQVEsR0FBR2MsUUFBUSxDQUFDRixXQUFELENBQW5COztBQUVBLGdCQUFJRCxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCZCxjQUFBQSxVQUFVLEdBQUdDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNRSxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ01hLE1BQU0sR0FBRyxJQUFJakIsTUFBSixDQUFXQyxVQUFYLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsRUFBeUNDLEtBQXpDLENBRGY7QUFHQSxhQUFPYSxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBVTklRVUVfU1BSRUFEX0VYUFJFU1NJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB0aGlzLnVuaXF1ZSA9IHVuaXF1ZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBpc1VuaXF1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy51bmlxdWU7XG4gIH1cblxuICBpc0JldHdlZW4oKSB7XG4gICAgY29uc3QgYmV0d2VlbiA9ICgodGhpcy5pbmRleCA+PSB0aGlzLnN0YXJ0SW5kZXgpICYmICh0aGlzLmluZGV4IDw9IHRoaXMuZW5kSW5kZXgpKTtcblxuICAgIHJldHVybiBiZXR3ZWVuO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBpbmNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ICs9IDE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gLTEsXG4gICAgICAgIGVuZEluZGV4ID0gSW5maW5pdHksXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGlmIChzcHJlYWRFeHByZXNzaW9uID09PSBVTklRVUVfU1BSRUFEX0VYUFJFU1NJT04pIHtcbiAgICAgICAgdW5pcXVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgICBtYXRjaGVzID0gc3ByZWFkRXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlLCBpbmRleCk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG4iXX0=