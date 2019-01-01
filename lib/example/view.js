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
    key: 'contentKeyUpHandler',
    value: function contentKeyUpHandler() {
      var content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens),
          parseTree = node.asParseTree(tokens);

      this.setParseTree(parseTree);
    }
  }, {
    key: 'expressionKeyUpHandler',
    value: function expressionKeyUpHandler() {
      try {
        var content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            expression = this.getExpression(),
            nodes = queryByExpression(node, expression);

        this.hideError();

        this.setNodes(nodes, tokens); ///
      } catch (error) {
        this.clearNodes();

        this.showError();
      }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          expressionKeyUpHandler = this.expressionKeyUpHandler.bind(this);

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
          React.createElement(ExpressionInput, { onKeyUp: expressionKeyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: contentKeyUpHandler })
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

      this.contentKeyUpHandler(); ///

      this.expressionKeyUpHandler(); ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJleGFtcGxlQ29udGVudCIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsInF1ZXJ5VXRpbGl0aWVzIiwiZXhhbXBsZUV4cHJlc3Npb24iLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxlbWVudCIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIlNpemVhYmxlRWxlbWVudCIsInF1ZXJ5QnlFeHByZXNzaW9uIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJub2RlcyIsImhpZGVFcnJvciIsInNldE5vZGVzIiwiZXJyb3IiLCJjbGVhck5vZGVzIiwic2hvd0Vycm9yIiwicHJvcGVydGllcyIsImNvbnRlbnRLZXlVcEhhbmRsZXIiLCJiaW5kIiwiZXhwcmVzc2lvbktleVVwSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFS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QWhCO0FBQUEsVUFBZ0M7QUFDMUJ5QixtQkFBYXJCLGlCQURuQixDQUhXLENBSTJCOztBQUV0QyxXQUFLa0MsVUFBTCxDQUFnQnRCLE9BQWhCOztBQUVBLFdBQUt1QixhQUFMLENBQW1CZCxVQUFuQjs7QUFFQSxXQUFLUyxtQkFBTCxHQVZXLENBVWtCOztBQUU3QixXQUFLRSxzQkFBTCxHQVpXLENBWXFCO0FBQ2pDOzs7bUNBRXFCSCxVLEVBQVk7QUFDaEMsVUFBTU8sT0FBT2pDLFFBQVFrQyxjQUFSLENBQXVCMUIsSUFBdkIsRUFBNkJrQixVQUE3QixDQUFiOztBQUVBTyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQWxGZ0JqQyxPOztBQXFGbkJvQyxPQUFPQyxNQUFQLENBQWM3QixJQUFkLEVBQW9CO0FBQ2xCOEIsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCbEMsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBOb2Rlc1RleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ub2RlcycpLFxuICAgICAgZXhhbXBsZUNvbnRlbnQgPSByZXF1aXJlKCcuLi9leGFtcGxlL2NvbnRlbnQnKSxcbiAgICAgIEV4cHJlc3Npb25JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvZXhwcmVzc2lvbicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBxdWVyeVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWVyeScpLFxuICAgICAgZXhhbXBsZUV4cHJlc3Npb24gPSByZXF1aXJlKCcuLi9leGFtcGxlL2V4cHJlc3Npb24nKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEZsb3JlbmNlUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjb250ZW50S2V5VXBIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBleHByZXNzaW9uS2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24pO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhck5vZGVzKCk7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY29udGVudEtleVVwSGFuZGxlciA9IHRoaXMuY29udGVudEtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGV4cHJlc3Npb25LZXlVcEhhbmRsZXIgPSB0aGlzLmV4cHJlc3Npb25LZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxFeHByZXNzaW9uSW5wdXQgb25LZXlVcD17ZXhwcmVzc2lvbktleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2NvbnRlbnRLZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGV4YW1wbGVDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhhbXBsZUV4cHJlc3Npb247IC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgdGhpcy5jb250ZW50S2V5VXBIYW5kbGVyKCk7ICAvLy9cblxuICAgIHRoaXMuZXhwcmVzc2lvbktleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19