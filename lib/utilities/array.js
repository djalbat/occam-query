"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includes = includes;
exports.fifth = exports.fourth = exports.third = exports.second = void 0;

var _necessary = require("necessary");

var second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    fourth = _necessary.arrayUtilities.fourth,
    fifth = _necessary.arrayUtilities.fifth;
exports.fifth = fifth;
exports.fourth = fourth;
exports.third = third;
exports.second = second;

function includes(array) {
  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  return elements.some(function (element) {
    return array.includes(element);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsImluY2x1ZGVzIiwiYXJyYXkiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7SUFFZUEsTSxHQUFpQ0MseUIsQ0FBakNELE07SUFBUUUsSyxHQUF5QkQseUIsQ0FBekJDLEs7SUFBT0MsTSxHQUFrQkYseUIsQ0FBbEJFLE07SUFBUUMsSyxHQUFVSCx5QixDQUFWRyxLOzs7Ozs7QUFFL0IsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBc0M7QUFBQSxvQ0FBVkMsUUFBVTtBQUFWQSxJQUFBQSxRQUFVO0FBQUE7O0FBQzNDLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLFVBQUNDLE9BQUQ7QUFBQSxXQUFhSCxLQUFLLENBQUNELFFBQU4sQ0FBZUksT0FBZixDQUFiO0FBQUEsR0FBZCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIC4uLmVsZW1lbnRzKSB7XG4gIHJldHVybiBlbGVtZW50cy5zb21lKChlbGVtZW50KSA9PiBhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4iXX0=