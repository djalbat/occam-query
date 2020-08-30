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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heGltdW1EZXB0aC5qcyJdLCJuYW1lcyI6WyJNYXhpbXVtRGVwdGhJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXhpbXVtRGVwdGgiLCJOdW1iZXIiLCJzZXRWYWx1ZSIsImdldE1heGltdW1EZXB0aCIsImJpbmQiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRNYXhpbXVtRGVwdGhSZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7O3NDQUNEO0FBQ2hCLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBRCxDQUQzQjtBQUdBLGFBQU9FLFlBQVA7QUFDRDs7O29DQUVlQSxZLEVBQWM7QUFDNUIsVUFBTUYsS0FBSyxHQUFHRSxZQUFkLENBRDRCLENBQ0E7O0FBRTVCLFdBQUtFLFFBQUwsQ0FBY0osS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSyxlQUFlLEdBQUcsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBeEI7QUFBQSxVQUNNQyxlQUFlLEdBQUcsS0FBS0EsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEeEI7QUFBQSxVQUVNRSx1QkFBdUIsR0FBRyxLQUFLQyxXQUFMLENBQWlCSCxJQUFqQixDQUFzQixJQUF0QixDQUZoQyxDQURjLENBRytDOztBQUU3RCxhQUFRO0FBQ05ELFFBQUFBLGVBQWUsRUFBZkEsZUFETTtBQUVORSxRQUFBQSxlQUFlLEVBQWZBLGVBRk07QUFHTkMsUUFBQUEsdUJBQXVCLEVBQXZCQTtBQUhNLE9BQVI7QUFLRDs7OztFQXhCNENFLGlCOzs7O2dCQUExQlgsaUIsdUJBMEJRO0FBQ3pCWSxFQUFBQSxTQUFTLEVBQUUsZUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1heGltdW1EZXB0aElucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gTnVtYmVyKHZhbHVlKTtcblxuICAgIHJldHVybiBtYXhpbXVtRGVwdGg7XG4gIH1cblxuICBzZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXhpbXVtRGVwdGg7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoID0gdGhpcy5zZXRNYXhpbXVtRGVwdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXhpbXVtLWRlcHRoXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXX0=