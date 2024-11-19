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
            key: "fromNothing",
            value: function fromNothing() {
                var startIndex = 0, endIndex = Infinity, unique = false, spread = new Spread(startIndex, endIndex, unique);
                return spread;
            }
        },
        {
            key: "fromSpreadNode",
            value: function fromSpreadNode(spreadNode) {
                var startIndex = 0, endIndex = Infinity, unique = false;
                if (spreadNode !== null) {
                    startIndex = (0, _node.startIndexFromSpreadNode)(spreadNode);
                    endIndex = (0, _node.endIndexFromSpreadNode)(spreadNode);
                    unique = (0, _node.uniqueFromSpreadNode)(spreadNode);
                }
                var spread = new Spread(startIndex, endIndex, unique);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHVuaXF1ZUZyb21TcHJlYWROb2RlLCBlbmRJbmRleEZyb21TcHJlYWROb2RlLCBzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlLFxuICAgICAgICAgIHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgIGVuZEluZGV4ID0gSW5maW5pdHksXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNwcmVhZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSk7XG5cbiAgICAgIGVuZEluZGV4ID0gZW5kSW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKTtcblxuICAgICAgdW5pcXVlID0gdW5pcXVlRnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKC0/XFxkKyk/KFxcLlxcLlxcLik/KC0/XFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSB8fCBudWxsLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTcHJlYWQiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tTm90aGluZyIsIkluZmluaXR5Iiwic3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiLCJzcHJlYWROb2RlIiwic3RhcnRJbmRleEZyb21TcHJlYWROb2RlIiwiZW5kSW5kZXhGcm9tU3ByZWFkTm9kZSIsInVuaXF1ZUZyb21TcHJlYWROb2RlIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQTTtxQkFFd0I7b0JBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFNLEFBQUVDLDZCQUErQkMscUJBQVUsQ0FBekNEO0FBRU8sSUFBQSxBQUFNRCx1QkFBTjthQUFNQSxPQUNQRyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEckJMO1FBRWpCLElBQUksQ0FBQ0csVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsS0FBSztnQkFDZixJQUFJLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNmLElBQU1HLGNBQWNELE1BQU1FLE1BQU07b0JBRWhDLElBQUlELGNBQWMsR0FBRzt3QkFDbkJFLElBQUFBLFlBQUssRUFBQ0g7b0JBQ1I7Z0JBQ0YsT0FBTztvQkFDTEksSUFBQUEsV0FBSSxFQUFDSixPQUFPLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUTtnQkFDNUM7WUFDRjs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNVCxhQUFhLEdBQ2JDLFdBQVdTLFVBQ1hSLFNBQVMsT0FDVFMsU0FBUyxJQXZCRWQsT0F1QlNHLFlBQVlDLFVBQVVDO2dCQUVoRCxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBSWIsYUFBYSxHQUNiQyxXQUFXUyxVQUNYUixTQUFTO2dCQUViLElBQUlXLGVBQWUsTUFBTTtvQkFDdkJiLGFBQWFjLElBQUFBLDhCQUF3QixFQUFDRDtvQkFFdENaLFdBQVdjLElBQUFBLDRCQUFzQixFQUFDRjtvQkFFbENYLFNBQVNjLElBQUFBLDBCQUFvQixFQUFDSDtnQkFDaEM7Z0JBRUEsSUFBTUYsU0FBUyxJQXpDRWQsT0F5Q1NHLFlBQVlDLFVBQVVDO2dCQUVoRCxPQUFPUztZQUNUOzs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxnQkFBZ0I7Z0JBQzFDLElBQUlsQixhQUFhLEdBQ2JDLFdBQVdTLFVBQ1hSLFNBQVM7Z0JBRWIsSUFBSWdCLHFCQUFxQixNQUFNO29CQUM3QixJQUFJQSxxQkFBcUJwQiw0QkFBNEI7d0JBQ25ESSxTQUFTO29CQUNYLE9BQU87d0JBQ0wsSUFBTWlCLFNBQVMsZ0NBQ1RDLFVBQVVGLGlCQUFpQkcsS0FBSyxDQUFDRixTQUNqQ0csY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxZQUFZLE1BQ2pDSSxhQUFhQyxJQUFBQSxZQUFLLEVBQUNMLFlBQVksTUFDL0JNLGNBQWNDLElBQUFBLGFBQU0sRUFBQ1AsWUFBWTt3QkFFdkMsSUFBSUUsZ0JBQWdCLE1BQU07NEJBQ3hCdEIsYUFBYTRCLFNBQVNOOzRCQUV0QixJQUFJRSxlQUFlLE1BQU07Z0NBQ3ZCdkIsV0FBV0QsWUFBYSxHQUFHOzRCQUM3Qjt3QkFDRjt3QkFFQSxJQUFJMEIsZ0JBQWdCLE1BQU07NEJBQ3hCekIsV0FBVzJCLFNBQVNGOzRCQUVwQixJQUFJRixlQUFlLE1BQU07Z0NBQ3ZCeEIsYUFBYUMsVUFBVyxHQUFHOzRCQUM3Qjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNVSxTQUFTLElBL0VFZCxPQStFU0csWUFBWUMsVUFBVUM7Z0JBRWhELE9BQU9TO1lBQ1Q7OztXQWxGbUJkIn0=