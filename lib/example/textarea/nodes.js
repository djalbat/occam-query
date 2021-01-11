"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

var _token = require("../../utilities/token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVzLmpzIl0sIm5hbWVzIjpbIk5vZGVzVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwibm9kZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInNldFZhbHVlIiwiZ2V0Tm9kZXMiLCJiaW5kIiwic2V0Tm9kZXMiLCJjbGVhck5vZGVzIiwiVGV4dGFyZWEiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7K0JBQ1I7QUFDVCxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsS0FBSyxHQUFHRixLQURkLENBRFMsQ0FFWTs7QUFFckIsYUFBT0UsS0FBUDtBQUNEOzs7NkJBRVFBLEssRUFBT0MsTSxFQUFRO0FBQUU7QUFDeEIsVUFBTUgsS0FBSyxHQUFHRSxLQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFDSixLQUFELEVBQVFLLElBQVIsRUFBaUI7QUFDMUMsWUFBTUMsZ0JBQWdCLEdBQUdELElBQUksQ0FBQ0UsY0FBTCxFQUF6Qjs7QUFFQSxZQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNRSxZQUFZLEdBQUdILElBQXJCO0FBQUEsY0FBNEI7QUFDdEJJLFVBQUFBLGdCQUFnQixHQUFHRCxZQUFZLENBQUNFLG1CQUFiLEVBRHpCO0FBQUEsY0FFTUMsb0JBQW9CLEdBQUdGLGdCQUFnQixDQUFDRyxPQUFqQixFQUY3QjtBQUFBLGNBR01DLFVBQVUsR0FBRyxnREFBb0NMLFlBQXBDLEVBQWtETCxNQUFsRCxDQUhuQjtBQUtBSCxVQUFBQSxLQUFLLGFBQU1BLEtBQU4sY0FBZVcsb0JBQWYsY0FBdUNFLFVBQXZDLE9BQUw7QUFDRCxTQVBELE1BT087QUFDTCxjQUFNQyxlQUFlLEdBQUdULElBQXhCO0FBQUEsY0FBOEI7QUFDMUJVLFVBQUFBLFFBQVEsR0FBR0QsZUFBZSxDQUFDRSxXQUFoQixFQURmO0FBQUEsY0FFSUMsWUFBWSxHQUFHLHFEQUF5Q0gsZUFBekMsRUFBMERYLE1BQTFELENBRm5CO0FBSUFILFVBQUFBLEtBQUssYUFBTUEsS0FBTixTQUFjZSxRQUFkLFNBQXlCRSxZQUF6QixPQUFMO0FBQ0Q7O0FBRUQsZUFBT2pCLEtBQVA7QUFDRCxPQW5CYSxFQW1CWCxFQW5CVyxDQUFkO0FBcUJBLFdBQUtrQixRQUFMLENBQWNsQixLQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1BLEtBQUssR0FBRyxFQUFkO0FBRUEsV0FBS2tCLFFBQUwsQ0FBY2xCLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTW1CLFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFBQSxVQUNNQyxRQUFRLEdBQUcsS0FBS0EsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBRGpCO0FBQUEsVUFFTUUsVUFBVSxHQUFHLEtBQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCLENBRm5CO0FBSUEsYUFBUTtBQUNORCxRQUFBQSxRQUFRLEVBQVJBLFFBRE07QUFFTkUsUUFBQUEsUUFBUSxFQUFSQSxRQUZNO0FBR05DLFFBQUFBLFVBQVUsRUFBVkE7QUFITSxPQUFSO0FBS0Q7Ozs7RUFqRHdDQyxvQjs7OztnQkFBdEJ4QixhLHVCQW1EUTtBQUN6QnlCLEVBQUFBLFNBQVMsRUFBRSxPQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsT0FGYTtBQUd6QkMsRUFBQUEsUUFBUSxFQUFFO0FBSGUsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zLCB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9XFxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sICcnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJOb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Tm9kZXMgPSB0aGlzLmdldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Tm9kZXMgPSB0aGlzLnNldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJOb2RlcyA9IHRoaXMuY2xlYXJOb2Rlcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXROb2RlcyxcbiAgICAgIHNldE5vZGVzLFxuICAgICAgY2xlYXJOb2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJub2Rlc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl19