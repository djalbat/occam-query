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
    fifth: function() {
        return fifth;
    },
    first: function() {
        return first;
    },
    fourth: function() {
        return fourth;
    },
    includes: function() {
        return includes;
    },
    last: function() {
        return last;
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
    trim: function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBjbGVhciwgcHVzaCwgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGgsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShhcnJheSwgc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgaWYgKHN0YXJ0SW5kZXggPCAwKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAvLy9cblxuICAgIHN0YXJ0SW5kZXggPSBsZW5ndGggKyBzdGFydEluZGV4OyAvLy9cblxuICAgIGVuZEluZGV4ID0gbGVuZ3RoICsgZW5kSW5kZXg7IC8vL1xuICB9XG5cbiAgaWYgKGVuZEluZGV4ICE9PSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5kZXggKyAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBzdGFydEluZGV4OyAvLy9cblxuICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCAuLi5lbGVtZW50cykge1xuICByZXR1cm4gZWxlbWVudHMuc29tZSgoZWxlbWVudCkgPT4gYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuIl0sIm5hbWVzIjpbImNsZWFyIiwiZmlmdGgiLCJmaXJzdCIsImZvdXJ0aCIsImluY2x1ZGVzIiwibGFzdCIsInB1c2giLCJzZWNvbmQiLCJ0aGlyZCIsInRyaW0iLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJzdGFydCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwiZWxlbWVudHMiLCJzb21lIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWVBLEtBQUs7ZUFBTEE7O0lBQTJDQyxLQUFLO2VBQUxBOztJQUE5QkMsS0FBSztlQUFMQTs7SUFBc0JDLE1BQU07ZUFBTkE7O0lBdUJsQ0MsUUFBUTtlQUFSQTs7SUF2QmlEQyxJQUFJO2VBQUpBOztJQUEzQ0MsSUFBSTtlQUFKQTs7SUFBYUMsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFFM0JDLElBQUk7ZUFBSkE7Ozt5QkFKZTtBQUV4QixJQUFRVCxRQUEyRFUseUJBQWMsQ0FBekVWLE9BQU9NLE9BQW9ESSx5QkFBYyxDQUFsRUosTUFBTUosUUFBOENRLHlCQUFjLENBQTVEUixPQUFPSyxTQUF1Q0cseUJBQWMsQ0FBckRILFFBQVFDLFFBQStCRSx5QkFBYyxDQUE3Q0YsT0FBT0wsU0FBd0JPLHlCQUFjLENBQXRDUCxRQUFRRixRQUFnQlMseUJBQWMsQ0FBOUJULE9BQU9JLE9BQVNLLHlCQUFjLENBQXZCTDtBQUUxRCxTQUFTSSxLQUFLRSxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsUUFBUTtJQUM5QyxJQUFJRCxhQUFhLEdBQUc7UUFDbEIsSUFBTUUsU0FBU0gsTUFBTUcsTUFBTSxFQUFFLEdBQUc7UUFFaENGLGFBQWFFLFNBQVNGLFlBQVksR0FBRztRQUVyQ0MsV0FBV0MsU0FBU0QsVUFBVSxHQUFHO0lBQ25DO0lBRUEsSUFBSUEsYUFBYUUsVUFBVTtRQUN6QixJQUFNQyxRQUFRSCxXQUFXO1FBRXpCRixNQUFNTSxNQUFNLENBQUNEO0lBQ2Y7SUFFQSxJQUFNQSxTQUFRLEdBQ1JFLGNBQWNOLFlBQVksR0FBRztJQUVuQ0QsTUFBTU0sTUFBTSxDQUFDRCxRQUFPRTtBQUN0QjtBQUVPLFNBQVNkLFNBQVNPLEtBQUs7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR1EsV0FBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxTQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBVzs7SUFDekMsT0FBT0EsU0FBU0MsSUFBSSxDQUFDLFNBQUNDO2VBQVlWLE1BQU1QLFFBQVEsQ0FBQ2lCOztBQUNuRCJ9