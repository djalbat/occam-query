"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("./utilities/array");
var _constants = require("./constants");
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
var Spread = function() {
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
                        _array.clear(nodes);
                    }
                } else {
                    _array.trim(nodes, this.startIndex, this.endIndex);
                }
            }
        }
    ], [
        {
            key: "fromSpreadExpression",
            value: function fromSpreadExpression(spreadExpression) {
                var startIndex = 0, endIndex = Infinity, unique = false;
                if (spreadExpression !== null) {
                    if (spreadExpression === _constants.UNIQUE_SPREAD_EXPRESSION) {
                        unique = true;
                    } else {
                        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = _array.second(matches), thirdMatch = _array.third(matches), fourthMatch = _array.fourth(matches);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFVOSVFVRV9TUFJFQURfRVhQUkVTU0lPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcblxuICAgIGlmIChzcHJlYWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiA9PT0gVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUV1QyxNQUFtQjtJQUM3QixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQyxNQUFNO2FBQU4sTUFBTSxDQUNiLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTTs4QkFEckIsTUFBTTthQUVsQixVQUFVLEdBQUcsVUFBVTthQUN2QixRQUFRLEdBQUcsUUFBUTthQUNuQixNQUFNLEdBQUcsTUFBTTs7aUJBSkgsTUFBTTs7QUFPekIsZUFBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLEtBQUs7eUJBQ04sTUFBTTt3QkFDUCxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07d0JBRTVCLFdBQVcsR0FBRyxDQUFDO0FBZDBCLDhCQUFtQixPQWV4RCxLQUFLOzs7QUFmZ0MsMEJBQW1CLE1Ba0IzRCxLQUFLLE9BQU8sVUFBVSxPQUFPLFFBQVE7Ozs7OztBQUl2QyxlQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLGdCQUFnQjtvQkFDdEMsVUFBVSxHQUFHLENBQUMsRUFDZCxRQUFRLEdBQUcsUUFBUSxFQUNuQixNQUFNLEdBQUcsS0FBSztvQkFFZCxnQkFBZ0IsS0FBSyxJQUFJO3dCQUN2QixnQkFBZ0IsS0EzQmUsVUFBYTtBQTRCOUMsOEJBQU0sR0FBRyxJQUFJOzs0QkFFUCxNQUFNLCtCQUNOLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUN2QyxXQUFXLEdBakMwQixNQUFtQixRQWlDbkMsT0FBTyxHQUM1QixVQUFVLEdBbEMyQixNQUFtQixPQWtDckMsT0FBTyxHQUMxQixXQUFXLEdBbkMwQixNQUFtQixRQW1DbkMsT0FBTzs0QkFFOUIsV0FBVyxLQUFLLFNBQVM7QUFDM0Isc0NBQVUsR0FBRyxRQUFRLENBQUMsV0FBVztnQ0FFN0IsVUFBVSxLQUFLLFNBQVM7QUFDMUIsd0NBQVEsR0FBRyxVQUFVOzs7NEJBSXJCLFdBQVcsS0FBSyxTQUFTO0FBQzNCLG9DQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVc7Z0NBRTNCLFVBQVUsS0FBSyxTQUFTO0FBQzFCLDBDQUFVLEdBQUcsUUFBUTs7Ozs7b0JBTXZCLE1BQU0sT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNO3VCQUUvQyxNQUFNOzs7O1dBdERJLE1BQU07O2tCQUFOLE1BQU0ifQ==