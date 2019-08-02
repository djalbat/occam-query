'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var MaximumDepthInput = function (_InputElement) {
  _inherits(MaximumDepthInput, _InputElement);

  function MaximumDepthInput() {
    _classCallCheck(this, MaximumDepthInput);

    return _possibleConstructorReturn(this, (MaximumDepthInput.__proto__ || Object.getPrototypeOf(MaximumDepthInput)).apply(this, arguments));
  }

  _createClass(MaximumDepthInput, [{
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      var value = this.getValue(),
          maximumDepth = Number(value);

      return maximumDepth;
    }
  }, {
    key: 'setMaximumDepth',
    value: function setMaximumDepth(maximumDepth) {
      var value = maximumDepth || 0; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getMaximumDepth = this.getMaximumDepth.bind(this),
          setMaximumDepth = this.setMaximumDepth.bind(this);

      return {
        getMaximumDepth: getMaximumDepth,
        setMaximumDepth: setMaximumDepth
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(MaximumDepthInput, properties);
    }
  }]);

  return MaximumDepthInput;
}(InputElement);

Object.assign(MaximumDepthInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'maximum-depth'
  }
});

module.exports = MaximumDepthInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L21heGltdW1EZXB0aC5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIk1heGltdW1EZXB0aElucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1heGltdW1EZXB0aCIsIk51bWJlciIsInNldFZhbHVlIiwiZ2V0TWF4aW11bURlcHRoIiwiYmluZCIsInNldE1heGltdW1EZXB0aCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztzQ0FDYztBQUNoQixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGVBQWVDLE9BQU9ILEtBQVAsQ0FEckI7O0FBR0EsYUFBT0UsWUFBUDtBQUNEOzs7b0NBRWVBLFksRUFBYztBQUM1QixVQUFNRixRQUFRRSxnQkFBZ0IsQ0FBOUIsQ0FENEIsQ0FDTTs7QUFFbEMsV0FBS0UsUUFBTCxDQUFjSixLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1LLGtCQUFrQixLQUFLQSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUF4QjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLQSxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUR4Qjs7QUFHQSxhQUFRO0FBQ05ELHdDQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPVixhQUFhVyxjQUFiLENBQTRCVixpQkFBNUIsRUFBK0NTLFVBQS9DLENBQVA7QUFBb0U7Ozs7RUF4QjFFVixZOztBQTJCaENZLE9BQU9DLE1BQVAsQ0FBY1osaUJBQWQsRUFBaUM7QUFDL0JhLFdBQVMsT0FEc0I7QUFFL0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlksQ0FBakM7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJqQixpQkFBakIiLCJmaWxlIjoibWF4aW11bURlcHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgTWF4aW11bURlcHRoSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gTnVtYmVyKHZhbHVlKTtcblxuICAgIHJldHVybiBtYXhpbXVtRGVwdGg7XG4gIH1cblxuICBzZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXhpbXVtRGVwdGggfHwgMDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoID0gdGhpcy5zZXRNYXhpbXVtRGVwdGguYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1heGltdW1EZXB0aElucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKE1heGltdW1EZXB0aElucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnbWF4aW11bS1kZXB0aCdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWF4aW11bURlcHRoSW5wdXQ7XG4iXX0=