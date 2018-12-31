'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var NodesTextarea = function (_InputElement) {
  _inherits(NodesTextarea, _InputElement);

  function NodesTextarea() {
    _classCallCheck(this, NodesTextarea);

    return _possibleConstructorReturn(this, (NodesTextarea.__proto__ || Object.getPrototypeOf(NodesTextarea)).apply(this, arguments));
  }

  _createClass(NodesTextarea, [{
    key: 'setNodes',
    value: function setNodes(nodes) {
      var value = nodes.reduce(function (value, node) {
        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          significantToken = terminalNode.getSignificantToken(),
              significantTokenType = significantToken.getType();

          value = value + '[' + significantTokenType + ']\n';
        } else {
          var nonTerminalNode = node,
              ///
          ruleName = nonTerminalNode.getRuleName();

          value = '' + value + ruleName + '\n';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTm9kZXNUZXh0YXJlYSIsIm5vZGVzIiwidmFsdWUiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic2V0VmFsdWUiLCJzZXROb2RlcyIsImJpbmQiLCJjbGVhck5vZGVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQU1DLFFBQVFELE1BQU1FLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQjtBQUN6QyxZQUFNQyxtQkFBbUJELEtBQUtFLGNBQUwsRUFBekI7O0FBRUEsWUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsY0FBTUUsZUFBZUgsSUFBckI7QUFBQSxjQUE0QjtBQUN0QkksNkJBQW1CRCxhQUFhRSxtQkFBYixFQUR6QjtBQUFBLGNBRU1DLHVCQUF1QkYsaUJBQWlCRyxPQUFqQixFQUY3Qjs7QUFJQVQsa0JBQVdBLEtBQVgsU0FBb0JRLG9CQUFwQjtBQUNELFNBTkQsTUFNTztBQUNMLGNBQU1FLGtCQUFrQlIsSUFBeEI7QUFBQSxjQUE4QjtBQUN4QlMscUJBQVdELGdCQUFnQkUsV0FBaEIsRUFEakI7O0FBR0FaLHVCQUFXQSxLQUFYLEdBQW1CVyxRQUFuQjtBQUNEOztBQUVELGVBQU9YLEtBQVA7QUFDRCxPQWpCTyxFQWlCTCxFQWpCSyxDQUFkOztBQW1CQSxXQUFLYSxRQUFMLENBQWNiLEtBQWQ7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUEsUUFBUSxFQUFkOztBQUVBLFdBQUthLFFBQUwsQ0FBY2IsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNYyxXQUFXLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFqQjtBQUFBLFVBQ01DLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7O0FBR0EsYUFBUTtBQUNORCwwQkFETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT3BCLGFBQWFxQixjQUFiLENBQTRCcEIsYUFBNUIsRUFBMkNtQixVQUEzQyxDQUFQO0FBQWdFOzs7O0VBeEMxRXBCLFk7O0FBMkM1QnNCLE9BQU9DLE1BQVAsQ0FBY3RCLGFBQWQsRUFBNkI7QUFDM0J1QixXQUFTLFVBRGtCO0FBRTNCQyxxQkFBbUI7QUFDakJDLGVBQVcsT0FETTtBQUVqQkMsZ0JBQVksT0FGSztBQUdqQkMsY0FBVTtBQUhPO0FBRlEsQ0FBN0I7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUI3QixhQUFqQiIsImZpbGUiOiJub2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIE5vZGVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzZXROb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHZhbHVlID0gbm9kZXMucmVkdWNlKGZ1bmN0aW9uKHZhbHVlLCBub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XVxcbmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9XFxuYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sICcnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJOb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE5vZGVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9kZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ25vZGVzJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVzVGV4dGFyZWE7XG4iXX0=