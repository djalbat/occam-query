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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKC0/XFxkKyk/KFxcLlxcLlxcLik/KC0/XFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSB8fCBudWxsLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3ByZWFkIiwiRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwidW5pcXVlIiwiYWRqdXN0Tm9kZXMiLCJub2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2xlYXIiLCJ0cmltIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5NO3FCQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTSxBQUFFQyw2QkFBK0JDLHFCQUFVLENBQXpDRDtBQUVPLElBQUEsQUFBTUQsdUJBQU47YUFBTUEsT0FDUEcsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0NBRHJCTDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxJQUFJLENBQUNGLE1BQU0sRUFBRTtvQkFDZixJQUFNRyxjQUFjRCxNQUFNRSxNQUFNO29CQUVoQyxJQUFJRCxjQUFjLEdBQUc7d0JBQ25CRSxJQUFBQSxZQUFLLEVBQUNIO29CQUNSLENBQUM7Z0JBQ0gsT0FBTztvQkFDTEksSUFBQUEsV0FBSSxFQUFDSixPQUFPLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUTtnQkFDNUMsQ0FBQztZQUNIOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQkMsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQUlWLGFBQWEsR0FDYkMsV0FBV1UsVUFDWFQsU0FBUyxLQUFLO2dCQUVsQixJQUFJUSxxQkFBcUIsSUFBSSxFQUFFO29CQUM3QixJQUFJQSxxQkFBcUJaLDRCQUE0Qjt3QkFDbkRJLFNBQVMsSUFBSTtvQkFDZixPQUFPO3dCQUNMLElBQU1VLFNBQVMsZ0NBQ1RDLFVBQVVILGlCQUFpQkksS0FBSyxDQUFDRixTQUNqQ0csY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxZQUFZLElBQUksRUFDckNJLGFBQWFDLElBQUFBLFlBQUssRUFBQ0wsWUFBWSxJQUFJLEVBQ25DTSxjQUFjQyxJQUFBQSxhQUFNLEVBQUNQLFlBQVksSUFBSTt3QkFFM0MsSUFBSUUsZ0JBQWdCLElBQUksRUFBRTs0QkFDeEJmLGFBQWFxQixTQUFTTjs0QkFFdEIsSUFBSUUsZUFBZSxJQUFJLEVBQUU7Z0NBQ3ZCaEIsV0FBV0QsWUFBYSxHQUFHOzRCQUM3QixDQUFDO3dCQUNILENBQUM7d0JBRUQsSUFBSW1CLGdCQUFnQixJQUFJLEVBQUU7NEJBQ3hCbEIsV0FBV29CLFNBQVNGOzRCQUVwQixJQUFJRixlQUFlLElBQUksRUFBRTtnQ0FDdkJqQixhQUFhQyxVQUFXLEdBQUc7NEJBQzdCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsSUFBTXFCLFNBQVMsSUFwREV6QixPQW9EU0csWUFBWUMsVUFBVUM7Z0JBRWhELE9BQU9vQjtZQUNUOzs7V0F2RG1CekIifQ==