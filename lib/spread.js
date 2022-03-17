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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUyQixJQUFBLFVBQVcsdUJBQUE7QUFFYSxJQUFBLE1BQW1CLCtCQUFBOzs7Ozs7Ozs7OERBSnRFO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7QUFNQSxJQUFNLEFBQUVBLDBCQUEwQixHQUFLQyxVQUFVLFlBQXpDRCwwQkFBMEIsQUFBZSxBQUFDO0FBRW5DLElBQUEsQUFBTUUsTUFBTSxpQkNSeEIsQURRWTthQUFNQSxNQUFNLENBQ2JDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO3FDQVQxQztRQVVJLElBQUksQ0FBQ0YsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7O1lBR3ZCQyxHQUFXLGVBQUE7WUVmYixPRmVFQSxTQUFBQSxXQUFXLENBQUNDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxJQUFJLENBQUNGLE1BQU0sRUFBRTtvQkFDZixJQUFNRyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxBQUFDO29CQUVqQyxJQUFJRCxXQUFXLEdBQUcsQ0FBQyxFQUFFO3dCQUNuQkUsQ0FBQUEsR0FBQUEsTUFBSyxBQUFPLENBQUEsT0FBTkgsS0FBSyxDQUFDLENBQUM7cUJBQ2Q7aUJBQ0YsTUFBTTtvQkFDTEksQ0FBQUEsR0FBQUEsTUFBSSxBQUF1QyxDQUFBLE1BQXRDSixLQUFLLEVBQUUsSUFBSSxDQUFDSixVQUFVLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7YUFDRjs7OztZQUVNUSxHQUFvQix3QkFBQTtZRTNCN0IsT0YyQkUsU0FBT0Esb0JBQW9CLENBQUNDLGdCQUFnQixFQUFFO2dCQUM1QyxJQUFJVixVQUFVLEdBQUcsQ0FBQyxFQUNkQyxRQUFRLEdBQUdVLFFBQVEsRUFDbkJULE1BQU0sR0FBRyxLQUFLLEFBQUM7Z0JBRW5CLElBQUlRLGdCQUFnQixLQUFLLElBQUksRUFBRTtvQkFDN0IsSUFBSUEsZ0JBQWdCLEtBQUtiLDBCQUEwQixFQUFFO3dCQUNuREssTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDZixNQUFNO3dCQUNMLElBQU1VLE1BQU0sNkJBQTZCLEVBQ25DQyxPQUFPLEdBQUdILGdCQUFnQixDQUFDSSxLQUFLLENBQUNGLE1BQU0sQ0FBQyxFQUN4Q0csV0FBVyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFNLEFBQVMsQ0FBQSxRQUFSSCxPQUFPLENBQUMsRUFDN0JJLFVBQVUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBSyxBQUFTLENBQUEsT0FBUkwsT0FBTyxDQUFDLEVBQzNCTSxXQUFXLEdBQUdDLENBQUFBLEdBQUFBLE1BQU0sQUFBUyxDQUFBLFFBQVJQLE9BQU8sQ0FBQyxBQUFDO3dCQUVwQyxJQUFJRSxXQUFXLEtBQUtNLFNBQVMsRUFBRTs0QkFDN0JyQixVQUFVLEdBQUdzQixRQUFRLENBQUNQLFdBQVcsQ0FBQyxDQUFDOzRCQUVuQyxJQUFJRSxVQUFVLEtBQUtJLFNBQVMsRUFBRTtnQ0FDNUJwQixRQUFRLEdBQUdELFVBQVUsQ0FBQzs2QkFDdkI7eUJBQ0Y7d0JBRUQsSUFBSW1CLFdBQVcsS0FBS0UsU0FBUyxFQUFFOzRCQUM3QnBCLFFBQVEsR0FBR3FCLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDLENBQUM7NEJBRWpDLElBQUlGLFVBQVUsS0FBS0ksU0FBUyxFQUFFO2dDQUM1QnJCLFVBQVUsR0FBR0MsUUFBUSxDQUFDOzZCQUN2Qjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFFRCxJQUFNc0IsTUFBTSxHQUFHLElBQUl4QixNQUFNLENBQUNDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUMsQUFBQztnQkFFeEQsT0FBT3FCLE1BQU0sQ0FBQzthQUNmOztNQS9ESDs7Q0FnRUMsRUFBQTtrQkF4RG9CeEIsTUFBTSxBQVIzQiJ9