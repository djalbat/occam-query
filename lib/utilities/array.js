"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function includes(array) {
  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  return elements.some(function (element) {
    return array.includes(element);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJwdXNoIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsImluY2x1ZGVzIiwiYXJyYXkiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7SUFFZUEsSyxHQUE4Q0MseUIsQ0FBOUNELEs7SUFBT0UsSSxHQUF1Q0QseUIsQ0FBdkNDLEk7SUFBTUMsTSxHQUFpQ0YseUIsQ0FBakNFLE07SUFBUUMsSyxHQUF5QkgseUIsQ0FBekJHLEs7SUFBT0MsTSxHQUFrQkoseUIsQ0FBbEJJLE07SUFBUUMsSyxHQUFVTCx5QixDQUFWSyxLOzs7Ozs7OztBQUU1QyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUFzQztBQUFBLG9DQUFWQyxRQUFVO0FBQVZBLElBQUFBLFFBQVU7QUFBQTs7QUFDM0MsU0FBT0EsUUFBUSxDQUFDQyxJQUFULENBQWMsVUFBQ0MsT0FBRDtBQUFBLFdBQWFILEtBQUssQ0FBQ0QsUUFBTixDQUFlSSxPQUFmLENBQWI7QUFBQSxHQUFkLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgY2xlYXIsIHB1c2gsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIC4uLmVsZW1lbnRzKSB7XG4gIHJldHVybiBlbGVtZW50cy5zb21lKChlbGVtZW50KSA9PiBhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4iXX0=