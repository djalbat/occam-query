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
    key: 'contentKeyUpHandler',
    value: function contentKeyUpHandler() {
      var content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens),
          parseTree = node !== null ? node.asParseTree(tokens) : null;

      this.setParseTree(parseTree);
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this);

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
            'Maximum depth'
          ),
          React.createElement(MaximumDepthInput, { onKeyUp: keyUpHandler }),
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

      var content = '\n\nType NaturalNumber\n\nConstructor zero:NaturalNumber\n  \n',
          expression = '//constructorDeclaration/term//@unassigned',
          maximumDepth = 5;

      this.setContent(content);

      this.setExpression(expression);

      this.setMaximumDepth(maximumDepth);

      this.contentKeyUpHandler(); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsIk5vZGVzVGV4dGFyZWEiLCJxdWVyeVV0aWxpdGllcyIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWF4aW11bURlcHRoSW5wdXQiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkVsZW1lbnQiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJTaXplYWJsZUVsZW1lbnQiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiVmlldyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJleHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbiIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwiaGlkZUVycm9yIiwic2V0Tm9kZXMiLCJlcnJvciIsImNsZWFyTm9kZXMiLCJzaG93RXJyb3IiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJjb250ZW50S2V5VXBIYW5kbGVyIiwiYmluZCIsImtleVVwSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInNldE1heGltdW1EZXB0aCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FB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LGlCQUFELE9BSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEY7QUFRRSw4QkFBQyxhQUFEO0FBUkY7QUFoQkYsT0FGRjtBQStCRDs7O2lDQUVZO0FBQ1gsV0FBS0csYUFBTDs7QUFFQSxVQUFNdkIsMEVBQU47QUFBQSxVQU9NTSxhQUFhLDRDQVBuQjtBQUFBLFVBUU1FLGVBQWUsQ0FSckI7O0FBVUEsV0FBS2dCLFVBQUwsQ0FBZ0J4QixPQUFoQjs7QUFFQSxXQUFLeUIsYUFBTCxDQUFtQm5CLFVBQW5COztBQUVBLFdBQUtvQixlQUFMLENBQXFCbEIsWUFBckI7O0FBRUEsV0FBS1ksbUJBQUwsR0FuQlcsQ0FtQmtCOztBQUU3QixXQUFLRSxZQUFMLEdBckJXLENBcUJXO0FBQ3ZCOzs7bUNBRXFCSCxVLEVBQVk7QUFDaEMsVUFBTVEsT0FBT3BDLFFBQVFxQyxjQUFSLENBQXVCN0IsSUFBdkIsRUFBNkJvQixVQUE3QixDQUFiOztBQUVBUSxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQWxHZ0JwQyxPOztBQXFHbkJ1QyxPQUFPQyxNQUFQLENBQWNoQyxJQUFkLEVBQW9CO0FBQ2xCaUMsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCckMsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBOb2Rlc1RleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ub2RlcycpLFxuICAgICAgcXVlcnlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVlcnknKSxcbiAgICAgIEV4cHJlc3Npb25JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvZXhwcmVzc2lvbicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBNYXhpbXVtRGVwdGhJbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbWF4aW11bURlcHRoJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBGbG9yZW5jZVBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKCksXG4gICAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aCgpLFxuICAgICAgICAgICAgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbihub2RlLCBleHByZXNzaW9uLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhck5vZGVzKCk7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgY29udGVudEtleVVwSGFuZGxlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjb250ZW50S2V5VXBIYW5kbGVyID0gdGhpcy5jb250ZW50S2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxFeHByZXNzaW9uSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtjb250ZW50S2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTm9kZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxOb2Rlc1RleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG5cblR5cGUgTmF0dXJhbE51bWJlclxuXG5Db25zdHJ1Y3RvciB6ZXJvOk5hdHVyYWxOdW1iZXJcbiAgXG5gLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSAnLy9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm0vL0B1bmFzc2lnbmVkJyxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSA1O1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgdGhpcy5zZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuY29udGVudEtleVVwSGFuZGxlcigpOyAgLy8vXG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19