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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJjbGVhciIsInB1c2giLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwidHJpbSIsImFycmF5Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5Iiwic3BsaWNlIiwiaW5jbHVkZXMiLCJlbGVtZW50cyIsInNvbWUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksSUFBSSxHQUFKLElBQUk7UUFnQkosUUFBUSxHQUFSLFFBQVE7O0FBcEJPLEdBQVcsQ0FBWCxVQUFXO0FBRW5DLEdBQUssQ0FBRyxLQUFLLEdBRlcsVUFBVyxnQkFFM0IsS0FBSyxFQUFFLElBQUksR0FGSyxVQUFXLGdCQUVwQixJQUFJLEVBQUUsTUFBTSxHQUZILFVBQVcsZ0JBRWQsTUFBTSxFQUFFLEtBQUssR0FGVixVQUFXLGdCQUVOLEtBQUssRUFBRSxNQUFNLEdBRmxCLFVBQVcsZ0JBRUMsTUFBTSxFQUFFLEtBQUssR0FGekIsVUFBVyxnQkFFUyxLQUFLO1FBQXpDLEtBQUssR0FBTCxLQUFLO1FBQUUsSUFBSSxHQUFKLElBQUk7UUFBRSxNQUFNLEdBQU4sTUFBTTtRQUFFLEtBQUssR0FBTCxLQUFLO1FBQUUsTUFBTSxHQUFOLE1BQU07UUFBRSxLQUFLLEdBQUwsS0FBSztTQUV4QyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUNqRCxHQUFHLENBQUMsS0FBSyxFQUNMLFdBQVc7SUFFZixFQUFFLEVBQUUsUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzFCLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQztRQUVwQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVELEtBQUssR0FBRyxDQUFDO0lBQ1QsV0FBVyxHQUFHLFVBQVU7SUFFeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVztBQUNqQyxDQUFDO1NBRWUsUUFBUSxDQUFDLEtBQUssRUFBZSxDQUFDO0lBQWQsR0FBRyxDQUFILEdBQVcsQ0FBWCxJQUFXLEdBQVgsU0FBVyxDQUFYLE1BQVcsRUFBUixRQUFRLEdBQVgsR0FBVyxPQUFYLElBQVcsR0FBWCxDQUFXLEdBQVgsSUFBVyxHQUFYLENBQVcsR0FBWCxDQUFXLEdBQVgsSUFBVyxHQUFYLENBQVcsRUFBWCxJQUFXLEdBQVgsSUFBVyxFQUFYLElBQVcsR0FBWCxDQUFDO1FBQUUsUUFBUSxDQUFYLElBQVcsR0FBWCxDQUFXLElBQVgsU0FBVyxDQUFYLElBQVc7SUFBRCxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBUCxPQUFPO1FBQUssTUFBTSxDQUFOLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTzs7QUFDMUQsQ0FBQyJ9