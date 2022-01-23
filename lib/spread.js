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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYQ0xBTUFUSU9OX01BUksgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUkspIHtcbiAgICAgICAgdW5pcXVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgICBtYXRjaGVzID0gc3ByZWFkRXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInVuaXF1ZSIsImFkanVzdE5vZGVzIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFcUIsR0FBYSxDQUFiLFVBQWE7QUFDSyxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakRBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNOztRQUN0QyxJQUFJLENBQUNGLFVBQVUsR0FBR0EsVUFBVTtRQUM1QixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtRQUN4QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTs7OztZQUd0QkMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUNGLE1BQU0sRUFBRSxDQUFDO29CQUNoQixHQUFLLENBQUNHLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFNO29CQUVoQyxFQUFFLEVBQUVELFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFidUIsTUFBbUIsUUFjeERELEtBQUs7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQzt3QkFoQnVDLE1BQW1CLE9BaUIzREEsS0FBSyxFQUFFLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUTtnQkFDNUMsQ0FBQztZQUNILENBQUM7Ozs7WUFFTU0sR0FBb0IsRUFBcEJBLENBQW9CO21CQUEzQixRQUFRLENBQURBLG9CQUFvQixDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3QyxHQUFHLENBQUNSLFVBQVUsR0FBRyxDQUFDLEVBQ2RDLFFBQVEsR0FBR1EsUUFBUSxFQUNuQlAsTUFBTSxHQUFHLEtBQUs7Z0JBRWxCLEVBQUUsRUFBRU0sZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLEVBQUUsRUFBRUEsZ0JBQWdCLEtBNUJPLFVBQWEsbUJBNEJHLENBQUM7d0JBQzFDTixNQUFNLEdBQUcsSUFBSTtvQkFDZixDQUFDLE1BQU0sQ0FBQzt3QkFDTixHQUFLLENBQUNRLE1BQU0sK0JBQ05DLE9BQU8sR0FBR0gsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ0YsTUFBTSxHQUN2Q0csV0FBVyxPQWhDMEIsTUFBbUIsU0FnQ25DRixPQUFPLEdBQzVCRyxVQUFVLE9BakMyQixNQUFtQixRQWlDckNILE9BQU8sR0FDMUJJLFdBQVcsT0FsQzBCLE1BQW1CLFNBa0NuQ0osT0FBTzt3QkFFbEMsRUFBRSxFQUFFRSxXQUFXLEtBQUtHLFNBQVMsRUFBRSxDQUFDOzRCQUM5QmhCLFVBQVUsR0FBR2lCLFFBQVEsQ0FBQ0osV0FBVzs0QkFFakMsRUFBRSxFQUFFQyxVQUFVLEtBQUtFLFNBQVMsRUFBRSxDQUFDO2dDQUM3QmYsUUFBUSxHQUFHRCxVQUFVOzRCQUN2QixDQUFDO3dCQUNILENBQUM7d0JBRUQsRUFBRSxFQUFFZSxXQUFXLEtBQUtDLFNBQVMsRUFBRSxDQUFDOzRCQUM5QmYsUUFBUSxHQUFHZ0IsUUFBUSxDQUFDRixXQUFXOzRCQUUvQixFQUFFLEVBQUVELFVBQVUsS0FBS0UsU0FBUyxFQUFFLENBQUM7Z0NBQzdCaEIsVUFBVSxHQUFHQyxRQUFROzRCQUN2QixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELEdBQUssQ0FBQ2lCLE1BQU0sR0FBRyxHQUFHLENBQUNuQixNQUFNLENBQUNDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dCQUV0RCxNQUFNLENBQUNnQixNQUFNO1lBQ2YsQ0FBQzs7Ozs7a0JBdkRrQm5CLE1BQU0ifQ==