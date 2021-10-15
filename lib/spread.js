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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwibmFtZXMiOlsiRVhDTEFNQVRJT05fTUFSSyIsImNsZWFyIiwidHJpbSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiU3ByZWFkIiwiY29uc3RydWN0b3IiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJJbmZpbml0eSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJzcHJlYWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXFCLEdBQWEsQ0FBYixVQUFhO0FBQ0ssR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELE1BQU0saUJBQVosUUFBUTthQUFGLE1BQU0sQ0FDYixVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU07OEJBRHJCLE1BQU07UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O2lCQUpILE1BQU07O1lBT3pCLEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLEdBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07b0JBRWhDLEVBQUUsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBYnVCLE1BQW1CLFFBY3hELEtBQUs7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQzt3QkFoQnVDLE1BQW1CLE9BaUIzRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDNUMsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFvQixFQUFwQixDQUFvQjttQkFBM0IsUUFBUSxDQUFELG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUNkLFFBQVEsR0FBRyxRQUFRLEVBQ25CLE1BQU0sR0FBRyxLQUFLO2dCQUVsQixFQUFFLEVBQUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLEVBQUUsRUFBRSxnQkFBZ0IsS0E1Qk8sVUFBYSxtQkE0QkcsQ0FBQzt3QkFDMUMsTUFBTSxHQUFHLElBQUk7b0JBQ2YsQ0FBQyxNQUFNLENBQUM7d0JBQ04sR0FBSyxDQUFDLE1BQU0sK0JBQ04sT0FBTyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQ3ZDLFdBQVcsT0FoQzBCLE1BQW1CLFNBZ0NuQyxPQUFPLEdBQzVCLFVBQVUsT0FqQzJCLE1BQW1CLFFBaUNyQyxPQUFPLEdBQzFCLFdBQVcsT0FsQzBCLE1BQW1CLFNBa0NuQyxPQUFPO3dCQUVsQyxFQUFFLEVBQUUsV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDOzRCQUM5QixVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVc7NEJBRWpDLEVBQUUsRUFBRSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7Z0NBQzdCLFFBQVEsR0FBRyxVQUFVOzRCQUN2QixDQUFDO3dCQUNILENBQUM7d0JBRUQsRUFBRSxFQUFFLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQzs0QkFDOUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXOzRCQUUvQixFQUFFLEVBQUUsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dDQUM3QixVQUFVLEdBQUcsUUFBUTs0QkFDdkIsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNO2dCQUV0RCxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztXQXZEa0IsTUFBTTs7a0JBQU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFWENMQU1BVElPTl9NQVJLIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjbGVhciwgdHJpbSwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmVhZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB1bmlxdWUpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB0aGlzLnVuaXF1ZSA9IHVuaXF1ZTtcbiAgfVxuXG4gIGFkanVzdE5vZGVzKG5vZGVzKSB7XG4gICAgaWYgKHRoaXMudW5pcXVlKSB7XG4gICAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG5vZGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjbGVhcihub2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaW0obm9kZXMsIHRoaXMuc3RhcnRJbmRleCwgdGhpcy5lbmRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgIGVuZEluZGV4ID0gSW5maW5pdHksXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGlmIChzcHJlYWRFeHByZXNzaW9uID09PSBFWENMQU1BVElPTl9NQVJLKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9dLyxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHNwcmVhZEV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKHNlY29uZE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VydGhNYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdfQ==