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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwibmFtZXMiOlsiRVhDTEFNQVRJT05fTUFSSyIsImNsZWFyIiwidHJpbSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiU3ByZWFkIiwiY29uc3RydWN0b3IiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFCLEdBQWEsQ0FBYixVQUFhO0FBQ0ssR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELE1BQU0saUJBQVosUUFBUTthQUFGLE1BQU0sQ0FDYixVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU07OEJBRHJCLE1BQU07UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O2lCQUpILE1BQU07O1lBT3pCLEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLEdBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07b0JBRWhDLEVBQUUsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBYnVCLE1BQW1CLFFBY3hELEtBQUs7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQzt3QkFoQnVDLE1BQW1CLE9BaUIzRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDNUMsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7bUJBQTNCLFFBQVEsQ0FBRCxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3QyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsRUFDZCxRQUFRLEdBQUcsUUFBUSxFQUNuQixNQUFNLEdBQUcsS0FBSztnQkFFbEIsRUFBRSxFQUFFLGdCQUFnQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUM5QixFQUFFLEVBQUUsZ0JBQWdCLEtBNUJPLFVBQWEsbUJBNEJHLENBQUM7d0JBQzFDLE1BQU0sR0FBRyxJQUFJO29CQUNmLENBQUMsTUFBTSxDQUFDO3dCQUNOLEdBQUssQ0FBQyxNQUFNLCtCQUNOLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUN2QyxXQUFXLE9BaEMwQixNQUFtQixTQWdDbkMsT0FBTyxHQUM1QixVQUFVLE9BakMyQixNQUFtQixRQWlDckMsT0FBTyxHQUMxQixXQUFXLE9BbEMwQixNQUFtQixTQWtDbkMsT0FBTzt3QkFFbEMsRUFBRSxFQUFFLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQzs0QkFDOUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXOzRCQUVqQyxFQUFFLEVBQUUsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dDQUM3QixRQUFRLEdBQUcsVUFBVTs0QkFDdkIsQ0FBQzt3QkFDSCxDQUFDO3dCQUVELEVBQUUsRUFBRSxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7NEJBQzlCLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVzs0QkFFL0IsRUFBRSxFQUFFLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztnQ0FDN0IsVUFBVSxHQUFHLFFBQVE7NEJBQ3ZCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTTtnQkFFdEQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0F2RGtCLE1BQU07O2tCQUFOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVhDTEFNQVRJT05fTUFSSyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2xlYXIsIHRyaW0sIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcblxuICAgIGlmIChzcHJlYWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiA9PT0gRVhDTEFNQVRJT05fTUFSSykge1xuICAgICAgICB1bmlxdWUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gL1xcWyhcXGQrKT8oXFwuXFwuXFwuKT8oXFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IHBhcnNlSW50KHNlY29uZE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91cnRoTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZEluZGV4ID0gcGFyc2VJbnQoZm91cnRoTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG59XG4iXX0=