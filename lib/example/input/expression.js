'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var InputElement = easy.InputElement;

var ExpressionInput = /*#__PURE__*/function (_InputElement) {
  _inherits(ExpressionInput, _InputElement);

  function ExpressionInput() {
    _classCallCheck(this, ExpressionInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpressionInput).apply(this, arguments));
  }

  _createClass(ExpressionInput, [{
    key: "showError",
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: "getExpression",
    value: function getExpression() {
      var value = this.getValue(),
          expression = value; ///

      return expression;
    }
  }, {
    key: "setExpression",
    value: function setExpression(expression) {
      var value = expression || ''; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showError = this.showError.bind(this),
          ///
      hideError = this.hideError.bind(this),
          ///
      getExpression = this.getExpression.bind(this),
          setExpression = this.setExpression.bind(this);
      return {
        showError: showError,
        hideError: hideError,
        getExpression: getExpression,
        setExpression: setExpression
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ExpressionInput, properties);
    }
  }]);

  return ExpressionInput;
}(InputElement);

Object.assign(ExpressionInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'expression',
    spellCheck: 'false'
  }
});
module.exports = ExpressionInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJFeHByZXNzaW9uSW5wdXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsImJpbmQiLCJoaWRlRXJyb3IiLCJnZXRFeHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxlOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFVBQVUsR0FBR0YsS0FEbkIsQ0FEYyxDQUVhOztBQUUzQixhQUFPRSxVQUFQO0FBQ0Q7OztrQ0FFYUEsVSxFQUFZO0FBQ3hCLFVBQU1GLEtBQUssR0FBR0UsVUFBVSxJQUFJLEVBQTVCLENBRHdCLENBQ1M7O0FBRWpDLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFBNkM7QUFDdkNDLE1BQUFBLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FEbEI7QUFBQSxVQUM2QztBQUN2Q0UsTUFBQUEsYUFBYSxHQUFHLEtBQUtBLGFBQUwsQ0FBbUJGLElBQW5CLENBQXdCLElBQXhCLENBRnRCO0FBQUEsVUFHTUcsYUFBYSxHQUFHLEtBQUtBLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBSHRCO0FBS0EsYUFBUTtBQUNORCxRQUFBQSxTQUFTLEVBQVRBLFNBRE07QUFFTkUsUUFBQUEsU0FBUyxFQUFUQSxTQUZNO0FBR05DLFFBQUFBLGFBQWEsRUFBYkEsYUFITTtBQUlOQyxRQUFBQSxhQUFhLEVBQWJBO0FBSk0sT0FBUjtBQU1EOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPYixZQUFZLENBQUNjLGNBQWIsQ0FBNEJiLGVBQTVCLEVBQTZDWSxVQUE3QyxDQUFQO0FBQWtFOzs7O0VBcEMxRWIsWTs7QUF1QzlCZSxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsZUFBZCxFQUErQjtBQUM3QmdCLEVBQUFBLE9BQU8sRUFBRSxPQURvQjtBQUU3QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxZQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUU7QUFGSztBQUZVLENBQS9CO0FBUUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRXhwcmVzc2lvbklucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2hvd0Vycm9yKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHZhbHVlID0gZXhwcmVzc2lvbiB8fCAnJzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVFcnJvciA9IHRoaXMuaGlkZUVycm9yLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldEV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uID0gdGhpcy5zZXRFeHByZXNzaW9uLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFcnJvcixcbiAgICAgIGhpZGVFcnJvcixcbiAgICAgIGdldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEV4cHJlc3Npb25JbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHByZXNzaW9uSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdleHByZXNzaW9uJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cHJlc3Npb25JbnB1dDtcbiJdfQ==