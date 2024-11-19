"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Spread;
    }
});
var _necessary = require("necessary");
var _array = require("./utilities/array");
var _node = require("./utilities/node");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var EXCLAMATION_MARK_CHARACTER = _necessary.characters.EXCLAMATION_MARK_CHARACTER;
var Spread = /*#__PURE__*/ function() {
    function Spread(startIndex, endIndex, unique) {
        _class_call_check(this, Spread);
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.unique = unique;
    }
    _create_class(Spread, [
        {
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
        }
    ], [
        {
            key: "fromSpreadNode",
            value: function fromSpreadNode(spreadNode) {
                var spread = null;
                if (spreadNode !== null) {
                    var startIndex = (0, _node.startIndexFromSpreadNode)(spreadNode), endIndex = (0, _node.endIndexFromSpreadNode)(spreadNode), unique = (0, _node.uniqueFromSpreadNode)(spreadNode);
                    spread = new Spread(startIndex, endIndex, unique);
                }
                return spread;
            }
        },
        {
            key: "fromSpreadExpression",
            value: function fromSpreadExpression(spreadExpression) {
                var startIndex = 0, endIndex = Infinity, unique = false;
                if (spreadExpression !== null) {
                    if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
                        unique = true;
                    } else {
                        var regExp = /\[(-?\d+)?(\.\.\.)?(-?\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array.second)(matches) || null, thirdMatch = (0, _array.third)(matches) || null, fourthMatch = (0, _array.fourth)(matches) || null;
                        if (secondMatch !== null) {
                            startIndex = parseInt(secondMatch);
                            if (thirdMatch === null) {
                                endIndex = startIndex; ///
                            }
                        }
                        if (fourthMatch !== null) {
                            endIndex = parseInt(fourthMatch);
                            if (thirdMatch === null) {
                                startIndex = endIndex; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHVuaXF1ZUZyb21TcHJlYWROb2RlLCBlbmRJbmRleEZyb21TcHJlYWROb2RlLCBzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSB7XG4gICAgbGV0IHNwcmVhZCA9IG51bGw7XG5cbiAgICBpZiAoc3ByZWFkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSxcbiAgICAgICAgICAgIGVuZEluZGV4ID0gZW5kSW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSxcbiAgICAgICAgICAgIHVuaXF1ZSA9IHVuaXF1ZUZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpO1xuXG4gICAgICBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKC0/XFxkKyk/KFxcLlxcLlxcLik/KC0/XFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSB8fCBudWxsLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTcHJlYWQiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tU3ByZWFkTm9kZSIsInNwcmVhZE5vZGUiLCJzcHJlYWQiLCJzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUiLCJlbmRJbmRleEZyb21TcHJlYWROb2RlIiwidW5pcXVlRnJvbVNwcmVhZE5vZGUiLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUE07cUJBRXdCO29CQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkYsSUFBTSxBQUFFQyw2QkFBK0JDLHFCQUFVLENBQXpDRDtBQUVPLElBQUEsQUFBTUQsdUJBQU47YUFBTUEsT0FDUEcsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0NBRHJCTDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLEtBQUs7Z0JBQ2YsSUFBSSxJQUFJLENBQUNGLE1BQU0sRUFBRTtvQkFDZixJQUFNRyxjQUFjRCxNQUFNRSxNQUFNO29CQUVoQyxJQUFJRCxjQUFjLEdBQUc7d0JBQ25CRSxJQUFBQSxZQUFLLEVBQUNIO29CQUNSO2dCQUNGLE9BQU87b0JBQ0xJLElBQUFBLFdBQUksRUFBQ0osT0FBTyxJQUFJLENBQUNKLFVBQVUsRUFBRSxJQUFJLENBQUNDLFFBQVE7Z0JBQzVDO1lBQ0Y7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBSUMsU0FBUztnQkFFYixJQUFJRCxlQUFlLE1BQU07b0JBQ3ZCLElBQU1WLGFBQWFZLElBQUFBLDhCQUF3QixFQUFDRixhQUN0Q1QsV0FBV1ksSUFBQUEsNEJBQXNCLEVBQUNILGFBQ2xDUixTQUFTWSxJQUFBQSwwQkFBb0IsRUFBQ0o7b0JBRXBDQyxTQUFTLElBM0JNZCxPQTJCS0csWUFBWUMsVUFBVUM7Z0JBQzVDO2dCQUVBLE9BQU9TO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFDMUMsSUFBSWhCLGFBQWEsR0FDYkMsV0FBV2dCLFVBQ1hmLFNBQVM7Z0JBRWIsSUFBSWMscUJBQXFCLE1BQU07b0JBQzdCLElBQUlBLHFCQUFxQmxCLDRCQUE0Qjt3QkFDbkRJLFNBQVM7b0JBQ1gsT0FBTzt3QkFDTCxJQUFNZ0IsU0FBUyxnQ0FDVEMsVUFBVUgsaUJBQWlCSSxLQUFLLENBQUNGLFNBQ2pDRyxjQUFjQyxJQUFBQSxhQUFNLEVBQUNILFlBQVksTUFDakNJLGFBQWFDLElBQUFBLFlBQUssRUFBQ0wsWUFBWSxNQUMvQk0sY0FBY0MsSUFBQUEsYUFBTSxFQUFDUCxZQUFZO3dCQUV2QyxJQUFJRSxnQkFBZ0IsTUFBTTs0QkFDeEJyQixhQUFhMkIsU0FBU047NEJBRXRCLElBQUlFLGVBQWUsTUFBTTtnQ0FDdkJ0QixXQUFXRCxZQUFhLEdBQUc7NEJBQzdCO3dCQUNGO3dCQUVBLElBQUl5QixnQkFBZ0IsTUFBTTs0QkFDeEJ4QixXQUFXMEIsU0FBU0Y7NEJBRXBCLElBQUlGLGVBQWUsTUFBTTtnQ0FDdkJ2QixhQUFhQyxVQUFXLEdBQUc7NEJBQzdCO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQU1VLFNBQVMsSUFsRUVkLE9Ba0VTRyxZQUFZQyxVQUFVQztnQkFFaEQsT0FBT1M7WUFDVDs7O1dBckVtQmQifQ==