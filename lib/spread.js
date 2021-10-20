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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYQ0xBTUFUSU9OX01BUksgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSkge1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIHRoaXMudW5pcXVlID0gdW5pcXVlO1xuICB9XG5cbiAgYWRqdXN0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAodGhpcy51bmlxdWUpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNsZWFyKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpbShub2RlcywgdGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUkspIHtcbiAgICAgICAgdW5pcXVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9cXFsoXFxkKyk/KFxcLlxcLlxcLik/KFxcZCspP10vLFxuICAgICAgICAgICAgICBtYXRjaGVzID0gc3ByZWFkRXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHBhcnNlSW50KGZvdXJ0aE1hdGNoKTtcblxuICAgICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcHJlYWQgPSBuZXcgU3ByZWFkKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNwcmVhZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInVuaXF1ZSIsImFkanVzdE5vZGVzIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNwcmVhZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFcUIsR0FBYSxDQUFiLFVBQWE7QUFDSyxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakRBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNOzhCQURyQkgsTUFBTTtRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtRQUM1QixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtRQUN4QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTs7aUJBSkhILE1BQU07O1lBT3pCSSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQ0YsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLEdBQUssQ0FBQ0csV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU07b0JBRWhDLEVBQUUsRUFBRUQsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQWJ1QixNQUFtQixRQWN4REQsS0FBSztvQkFDYixDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO3dCQWhCdUMsTUFBbUIsT0FpQjNEQSxLQUFLLEVBQUUsSUFBSSxDQUFDSixVQUFVLEVBQUUsSUFBSSxDQUFDQyxRQUFRO2dCQUM1QyxDQUFDO1lBQ0gsQ0FBQzs7OztZQUVNTSxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQTNCLFFBQVEsQ0FBREEsb0JBQW9CLENBQUNDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdDLEdBQUcsQ0FBQ1IsVUFBVSxHQUFHLENBQUMsRUFDZEMsUUFBUSxHQUFHUSxRQUFRLEVBQ25CUCxNQUFNLEdBQUcsS0FBSztnQkFFbEIsRUFBRSxFQUFFTSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDOUIsRUFBRSxFQUFFQSxnQkFBZ0IsS0E1Qk8sVUFBYSxtQkE0QkcsQ0FBQzt3QkFDMUNOLE1BQU0sR0FBRyxJQUFJO29CQUNmLENBQUMsTUFBTSxDQUFDO3dCQUNOLEdBQUssQ0FBQ1EsTUFBTSwrQkFDTkMsT0FBTyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksS0FBSyxDQUFDRixNQUFNLEdBQ3ZDRyxXQUFXLE9BaEMwQixNQUFtQixTQWdDbkNGLE9BQU8sR0FDNUJHLFVBQVUsT0FqQzJCLE1BQW1CLFFBaUNyQ0gsT0FBTyxHQUMxQkksV0FBVyxPQWxDMEIsTUFBbUIsU0FrQ25DSixPQUFPO3dCQUVsQyxFQUFFLEVBQUVFLFdBQVcsS0FBS0csU0FBUyxFQUFFLENBQUM7NEJBQzlCaEIsVUFBVSxHQUFHaUIsUUFBUSxDQUFDSixXQUFXOzRCQUVqQyxFQUFFLEVBQUVDLFVBQVUsS0FBS0UsU0FBUyxFQUFFLENBQUM7Z0NBQzdCZixRQUFRLEdBQUdELFVBQVU7NEJBQ3ZCLENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxFQUFFLEVBQUVlLFdBQVcsS0FBS0MsU0FBUyxFQUFFLENBQUM7NEJBQzlCZixRQUFRLEdBQUdnQixRQUFRLENBQUNGLFdBQVc7NEJBRS9CLEVBQUUsRUFBRUQsVUFBVSxLQUFLRSxTQUFTLEVBQUUsQ0FBQztnQ0FDN0JoQixVQUFVLEdBQUdDLFFBQVE7NEJBQ3ZCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsR0FBSyxDQUFDaUIsTUFBTSxHQUFHLEdBQUcsQ0FBQ25CLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0JBRXRELE1BQU0sQ0FBQ2dCLE1BQU07WUFDZixDQUFDOzs7V0F2RGtCbkIsTUFBTTs7a0JBQU5BLE1BQU0ifQ==