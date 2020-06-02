"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _occamLexers = require("occam-lexers");

var _index = require("../index");

var _occamParsers = require("occam-parsers");

var _easyLayout = require("easy-layout");

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

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing(),
    florenceParser = _occamParsers.FlorenceParser.fromNothing();

var queryByExpression = _index.queryUtilities.queryByExpression;

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
            nodes = queryByExpression(node, expression, maximumDepth);
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
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "DOM example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Expression"), /*#__PURE__*/React.createElement(_expression["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Maximum depth"), /*#__PURE__*/React.createElement(_maximumDepth["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Nodes"), /*#__PURE__*/React.createElement(_nodes["default"], null))), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsInF1ZXJ5VXRpbGl0aWVzIiwiVmlldyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwibm9kZXMiLCJzZXROb2RlcyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyTm9kZXMiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxFeHByZXNzaW9uIiwiaW5pdGlhbE1heGltdW1EZXB0aCIsInNldENvbnRlbnQiLCJzZXRFeHByZXNzaW9uIiwic2V0TWF4aW11bURlcHRoIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQywyQkFBY0MsV0FBZCxFQUF0QjtBQUFBLElBQ01DLGNBQWMsR0FBR0MsNkJBQWVGLFdBQWYsRUFEdkI7O0lBR1FHLGlCLEdBQXNCQyxxQixDQUF0QkQsaUI7O0lBRWFFLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RUFNQyxzQjs7MEVBRUUsQzs7Ozs7OzttQ0FFUDtBQUNiLFVBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFlBQ01DLE1BQU0sR0FBR1YsYUFBYSxDQUFDVyxRQUFkLENBQXVCSCxPQUF2QixDQURmO0FBQUEsWUFFTUksSUFBSSxHQUFHVCxjQUFjLENBQUNVLEtBQWYsQ0FBcUJILE1BQXJCLENBRmI7QUFBQSxZQUdNSSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkwsTUFBakIsQ0FIbEI7QUFBQSxZQUlNTSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUpuQjtBQUFBLFlBS01DLFlBQVksR0FBRyxLQUFLQyxlQUFMLEVBTHJCO0FBQUEsWUFNTUMsS0FBSyxHQUFHZixpQkFBaUIsQ0FBQ08sSUFBRCxFQUFPSSxVQUFQLEVBQW1CRSxZQUFuQixDQU4vQjtBQVFBLGFBQUtHLFFBQUwsQ0FBY0QsS0FBZCxFQUFxQlYsTUFBckIsRUFURSxDQVM0Qjs7QUFFOUIsYUFBS1ksWUFBTCxDQUFrQlIsU0FBbEI7QUFDRCxPQVpELENBWUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsYUFBS0csVUFBTDtBQUNEO0FBQ0Y7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFVBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUVBLGFBQVEsY0FFTixvQkFBQyxtQkFBRCxzQkFGTSxlQUtOLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLG9CQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQURGLGVBSUUsb0JBQUMsc0JBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVEO0FBQTFCLFFBSkYsZUFLRSxvQkFBQyxzQkFBRCx3QkFMRixlQVFFLG9CQUFDLHdCQUFEO0FBQW1CLFFBQUEsT0FBTyxFQUFFQTtBQUE1QixRQVJGLGVBU0Usb0JBQUMsc0JBQUQsZ0JBVEYsZUFZRSxvQkFBQyxpQkFBRCxPQVpGLENBREYsQ0FERixlQWlCRSxvQkFBQyxvQkFBRCxPQWpCRixlQWtCRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxtQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxrQkFERixlQUlFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQUpGLGVBS0Usb0JBQUMsc0JBQUQscUJBTEYsZUFRRSxvQkFBQyxxQkFBRCxPQVJGLENBREYsQ0FsQkYsQ0FMTSxDQUFSO0FBc0NEOzs7K0JBRVVELFUsRUFBWTtBQUNyQixXQUFLRyxhQUFMO0FBRUEsVUFBTXRCLE9BQU8sR0FBRyxLQUFLdUIsY0FBckI7QUFBQSxVQUFzQztBQUNoQ2YsTUFBQUEsVUFBVSxHQUFHLEtBQUtnQixpQkFEeEI7QUFBQSxVQUM0QztBQUN0Q2QsTUFBQUEsWUFBWSxHQUFHLEtBQUtlLG1CQUYxQixDQUhxQixDQUsyQjs7QUFFaEQsV0FBS0MsVUFBTCxDQUFnQjFCLE9BQWhCO0FBRUEsV0FBSzJCLGFBQUwsQ0FBbUJuQixVQUFuQjtBQUVBLFdBQUtvQixlQUFMLENBQXFCbEIsWUFBckI7QUFFQSxXQUFLVSxZQUFMLEdBYnFCLENBYUM7QUFDdkI7Ozs4QkFJZ0JTLEssRUFBT1YsVSxFQUFZO0FBQ2xDLFVBQU1XLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJWLFVBQXpCLENBQXBCOztBQUVBVyxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJkLFVBQXZCO0FBRUEsYUFBT1csV0FBUDtBQUNEOzs7O0VBakcrQkMsYTs7OztnQkFBYmhDLEksYUF5RkYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IE5vZGVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbm9kZXNcIjtcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSBcIi4vaW5wdXQvZXhwcmVzc2lvblwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vaW5wdXQvbWF4aW11bURlcHRoXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbENvbnRlbnQgPSBgVHlwZSBOYXR1cmFsTnVtYmVyXG5cbkNvbnN0cnVjdG9yIHplcm86TmF0dXJhbE51bWJlclxuYDtcblxuICBpbml0aWFsRXhwcmVzc2lvbiA9IFwiLy9kZWNsYXJhdGlvbi8vQG5hbWVcIjtcblxuICBpbml0aWFsTWF4aW11bURlcHRoID0gNTtcblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCk7XG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMsIHRva2Vucyk7IC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIERPTSBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBNYXhpbXVtIGRlcHRoXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TWF4aW11bURlcHRoSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50LCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuaW5pdGlhbEV4cHJlc3Npb24sICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmluaXRpYWxNYXhpbXVtRGVwdGg7ICAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXX0=