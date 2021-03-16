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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFVOSVFVRV9TUFJFQURfRVhQUkVTU0lPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcblxuICAgIGlmIChzcHJlYWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiA9PT0gVU5JUVVFX1NQUkVBRF9FWFBSRVNTSU9OKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7SUFDQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLE1BQUE7YUFBQSxNQUFBLENBQ0EsVUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBOzhCQURBLE1BQUE7YUFFQSxVQUFBLEdBQUEsVUFBQTthQUNBLFFBQUEsR0FBQSxRQUFBO2FBQ0EsTUFBQSxHQUFBLE1BQUE7O2lCQUpBLE1BQUE7O0FBT0EsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQSxDQUFBLEtBQUE7eUJBQ0EsTUFBQTt3QkFDQSxXQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUE7d0JBRUEsV0FBQSxHQUFBLENBQUE7QUFkQSw4QkFBQSxPQWVBLEtBQUE7OztBQWZBLDBCQUFBLE1Ba0JBLEtBQUEsT0FBQSxVQUFBLE9BQUEsUUFBQTs7Ozs7O0FBSUEsZUFBQSxHQUFBLG9CQUFBOzRCQUFBLG9CQUFBLENBQUEsZ0JBQUE7b0JBQ0EsVUFBQSxHQUFBLENBQUEsRUFDQSxRQUFBLEdBQUEsUUFBQSxFQUNBLE1BQUEsR0FBQSxLQUFBO29CQUVBLGdCQUFBLEtBQUEsSUFBQTt3QkFDQSxnQkFBQSxLQTNCQSxVQUFBO0FBNEJBLDhCQUFBLEdBQUEsSUFBQTs7NEJBRUEsTUFBQSwrQkFDQSxPQUFBLEdBQUEsZ0JBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxHQUNBLFdBQUEsR0FqQ0EsTUFBQSxRQWlDQSxPQUFBLEdBQ0EsVUFBQSxHQWxDQSxNQUFBLE9Ba0NBLE9BQUEsR0FDQSxXQUFBLEdBbkNBLE1BQUEsUUFtQ0EsT0FBQTs0QkFFQSxXQUFBLEtBQUEsU0FBQTtBQUNBLHNDQUFBLEdBQUEsUUFBQSxDQUFBLFdBQUE7Z0NBRUEsVUFBQSxLQUFBLFNBQUE7QUFDQSx3Q0FBQSxHQUFBLFVBQUE7Ozs0QkFJQSxXQUFBLEtBQUEsU0FBQTtBQUNBLG9DQUFBLEdBQUEsUUFBQSxDQUFBLFdBQUE7Z0NBRUEsVUFBQSxLQUFBLFNBQUE7QUFDQSwwQ0FBQSxHQUFBLFFBQUE7Ozs7O29CQU1BLE1BQUEsT0FBQSxNQUFBLENBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBO3VCQUVBLE1BQUE7Ozs7V0F0REEsTUFBQTs7a0JBQUEsTUFBQSJ9