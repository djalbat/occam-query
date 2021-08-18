"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
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
                    if (spreadExpression === _constants.EXCLAMATION_MARK) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYQ0xBTUFUSU9OX01BUksgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUkspIHtcbiAgICAgICAgdW5pcXVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgICBtYXRjaGVzID0gc3ByZWFkRXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFCLEdBQWEsQ0FBYixVQUFhO0FBQ0ssR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELE1BQU07YUFBTixNQUFNLENBQ2IsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNOzhCQURyQixNQUFNO2FBRWxCLFVBQVUsR0FBRyxVQUFVO2FBQ3ZCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLE1BQU0sR0FBRyxNQUFNOztpQkFKSCxNQUFNOztZQU96QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsR0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTtvQkFFaEMsRUFBRSxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFidUIsTUFBbUIsUUFjeEQsS0FBSztvQkFDYixDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO3dCQWhCdUMsTUFBbUIsT0FpQjNELEtBQUssT0FBTyxVQUFVLE9BQU8sUUFBUTtnQkFDNUMsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUNkLFFBQVEsR0FBRyxRQUFRLEVBQ25CLE1BQU0sR0FBRyxLQUFLO2dCQUVsQixFQUFFLEVBQUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLEVBQUUsRUFBRSxnQkFBZ0IsS0E1Qk8sVUFBYSxtQkE0QkcsQ0FBQzt3QkFDMUMsTUFBTSxHQUFHLElBQUk7b0JBQ2YsQ0FBQyxNQUFNLENBQUM7d0JBQ04sR0FBSyxDQUFDLE1BQU0sK0JBQ04sT0FBTyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQ3ZDLFdBQVcsT0FoQzBCLE1BQW1CLFNBZ0NuQyxPQUFPLEdBQzVCLFVBQVUsT0FqQzJCLE1BQW1CLFFBaUNyQyxPQUFPLEdBQzFCLFdBQVcsT0FsQzBCLE1BQW1CLFNBa0NuQyxPQUFPO3dCQUVsQyxFQUFFLEVBQUUsV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDOzRCQUM5QixVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVc7NEJBRWpDLEVBQUUsRUFBRSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7Z0NBQzdCLFFBQVEsR0FBRyxVQUFVOzRCQUN2QixDQUFDO3dCQUNILENBQUM7d0JBRUQsRUFBRSxFQUFFLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQzs0QkFDOUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXOzRCQUUvQixFQUFFLEVBQUUsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dDQUM3QixVQUFVLEdBQUcsUUFBUTs0QkFDdkIsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNO3VCQUUvQyxNQUFNO1lBQ2YsQ0FBQzs7O1dBdkRrQixNQUFNOztrQkFBTixNQUFNIn0=