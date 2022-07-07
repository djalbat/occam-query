"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clear: function() {
        return clear;
    },
    push: function() {
        return push;
    },
    second: function() {
        return second;
    },
    third: function() {
        return third;
    },
    fourth: function() {
        return fourth;
    },
    fifth: function() {
        return fifth;
    },
    trim: function() {
        return trim;
    },
    includes: function() {
        return includes;
    }
});
var _necessary = require("necessary");
var clear = _necessary.arrayUtilities.clear, push = _necessary.arrayUtilities.push, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, fifth = _necessary.arrayUtilities.fifth;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKGFycmF5LCBzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICBsZXQgc3RhcnQsXG4gICAgICBkZWxldGVDb3VudDtcblxuICBpZiAoZW5kSW5kZXggIT09IEluZmluaXR5KSB7XG4gICAgc3RhcnQgPSBlbmRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQpO1xuICB9XG5cbiAgc3RhcnQgPSAwO1xuICBkZWxldGVDb3VudCA9IHN0YXJ0SW5kZXg7XG5cbiAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgLi4uZWxlbWVudHMpIHtcbiAgcmV0dXJuIGVsZW1lbnRzLnNvbWUoKGVsZW1lbnQpID0+IGFycmF5LmluY2x1ZGVzKGVsZW1lbnQpKTtcbn1cbiJdLCJuYW1lcyI6WyJjbGVhciIsInB1c2giLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwidHJpbSIsImluY2x1ZGVzIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsImVsZW1lbnRzIiwic29tZSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJRUEsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxJQUFJO2VBQUpBLElBQUk7O0lBQUVDLE1BQU07ZUFBTkEsTUFBTTs7SUFBRUMsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxNQUFNO2VBQU5BLE1BQU07O0lBQUVDLEtBQUs7ZUFBTEEsS0FBSzs7SUFFeENDLElBQUk7ZUFBSkEsSUFBSTs7SUFnQkpDLFFBQVE7ZUFBUkEsUUFBUTs7O3lCQXBCTyxXQUFXO0FBRW5DLElBQVFQLEtBQUssR0FBeUNRLFVBQWMsZUFBQSxDQUE1RFIsS0FBSyxFQUFFQyxJQUFJLEdBQW1DTyxVQUFjLGVBQUEsQ0FBckRQLElBQUksRUFBRUMsTUFBTSxHQUEyQk0sVUFBYyxlQUFBLENBQS9DTixNQUFNLEVBQUVDLEtBQUssR0FBb0JLLFVBQWMsZUFBQSxDQUF2Q0wsS0FBSyxFQUFFQyxNQUFNLEdBQVlJLFVBQWMsZUFBQSxDQUFoQ0osTUFBTSxFQUFFQyxLQUFLLEdBQUtHLFVBQWMsZUFBQSxDQUF4QkgsS0FBSyxBQUFvQjtBQUVyRSxTQUFTQyxJQUFJLENBQUNHLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUU7SUFDaEQsSUFBSUMsS0FBSyxFQUNMQyxXQUFXLEFBQUM7SUFFaEIsSUFBSUYsUUFBUSxLQUFLRyxRQUFRLEVBQUU7UUFDekJGLEtBQUssR0FBR0QsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVyQkYsS0FBSyxDQUFDTSxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0lBRURBLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDVkMsV0FBVyxHQUFHSCxVQUFVLENBQUM7SUFFekJELEtBQUssQ0FBQ00sTUFBTSxDQUFDSCxLQUFLLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0NBQ2xDO0FBRU0sU0FBU04sUUFBUSxDQUFDRSxLQUFLLEVBQWU7SUFBYixJQUFBLElBQUEsSUFBVyxHQUFYLFNBQVcsQ0FBWCxNQUFXLEVBQVgsQUFBR08sUUFBUSxHQUFYLFVBQUEsSUFBVyxHQUFYLENBQVcsR0FBWCxJQUFXLEdBQVgsQ0FBVyxJQUFBLENBQUEsRUFBWCxJQUFXLEdBQVgsQ0FBVyxFQUFYLElBQVcsR0FBWCxJQUFXLEVBQVgsSUFBVyxFQUFBLENBQVg7UUFBQSxBQUFHQSxRQUFRLENBQVgsSUFBVyxHQUFYLENBQVcsSUFBWCxTQUFXLEFBQVgsQ0FBQSxJQUFXLENBQUEsQ0FBQTtLQUFBO0lBQ3pDLE9BQU9BLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLE9BQU87ZUFBS1QsS0FBSyxDQUFDRixRQUFRLENBQUNXLE9BQU8sQ0FBQztLQUFBLENBQUMsQ0FBQztDQUM1RCJ9