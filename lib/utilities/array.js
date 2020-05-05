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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsImluY2x1ZGVzIiwiYXJyYXkiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7SUFFZUEsTSxHQUFpQ0MseUIsQ0FBakNELE07SUFBUUUsSyxHQUF5QkQseUIsQ0FBekJDLEs7SUFBT0MsTSxHQUFrQkYseUIsQ0FBbEJFLE07SUFBUUMsSyxHQUFVSCx5QixDQUFWRyxLOzs7Ozs7QUFFL0IsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBc0M7QUFBQSxvQ0FBVkMsUUFBVTtBQUFWQSxJQUFBQSxRQUFVO0FBQUE7O0FBQzNDLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLFVBQVNDLE9BQVQsRUFBa0I7QUFDckMsV0FBT0gsS0FBSyxDQUFDRCxRQUFOLENBQWVJLE9BQWYsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCAuLi5lbGVtZW50cykge1xuICByZXR1cm4gZWxlbWVudHMuc29tZShmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIGFycmF5LmluY2x1ZGVzKGVsZW1lbnQpO1xuICB9KTtcbn1cbiJdfQ==