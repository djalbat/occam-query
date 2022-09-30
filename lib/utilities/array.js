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
    deleteCount = startIndex; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKGFycmF5LCBzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICBsZXQgc3RhcnQsXG4gICAgICBkZWxldGVDb3VudDtcblxuICBpZiAoZW5kSW5kZXggIT09IEluZmluaXR5KSB7XG4gICAgc3RhcnQgPSBlbmRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQpO1xuICB9XG5cbiAgc3RhcnQgPSAwO1xuICBkZWxldGVDb3VudCA9IHN0YXJ0SW5kZXg7IC8vL1xuXG4gIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIC4uLmVsZW1lbnRzKSB7XG4gIHJldHVybiBlbGVtZW50cy5zb21lKChlbGVtZW50KSA9PiBhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4iXSwibmFtZXMiOlsiY2xlYXIiLCJwdXNoIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsInRyaW0iLCJpbmNsdWRlcyIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZUEsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFBT0MsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFFbkNDLElBQUk7ZUFBSkE7O0lBZ0JBQyxRQUFRO2VBQVJBOzs7eUJBcEJlO0FBRXhCLElBQVFQLFFBQThDUSx5QkFBYyxDQUE1RFIsT0FBT0MsT0FBdUNPLHlCQUFjLENBQXJEUCxNQUFNQyxTQUFpQ00seUJBQWMsQ0FBL0NOLFFBQVFDLFFBQXlCSyx5QkFBYyxDQUF2Q0wsT0FBT0MsU0FBa0JJLHlCQUFjLENBQWhDSixRQUFRQyxRQUFVRyx5QkFBYyxDQUF4Qkg7QUFFNUMsU0FBU0MsS0FBS0csS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUNoRCxJQUFJQyxPQUNBQztJQUVKLElBQUlGLGFBQWFHLFVBQVU7UUFDekJGLFFBQVFELFdBQVc7UUFFbkJGLE1BQU1NLE1BQU0sQ0FBQ0g7SUFDZixDQUFDO0lBRURBLFFBQVE7SUFDUkMsY0FBY0gsWUFBWSxHQUFHO0lBRTdCRCxNQUFNTSxNQUFNLENBQUNILE9BQU9DO0FBQ3RCO0FBRU8sU0FBU04sU0FBU0UsS0FBSyxFQUFlO0lBQWIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdPLFdBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFXLEdBQVgsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLFNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFXO0lBQUQ7SUFDeEMsT0FBT0EsU0FBU0MsSUFBSSxDQUFDLFNBQUNDO2VBQVlULE1BQU1GLFFBQVEsQ0FBQ1c7O0FBQ25EIn0=