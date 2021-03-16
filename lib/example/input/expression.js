"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _input = _interopRequireDefault(require("../input"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ExpressionInput = function(Input) {
    _inherits(ExpressionInput, _input.default);
    function ExpressionInput() {
        _classCallCheck(this, ExpressionInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(ExpressionInput).apply(this, arguments));
    }
    _createClass(ExpressionInput, [
        {
            key: "getExpression",
            value: function getExpression() {
                var value = this.getValue(), expression = value; ///
                return expression;
            }
        },
        {
            key: "setExpression",
            value: function setExpression(expression) {
                var value = expression; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getExpression = this.getExpression.bind(this), setExpression = this.setExpression.bind(this), setExpressionReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getExpression: getExpression,
                    setExpression: setExpression,
                    setExpressionReadOnly: setExpressionReadOnly
                };
            }
        }
    ]);
    return ExpressionInput;
}(_input.default);
_defineProperty(ExpressionInput, "defaultProperties", {
    className: "expression",
    spellCheck: "false"
});
exports.default = ExpressionInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbklucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHZhbHVlID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEV4cHJlc3Npb24gPSB0aGlzLnNldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbixcbiAgICAgIHNldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwcmVzc2lvblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGVBQUEsWUFBQSxLQUFBO2NBQUEsZUFBQSxFQUZBLE1BQUE7YUFFQSxlQUFBOzhCQUFBLGVBQUE7Z0VBQUEsZUFBQTs7aUJBQUEsZUFBQTs7QUFDQSxlQUFBLEdBQUEsYUFBQTs0QkFBQSxhQUFBO29CQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0EsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxVQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQSxDQUFBLFVBQUE7b0JBQ0EsS0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxRQUFBLENBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7b0JBQ0EsYUFBQSxRQUFBLGFBQUEsQ0FBQSxJQUFBLFFBQ0EsYUFBQSxRQUFBLGFBQUEsQ0FBQSxJQUFBLFFBQ0EscUJBQUEsUUFBQSxXQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsRUFBQSxFQUFBOztBQUdBLGlDQUFBLEVBQUEsYUFBQTtBQUNBLGlDQUFBLEVBQUEsYUFBQTtBQUNBLHlDQUFBLEVBQUEscUJBQUE7Ozs7O1dBdEJBLGVBQUE7RUFGQSxNQUFBO2dCQUVBLGVBQUEsR0EwQkEsaUJBQUE7QUFDQSxhQUFBLEdBQUEsVUFBQTtBQUNBLGNBQUEsR0FBQSxLQUFBOztrQkE1QkEsZUFBQSJ9