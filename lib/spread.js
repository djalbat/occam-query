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
  function Spread(startIndex, endIndex, unique) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.unique = unique;
  }

  _createClass(Spread, [{
    key: "adjustNodes",
    value: function adjustNodes(nodes) {
      if (this.unique) {
        var nodesLength = nodes.length;

        if (nodesLength > 1) {
          (0, _array.clear)(nodes);
        }
      } else {
        (0, _array.trim)(nodes, this.startIndex, this.endIndex);
      }
    }
  }], [{
    key: "fromSpreadExpression",
    value: function fromSpreadExpression(spreadExpression) {
      var startIndex = 0,
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

      var spread = new Spread(startIndex, endIndex, unique);
      return spread;
    }
  }]);

  return Spread;
}();

exports["default"] = Spread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJub2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3ByZWFkRXhwcmVzc2lvbiIsIkluZmluaXR5IiwiVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE07QUFDbkIsa0JBQVlDLFVBQVosRUFBd0JDLFFBQXhCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUFBOztBQUN4QyxTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRVdDLEssRUFBTztBQUNqQixVQUFJLEtBQUtELE1BQVQsRUFBaUI7QUFDZixZQUFNRSxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBMUI7O0FBRUEsWUFBSUQsV0FBVyxHQUFHLENBQWxCLEVBQXFCO0FBQ25CLDRCQUFNRCxLQUFOO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTCx5QkFBS0EsS0FBTCxFQUFZLEtBQUtILFVBQWpCLEVBQTZCLEtBQUtDLFFBQWxDO0FBQ0Q7QUFDRjs7O3lDQUUyQkssZ0IsRUFBa0I7QUFDNUMsVUFBSU4sVUFBVSxHQUFHLENBQWpCO0FBQUEsVUFDSUMsUUFBUSxHQUFHTSxRQURmO0FBQUEsVUFFSUwsTUFBTSxHQUFHLEtBRmI7O0FBSUEsVUFBSUksZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBSUEsZ0JBQWdCLEtBQUtFLG1DQUF6QixFQUFtRDtBQUNqRE4sVUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNTyxNQUFNLEdBQUcsMEJBQWY7QUFBQSxjQUNNQyxPQUFPLEdBQUdKLGdCQUFnQixDQUFDSyxLQUFqQixDQUF1QkYsTUFBdkIsQ0FEaEI7QUFBQSxjQUVNRyxXQUFXLEdBQUcsbUJBQU9GLE9BQVAsQ0FGcEI7QUFBQSxjQUdNRyxVQUFVLEdBQUcsa0JBQU1ILE9BQU4sQ0FIbkI7QUFBQSxjQUlNSSxXQUFXLEdBQUcsbUJBQU9KLE9BQVAsQ0FKcEI7O0FBTUEsY0FBSUUsV0FBVyxLQUFLRyxTQUFwQixFQUErQjtBQUM3QmYsWUFBQUEsVUFBVSxHQUFHZ0IsUUFBUSxDQUFDSixXQUFELENBQXJCOztBQUVBLGdCQUFJQyxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCZCxjQUFBQSxRQUFRLEdBQUdELFVBQVg7QUFDRDtBQUNGOztBQUVELGNBQUljLFdBQVcsS0FBS0MsU0FBcEIsRUFBK0I7QUFDN0JkLFlBQUFBLFFBQVEsR0FBR2UsUUFBUSxDQUFDRixXQUFELENBQW5COztBQUVBLGdCQUFJRCxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQzVCZixjQUFBQSxVQUFVLEdBQUdDLFFBQWI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNZ0IsTUFBTSxHQUFHLElBQUlsQixNQUFKLENBQVdDLFVBQVgsRUFBdUJDLFFBQXZCLEVBQWlDQyxNQUFqQyxDQUFmO0FBRUEsYUFBT2UsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFVOSVFVRV9TUFJFQURfRVhQUkVTU0lPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcblxuICAgIGlmIChzcHJlYWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiA9PT0gVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdfQ==