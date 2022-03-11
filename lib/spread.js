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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRWMsR0FBVyxDQUFYLFVBQVc7QUFFYSxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7QUFFdEUsR0FBSyxDQUFHQSwwQkFBMEIsR0FBS0MsVUFBVSxZQUF6Q0QsMEJBQTBCO0FBRW5CLEdBQUssQ0FBQ0UsTUFBTSxpQkFBWixRQUFRO2FBQUZBLE1BQU0sQ0FDYkMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07cUM7UUFDdEMsSUFBSSxDQUFDRixVQUFVLEdBQUdBLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7Ozs7WUFHdkJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUNsQixFQUFFLEVBQUUsSUFBSSxDQUFDRixNQUFNLEVBQUUsQ0FBQztvQkFDaEIsR0FBSyxDQUFDRyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtvQkFFaEMsRUFBRSxFQUFFRCxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3BCRSxNQUFLLFFBQUNILEtBQUssQ0FBQyxDQUFDO29CQUNmLENBQUM7Z0JBQ0gsQ0FBQyxNQUFNLENBQUM7d0JBQ05JLE1BQUksT0FBQ0osS0FBSyxFQUFFLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDSCxDQUFDOzs7O1lBRU1RLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBM0IsUUFBUSxDQUFEQSxvQkFBb0IsQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDN0MsR0FBRyxDQUFDVixVQUFVLEdBQUcsQ0FBQyxFQUNkQyxRQUFRLEdBQUdVLFFBQVEsRUFDbkJULE1BQU0sR0FBRyxLQUFLO2dCQUVsQixFQUFFLEVBQUVRLGdCQUFnQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUM5QixFQUFFLEVBQUVBLGdCQUFnQixLQUFLYiwwQkFBMEIsRUFBRSxDQUFDO3dCQUNwREssTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEIsQ0FBQyxNQUFNLENBQUM7d0JBQ04sR0FBSyxDQUFDVSxNQUFNLCtCQUNOQyxPQUFPLEdBQUdILGdCQUFnQixDQUFDSSxLQUFLLENBQUNGLE1BQU0sR0FDdkNHLFdBQVcsT0FBR0MsTUFBTSxTQUFDSCxPQUFPLEdBQzVCSSxVQUFVLE9BQUdDLE1BQUssUUFBQ0wsT0FBTyxHQUMxQk0sV0FBVyxPQUFHQyxNQUFNLFNBQUNQLE9BQU87d0JBRWxDLEVBQUUsRUFBRUUsV0FBVyxLQUFLTSxTQUFTLEVBQUUsQ0FBQzs0QkFDOUJyQixVQUFVLEdBQUdzQixRQUFRLENBQUNQLFdBQVcsQ0FBQyxDQUFDOzRCQUVuQyxFQUFFLEVBQUVFLFVBQVUsS0FBS0ksU0FBUyxFQUFFLENBQUM7Z0NBQzdCcEIsUUFBUSxHQUFHRCxVQUFVLENBQUM7NEJBQ3hCLENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxFQUFFLEVBQUVtQixXQUFXLEtBQUtFLFNBQVMsRUFBRSxDQUFDOzRCQUM5QnBCLFFBQVEsR0FBR3FCLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDLENBQUM7NEJBRWpDLEVBQUUsRUFBRUYsVUFBVSxLQUFLSSxTQUFTLEVBQUUsQ0FBQztnQ0FDN0JyQixVQUFVLEdBQUdDLFFBQVEsQ0FBQzs0QkFDeEIsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxHQUFLLENBQUNzQixNQUFNLEdBQUcsR0FBRyxDQUFDeEIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQkFFdEQsTUFBTSxDQUFDcUIsTUFBTTtZQUNmLENBQUM7O007OztrQkF2RGtCeEIsTUFBTSxBIn0=