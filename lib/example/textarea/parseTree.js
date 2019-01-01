'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var ParseTreeTextarea = function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, (ParseTreeTextarea.__proto__ || Object.getPrototypeOf(ParseTreeTextarea)).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: 'setParseTree',
    value: function setParseTree(parseTree) {
      parseTree.shiftLine(); //

      var parseTreeString = parseTree.asString(),
          value = parseTreeString; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this);

      return {
        setParseTree: setParseTree
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ParseTreeTextarea, properties);
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0UGFyc2VUcmVlIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCQSxnQkFBVUMsU0FBVixHQURzQixDQUNFOztBQUV4QixVQUFNQyxrQkFBa0JGLFVBQVVHLFFBQVYsRUFBeEI7QUFBQSxVQUNJQyxRQUFRRixlQURaLENBSHNCLENBSVE7O0FBRTlCLFdBQUtHLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRSxlQUFlLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCOztBQUVBLGFBQVE7QUFDTkQ7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9WLGFBQWFXLGNBQWIsQ0FBNEJWLGlCQUE1QixFQUErQ1MsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQWxCMUVWLFk7O0FBcUJoQ1ksT0FBT0MsTUFBUCxDQUFjWixpQkFBZCxFQUFpQztBQUMvQmEsV0FBUyxVQURzQjtBQUUvQkMscUJBQW1CO0FBQ2pCQyxlQUFXLFlBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVU7QUFITztBQUZZLENBQWpDOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCbkIsaUJBQWpCIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRQYXJzZVRyZWUgPSB0aGlzLnNldFBhcnNlVHJlZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFyc2VUcmVlVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGFyc2VUcmVlVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdwYXJzZS10cmVlJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZVRleHRhcmVhO1xuIl19