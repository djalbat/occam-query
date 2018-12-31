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

        this.setNodes(nodes, tokens); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJleGFtcGxlQ29udGVudCIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsInF1ZXJ5VXRpbGl0aWVzIiwiZXhhbXBsZUV4cHJlc3Npb24iLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxlbWVudCIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIlNpemVhYmxlRWxlbWVudCIsInF1ZXJ5QnlFeHByZXNzaW9uIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJub2RlcyIsImhpZGVFcnJvciIsInNldE5vZGVzIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyTm9kZXMiLCJzaG93RXJyb3IiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVN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LEVBQTZCbUIsVUFBN0IsQ0FBYjs7QUFFQU0sV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUEzRWdCakMsTzs7QUE4RW5Cb0MsT0FBT0MsTUFBUCxDQUFjN0IsSUFBZCxFQUFvQjtBQUNsQjhCLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmxDLElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgTm9kZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvbm9kZXMnKSxcbiAgICAgIGV4YW1wbGVDb250ZW50ID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9jb250ZW50JyksXG4gICAgICBFeHByZXNzaW9uSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2V4cHJlc3Npb24nKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgcXVlcnlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVlcnknKSxcbiAgICAgIGV4YW1wbGVFeHByZXNzaW9uID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9leHByZXNzaW9uJyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBGbG9yZW5jZVBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24pO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTm9kZXMoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRXhwcmVzc2lvblxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEV4cHJlc3Npb25JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGV4YW1wbGVDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhhbXBsZUV4cHJlc3Npb247IC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==