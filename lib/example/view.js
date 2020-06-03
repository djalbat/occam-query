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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing(),
    florenceParser = _occamParsers.FlorenceParser.fromNothing();

var queryByExpression = _index.queryUtilities.queryByExpression;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(View)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
    value: function childElements() {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement(_heading["default"], null, "DOM example"), React.createElement(_easyLayout.ColumnsDiv, null, React.createElement(_sizeable["default"], null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading["default"], null, "Expression"), React.createElement(_expression["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Maximum depth"), React.createElement(_maximumDepth["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Nodes"), React.createElement(_nodes["default"], null))), React.createElement(_vertical["default"], null), React.createElement(_column["default"], null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading["default"], null, "Content"), React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Parse tree"), React.createElement(_parseTree["default"], null))))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
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

      exampleView.initialise();
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsInF1ZXJ5VXRpbGl0aWVzIiwiVmlldyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwibm9kZXMiLCJzZXROb2RlcyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyTm9kZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb24iLCJpbml0aWFsTWF4aW11bURlcHRoIiwic2V0Q29udGVudCIsInNldEV4cHJlc3Npb24iLCJzZXRNYXhpbXVtRGVwdGgiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDJCQUFjQyxXQUFkLEVBQXRCO0FBQUEsSUFDTUMsY0FBYyxHQUFHQyw2QkFBZUYsV0FBZixFQUR2Qjs7SUFHUUcsaUIsR0FBc0JDLHFCLENBQXRCRCxpQjs7SUFFYUUsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQU1DLHNCOzswRUFFRSxDOzs7Ozs7O21DQUVQO0FBQ2IsVUFBSTtBQUNGLFlBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsWUFDTUMsTUFBTSxHQUFHVixhQUFhLENBQUNXLFFBQWQsQ0FBdUJILE9BQXZCLENBRGY7QUFBQSxZQUVNSSxJQUFJLEdBQUdULGNBQWMsQ0FBQ1UsS0FBZixDQUFxQkgsTUFBckIsQ0FGYjtBQUFBLFlBR01JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxXQUFMLENBQWlCTCxNQUFqQixDQUhsQjtBQUFBLFlBSU1NLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBSm5CO0FBQUEsWUFLTUMsWUFBWSxHQUFHLEtBQUtDLGVBQUwsRUFMckI7QUFBQSxZQU1NQyxLQUFLLEdBQUdmLGlCQUFpQixDQUFDTyxJQUFELEVBQU9JLFVBQVAsRUFBbUJFLFlBQW5CLENBTi9CO0FBUUEsYUFBS0csUUFBTCxDQUFjRCxLQUFkLEVBQXFCVixNQUFyQixFQVRFLENBUzRCOztBQUU5QixhQUFLWSxZQUFMLENBQWtCUixTQUFsQjtBQUNELE9BWkQsQ0FZRSxPQUFPUyxLQUFQLEVBQWM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxhQUFLRyxVQUFMO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBRUEsYUFBUSxDQUVOLG9CQUFDLG1CQUFELHNCQUZNLEVBS04sb0JBQUMsc0JBQUQsUUFDRSxvQkFBQyxvQkFBRCxRQUNFLG9CQUFDLG1CQUFELFFBQ0Usb0JBQUMsc0JBQUQscUJBREYsRUFJRSxvQkFBQyxzQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUQ7QUFBMUIsUUFKRixFQUtFLG9CQUFDLHNCQUFELHdCQUxGLEVBUUUsb0JBQUMsd0JBQUQ7QUFBbUIsUUFBQSxPQUFPLEVBQUVBO0FBQTVCLFFBUkYsRUFTRSxvQkFBQyxzQkFBRCxnQkFURixFQVlFLG9CQUFDLGlCQUFELE9BWkYsQ0FERixDQURGLEVBaUJFLG9CQUFDLG9CQUFELE9BakJGLEVBa0JFLG9CQUFDLGtCQUFELFFBQ0Usb0JBQUMsbUJBQUQsUUFDRSxvQkFBQyxzQkFBRCxrQkFERixFQUlFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQUpGLEVBS0Usb0JBQUMsc0JBQUQscUJBTEYsRUFRRSxvQkFBQyxxQkFBRCxPQVJGLENBREYsQ0FsQkYsQ0FMTSxDQUFSO0FBc0NEOzs7aUNBRVk7QUFDWCxXQUFLRSxhQUFMO0FBRUEsVUFBTXJCLE9BQU8sR0FBRyxLQUFLc0IsY0FBckI7QUFBQSxVQUFzQztBQUNoQ2QsTUFBQUEsVUFBVSxHQUFHLEtBQUtlLGlCQUR4QjtBQUFBLFVBQzRDO0FBQ3RDYixNQUFBQSxZQUFZLEdBQUcsS0FBS2MsbUJBRjFCLENBSFcsQ0FLcUM7O0FBRWhELFdBQUtDLFVBQUwsQ0FBZ0J6QixPQUFoQjtBQUVBLFdBQUswQixhQUFMLENBQW1CbEIsVUFBbkI7QUFFQSxXQUFLbUIsZUFBTCxDQUFxQmpCLFlBQXJCO0FBRUEsV0FBS1MsWUFBTCxHQWJXLENBYVc7QUFDdkI7Ozs4QkFJZ0JTLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQXBCOztBQUVBQyxNQUFBQSxXQUFXLENBQUNHLFVBQVo7QUFFQSxhQUFPSCxXQUFQO0FBQ0Q7Ozs7RUFqRytCQyxhOzs7O2dCQUFiaEMsSSxhQXlGRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub2Rlc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tIFwiLi9pbnB1dC9leHByZXNzaW9uXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBNYXhpbXVtRGVwdGhJbnB1dCBmcm9tIFwiLi9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQ29udGVudCA9IGBUeXBlIE5hdHVyYWxOdW1iZXJcblxuQ29uc3RydWN0b3IgemVybzpOYXR1cmFsTnVtYmVyXG5gO1xuXG4gIGluaXRpYWxFeHByZXNzaW9uID0gXCIvL2RlY2xhcmF0aW9uLy9AbmFtZVwiO1xuXG4gIGluaXRpYWxNYXhpbXVtRGVwdGggPSA1O1xuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhck5vZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBET00gZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRXhwcmVzc2lvblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTWF4aW11bSBkZXB0aFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50LCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuaW5pdGlhbEV4cHJlc3Npb24sICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmluaXRpYWxNYXhpbXVtRGVwdGg7ICAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==