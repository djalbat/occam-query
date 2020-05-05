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

var easy = require('easy'),
    lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    easyLayout = require('easy-layout');

var NodesTextarea = require('./textarea/nodes'),
    queryUtilities = require('../utilities/query'),
    ExpressionInput = require('./input/expression'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    MaximumDepthInput = require('./input/maximumDepth'),
    MainVerticalSplitter = require('./verticalSplitter/main');

var Element = easy.Element,
    FlorenceLexer = lexers.FlorenceLexer,
    FlorenceParser = parsers.FlorenceParser,
    SizeableElement = easyLayout.SizeableElement,
    queryByExpression = queryUtilities.queryByExpression;
var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            expression = this.getExpression(),
            maximumDepth = this.getMaximumDepth(),
            nodes = queryByExpression(node, expression, maximumDepth);
        this.hideError();
        this.setNodes(nodes, tokens); ///
      } catch (error) {
        this.clearNodes();
        this.showError();
      }
    }
  }, {
    key: "contentKeyUpHandler",
    value: function contentKeyUpHandler() {
      var content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens),
          parseTree = node !== null ? node.asParseTree(tokens) : null;
      this.setParseTree(parseTree);
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this);
      return /*#__PURE__*/React.createElement("div", {
        className: "columns"
      }, /*#__PURE__*/React.createElement(SizeableElement, null, /*#__PURE__*/React.createElement("h2", null, "Expression"), /*#__PURE__*/React.createElement(ExpressionInput, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Maximum depth"), /*#__PURE__*/React.createElement(MaximumDepthInput, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(ContentTextarea, {
        onKeyUp: contentKeyUpHandler
      })), /*#__PURE__*/React.createElement(MainVerticalSplitter, null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Parse tree"), /*#__PURE__*/React.createElement(ParseTreeTextarea, null), /*#__PURE__*/React.createElement("h2", null, "Nodes"), /*#__PURE__*/React.createElement(NodesTextarea, null)));
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var content = "\n\nType NaturalNumber\n\nConstructor zero:NaturalNumber\n  \n",
          expression = '//constructorDeclaration/term//@unassigned',
          maximumDepth = 5;
      this.setContent(content);
      this.setExpression(expression);
      this.setMaximumDepth(maximumDepth);
      this.contentKeyUpHandler(); ///

      this.keyUpHandler(); ///
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJxdWVyeVV0aWxpdGllcyIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWF4aW11bURlcHRoSW5wdXQiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkVsZW1lbnQiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJTaXplYWJsZUVsZW1lbnQiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiVmlldyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJleHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbiIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwiaGlkZUVycm9yIiwic2V0Tm9kZXMiLCJlcnJvciIsImNsZWFyTm9kZXMiLCJzaG93RXJyb3IiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJjb250ZW50S2V5VXBIYW5kbGVyIiwiYmluZCIsImtleVVwSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInNldE1heGltdW1EZXB0aCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxD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QUFFQTtBQUE1QixRQVJGLGVBU0UsMENBVEYsZUFZRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFRjtBQUExQixRQVpGLENBREYsZUFlRSxvQkFBQyxvQkFBRCxPQWZGLGVBZ0JFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRSw2Q0FERixlQUlFLG9CQUFDLGlCQUFELE9BSkYsZUFLRSx3Q0FMRixlQVFFLG9CQUFDLGFBQUQsT0FSRixDQWhCRixDQUZGO0FBK0JEOzs7aUNBRVk7QUFDWCxXQUFLRyxhQUFMO0FBRUEsVUFBTXZCLE9BQU8sbUVBQWI7QUFBQSxVQU9NTSxVQUFVLEdBQUcsNENBUG5CO0FBQUEsVUFRTUUsWUFBWSxHQUFHLENBUnJCO0FBVUEsV0FBS2dCLFVBQUwsQ0FBZ0J4QixPQUFoQjtBQUVBLFdBQUt5QixhQUFMLENBQW1CbkIsVUFBbkI7QUFFQSxXQUFLb0IsZUFBTCxDQUFxQmxCLFlBQXJCO0FBRUEsV0FBS1ksbUJBQUwsR0FuQlcsQ0FtQmtCOztBQUU3QixXQUFLRSxZQUFMLEdBckJXLENBcUJXO0FBQ3ZCOzs7bUNBRXFCSCxVLEVBQVk7QUFDaEMsVUFBTVEsSUFBSSxHQUFHcEMsT0FBTyxDQUFDcUMsY0FBUixDQUF1QjdCLElBQXZCLEVBQTZCb0IsVUFBN0IsQ0FBYjtBQUVBUSxNQUFBQSxJQUFJLENBQUNFLFVBQUw7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUFsR2dCcEMsTzs7QUFxR25CdUMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQyxJQUFkLEVBQW9CO0FBQ2xCaUMsRUFBQUEsT0FBTyxFQUFFLEtBRFM7QUFFbEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZELENBQXBCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJDLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IE5vZGVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL25vZGVzJyksXG4gICAgICBxdWVyeVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWVyeScpLFxuICAgICAgRXhwcmVzc2lvbklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9leHByZXNzaW9uJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1heGltdW1EZXB0aElucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9tYXhpbXVtRGVwdGgnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEZsb3JlbmNlUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMsIHRva2Vucyk7IC8vL1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmNsZWFyTm9kZXMoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBjb250ZW50S2V5VXBIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFzUGFyc2VUcmVlKHRva2VucykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGNvbnRlbnRLZXlVcEhhbmRsZXIgPSB0aGlzLmNvbnRlbnRLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRXhwcmVzc2lvblxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEV4cHJlc3Npb25JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTWF4aW11bSBkZXB0aFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2NvbnRlbnRLZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGBcblxuVHlwZSBOYXR1cmFsTnVtYmVyXG5cbkNvbnN0cnVjdG9yIHplcm86TmF0dXJhbE51bWJlclxuICBcbmAsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9ICcvL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdGVybS8vQHVuYXNzaWduZWQnLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IDU7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICB0aGlzLnNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5jb250ZW50S2V5VXBIYW5kbGVyKCk7ICAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=