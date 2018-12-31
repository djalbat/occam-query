'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var tokenUtilities = require('../../utilities/token');

var InputElement = easy.InputElement,
    tokenIndexFromTerminalNodeAndTokens = tokenUtilities.tokenIndexFromTerminalNodeAndTokens,
    tokenIndexesFromNonTerminalNodeAndTokens = tokenUtilities.tokenIndexesFromNonTerminalNodeAndTokens;

var NodesTextarea = function (_InputElement) {
  _inherits(NodesTextarea, _InputElement);

  function NodesTextarea() {
    _classCallCheck(this, NodesTextarea);

    return _possibleConstructorReturn(this, (NodesTextarea.__proto__ || Object.getPrototypeOf(NodesTextarea)).apply(this, arguments));
  }

  _createClass(NodesTextarea, [{
    key: 'setNodes',
    value: function setNodes(nodes, tokens) {
      ///
      var value = nodes.reduce(function (value, node) {
        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          significantToken = terminalNode.getSignificantToken(),
              significantTokenType = significantToken.getType(),
              tokenIndex = tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);

          value = value + '[' + significantTokenType + ']' + tokenIndex + '\n';
        } else {
          var nonTerminalNode = node,
              ///
          ruleName = nonTerminalNode.getRuleName(),
              tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);

          value = '' + value + ruleName + tokenIndexes + '\n';
        }

        return value;
      }, '');

      this.setValue(value);
    }
  }, {
    key: 'clearNodes',
    value: function clearNodes() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setNodes = this.setNodes.bind(this),
          clearNodes = this.clearNodes.bind(this);

      return {
        setNodes: setNodes,
        clearNodes: clearNodes
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(NodesTextarea, properties);
    }
  }]);

  return NodesTextarea;
}(InputElement);

Object.assign(NodesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'nodes',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = NodesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwidG9rZW5VdGlsaXRpZXMiLCJJbnB1dEVsZW1lbnQiLCJ0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJOb2Rlc1RleHRhcmVhIiwibm9kZXMiLCJ0b2tlbnMiLCJ2YWx1ZSIsInJlZHVjZSIsIm5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidG9rZW5JbmRleGVzIiwic2V0VmFsdWUiLCJzZXROb2RlcyIsImJpbmQiLCJjbGVhck5vZGVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsdUJBQVIsQ0FBdkI7O0FBRU0sSUFBRUUsWUFBRixHQUFtQkgsSUFBbkIsQ0FBRUcsWUFBRjtBQUFBLElBQ0VDLG1DQURGLEdBQ29GRixjQURwRixDQUNFRSxtQ0FERjtBQUFBLElBQ3VDQyx3Q0FEdkMsR0FDb0ZILGNBRHBGLENBQ3VDRyx3Q0FEdkM7O0lBR0FDLGE7Ozs7Ozs7Ozs7OzZCQUNLQyxLLEVBQU9DLE0sRUFBUTtBQUFFO0FBQ3hCLFVBQU1DLFFBQVFGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQjtBQUN6QyxZQUFNQyxtQkFBbUJELEtBQUtFLGNBQUwsRUFBekI7O0FBRUEsWUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsY0FBTUUsZUFBZUgsSUFBckI7QUFBQSxjQUE0QjtBQUN0QkksNkJBQW1CRCxhQUFhRSxtQkFBYixFQUR6QjtBQUFBLGNBRU1DLHVCQUF1QkYsaUJBQWlCRyxPQUFqQixFQUY3QjtBQUFBLGNBR01DLGFBQWFmLG9DQUFvQ1UsWUFBcEMsRUFBa0ROLE1BQWxELENBSG5COztBQUtBQyxrQkFBV0EsS0FBWCxTQUFvQlEsb0JBQXBCLFNBQTRDRSxVQUE1QztBQUNELFNBUEQsTUFPTztBQUNMLGNBQU1DLGtCQUFrQlQsSUFBeEI7QUFBQSxjQUE4QjtBQUN4QlUscUJBQVdELGdCQUFnQkUsV0FBaEIsRUFEakI7QUFBQSxjQUVNQyxlQUFlbEIseUNBQXlDZSxlQUF6QyxFQUEwRFosTUFBMUQsQ0FGckI7O0FBSUFDLHVCQUFXQSxLQUFYLEdBQW1CWSxRQUFuQixHQUE4QkUsWUFBOUI7QUFDRDs7QUFFRCxlQUFPZCxLQUFQO0FBQ0QsT0FuQk8sRUFtQkwsRUFuQkssQ0FBZDs7QUFxQkEsV0FBS2UsUUFBTCxDQUFjZixLQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1BLFFBQVEsRUFBZDs7QUFFQSxXQUFLZSxRQUFMLENBQWNmLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTWdCLFdBQVcsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUEsVUFDTUMsYUFBYSxLQUFLQSxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQURuQjs7QUFHQSxhQUFRO0FBQ05ELDBCQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPekIsYUFBYTBCLGNBQWIsQ0FBNEJ2QixhQUE1QixFQUEyQ3NCLFVBQTNDLENBQVA7QUFBZ0U7Ozs7RUExQzFFekIsWTs7QUE2QzVCMkIsT0FBT0MsTUFBUCxDQUFjekIsYUFBZCxFQUE2QjtBQUMzQjBCLFdBQVMsVUFEa0I7QUFFM0JDLHFCQUFtQjtBQUNqQkMsZUFBVyxPQURNO0FBRWpCQyxnQkFBWSxPQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGUSxDQUE3Qjs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQmhDLGFBQWpCIiwiZmlsZSI6Im5vZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90b2tlbicpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMsIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSA9IHRva2VuVXRpbGl0aWVzO1xuXG5jbGFzcyBOb2Rlc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZShmdW5jdGlvbih2YWx1ZSwgbm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5JbmRleCA9IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0ke3Rva2VuSW5kZXh9XFxuYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9XFxuYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sICcnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJOb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE5vZGVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9kZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ25vZGVzJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVzVGV4dGFyZWE7XG4iXX0=