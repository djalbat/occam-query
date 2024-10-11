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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKC0/XFxkKyk/KFxcLlxcLlxcLik/KC0/XFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSB8fCBudWxsLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTcHJlYWQiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTk07cUJBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNLEFBQUVDLDZCQUErQkMscUJBQVUsQ0FBekNEO0FBRU8sSUFBQSxBQUFNRCx1QkFBTjthQUFNQSxPQUNQRyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEckJMO1FBRWpCLElBQUksQ0FBQ0csVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsS0FBSztnQkFDZixJQUFJLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNmLElBQU1HLGNBQWNELE1BQU1FLE1BQU07b0JBRWhDLElBQUlELGNBQWMsR0FBRzt3QkFDbkJFLElBQUFBLFlBQUssRUFBQ0g7b0JBQ1I7Z0JBQ0YsT0FBTztvQkFDTEksSUFBQUEsV0FBSSxFQUFDSixPQUFPLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUTtnQkFDNUM7WUFDRjs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFDMUMsSUFBSVYsYUFBYSxHQUNiQyxXQUFXVSxVQUNYVCxTQUFTO2dCQUViLElBQUlRLHFCQUFxQixNQUFNO29CQUM3QixJQUFJQSxxQkFBcUJaLDRCQUE0Qjt3QkFDbkRJLFNBQVM7b0JBQ1gsT0FBTzt3QkFDTCxJQUFNVSxTQUFTLGdDQUNUQyxVQUFVSCxpQkFBaUJJLEtBQUssQ0FBQ0YsU0FDakNHLGNBQWNDLElBQUFBLGFBQU0sRUFBQ0gsWUFBWSxNQUNqQ0ksYUFBYUMsSUFBQUEsWUFBSyxFQUFDTCxZQUFZLE1BQy9CTSxjQUFjQyxJQUFBQSxhQUFNLEVBQUNQLFlBQVk7d0JBRXZDLElBQUlFLGdCQUFnQixNQUFNOzRCQUN4QmYsYUFBYXFCLFNBQVNOOzRCQUV0QixJQUFJRSxlQUFlLE1BQU07Z0NBQ3ZCaEIsV0FBV0QsWUFBYSxHQUFHOzRCQUM3Qjt3QkFDRjt3QkFFQSxJQUFJbUIsZ0JBQWdCLE1BQU07NEJBQ3hCbEIsV0FBV29CLFNBQVNGOzRCQUVwQixJQUFJRixlQUFlLE1BQU07Z0NBQ3ZCakIsYUFBYUMsVUFBVyxHQUFHOzRCQUM3Qjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNcUIsU0FBUyxJQXBERXpCLE9Bb0RTRyxZQUFZQyxVQUFVQztnQkFFaEQsT0FBT29CO1lBQ1Q7OztXQXZEbUJ6QiJ9