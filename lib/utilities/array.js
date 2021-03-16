"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.includes = includes;
exports.third = exports.second = exports.push = exports.fifth = exports.fourth = exports.clear = void 0;
var _necessary = require("necessary");
var clear = _necessary.arrayUtilities.clear, push = _necessary.arrayUtilities.push, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, fifth = _necessary.arrayUtilities.fifth;
exports.clear = clear;
exports.push = push;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
function trim(array, startIndex, endIndex) {
    var start, deleteCount;
    if (endIndex !== Infinity) {
        start = endIndex + 1;
        array.splice(start);
    }
    start = 0;
    deleteCount = startIndex;
    array.splice(start, deleteCount);
}
function includes(array) {
    for(var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        elements[_key - 1] = arguments[_key];
    }
    return elements.some(function(element) {
        return array.includes(element);
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKGFycmF5LCBzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICBsZXQgc3RhcnQsXG4gICAgICBkZWxldGVDb3VudDtcblxuICBpZiAoZW5kSW5kZXggIT09IEluZmluaXR5KSB7XG4gICAgc3RhcnQgPSBlbmRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQpO1xuICB9XG5cbiAgc3RhcnQgPSAwO1xuICBkZWxldGVDb3VudCA9IHN0YXJ0SW5kZXg7XG5cbiAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgLi4uZWxlbWVudHMpIHtcbiAgcmV0dXJuIGVsZW1lbnRzLnNvbWUoKGVsZW1lbnQpID0+IGFycmF5LmluY2x1ZGVzKGVsZW1lbnQpKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBTUEsSUFBQSxHQUFBLElBQUE7UUFnQkEsUUFBQSxHQUFBLFFBQUE7O0lBcEJBLFVBQUE7SUFFQSxLQUFBLEdBRkEsVUFBQSxnQkFFQSxLQUFBLEVBQUEsSUFBQSxHQUZBLFVBQUEsZ0JBRUEsSUFBQSxFQUFBLE1BQUEsR0FGQSxVQUFBLGdCQUVBLE1BQUEsRUFBQSxLQUFBLEdBRkEsVUFBQSxnQkFFQSxLQUFBLEVBQUEsTUFBQSxHQUZBLFVBQUEsZ0JBRUEsTUFBQSxFQUFBLEtBQUEsR0FGQSxVQUFBLGdCQUVBLEtBQUE7UUFBQSxLQUFBLEdBQUEsS0FBQTtRQUFBLElBQUEsR0FBQSxJQUFBO1FBQUEsTUFBQSxHQUFBLE1BQUE7UUFBQSxLQUFBLEdBQUEsS0FBQTtRQUFBLE1BQUEsR0FBQSxNQUFBO1FBQUEsS0FBQSxHQUFBLEtBQUE7U0FFQSxJQUFBLENBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxRQUFBO1FBQ0EsS0FBQSxFQUNBLFdBQUE7UUFFQSxRQUFBLEtBQUEsUUFBQTtBQUNBLGFBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQTtBQUVBLGFBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQTs7QUFHQSxTQUFBLEdBQUEsQ0FBQTtBQUNBLGVBQUEsR0FBQSxVQUFBO0FBRUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLEVBQUEsV0FBQTs7U0FHQSxRQUFBLENBQUEsS0FBQTtZQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsZ0JBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztXQUNBLFFBQUEsQ0FBQSxJQUFBLFVBQUEsT0FBQTtlQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSJ9