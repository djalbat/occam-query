'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    easyLayout = require('easy-layout');

var NodesTextarea = require('./textarea/nodes'),
    exampleContent = require('../example/content'),
    ExpressionInput = require('./input/expression'),
    ContentTextarea = require('./textarea/content'),
    queryUtilities = require('../utilities/query'),
    exampleExpression = require('../example/expression'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    MainVerticalSplitter = require('./verticalSplitter/main');

var Element = easy.Element,
    FlorenceLexer = lexers.FlorenceLexer,
    FlorenceParser = parsers.FlorenceParser,
    SizeableElement = easyLayout.SizeableElement,
    queryByExpression = queryUtilities.queryByExpression;


var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens),
            expression = this.getExpression(),
            nodes = queryByExpression(node, expression);

        this.hideError();

        this.setNodes(nodes);

        this.setParseTree(parseTree);
      } catch (error) {
        this.clearParseTree();

        this.clearNodes();

        this.showError();
      }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

      return React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Expression'
          ),
          React.createElement(ExpressionInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'h2',
            null,
            'Nodes'
          ),
          React.createElement(NodesTextarea, null)
        )
      );
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      var content = exampleContent,
          ///
      expression = exampleExpression; ///

      this.setContent(content);

      this.setExpression(expression);

      this.keyUpHandler(); ///
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJleGFtcGxlQ29udGVudCIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsInF1ZXJ5VXRpbGl0aWVzIiwiZXhhbXBsZUV4cHJlc3Npb24iLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxlbWVudCIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIlNpemVhYmxlRWxlbWVudCIsInF1ZXJ5QnlFeHByZXNzaW9uIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJub2RlcyIsImhpZGVFcnJvciIsInNldE5vZGVzIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyTm9kZXMiLCJzaG93RXJyb3IiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVN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TSxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQTNFZ0JqQyxPOztBQThFbkJvQyxPQUFPQyxNQUFQLENBQWM3QixJQUFkLEVBQW9CO0FBQ2xCOEIsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCbEMsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBOb2Rlc1RleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ub2RlcycpLFxuICAgICAgZXhhbXBsZUNvbnRlbnQgPSByZXF1aXJlKCcuLi9leGFtcGxlL2NvbnRlbnQnKSxcbiAgICAgIEV4cHJlc3Npb25JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvZXhwcmVzc2lvbicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBxdWVyeVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWVyeScpLFxuICAgICAgZXhhbXBsZUV4cHJlc3Npb24gPSByZXF1aXJlKCcuLi9leGFtcGxlL2V4cHJlc3Npb24nKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEZsb3JlbmNlUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbik7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuXG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZXhhbXBsZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleGFtcGxlRXhwcmVzc2lvbjsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19