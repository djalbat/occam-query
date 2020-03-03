'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
      return React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Expression"), React.createElement(ExpressionInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Maximum depth"), React.createElement(MaximumDepthInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: contentKeyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("h2", null, "Nodes"), React.createElement(NodesTextarea, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJxdWVyeVV0aWxpdGllcyIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWF4aW11bURlcHRoSW5wdXQiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkVsZW1lbnQiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJTaXplYWJsZUVsZW1lbnQiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiVmlldyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJleHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbiIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwiaGlkZUVycm9yIiwic2V0Tm9kZXMiLCJlcnJvciIsImNsZWFyTm9kZXMiLCJzaG93RXJyb3IiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJjb250ZW50S2V5VXBIYW5kbGVyIiwiYmluZCIsImtleVVwSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInNldE1heGltdW1EZXB0aCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBC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QixRQVJGLEVBU0UsMENBVEYsRUFZRSxvQkFBQyxlQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFRjtBQUExQixRQVpGLENBREYsRUFlRSxvQkFBQyxvQkFBRCxPQWZGLEVBZ0JFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLDZDQURGLEVBSUUsb0JBQUMsaUJBQUQsT0FKRixFQUtFLHdDQUxGLEVBUUUsb0JBQUMsYUFBRCxPQVJGLENBaEJGLENBRkY7QUErQkQ7OztpQ0FFWTtBQUNYLFdBQUtHLGFBQUw7QUFFQSxVQUFNdkIsT0FBTyxtRUFBYjtBQUFBLFVBT01NLFVBQVUsR0FBRyw0Q0FQbkI7QUFBQSxVQVFNRSxZQUFZLEdBQUcsQ0FSckI7QUFVQSxXQUFLZ0IsVUFBTCxDQUFnQnhCLE9BQWhCO0FBRUEsV0FBS3lCLGFBQUwsQ0FBbUJuQixVQUFuQjtBQUVBLFdBQUtvQixlQUFMLENBQXFCbEIsWUFBckI7QUFFQSxXQUFLWSxtQkFBTCxHQW5CVyxDQW1Ca0I7O0FBRTdCLFdBQUtFLFlBQUwsR0FyQlcsQ0FxQlc7QUFDdkI7OzttQ0FFcUJILFUsRUFBWTtBQUNoQyxVQUFNUSxJQUFJLEdBQUdwQyxPQUFPLENBQUNxQyxjQUFSLENBQXVCN0IsSUFBdkIsRUFBNkJvQixVQUE3QixDQUFiO0FBRUFRLE1BQUFBLElBQUksQ0FBQ0UsVUFBTDtBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQWxHZ0JwQyxPOztBQXFHbkJ1QyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hDLElBQWQsRUFBb0I7QUFDbEJpQyxFQUFBQSxPQUFPLEVBQUUsS0FEUztBQUVsQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRkQsQ0FBcEI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgTm9kZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvbm9kZXMnKSxcbiAgICAgIHF1ZXJ5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1ZXJ5JyksXG4gICAgICBFeHByZXNzaW9uSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2V4cHJlc3Npb24nKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTWF4aW11bURlcHRoSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L21heGltdW1EZXB0aCcpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgRmxvcmVuY2VQYXJzZXIgfSA9IHBhcnNlcnMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuXG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnRLZXlVcEhhbmRsZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gKG5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY29udGVudEtleVVwSGFuZGxlciA9IHRoaXMuY29udGVudEtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBNYXhpbXVtIGRlcHRoXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TWF4aW11bURlcHRoSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17Y29udGVudEtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gYFxuXG5UeXBlIE5hdHVyYWxOdW1iZXJcblxuQ29uc3RydWN0b3IgemVybzpOYXR1cmFsTnVtYmVyXG4gIFxuYCxcbiAgICAgICAgICBleHByZXNzaW9uID0gJy8vY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtLy9AdW5hc3NpZ25lZCcsXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gNTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmNvbnRlbnRLZXlVcEhhbmRsZXIoKTsgIC8vL1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==