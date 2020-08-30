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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MaximumDepthInput = /*#__PURE__*/function (_Input) {
  _inherits(MaximumDepthInput, _Input);

  var _super = _createSuper(MaximumDepthInput);

  function MaximumDepthInput() {
    _classCallCheck(this, MaximumDepthInput);

    return _super.apply(this, arguments);
  }

  _createClass(MaximumDepthInput, [{
    key: "getMaximumDepth",
    value: function getMaximumDepth() {
      var value = this.getValue(),
          maximumDepth = Number(value);
      return maximumDepth;
    }
  }, {
    key: "setMaximumDepth",
    value: function setMaximumDepth(maximumDepth) {
      var value = maximumDepth; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getMaximumDepth = this.getMaximumDepth.bind(this),
          setMaximumDepth = this.setMaximumDepth.bind(this),
          setMaximumDepthReadOnly = this.setReadOnly.bind(this); ///;

      return {
        getMaximumDepth: getMaximumDepth,
        setMaximumDepth: setMaximumDepth,
        setMaximumDepthReadOnly: setMaximumDepthReadOnly
      };
    }
  }]);

  return MaximumDepthInput;
}(_input["default"]);

exports["default"] = MaximumDepthInput;

_defineProperty(MaximumDepthInput, "defaultProperties", {
  className: "maximum-depth",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heGltdW1EZXB0aC5qcyJdLCJuYW1lcyI6WyJNYXhpbXVtRGVwdGhJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXhpbXVtRGVwdGgiLCJOdW1iZXIiLCJzZXRWYWx1ZSIsImdldE1heGltdW1EZXB0aCIsImJpbmQiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRNYXhpbXVtRGVwdGhSZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7OztzQ0FDRDtBQUNoQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNILEtBQUQsQ0FEM0I7QUFHQSxhQUFPRSxZQUFQO0FBQ0Q7OztvQ0FFZUEsWSxFQUFjO0FBQzVCLFVBQU1GLEtBQUssR0FBR0UsWUFBZCxDQUQ0QixDQUNBOztBQUU1QixXQUFLRSxRQUFMLENBQWNKLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUssZUFBZSxHQUFHLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXhCO0FBQUEsVUFDTUMsZUFBZSxHQUFHLEtBQUtBLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBRHhCO0FBQUEsVUFFTUUsdUJBQXVCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGaEMsQ0FEYyxDQUcrQzs7QUFFN0QsYUFBUTtBQUNORCxRQUFBQSxlQUFlLEVBQWZBLGVBRE07QUFFTkUsUUFBQUEsZUFBZSxFQUFmQSxlQUZNO0FBR05DLFFBQUFBLHVCQUF1QixFQUF2QkE7QUFITSxPQUFSO0FBS0Q7Ozs7RUF4QjRDRSxpQjs7OztnQkFBMUJYLGlCLHVCQTBCUTtBQUN6QlksRUFBQUEsU0FBUyxFQUFFLGVBRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRTtBQUZhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXhpbXVtRGVwdGhJbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICByZXR1cm4gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gbWF4aW11bURlcHRoOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRNYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1heGltdW1EZXB0aCA9IHRoaXMuc2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWF4aW11bS1kZXB0aFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl19