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
const _necessary = require("necessary");
const { clear, push, first, second, third, fourth, fifth, last } = _necessary.arrayUtilities;
function trim(array, startIndex, endIndex) {
    if (startIndex < 0) {
        const length = array.length; ///
        startIndex = length + startIndex; ///
        endIndex = length + endIndex; ///
    }
    if (endIndex !== Infinity) {
        const start = endIndex + 1;
        array.splice(start);
    }
    const start = 0, deleteCount = startIndex; ///
    array.splice(start, deleteCount);
}
function includes(array, ...elements) {
    return elements.some((element)=>array.includes(element));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGgsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShhcnJheSwgc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgaWYgKHN0YXJ0SW5kZXggPCAwKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAvLy9cblxuICAgIHN0YXJ0SW5kZXggPSBsZW5ndGggKyBzdGFydEluZGV4OyAvLy9cblxuICAgIGVuZEluZGV4ID0gbGVuZ3RoICsgZW5kSW5kZXg7IC8vL1xuICB9XG5cbiAgaWYgKGVuZEluZGV4ICE9PSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBzdGFydEluZGV4OyAvLy9cblxuICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCAuLi5lbGVtZW50cykge1xuICByZXR1cm4gZWxlbWVudHMuc29tZSgoZWxlbWVudCkgPT4gYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuIl0sIm5hbWVzIjpbImNsZWFyIiwiZmlmdGgiLCJmaXJzdCIsImZvdXJ0aCIsImluY2x1ZGVzIiwibGFzdCIsInB1c2giLCJzZWNvbmQiLCJ0aGlyZCIsInRyaW0iLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJzdGFydCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwiZWxlbWVudHMiLCJzb21lIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWVBO2VBQUFBOztRQUEyQ0M7ZUFBQUE7O1FBQTlCQztlQUFBQTs7UUFBc0JDO2VBQUFBOztRQXVCbENDO2VBQUFBOztRQXZCaURDO2VBQUFBOztRQUEzQ0M7ZUFBQUE7O1FBQWFDO2VBQUFBOztRQUFRQztlQUFBQTs7UUFFM0JDO2VBQUFBOzs7MkJBSmU7QUFFeEIsTUFBTSxFQUFFVCxLQUFLLEVBQUVNLElBQUksRUFBRUosS0FBSyxFQUFFSyxNQUFNLEVBQUVDLEtBQUssRUFBRUwsTUFBTSxFQUFFRixLQUFLLEVBQUVJLElBQUksRUFBRSxHQUFHSyx5QkFBYztBQUVqRixTQUFTRCxLQUFLRSxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsUUFBUTtJQUM5QyxJQUFJRCxhQUFhLEdBQUc7UUFDbEIsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTSxFQUFFLEdBQUc7UUFFaENGLGFBQWFFLFNBQVNGLFlBQVksR0FBRztRQUVyQ0MsV0FBV0MsU0FBU0QsVUFBVSxHQUFHO0lBQ25DO0lBRUEsSUFBSUEsYUFBYUUsVUFBVTtRQUN6QixNQUFNQyxRQUFRSCxXQUFXO1FBRXpCRixNQUFNTSxNQUFNLENBQUNEO0lBQ2Y7SUFFQSxNQUFNQSxRQUFRLEdBQ1JFLGNBQWNOLFlBQVksR0FBRztJQUVuQ0QsTUFBTU0sTUFBTSxDQUFDRCxPQUFPRTtBQUN0QjtBQUVPLFNBQVNkLFNBQVNPLEtBQUssRUFBRSxHQUFHUSxRQUFRO0lBQ3pDLE9BQU9BLFNBQVNDLElBQUksQ0FBQyxDQUFDQyxVQUFZVixNQUFNUCxRQUFRLENBQUNpQjtBQUNuRCJ9