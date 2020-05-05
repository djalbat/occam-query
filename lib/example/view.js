"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _nodes = _interopRequireDefault(require("./textarea/nodes"));

var _expression = _interopRequireDefault(require("./input/expression"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _maximumDepth = _interopRequireDefault(require("./input/maximumDepth"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _query = require("../utilities/query");

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

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing(),
    florenceParser = _occamParsers.FlorenceParser.fromNothing();

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    var _this;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initialContent", "Type NaturalNumber\n\nConstructor zero:NaturalNumber\n");

    _defineProperty(_assertThisInitialized(_this), "initialExpression", "//declaration//@name");

    _defineProperty(_assertThisInitialized(_this), "initialMaximumDepth", 5);

    return _this;
  }

  _createClass(View, [{
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens),
            expression = this.getExpression(),
            maximumDepth = this.getMaximumDepth(),
            nodes = (0, _query.queryByExpression)(node, expression, maximumDepth);
        this.setNodes(nodes, tokens); ///

        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearNodes();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "DOM example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Expression"), /*#__PURE__*/React.createElement(_expression["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Maximum depth"), /*#__PURE__*/React.createElement(_maximumDepth["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Nodes"), /*#__PURE__*/React.createElement(_nodes["default"], null)), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null)))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      var content = this.initialContent,
          ///
      expression = this.initialExpression,
          ///
      maximumDepth = this.initialMaximumDepth; ///

      this.setContent(content);
      this.setExpression(expression);
      this.setMaximumDepth(maximumDepth);
      this.keyUpHandler(); ///
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJub2RlcyIsInNldE5vZGVzIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJOb2RlcyIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb24iLCJpbml0aWFsTWF4aW11bURlcHRoIiwic2V0Q29udGVudCIsInNldEV4cHJlc3Npb24iLCJzZXRNYXhpbXVtRGVwdGgiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDJCQUFjQyxXQUFkLEVBQXRCO0FBQUEsSUFDTUMsY0FBYyxHQUFHQyw2QkFBZUYsV0FBZixFQUR2Qjs7SUFHcUJHLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RUFNQyxzQjs7MEVBRUUsQzs7Ozs7OzttQ0FFUDtBQUNiLFVBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFlBQ01DLE1BQU0sR0FBR1IsYUFBYSxDQUFDUyxRQUFkLENBQXVCSCxPQUF2QixDQURmO0FBQUEsWUFFTUksSUFBSSxHQUFHUCxjQUFjLENBQUNRLEtBQWYsQ0FBcUJILE1BQXJCLENBRmI7QUFBQSxZQUdNSSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkwsTUFBakIsQ0FIbEI7QUFBQSxZQUlNTSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUpuQjtBQUFBLFlBS01DLFlBQVksR0FBRyxLQUFLQyxlQUFMLEVBTHJCO0FBQUEsWUFNTUMsS0FBSyxHQUFHLDhCQUFrQlIsSUFBbEIsRUFBd0JJLFVBQXhCLEVBQW9DRSxZQUFwQyxDQU5kO0FBUUEsYUFBS0csUUFBTCxDQUFjRCxLQUFkLEVBQXFCVixNQUFyQixFQVRFLENBUzRCOztBQUU5QixhQUFLWSxZQUFMLENBQWtCUixTQUFsQjtBQUNELE9BWkQsQ0FZRSxPQUFPUyxLQUFQLEVBQWM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxhQUFLRyxVQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBRUEsYUFBUSxjQUVOLG9CQUFDLG1CQUFELHNCQUZNLGVBS04sb0JBQUMsc0JBQUQscUJBQ0Usb0JBQUMsb0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQscUJBREYsZUFJRSxvQkFBQyxzQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUQ7QUFBMUIsUUFKRixlQUtFLG9CQUFDLHNCQUFELHdCQUxGLGVBUUUsb0JBQUMsd0JBQUQ7QUFBbUIsUUFBQSxPQUFPLEVBQUVBO0FBQTVCLFFBUkYsZUFTRSxvQkFBQyxzQkFBRCxnQkFURixlQVlFLG9CQUFDLGlCQUFELE9BWkYsQ0FERixlQWVFLG9CQUFDLG9CQUFELE9BZkYsZUFnQkUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQsa0JBREYsZUFJRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFKRixlQUtFLG9CQUFDLHNCQUFELHFCQUxGLGVBUUUsb0JBQUMscUJBQUQsT0FSRixDQWhCRixDQUxNLENBQVI7QUFrQ0Q7OzsrQkFFVUQsVSxFQUFZO0FBQ3JCLFdBQUtHLGFBQUw7QUFFQSxVQUFNdEIsT0FBTyxHQUFHLEtBQUt1QixjQUFyQjtBQUFBLFVBQXNDO0FBQ2hDZixNQUFBQSxVQUFVLEdBQUcsS0FBS2dCLGlCQUR4QjtBQUFBLFVBQzRDO0FBQ3RDZCxNQUFBQSxZQUFZLEdBQUcsS0FBS2UsbUJBRjFCLENBSHFCLENBSzJCOztBQUVoRCxXQUFLQyxVQUFMLENBQWdCMUIsT0FBaEI7QUFFQSxXQUFLMkIsYUFBTCxDQUFtQm5CLFVBQW5CO0FBRUEsV0FBS29CLGVBQUwsQ0FBcUJsQixZQUFyQjtBQUVBLFdBQUtVLFlBQUwsR0FicUIsQ0FhQztBQUN2Qjs7OzhCQUlnQlMsSyxFQUFPVixVLEVBQVk7QUFDbEMsVUFBTVcsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QlYsVUFBekIsQ0FBcEI7O0FBRUFXLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1QmQsVUFBdkI7QUFFQSxhQUFPVyxXQUFQO0FBQ0Q7Ozs7RUE3RitCQyxhOzs7O2dCQUFiaEMsSSxhQXFGRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub2Rlc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tIFwiLi9pbnB1dC9leHByZXNzaW9uXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBNYXhpbXVtRGVwdGhJbnB1dCBmcm9tIFwiLi9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuXG5pbXBvcnQgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQ29udGVudCA9IGBUeXBlIE5hdHVyYWxOdW1iZXJcblxuQ29uc3RydWN0b3IgemVybzpOYXR1cmFsTnVtYmVyXG5gO1xuXG4gIGluaXRpYWxFeHByZXNzaW9uID0gXCIvL2RlY2xhcmF0aW9uLy9AbmFtZVwiO1xuXG4gIGluaXRpYWxNYXhpbXVtRGVwdGggPSA1O1xuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhck5vZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgRE9NIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgRXhwcmVzc2lvblxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxOb2Rlc1RleHRhcmVhIC8+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5pbml0aWFsRXhwcmVzc2lvbiwgIC8vL1xuICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuaW5pdGlhbE1heGltdW1EZXB0aDsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgdGhpcy5zZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==