"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get clear () {
        return clear;
    },
    get fifth () {
        return fifth;
    },
    get first () {
        return first;
    },
    get fourth () {
        return fourth;
    },
    get includes () {
        return includes;
    },
    get last () {
        return last;
    },
    get push () {
        return push;
    },
    get second () {
        return second;
    },
    get third () {
        return third;
    },
    get trim () {
        return trim;
    }
});
var _necessary = require("necessary");
var clear = _necessary.arrayUtilities.clear, push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, fifth = _necessary.arrayUtilities.fifth, last = _necessary.arrayUtilities.last;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGgsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShhcnJheSwgc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgaWYgKHN0YXJ0SW5kZXggPCAwKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAvLy9cblxuICAgIHN0YXJ0SW5kZXggPSBsZW5ndGggKyBzdGFydEluZGV4OyAvLy9cblxuICAgIGVuZEluZGV4ID0gbGVuZ3RoICsgZW5kSW5kZXg7IC8vL1xuICB9XG5cbiAgaWYgKGVuZEluZGV4ICE9PSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBzdGFydEluZGV4OyAvLy9cblxuICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCAuLi5lbGVtZW50cykge1xuICByZXR1cm4gZWxlbWVudHMuc29tZSgoZWxlbWVudCkgPT4gYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuIl0sIm5hbWVzIjpbImNsZWFyIiwiZmlmdGgiLCJmaXJzdCIsImZvdXJ0aCIsImluY2x1ZGVzIiwibGFzdCIsInB1c2giLCJzZWNvbmQiLCJ0aGlyZCIsInRyaW0iLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJzdGFydCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwiZWxlbWVudHMiLCJzb21lIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWVBO2VBQUFBOztRQUEyQ0M7ZUFBQUE7O1FBQTlCQztlQUFBQTs7UUFBc0JDO2VBQUFBOztRQXVCbENDO2VBQUFBOztRQXZCaURDO2VBQUFBOztRQUEzQ0M7ZUFBQUE7O1FBQWFDO2VBQUFBOztRQUFRQztlQUFBQTs7UUFFM0JDO2VBQUFBOzs7eUJBSmU7QUFFeEIsSUFBUVQsUUFBMkRVLHlCQUFjLENBQXpFVixPQUFPTSxPQUFvREkseUJBQWMsQ0FBbEVKLE1BQU1KLFFBQThDUSx5QkFBYyxDQUE1RFIsT0FBT0ssU0FBdUNHLHlCQUFjLENBQXJESCxRQUFRQyxRQUErQkUseUJBQWMsQ0FBN0NGLE9BQU9MLFNBQXdCTyx5QkFBYyxDQUF0Q1AsUUFBUUYsUUFBZ0JTLHlCQUFjLENBQTlCVCxPQUFPSSxPQUFTSyx5QkFBYyxDQUF2Qkw7QUFFMUQsU0FBU0ksS0FBS0UsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFFBQVE7SUFDOUMsSUFBSUQsYUFBYSxHQUFHO1FBQ2xCLElBQU1FLFNBQVNILE1BQU1HLE1BQU0sRUFBRSxHQUFHO1FBRWhDRixhQUFhRSxTQUFTRixZQUFZLEdBQUc7UUFFckNDLFdBQVdDLFNBQVNELFVBQVUsR0FBRztJQUNuQztJQUVBLElBQUlBLGFBQWFFLFVBQVU7UUFDekIsSUFBTUMsUUFBUUgsV0FBVztRQUV6QkYsTUFBTU0sTUFBTSxDQUFDRDtJQUNmO0lBRUEsSUFBTUEsU0FBUSxHQUNSRSxjQUFjTixZQUFZLEdBQUc7SUFFbkNELE1BQU1NLE1BQU0sQ0FBQ0QsUUFBT0U7QUFDdEI7QUFFTyxTQUFTZCxTQUFTTyxLQUFLO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdRLFdBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsU0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQVc7O0lBQ3pDLE9BQU9BLFNBQVNDLElBQUksQ0FBQyxTQUFDQztlQUFZVixNQUFNUCxRQUFRLENBQUNpQjs7QUFDbkQifQ==