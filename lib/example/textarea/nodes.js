"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

var _token = require("../../utilities/token");

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

var NodesTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(NodesTextarea, _Textarea);

  var _super = _createSuper(NodesTextarea);

  function NodesTextarea() {
    _classCallCheck(this, NodesTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(NodesTextarea, [{
    key: "getNodes",
    value: function getNodes() {
      var value = this.getValue(),
          nodes = value; ///

      return nodes;
    }
  }, {
    key: "setNodes",
    value: function setNodes(nodes, tokens) {
      ///
      var value = nodes.reduce(function (value, node) {
        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          significantToken = terminalNode.getSignificantToken(),
              significantTokenType = significantToken.getType(),
              tokenIndex = (0, _token.tokenIndexFromTerminalNodeAndTokens)(terminalNode, tokens);
          value = "".concat(value, "[").concat(significantTokenType, "]").concat(tokenIndex, "\n");
        } else {
          var nonTerminalNode = node,
              ///
          ruleName = nonTerminalNode.getRuleName(),
              tokenIndexes = (0, _token.tokenIndexesFromNonTerminalNodeAndTokens)(nonTerminalNode, tokens);
          value = "".concat(value).concat(ruleName).concat(tokenIndexes, "\n");
        }

        return value;
      }, '');
      this.setValue(value);
    }
  }, {
    key: "clearNodes",
    value: function clearNodes() {
      var value = "";
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getNodes = this.getNodes.bind(this),
          setNodes = this.setNodes.bind(this),
          clearNodes = this.clearNodes.bind(this);
      return {
        getNodes: getNodes,
        setNodes: setNodes,
        clearNodes: clearNodes
      };
    }
  }]);

  return NodesTextarea;
}(_textarea["default"]);

exports["default"] = NodesTextarea;

_defineProperty(NodesTextarea, "defaultProperties", {
  className: "nodes",
  spellCheck: "false",
  readOnly: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVzLmpzIl0sIm5hbWVzIjpbIk5vZGVzVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwibm9kZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInNldFZhbHVlIiwiZ2V0Tm9kZXMiLCJiaW5kIiwic2V0Tm9kZXMiLCJjbGVhck5vZGVzIiwiVGV4dGFyZWEiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7OzsrQkFDUjtBQUNULFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxLQUFLLEdBQUdGLEtBRGQsQ0FEUyxDQUVZOztBQUVyQixhQUFPRSxLQUFQO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPQyxNLEVBQVE7QUFBRTtBQUN4QixVQUFNSCxLQUFLLEdBQUdFLEtBQUssQ0FBQ0UsTUFBTixDQUFhLFVBQUNKLEtBQUQsRUFBUUssSUFBUixFQUFpQjtBQUMxQyxZQUFNQyxnQkFBZ0IsR0FBR0QsSUFBSSxDQUFDRSxjQUFMLEVBQXpCOztBQUVBLFlBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLGNBQU1FLFlBQVksR0FBR0gsSUFBckI7QUFBQSxjQUE0QjtBQUN0QkksVUFBQUEsZ0JBQWdCLEdBQUdELFlBQVksQ0FBQ0UsbUJBQWIsRUFEekI7QUFBQSxjQUVNQyxvQkFBb0IsR0FBR0YsZ0JBQWdCLENBQUNHLE9BQWpCLEVBRjdCO0FBQUEsY0FHTUMsVUFBVSxHQUFHLGdEQUFvQ0wsWUFBcEMsRUFBa0RMLE1BQWxELENBSG5CO0FBS0FILFVBQUFBLEtBQUssYUFBTUEsS0FBTixjQUFlVyxvQkFBZixjQUF1Q0UsVUFBdkMsT0FBTDtBQUNELFNBUEQsTUFPTztBQUNMLGNBQU1DLGVBQWUsR0FBR1QsSUFBeEI7QUFBQSxjQUE4QjtBQUMxQlUsVUFBQUEsUUFBUSxHQUFHRCxlQUFlLENBQUNFLFdBQWhCLEVBRGY7QUFBQSxjQUVJQyxZQUFZLEdBQUcscURBQXlDSCxlQUF6QyxFQUEwRFgsTUFBMUQsQ0FGbkI7QUFJQUgsVUFBQUEsS0FBSyxhQUFNQSxLQUFOLFNBQWNlLFFBQWQsU0FBeUJFLFlBQXpCLE9BQUw7QUFDRDs7QUFFRCxlQUFPakIsS0FBUDtBQUNELE9BbkJhLEVBbUJYLEVBbkJXLENBQWQ7QUFxQkEsV0FBS2tCLFFBQUwsQ0FBY2xCLEtBQWQ7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLa0IsUUFBTCxDQUFjbEIsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNbUIsUUFBUSxHQUFHLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFqQjtBQUFBLFVBQ01DLFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FEakI7QUFBQSxVQUVNRSxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkYsSUFBaEIsQ0FBcUIsSUFBckIsQ0FGbkI7QUFJQSxhQUFRO0FBQ05ELFFBQUFBLFFBQVEsRUFBUkEsUUFETTtBQUVORSxRQUFBQSxRQUFRLEVBQVJBLFFBRk07QUFHTkMsUUFBQUEsVUFBVSxFQUFWQTtBQUhNLE9BQVI7QUFLRDs7OztFQWpEd0NDLG9COzs7O2dCQUF0QnhCLGEsdUJBbURRO0FBQ3pCeUIsRUFBQUEsU0FBUyxFQUFFLE9BRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxPQUZhO0FBR3pCQyxFQUFBQSxRQUFRLEVBQUU7QUFIZSxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMsIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2VuXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Tm9kZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbm9kZXMgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzZXROb2Rlcyhub2RlcywgdG9rZW5zKSB7IC8vL1xuICAgIGNvbnN0IHZhbHVlID0gbm9kZXMucmVkdWNlKCh2YWx1ZSwgbm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdG9rZW5JbmRleCA9IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0ke3Rva2VuSW5kZXh9XFxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHRva2VuSW5kZXhlcyA9IHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuXG4gICAgICAgIHZhbHVlID0gYCR7dmFsdWV9JHtydWxlTmFtZX0ke3Rva2VuSW5kZXhlc31cXG5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgJycpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhck5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXROb2RlcyA9IHRoaXMuZ2V0Tm9kZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXROb2RlcyA9IHRoaXMuc2V0Tm9kZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhck5vZGVzID0gdGhpcy5jbGVhck5vZGVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE5vZGVzLFxuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5vZGVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXX0=