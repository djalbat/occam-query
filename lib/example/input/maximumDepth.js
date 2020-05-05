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

var MaximumDepthInput = /*#__PURE__*/function (_InputElement) {
  _inherits(MaximumDepthInput, _InputElement);

  var _super = _createSuper(MaximumDepthInput);

  function MaximumDepthInput() {
    _classCallCheck(this, MaximumDepthInput);

    return _super.apply(this, arguments);
  }

  _createClass(MaximumDepthInput, [{
    key: "getMaximumDepth",
    value: function getMaximumDepth() {
      var value = this.getValue(),
          maximumDepth = Number(value);
      return maximumDepth;
    }
  }, {
    key: "setMaximumDepth",
    value: function setMaximumDepth(maximumDepth) {
      var value = maximumDepth || 0; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getMaximumDepth = this.getMaximumDepth.bind(this),
          setMaximumDepth = this.setMaximumDepth.bind(this);
      return {
        getMaximumDepth: getMaximumDepth,
        setMaximumDepth: setMaximumDepth
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(MaximumDepthInput, properties);
    }
  }]);

  return MaximumDepthInput;
}(InputElement);

Object.assign(MaximumDepthInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'maximum-depth'
  }
});
module.exports = MaximumDepthInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heGltdW1EZXB0aC5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIk1heGltdW1EZXB0aElucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1heGltdW1EZXB0aCIsIk51bWJlciIsInNldFZhbHVlIiwiZ2V0TWF4aW11bURlcHRoIiwiYmluZCIsInNldE1heGltdW1EZXB0aCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxpQjs7Ozs7Ozs7Ozs7OztzQ0FDYztBQUNoQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNILEtBQUQsQ0FEM0I7QUFHQSxhQUFPRSxZQUFQO0FBQ0Q7OztvQ0FFZUEsWSxFQUFjO0FBQzVCLFVBQU1GLEtBQUssR0FBR0UsWUFBWSxJQUFJLENBQTlCLENBRDRCLENBQ007O0FBRWxDLFdBQUtFLFFBQUwsQ0FBY0osS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSyxlQUFlLEdBQUcsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBeEI7QUFBQSxVQUNNQyxlQUFlLEdBQUcsS0FBS0EsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEeEI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLGVBQWUsRUFBZkEsZUFETTtBQUVORSxRQUFBQSxlQUFlLEVBQWZBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPVixZQUFZLENBQUNXLGNBQWIsQ0FBNEJWLGlCQUE1QixFQUErQ1MsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQXhCMUVWLFk7O0FBMkJoQ1ksTUFBTSxDQUFDQyxNQUFQLENBQWNaLGlCQUFkLEVBQWlDO0FBQy9CYSxFQUFBQSxPQUFPLEVBQUUsT0FEc0I7QUFFL0JDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZZLENBQWpDO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLGlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIE1heGltdW1EZXB0aElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICByZXR1cm4gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gbWF4aW11bURlcHRoIHx8IDA7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRNYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1heGltdW1EZXB0aCA9IHRoaXMuc2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE1heGltdW1EZXB0aCxcbiAgICAgIHNldE1heGltdW1EZXB0aFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXhpbXVtRGVwdGhJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXhpbXVtRGVwdGhJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ21heGltdW0tZGVwdGgnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1heGltdW1EZXB0aElucHV0O1xuIl19