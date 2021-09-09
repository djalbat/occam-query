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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwibmFtZXMiOlsiRVhDTEFNQVRJT05fTUFSSyIsImNsZWFyIiwidHJpbSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiU3ByZWFkIiwiY29uc3RydWN0b3IiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFCLEdBQWEsQ0FBYixVQUFhO0FBQ0ssR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELE1BQU0saUJBQVosUUFBUTthQUFGLE1BQU0sQ0FDYixVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU07OEJBRHJCLE1BQU07UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O2lCQUpILE1BQU07O1lBT3pCLEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLEdBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07b0JBRWhDLEVBQUUsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBYnVCLE1BQW1CLFFBY3hELEtBQUs7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQzt3QkFoQnVDLE1BQW1CLE9BaUIzRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDNUMsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7bUJBQTNCLFFBQVEsQ0FBRCxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3QyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsRUFDZCxRQUFRLEdBQUcsUUFBUSxFQUNuQixNQUFNLEdBQUcsS0FBSztnQkFFbEIsRUFBRSxFQUFFLGdCQUFnQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUM5QixFQUFFLEVBQUUsZ0JBQWdCLEtBNUJPLFVBQWEsbUJBNEJHLENBQUM7d0JBQzFDLE1BQU0sR0FBRyxJQUFJO29CQUNmLENBQUMsTUFBTSxDQUFDO3dCQUNOLEdBQUssQ0FBQyxNQUFNLCtCQUNOLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUN2QyxXQUFXLE9BaEMwQixNQUFtQixTQWdDbkMsT0FBTyxHQUM1QixVQUFVLE9BakMyQixNQUFtQixRQWlDckMsT0FBTyxHQUMxQixXQUFXLE9BbEMwQixNQUFtQixTQWtDbkMsT0FBTzt3QkFFbEMsRUFBRSxFQUFFLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQzs0QkFDOUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXOzRCQUVqQyxFQUFFLEVBQUUsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dDQUM3QixRQUFRLEdBQUcsVUFBVTs0QkFDdkIsQ0FBQzt3QkFDSCxDQUFDO3dCQUVELEVBQUUsRUFBRSxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7NEJBQzlCLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVzs0QkFFL0IsRUFBRSxFQUFFLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztnQ0FDN0IsVUFBVSxHQUFHLFFBQVE7NEJBQ3ZCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTTtnQkFFdEQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0F2RGtCLE1BQU07O2tCQUFOLE1BQU0ifQ==