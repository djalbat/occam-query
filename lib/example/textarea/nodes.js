'use strict';

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

var easy = require('easy');

var tokenUtilities = require('../../utilities/token');

var InputElement = easy.InputElement,
    tokenIndexFromTerminalNodeAndTokens = tokenUtilities.tokenIndexFromTerminalNodeAndTokens,
    tokenIndexesFromNonTerminalNodeAndTokens = tokenUtilities.tokenIndexesFromNonTerminalNodeAndTokens;

var NodesTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(NodesTextarea, _InputElement);

  var _super = _createSuper(NodesTextarea);

  function NodesTextarea() {
    _classCallCheck(this, NodesTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(NodesTextarea, [{
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
              tokenIndex = tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);
          value = "".concat(value, "[").concat(significantTokenType, "]").concat(tokenIndex, "\n");
        } else {
          var nonTerminalNode = node,
              ///
          ruleName = nonTerminalNode.getRuleName(),
              tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
          value = "".concat(value).concat(ruleName).concat(tokenIndexes, "\n");
        }

        return value;
      }, '');
      this.setValue(value);
    }
  }, {
    key: "clearNodes",
    value: function clearNodes() {
      var value = '';
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setNodes = this.setNodes.bind(this),
          clearNodes = this.clearNodes.bind(this);
      return {
        setNodes: setNodes,
        clearNodes: clearNodes
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(NodesTextarea, properties);
    }
  }]);

  return NodesTextarea;
}(InputElement);

Object.assign(NodesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'nodes',
    spellCheck: 'false',
    readOnly: true
  }
});
module.exports = NodesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwidG9rZW5VdGlsaXRpZXMiLCJJbnB1dEVsZW1lbnQiLCJ0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJOb2Rlc1RleHRhcmVhIiwibm9kZXMiLCJ0b2tlbnMiLCJ2YWx1ZSIsInJlZHVjZSIsIm5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidG9rZW5JbmRleGVzIiwic2V0VmFsdWUiLCJzZXROb2RlcyIsImJpbmQiLCJjbGVhck5vZGVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsdUJBQUQsQ0FBOUI7O0FBRU0sSUFBRUUsWUFBRixHQUFtQkgsSUFBbkIsQ0FBRUcsWUFBRjtBQUFBLElBQ0VDLG1DQURGLEdBQ29GRixjQURwRixDQUNFRSxtQ0FERjtBQUFBLElBQ3VDQyx3Q0FEdkMsR0FDb0ZILGNBRHBGLENBQ3VDRyx3Q0FEdkM7O0lBR0FDLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBT0MsTSxFQUFRO0FBQUU7QUFDeEIsVUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQjtBQUN6QyxZQUFNQyxnQkFBZ0IsR0FBR0QsSUFBSSxDQUFDRSxjQUFMLEVBQXpCOztBQUVBLFlBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLGNBQU1FLFlBQVksR0FBR0gsSUFBckI7QUFBQSxjQUE0QjtBQUN0QkksVUFBQUEsZ0JBQWdCLEdBQUdELFlBQVksQ0FBQ0UsbUJBQWIsRUFEekI7QUFBQSxjQUVNQyxvQkFBb0IsR0FBR0YsZ0JBQWdCLENBQUNHLE9BQWpCLEVBRjdCO0FBQUEsY0FHTUMsVUFBVSxHQUFHZixtQ0FBbUMsQ0FBQ1UsWUFBRCxFQUFlTixNQUFmLENBSHREO0FBS0FDLFVBQUFBLEtBQUssYUFBTUEsS0FBTixjQUFlUSxvQkFBZixjQUF1Q0UsVUFBdkMsT0FBTDtBQUNELFNBUEQsTUFPTztBQUNMLGNBQU1DLGVBQWUsR0FBR1QsSUFBeEI7QUFBQSxjQUE4QjtBQUN4QlUsVUFBQUEsUUFBUSxHQUFHRCxlQUFlLENBQUNFLFdBQWhCLEVBRGpCO0FBQUEsY0FFTUMsWUFBWSxHQUFHbEIsd0NBQXdDLENBQUNlLGVBQUQsRUFBa0JaLE1BQWxCLENBRjdEO0FBSUFDLFVBQUFBLEtBQUssYUFBTUEsS0FBTixTQUFjWSxRQUFkLFNBQXlCRSxZQUF6QixPQUFMO0FBQ0Q7O0FBRUQsZUFBT2QsS0FBUDtBQUNELE9BbkJPLEVBbUJMLEVBbkJLLENBQWQ7QUFxQkEsV0FBS2UsUUFBTCxDQUFjZixLQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1BLEtBQUssR0FBRyxFQUFkO0FBRUEsV0FBS2UsUUFBTCxDQUFjZixLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1nQixRQUFRLEdBQUcsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUEsVUFDTUMsVUFBVSxHQUFHLEtBQUtBLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBRG5CO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxRQUFRLEVBQVJBLFFBRE07QUFFTkUsUUFBQUEsVUFBVSxFQUFWQTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT3pCLFlBQVksQ0FBQzBCLGNBQWIsQ0FBNEJ2QixhQUE1QixFQUEyQ3NCLFVBQTNDLENBQVA7QUFBZ0U7Ozs7RUExQzFFekIsWTs7QUE2QzVCMkIsTUFBTSxDQUFDQyxNQUFQLENBQWN6QixhQUFkLEVBQTZCO0FBQzNCMEIsRUFBQUEsT0FBTyxFQUFFLFVBRGtCO0FBRTNCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLE9BRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRSxPQUZLO0FBR2pCQyxJQUFBQSxRQUFRLEVBQUU7QUFITztBQUZRLENBQTdCO0FBU0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhDLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90b2tlbicpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMsIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSA9IHRva2VuVXRpbGl0aWVzO1xuXG5jbGFzcyBOb2Rlc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZShmdW5jdGlvbih2YWx1ZSwgbm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5JbmRleCA9IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0ke3Rva2VuSW5kZXh9XFxuYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9XFxuYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sICcnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJOb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE5vZGVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9kZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ25vZGVzJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVzVGV4dGFyZWE7XG4iXX0=