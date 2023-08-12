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
    if (startIndex < 0) {
        var length = array.length; ///
        startIndex = length + startIndex; ///
        endIndex = length + endIndex; ///
    }
    if (endIndex !== Infinity) {
        var start = endIndex + 1;
        array.splice(start);
    }
    var start1 = 0, deleteCount = startIndex; ///
    array.splice(start1, deleteCount);
}
function includes(array) {
    for(var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        elements[_key - 1] = arguments[_key];
    }
    return elements.some(function(element) {
        return array.includes(element);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKGFycmF5LCBzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICBpZiAoc3RhcnRJbmRleCA8IDApIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IC8vL1xuXG4gICAgc3RhcnRJbmRleCA9IGxlbmd0aCArIHN0YXJ0SW5kZXg7IC8vL1xuXG4gICAgZW5kSW5kZXggPSBsZW5ndGggKyBlbmRJbmRleDsgLy8vXG4gIH1cblxuICBpZiAoZW5kSW5kZXggIT09IEluZmluaXR5KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBlbmRJbmRleCArIDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQpO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IHN0YXJ0SW5kZXg7IC8vL1xuXG4gIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIC4uLmVsZW1lbnRzKSB7XG4gIHJldHVybiBlbGVtZW50cy5zb21lKChlbGVtZW50KSA9PiBhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4iXSwibmFtZXMiOlsiY2xlYXIiLCJwdXNoIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsInRyaW0iLCJpbmNsdWRlcyIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJJbmZpbml0eSIsInN0YXJ0Iiwic3BsaWNlIiwiZGVsZXRlQ291bnQiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZUEsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFBT0MsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFFbkNDLElBQUk7ZUFBSkE7O0lBcUJBQyxRQUFRO2VBQVJBOzs7eUJBekJlO0FBRXhCLElBQVFQLFFBQThDUSx5QkFBYyxDQUE1RFIsT0FBT0MsT0FBdUNPLHlCQUFjLENBQXJEUCxNQUFNQyxTQUFpQ00seUJBQWMsQ0FBL0NOLFFBQVFDLFFBQXlCSyx5QkFBYyxDQUF2Q0wsT0FBT0MsU0FBa0JJLHlCQUFjLENBQWhDSixRQUFRQyxRQUFVRyx5QkFBYyxDQUF4Qkg7QUFFNUMsU0FBU0MsS0FBS0csS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFFBQVE7SUFDOUMsSUFBSUQsYUFBYSxHQUFHO1FBQ2xCLElBQU1FLFNBQVNILE1BQU1HLE1BQU0sRUFBRSxHQUFHO1FBRWhDRixhQUFhRSxTQUFTRixZQUFZLEdBQUc7UUFFckNDLFdBQVdDLFNBQVNELFVBQVUsR0FBRztJQUNuQztJQUVBLElBQUlBLGFBQWFFLFVBQVU7UUFDekIsSUFBTUMsUUFBUUgsV0FBVztRQUV6QkYsTUFBTU0sTUFBTSxDQUFDRDtJQUNmO0lBRUEsSUFBTUEsU0FBUSxHQUNSRSxjQUFjTixZQUFZLEdBQUc7SUFFbkNELE1BQU1NLE1BQU0sQ0FBQ0QsUUFBT0U7QUFDdEI7QUFFTyxTQUFTVCxTQUFTRSxLQUFLO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdRLFdBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtRQUFHQSxTQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBVztJQUFEO0lBQ3hDLE9BQU9BLFNBQVNDLElBQUksQ0FBQyxTQUFDQztlQUFZVixNQUFNRixRQUFRLENBQUNZOztBQUNuRCJ9