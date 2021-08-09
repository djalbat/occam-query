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
var ExpressionInput = /*#__PURE__*/ function(Input) {
    _inherits(ExpressionInput, Input);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbklucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHZhbHVlID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEV4cHJlc3Npb24gPSB0aGlzLnNldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbixcbiAgICAgIHNldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwcmVzc2lvblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRU0sR0FBVSxDQUFWLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUCxlQUFlO2NBQWYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQUNsQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFDckIsVUFBVSxHQUFHLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXRCLFVBQVU7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN6QixHQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRXhCLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxhQUFhLFFBQVEsYUFBYSxDQUFDLElBQUksUUFDdkMsYUFBYSxRQUFRLGFBQWEsQ0FBQyxJQUFJLFFBQ3ZDLHFCQUFxQixRQUFRLFdBQVcsQ0FBQyxJQUFJLE9BQVEsQ0FBSSxBQUFKLEVBQUksQUFBSixFQUFJOztvQkFHN0QsYUFBYSxFQUFiLGFBQWE7b0JBQ2IsYUFBYSxFQUFiLGFBQWE7b0JBQ2IscUJBQXFCLEVBQXJCLHFCQUFxQjs7WUFFekIsQ0FBQzs7O1dBeEJrQixlQUFlO0VBRmxCLE1BQVU7Z0JBRVAsZUFBZSxHQTBCM0IsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxVQUFZO0lBQ3ZCLFVBQVUsR0FBRSxLQUFPOztrQkE1QkYsZUFBZSJ9