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
    queryUtilities = require('../utilities/query'),
    ExpressionInput = require('./input/expression'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    exampleExpression = require('../example/expression'),
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
          parseTree = node !== null ? node.asParseTree(tokens) : null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJleGFtcGxlQ29udGVudCIsInF1ZXJ5VXRpbGl0aWVzIiwiRXhwcmVzc2lvbklucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJleGFtcGxlRXhwcmVzc2lvbiIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxlbWVudCIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIlNpemVhYmxlRWxlbWVudCIsInF1ZXJ5QnlFeHByZXNzaW9uIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJub2RlcyIsImhpZGVFcnJvciIsInNldE5vZGVzIiwiZXJyb3IiLCJjbGVhck5vZGVzIiwic2hvd0Vycm9yIiwicHJvcGVydGllcyIsImNvbnRlbnRLZXlVcEhhbmRsZXIiLCJiaW5kIiwiZXhwcmVzc2lvbktleVVwSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFS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QUFMOztBQUVBLFVBQU1yQixVQUFVaEIsY0FBaEI7QUFBQSxVQUFnQztBQUMxQnlCLG1CQUFhcEIsaUJBRG5CLENBSFcsQ0FJMkI7O0FBRXRDLFdBQUtpQyxVQUFMLENBQWdCdEIsT0FBaEI7O0FBRUEsV0FBS3VCLGFBQUwsQ0FBbUJkLFVBQW5COztBQUVBLFdBQUtTLG1CQUFMLEdBVlcsQ0FVa0I7O0FBRTdCLFdBQUtFLHNCQUFMLEdBWlcsQ0FZcUI7QUFDakM7OzttQ0FFcUJILFUsRUFBWTtBQUNoQyxVQUFNTyxPQUFPakMsUUFBUWtDLGNBQVIsQ0FBdUIxQixJQUF2QixFQUE2QmtCLFVBQTdCLENBQWI7O0FBRUFPLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBcEZnQmpDLE87O0FBdUZuQm9DLE9BQU9DLE1BQVAsQ0FBYzdCLElBQWQsRUFBb0I7QUFDbEI4QixXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJsQyxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IE5vZGVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL25vZGVzJyksXG4gICAgICBleGFtcGxlQ29udGVudCA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvY29udGVudCcpLFxuICAgICAgcXVlcnlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVlcnknKSxcbiAgICAgIEV4cHJlc3Npb25JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvZXhwcmVzc2lvbicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBleGFtcGxlRXhwcmVzc2lvbiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvZXhwcmVzc2lvbicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgRmxvcmVuY2VQYXJzZXIgfSA9IHBhcnNlcnMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnRlbnRLZXlVcEhhbmRsZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gKG5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgZXhwcmVzc2lvbktleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgICAgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbihub2RlLCBleHByZXNzaW9uKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuXG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGNvbnRlbnRLZXlVcEhhbmRsZXIgPSB0aGlzLmNvbnRlbnRLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBleHByZXNzaW9uS2V5VXBIYW5kbGVyID0gdGhpcy5leHByZXNzaW9uS2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e2V4cHJlc3Npb25LZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtjb250ZW50S2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTm9kZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxOb2Rlc1RleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBleGFtcGxlQ29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4YW1wbGVFeHByZXNzaW9uOyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgIHRoaXMuY29udGVudEtleVVwSGFuZGxlcigpOyAgLy8vXG5cbiAgICB0aGlzLmV4cHJlc3Npb25LZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==