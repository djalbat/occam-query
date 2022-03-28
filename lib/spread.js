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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBjbGVhciwgdHJpbSwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB0aGlzLnVuaXF1ZSA9IHVuaXF1ZTtcbiAgfVxuXG4gIGFkanVzdE5vZGVzKG5vZGVzKSB7XG4gICAgaWYgKHRoaXMudW5pcXVlKSB7XG4gICAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG5vZGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjbGVhcihub2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaW0obm9kZXMsIHRoaXMuc3RhcnRJbmRleCwgdGhpcy5lbmRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgIGVuZEluZGV4ID0gSW5maW5pdHksXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGlmIChzcHJlYWRFeHByZXNzaW9uID09PSBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUikge1xuICAgICAgICB1bmlxdWUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gL1xcWyhcXGQrKT8oXFwuXFwuXFwuKT8oXFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInVuaXF1ZSIsImFkanVzdE5vZGVzIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImNsZWFyIiwidHJpbSIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic3ByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTJCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVhLElBQUEsTUFBbUIsV0FBbkIsbUJBQW1CLENBQUE7Ozs7Ozs7Ozs4REFKdEU7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7OztBQU1BLElBQU0sQUFBRUEsMEJBQTBCLEdBQUtDLFVBQVUsWUFBekNELDBCQUEwQixBQUFlLEFBQUM7QUFFbkMsSUFBQSxBQUFNRSxNQUFNLGlCQ1J4QixBRFFZO2FBQU1BLE1BQU0sQ0FDYkMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07cUNBVDFDO1FBVUksSUFBSSxDQUFDRixVQUFVLEdBQUdBLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7Ozs7WUFHdkJDLEdBQVcsRUFBWEEsYUFBVztZRWZiLE9GZUVBLFNBQUFBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO2dCQUNqQixJQUFJLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNmLElBQU1HLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEFBQUM7b0JBRWpDLElBQUlELFdBQVcsR0FBRyxDQUFDLEVBQUU7d0JBQ25CRSxDQUFBQSxHQUFBQSxNQUFLLEFBQU8sQ0FBQSxPQUFOSCxLQUFLLENBQUMsQ0FBQztxQkFDZDtpQkFDRixNQUFNO29CQUNMSSxDQUFBQSxHQUFBQSxNQUFJLEFBQXVDLENBQUEsTUFBdENKLEtBQUssRUFBRSxJQUFJLENBQUNKLFVBQVUsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO2lCQUM3QzthQUNGOzs7O1lBRU1RLEdBQW9CLEVBQXBCQSxzQkFBb0I7WUUzQjdCLE9GMkJFLFNBQU9BLG9CQUFvQixDQUFDQyxnQkFBZ0IsRUFBRTtnQkFDNUMsSUFBSVYsVUFBVSxHQUFHLENBQUMsRUFDZEMsUUFBUSxHQUFHVSxRQUFRLEVBQ25CVCxNQUFNLEdBQUcsS0FBSyxBQUFDO2dCQUVuQixJQUFJUSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQzdCLElBQUlBLGdCQUFnQixLQUFLYiwwQkFBMEIsRUFBRTt3QkFDbkRLLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQ2YsTUFBTTt3QkFDTCxJQUFNVSxNQUFNLDZCQUE2QixFQUNuQ0MsT0FBTyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksS0FBSyxDQUFDRixNQUFNLENBQUMsRUFDeENHLFdBQVcsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBTSxBQUFTLENBQUEsUUFBUkgsT0FBTyxDQUFDLEVBQzdCSSxVQUFVLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBUyxDQUFBLE9BQVJMLE9BQU8sQ0FBQyxFQUMzQk0sV0FBVyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFNLEFBQVMsQ0FBQSxRQUFSUCxPQUFPLENBQUMsQUFBQzt3QkFFcEMsSUFBSUUsV0FBVyxLQUFLTSxTQUFTLEVBQUU7NEJBQzdCckIsVUFBVSxHQUFHc0IsUUFBUSxDQUFDUCxXQUFXLENBQUMsQ0FBQzs0QkFFbkMsSUFBSUUsVUFBVSxLQUFLSSxTQUFTLEVBQUU7Z0NBQzVCcEIsUUFBUSxHQUFHRCxVQUFVLENBQUM7NkJBQ3ZCO3lCQUNGO3dCQUVELElBQUltQixXQUFXLEtBQUtFLFNBQVMsRUFBRTs0QkFDN0JwQixRQUFRLEdBQUdxQixRQUFRLENBQUNILFdBQVcsQ0FBQyxDQUFDOzRCQUVqQyxJQUFJRixVQUFVLEtBQUtJLFNBQVMsRUFBRTtnQ0FDNUJyQixVQUFVLEdBQUdDLFFBQVEsQ0FBQzs2QkFDdkI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsSUFBTXNCLE1BQU0sR0FBRyxJQUFJeEIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxDQUFDLEFBQUM7Z0JBRXhELE9BQU9xQixNQUFNLENBQUM7YUFDZjs7TUEvREg7O0NBZ0VDLEVBQUE7a0JBeERvQnhCLE1BQU0sQUFSM0IifQ==