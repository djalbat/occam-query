"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;
exports.includes = includes;
exports.fifth = exports.fourth = exports.third = exports.second = exports.push = exports.clear = void 0;

var _necessary = require("necessary");

var clear = _necessary.arrayUtilities.clear,
    push = _necessary.arrayUtilities.push,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    fourth = _necessary.arrayUtilities.fourth,
    fifth = _necessary.arrayUtilities.fifth;
exports.fifth = fifth;
exports.fourth = fourth;
exports.third = third;
exports.second = second;
exports.push = push;
exports.clear = clear;

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
  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  return elements.some(function (element) {
    return array.includes(element);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJwdXNoIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsInRyaW0iLCJhcnJheSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsImluY2x1ZGVzIiwiZWxlbWVudHMiLCJzb21lIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztJQUVlQSxLLEdBQThDQyx5QixDQUE5Q0QsSztJQUFPRSxJLEdBQXVDRCx5QixDQUF2Q0MsSTtJQUFNQyxNLEdBQWlDRix5QixDQUFqQ0UsTTtJQUFRQyxLLEdBQXlCSCx5QixDQUF6QkcsSztJQUFPQyxNLEdBQWtCSix5QixDQUFsQkksTTtJQUFRQyxLLEdBQVVMLHlCLENBQVZLLEs7Ozs7Ozs7O0FBRTVDLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQkMsVUFBckIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQ2hELE1BQUlDLEtBQUosRUFDSUMsV0FESjs7QUFHQSxNQUFJRixRQUFRLEtBQUtHLFFBQWpCLEVBQTJCO0FBQ3pCRixJQUFBQSxLQUFLLEdBQUdELFFBQVEsR0FBRyxDQUFuQjtBQUVBRixJQUFBQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUgsS0FBYjtBQUNEOztBQUVEQSxFQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBQyxFQUFBQSxXQUFXLEdBQUdILFVBQWQ7QUFFQUQsRUFBQUEsS0FBSyxDQUFDTSxNQUFOLENBQWFILEtBQWIsRUFBb0JDLFdBQXBCO0FBQ0Q7O0FBRU0sU0FBU0csUUFBVCxDQUFrQlAsS0FBbEIsRUFBc0M7QUFBQSxvQ0FBVlEsUUFBVTtBQUFWQSxJQUFBQSxRQUFVO0FBQUE7O0FBQzNDLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLFVBQUNDLE9BQUQ7QUFBQSxXQUFhVixLQUFLLENBQUNPLFFBQU4sQ0FBZUcsT0FBZixDQUFiO0FBQUEsR0FBZCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGNsZWFyLCBwdXNoLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oYXJyYXksIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gIGxldCBzdGFydCxcbiAgICAgIGRlbGV0ZUNvdW50O1xuXG4gIGlmIChlbmRJbmRleCAhPT0gSW5maW5pdHkpIHtcbiAgICBzdGFydCA9IGVuZEluZGV4ICsgMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCk7XG4gIH1cblxuICBzdGFydCA9IDA7XG4gIGRlbGV0ZUNvdW50ID0gc3RhcnRJbmRleDtcblxuICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCAuLi5lbGVtZW50cykge1xuICByZXR1cm4gZWxlbWVudHMuc29tZSgoZWxlbWVudCkgPT4gYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuIl19