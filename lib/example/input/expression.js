'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var ExpressionInput = function (_InputElement) {
  _inherits(ExpressionInput, _InputElement);

  function ExpressionInput() {
    _classCallCheck(this, ExpressionInput);

    return _possibleConstructorReturn(this, (ExpressionInput.__proto__ || Object.getPrototypeOf(ExpressionInput)).apply(this, arguments));
  }

  _createClass(ExpressionInput, [{
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'getExpression',
    value: function getExpression() {
      var value = this.getValue(),
          expression = value; ///

      return expression;
    }
  }, {
    key: 'setExpression',
    value: function setExpression(expression) {
      var value = expression || ''; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var showError = this.showError.bind(this),
          ///
      hideError = this.hideError.bind(this),
          ///
      getExpression = this.getExpression.bind(this),
          setExpression = this.setExpression.bind(this);

      return {
        getExpression: getExpression,
        setExpression: setExpression,
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ExpressionInput, properties);
    }
  }]);

  return ExpressionInput;
}(InputElement);

Object.assign(ExpressionInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});

module.exports = ExpressionInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJFeHByZXNzaW9uSW5wdXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsImJpbmQiLCJoaWRlRXJyb3IiLCJnZXRFeHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxlOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxhQUFhRixLQURuQixDQURjLENBRWE7O0FBRTNCLGFBQU9FLFVBQVA7QUFDRDs7O2tDQUVhQSxVLEVBQVk7QUFDeEIsVUFBTUYsUUFBUUUsY0FBYyxFQUE1QixDQUR3QixDQUNTOztBQUVqQyxXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksWUFBWSxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUE2QztBQUN2Q0Msa0JBQVksS0FBS0EsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRGxCO0FBQUEsVUFDNkM7QUFDdkNFLHNCQUFnQixLQUFLQSxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQUZ0QjtBQUFBLFVBR01HLGdCQUFnQixLQUFLQSxhQUFMLENBQW1CSCxJQUFuQixDQUF3QixJQUF4QixDQUh0Qjs7QUFLQSxhQUFRO0FBQ05FLG9DQURNO0FBRU5DLG9DQUZNO0FBR05KLDRCQUhNO0FBSU5FO0FBSk0sT0FBUjtBQU1EOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPYixhQUFhYyxjQUFiLENBQTRCYixlQUE1QixFQUE2Q1ksVUFBN0MsQ0FBUDtBQUFrRTs7OztFQXBDMUViLFk7O0FBdUM5QmUsT0FBT0MsTUFBUCxDQUFjZixlQUFkLEVBQStCO0FBQzdCZ0IsV0FBUyxPQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXLGlCQURNO0FBRWpCQyxnQkFBWTtBQUZLO0FBRlUsQ0FBL0I7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJyQixlQUFqQiIsImZpbGUiOiJleHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRXhwcmVzc2lvbklucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2hvd0Vycm9yKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHZhbHVlID0gZXhwcmVzc2lvbiB8fCAnJzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVFcnJvciA9IHRoaXMuaGlkZUVycm9yLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldEV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uID0gdGhpcy5zZXRFeHByZXNzaW9uLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uLFxuICAgICAgc2hvd0Vycm9yLFxuICAgICAgaGlkZUVycm9yXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEV4cHJlc3Npb25JbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHByZXNzaW9uSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdsZXhpY2FsLXBhdHRlcm4nLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwcmVzc2lvbklucHV0O1xuIl19