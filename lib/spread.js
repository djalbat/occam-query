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
                        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array.second)(matches) || null, thirdMatch = (0, _array.third)(matches) || null, fourthMatch = (0, _array.fourth)(matches) || null;
                        if (secondMatch !== null) {
                            startIndex = parseInt(secondMatch);
                            if (thirdMatch === null) {
                                endIndex = startIndex;
                            }
                        }
                        if (fourthMatch !== null) {
                            endIndex = parseInt(fourthMatch);
                            if (thirdMatch === null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcykgfHwgbnVsbCxcbiAgICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNwcmVhZCIsIkVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInVuaXF1ZSIsImFkanVzdE5vZGVzIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImNsZWFyIiwidHJpbSIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOTTtxQkFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQU0sQUFBRUMsNkJBQStCQyxxQkFBVSxDQUF6Q0Q7QUFFTyxJQUFBLEFBQU1ELHVCQUFOO2FBQU1BLE9BQ1BHLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNOzhCQURyQkw7UUFFakIsSUFBSSxDQUFDRyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2lCQUpHTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxLQUFLLEVBQUU7Z0JBQ2pCLElBQUksSUFBSSxDQUFDRixNQUFNLEVBQUU7b0JBQ2YsSUFBTUcsY0FBY0QsTUFBTUUsTUFBTTtvQkFFaEMsSUFBSUQsY0FBYyxHQUFHO3dCQUNuQkUsSUFBQUEsWUFBSyxFQUFDSDtvQkFDUixDQUFDO2dCQUNILE9BQU87b0JBQ0xJLElBQUFBLFdBQUksRUFBQ0osT0FBTyxJQUFJLENBQUNKLFVBQVUsRUFBRSxJQUFJLENBQUNDLFFBQVE7Z0JBQzVDLENBQUM7WUFDSDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQixFQUFFO2dCQUM1QyxJQUFJVixhQUFhLEdBQ2JDLFdBQVdVLFVBQ1hULFNBQVMsS0FBSztnQkFFbEIsSUFBSVEscUJBQXFCLElBQUksRUFBRTtvQkFDN0IsSUFBSUEscUJBQXFCWiw0QkFBNEI7d0JBQ25ESSxTQUFTLElBQUk7b0JBQ2YsT0FBTzt3QkFDTCxJQUFNVSxTQUFTLDRCQUNUQyxVQUFVSCxpQkFBaUJJLEtBQUssQ0FBQ0YsU0FDakNHLGNBQWNDLElBQUFBLGFBQU0sRUFBQ0gsWUFBWSxJQUFJLEVBQ3JDSSxhQUFhQyxJQUFBQSxZQUFLLEVBQUNMLFlBQVksSUFBSSxFQUNuQ00sY0FBY0MsSUFBQUEsYUFBTSxFQUFDUCxZQUFZLElBQUk7d0JBRTNDLElBQUlFLGdCQUFnQixJQUFJLEVBQUU7NEJBQ3hCZixhQUFhcUIsU0FBU047NEJBRXRCLElBQUlFLGVBQWUsSUFBSSxFQUFFO2dDQUN2QmhCLFdBQVdEOzRCQUNiLENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxJQUFJbUIsZ0JBQWdCLElBQUksRUFBRTs0QkFDeEJsQixXQUFXb0IsU0FBU0Y7NEJBRXBCLElBQUlGLGVBQWUsSUFBSSxFQUFFO2dDQUN2QmpCLGFBQWFDOzRCQUNmLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsSUFBTXFCLFNBQVMsSUFwREV6QixPQW9EU0csWUFBWUMsVUFBVUM7Z0JBRWhELE9BQU9vQjtZQUNUOzs7V0F2RG1CekIifQ==