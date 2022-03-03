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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRWMsR0FBVyxDQUFYLFVBQVc7QUFFYSxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7QUFFdEUsR0FBSyxDQUFHQSwwQkFBMEIsR0FBS0MsVUFBVSxZQUF6Q0QsMEJBQTBCO0lBRWJFLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO3FDO1FBQ3RDLElBQUksQ0FBQ0YsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7O1lBR3ZCQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQ0YsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLEdBQUssQ0FBQ0csV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU07b0JBRWhDLEVBQUUsRUFBRUQsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUNwQkUsTUFBSyxRQUFDSCxLQUFLLENBQUMsQ0FBQztvQkFDZixDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO3dCQUNOSSxNQUFJLE9BQUNKLEtBQUssRUFBRSxJQUFJLENBQUNKLFVBQVUsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQzs7OztZQUVNUSxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQTNCLFFBQVEsQ0FBREEsb0JBQW9CLENBQUNDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdDLEdBQUcsQ0FBQ1YsVUFBVSxHQUFHLENBQUMsRUFDZEMsUUFBUSxHQUFHVSxRQUFRLEVBQ25CVCxNQUFNLEdBQUcsS0FBSztnQkFFbEIsRUFBRSxFQUFFUSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDOUIsRUFBRSxFQUFFQSxnQkFBZ0IsS0FBS2IsMEJBQTBCLEVBQUUsQ0FBQzt3QkFDcERLLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hCLENBQUMsTUFBTSxDQUFDO3dCQUNOLEdBQUssQ0FBQ1UsTUFBTSwrQkFDTkMsT0FBTyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksS0FBSyxDQUFDRixNQUFNLEdBQ3ZDRyxXQUFXLE9BQUdDLE1BQU0sU0FBQ0gsT0FBTyxHQUM1QkksVUFBVSxPQUFHQyxNQUFLLFFBQUNMLE9BQU8sR0FDMUJNLFdBQVcsT0FBR0MsTUFBTSxTQUFDUCxPQUFPO3dCQUVsQyxFQUFFLEVBQUVFLFdBQVcsS0FBS00sU0FBUyxFQUFFLENBQUM7NEJBQzlCckIsVUFBVSxHQUFHc0IsUUFBUSxDQUFDUCxXQUFXLENBQUMsQ0FBQzs0QkFFbkMsRUFBRSxFQUFFRSxVQUFVLEtBQUtJLFNBQVMsRUFBRSxDQUFDO2dDQUM3QnBCLFFBQVEsR0FBR0QsVUFBVSxDQUFDOzRCQUN4QixDQUFDO3dCQUNILENBQUM7d0JBRUQsRUFBRSxFQUFFbUIsV0FBVyxLQUFLRSxTQUFTLEVBQUUsQ0FBQzs0QkFDOUJwQixRQUFRLEdBQUdxQixRQUFRLENBQUNILFdBQVcsQ0FBQyxDQUFDOzRCQUVqQyxFQUFFLEVBQUVGLFVBQVUsS0FBS0ksU0FBUyxFQUFFLENBQUM7Z0NBQzdCckIsVUFBVSxHQUFHQyxRQUFRLENBQUM7NEJBQ3hCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsR0FBSyxDQUFDc0IsTUFBTSxHQUFHLEdBQUcsQ0FBQ3hCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0JBRXRELE1BQU0sQ0FBQ3FCLE1BQU07WUFDZixDQUFDOztNOzs7a0JBdkRrQnhCLE1BQU0sQSJ9