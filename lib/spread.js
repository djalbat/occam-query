"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _array = require("./utilities/array");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var EXCLAMATION_MARK_CHARACTER = _necessary.characters.EXCLAMATION_MARK_CHARACTER;
var Spread = /*#__PURE__*/ function() {
    function Spread(startIndex, endIndex, unique) {
        _classCallCheck(this, Spread);
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.unique = unique;
    }
    _createClass(Spread, [
        {
            key: "adjustNodes",
            value: function adjustNodes(nodes) {
                if (this.unique) {
                    var nodesLength = nodes.length;
                    if (nodesLength > 1) {
                        (0, _array).clear(nodes);
                    }
                } else {
                    (0, _array).trim(nodes, this.startIndex, this.endIndex);
                }
            }
        }
    ], [
        {
            key: "fromSpreadExpression",
            value: function fromSpreadExpression(spreadExpression) {
                var startIndex = 0, endIndex = Infinity, unique = false;
                if (spreadExpression !== null) {
                    if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
                        unique = true;
                    } else {
                        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches);
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
        }
    ]);
    return Spread;
}();
exports.default = Spread;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiU3ByZWFkIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwidW5pcXVlIiwiYWRqdXN0Tm9kZXMiLCJub2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2xlYXIiLCJ0cmltIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFYSxJQUFBLE1BQW1CLFdBQW5CLG1CQUFtQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFNLEFBQUVBLDBCQUEwQixHQUFLQyxVQUFVLFdBQUEsQ0FBekNELDBCQUEwQixBQUFlLEFBQUM7QUFFbkMsSUFBQSxBQUFNRSxNQUFNLGlCQUFaO2FBQU1BLE1BQU0sQ0FDYkMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07O1FBQ3RDLElBQUksQ0FBQ0YsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7O1lBR3ZCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO2dCQUNqQixJQUFJLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNmLElBQU1HLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEFBQUM7b0JBRWpDLElBQUlELFdBQVcsR0FBRyxDQUFDLEVBQUU7d0JBQ25CRSxDQUFBQSxHQUFBQSxNQUFLLEFBQU8sQ0FBQSxNQUFQLENBQUNILEtBQUssQ0FBQyxDQUFDO3FCQUNkO2lCQUNGLE1BQU07b0JBQ0xJLENBQUFBLEdBQUFBLE1BQUksQUFBdUMsQ0FBQSxLQUF2QyxDQUFDSixLQUFLLEVBQUUsSUFBSSxDQUFDSixVQUFVLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7YUFDRjs7OztZQUVNUSxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUEzQixTQUFPQSxvQkFBb0IsQ0FBQ0MsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQUlWLFVBQVUsR0FBRyxDQUFDLEVBQ2RDLFFBQVEsR0FBR1UsUUFBUSxFQUNuQlQsTUFBTSxHQUFHLEtBQUssQUFBQztnQkFFbkIsSUFBSVEsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO29CQUM3QixJQUFJQSxnQkFBZ0IsS0FBS2IsMEJBQTBCLEVBQUU7d0JBQ25ESyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUNmLE1BQU07d0JBQ0wsSUFBTVUsTUFBTSw2QkFBNkIsRUFDbkNDLE9BQU8sR0FBR0gsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ0YsTUFBTSxDQUFDLEVBQ3hDRyxXQUFXLEdBQUdDLENBQUFBLEdBQUFBLE1BQU0sQUFBUyxDQUFBLE9BQVQsQ0FBQ0gsT0FBTyxDQUFDLEVBQzdCSSxVQUFVLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBUyxDQUFBLE1BQVQsQ0FBQ0wsT0FBTyxDQUFDLEVBQzNCTSxXQUFXLEdBQUdDLENBQUFBLEdBQUFBLE1BQU0sQUFBUyxDQUFBLE9BQVQsQ0FBQ1AsT0FBTyxDQUFDLEFBQUM7d0JBRXBDLElBQUlFLFdBQVcsS0FBS00sU0FBUyxFQUFFOzRCQUM3QnJCLFVBQVUsR0FBR3NCLFFBQVEsQ0FBQ1AsV0FBVyxDQUFDLENBQUM7NEJBRW5DLElBQUlFLFVBQVUsS0FBS0ksU0FBUyxFQUFFO2dDQUM1QnBCLFFBQVEsR0FBR0QsVUFBVSxDQUFDOzZCQUN2Qjt5QkFDRjt3QkFFRCxJQUFJbUIsV0FBVyxLQUFLRSxTQUFTLEVBQUU7NEJBQzdCcEIsUUFBUSxHQUFHcUIsUUFBUSxDQUFDSCxXQUFXLENBQUMsQ0FBQzs0QkFFakMsSUFBSUYsVUFBVSxLQUFLSSxTQUFTLEVBQUU7Z0NBQzVCckIsVUFBVSxHQUFHQyxRQUFRLENBQUM7NkJBQ3ZCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUVELElBQU1zQixNQUFNLEdBQUcsSUFBSXhCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sQ0FBQyxBQUFDO2dCQUV4RCxPQUFPcUIsTUFBTSxDQUFDO2FBQ2Y7Ozs7Q0FDRixFQUFBO2tCQXhEb0J4QixNQUFNIn0=