"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input = _interopRequireDefault(require("../input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExpressionInput = /*#__PURE__*/function (_Input) {
  _inherits(ExpressionInput, _Input);

  var _super = _createSuper(ExpressionInput);

  function ExpressionInput() {
    _classCallCheck(this, ExpressionInput);

    return _super.apply(this, arguments);
  }

  _createClass(ExpressionInput, [{
    key: "getExpression",
    value: function getExpression() {
      var value = this.getValue(),
          expression = value; ///

      return expression;
    }
  }, {
    key: "setExpression",
    value: function setExpression(expression) {
      var value = expression; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getExpression = this.getExpression.bind(this),
          setExpression = this.setExpression.bind(this),
          setExpressionReadOnly = this.setReadOnly.bind(this); ///;

      return {
        getExpression: getExpression,
        setExpression: setExpression,
        setExpressionReadOnly: setExpressionReadOnly
      };
    }
  }]);

  return ExpressionInput;
}(_input["default"]);

exports["default"] = ExpressionInput;

_defineProperty(ExpressionInput, "defaultProperties", {
  className: "expression",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiRXhwcmVzc2lvbklucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRWYWx1ZSIsImdldEV4cHJlc3Npb24iLCJiaW5kIiwic2V0RXhwcmVzc2lvbiIsInNldEV4cHJlc3Npb25SZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7O29DQUNIO0FBQ2QsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFVBQVUsR0FBR0YsS0FEbkIsQ0FEYyxDQUVZOztBQUUxQixhQUFPRSxVQUFQO0FBQ0Q7OztrQ0FFYUEsVSxFQUFZO0FBQ3hCLFVBQU1GLEtBQUssR0FBR0UsVUFBZCxDQUR3QixDQUNFOztBQUUxQixXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksYUFBYSxHQUFHLEtBQUtBLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXRCO0FBQUEsVUFDTUMsYUFBYSxHQUFHLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBRHRCO0FBQUEsVUFFTUUscUJBQXFCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGOUIsQ0FEYyxDQUc2Qzs7QUFFM0QsYUFBUTtBQUNORCxRQUFBQSxhQUFhLEVBQWJBLGFBRE07QUFFTkUsUUFBQUEsYUFBYSxFQUFiQSxhQUZNO0FBR05DLFFBQUFBLHFCQUFxQixFQUFyQkE7QUFITSxPQUFSO0FBS0Q7Ozs7RUF4QjBDRSxpQjs7OztnQkFBeEJWLGUsdUJBMEJRO0FBQ3pCVyxFQUFBQSxTQUFTLEVBQUUsWUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25JbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV4cHJlc3Npb247IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uID0gdGhpcy5zZXRFeHByZXNzaW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uLFxuICAgICAgc2V0RXhwcmVzc2lvblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb25cIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdfQ==