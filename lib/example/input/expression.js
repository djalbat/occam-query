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
        showError: showError,
        hideError: hideError,
        getExpression: getExpression,
        setExpression: setExpression
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
    className: 'expression',
    spellCheck: 'false'
  }
});

module.exports = ExpressionInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJFeHByZXNzaW9uSW5wdXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsImJpbmQiLCJoaWRlRXJyb3IiLCJnZXRFeHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxlOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxhQUFhRixLQURuQixDQURjLENBRWE7O0FBRTNCLGFBQU9FLFVBQVA7QUFDRDs7O2tDQUVhQSxVLEVBQVk7QUFDeEIsVUFBTUYsUUFBUUUsY0FBYyxFQUE1QixDQUR3QixDQUNTOztBQUVqQyxXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksWUFBWSxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUE2QztBQUN2Q0Msa0JBQVksS0FBS0EsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRGxCO0FBQUEsVUFDNkM7QUFDdkNFLHNCQUFnQixLQUFLQSxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQUZ0QjtBQUFBLFVBR01HLGdCQUFnQixLQUFLQSxhQUFMLENBQW1CSCxJQUFuQixDQUF3QixJQUF4QixDQUh0Qjs7QUFLQSxhQUFRO0FBQ05ELDRCQURNO0FBRU5FLDRCQUZNO0FBR05DLG9DQUhNO0FBSU5DO0FBSk0sT0FBUjtBQU1EOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPYixhQUFhYyxjQUFiLENBQTRCYixlQUE1QixFQUE2Q1ksVUFBN0MsQ0FBUDtBQUFrRTs7OztFQXBDMUViLFk7O0FBdUM5QmUsT0FBT0MsTUFBUCxDQUFjZixlQUFkLEVBQStCO0FBQzdCZ0IsV0FBUyxPQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXLFlBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGVSxDQUEvQjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQnJCLGVBQWpCIiwiZmlsZSI6ImV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFeHByZXNzaW9uSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzaG93RXJyb3IoKSB7XG4gICAgdGhpcy5hZGRDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGhpZGVFcnJvcigpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByZXNzaW9uIHx8ICcnOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlRXJyb3IuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEV4cHJlc3Npb24gPSB0aGlzLnNldEV4cHJlc3Npb24uYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Vycm9yLFxuICAgICAgaGlkZUVycm9yLFxuICAgICAgZ2V0RXhwcmVzc2lvbixcbiAgICAgIHNldEV4cHJlc3Npb25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRXhwcmVzc2lvbklucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4cHJlc3Npb25JbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2V4cHJlc3Npb24nLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwcmVzc2lvbklucHV0O1xuIl19