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

var easy = require('easy');

var InputElement = easy.InputElement;

var ParseTreeTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  var _super = _createSuper(ParseTreeTextarea);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ParseTreeTextarea, [{
    key: "setParseTree",
    value: function setParseTree(parseTree) {
      var value;

      if (parseTree === null) {
        value = '';
      } else {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString();
        value = parseTreeString; ///
      }

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this);
      return {
        setParseTree: setParseTree
      };
    }
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwicGFyc2VUcmVlIiwidmFsdWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInNldFZhbHVlIiwic2V0UGFyc2VUcmVlIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxpQjs7Ozs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQUlDLEtBQUo7O0FBRUEsVUFBSUQsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCQyxRQUFBQSxLQUFLLEdBQUcsRUFBUjtBQUNELE9BRkQsTUFFTztBQUVMRCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsR0FGSyxDQUVtQjs7QUFFeEIsWUFBTUMsZUFBZSxHQUFHSCxTQUFTLENBQUNJLFFBQVYsRUFBeEI7QUFFQUgsUUFBQUEsS0FBSyxHQUFHRSxlQUFSLENBTkssQ0FNcUI7QUFDM0I7O0FBRUQsV0FBS0UsUUFBTCxDQUFjSixLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1LLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUVBLGFBQVE7QUFDTkQsUUFBQUEsWUFBWSxFQUFaQTtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1YsWUFBWSxDQUFDVyxjQUFiLENBQTRCVixpQkFBNUIsRUFBK0NTLFVBQS9DLENBQVA7QUFBb0U7Ozs7RUExQjFFVixZOztBQTZCaENZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWixpQkFBZCxFQUFpQztBQUMvQmEsRUFBQUEsT0FBTyxFQUFFLFVBRHNCO0FBRS9CQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLFlBRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRSxPQUZLO0FBR2pCQyxJQUFBQSxRQUFRLEVBQUU7QUFITztBQUZZLENBQWpDO0FBU0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLGlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChwYXJzZVRyZWUgPT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCk7XG5cbiAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJzZVRyZWVUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXJzZVRyZWVUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3BhcnNlLXRyZWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlVGV4dGFyZWE7XG4iXX0=