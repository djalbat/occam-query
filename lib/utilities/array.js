'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


function includes(array) {
  for (var _len = arguments.length, elements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  return elements.some(function (element) {
    return array.includes(element);
  });
}

Object.assign(arrayUtilities, {
  includes: includes
});

module.exports = arrayUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaW5jbHVkZXMiLCJhcnJheSIsImVsZW1lbnRzIiwic29tZSIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0lBRVFDLGMsR0FBbUJGLFMsQ0FBbkJFLGM7OztBQUVSLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXNDO0FBQUEsb0NBQVZDLFFBQVU7QUFBVkEsWUFBVTtBQUFBOztBQUNwQyxTQUFPQSxTQUFTQyxJQUFULENBQWMsVUFBU0MsT0FBVCxFQUFrQjtBQUNyQyxXQUFPSCxNQUFNRCxRQUFOLENBQWVJLE9BQWYsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVEQyxPQUFPQyxNQUFQLENBQWNQLGNBQWQsRUFBOEI7QUFDNUJDO0FBRDRCLENBQTlCOztBQUlBTyxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIC4uLmVsZW1lbnRzKSB7XG4gIHJldHVybiBlbGVtZW50cy5zb21lKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gYXJyYXkuaW5jbHVkZXMoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIGluY2x1ZGVzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWxpdGllcztcbiJdfQ==