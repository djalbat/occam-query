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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ExpressionInput = /*#__PURE__*/ function(Input) {
    _inherits(ExpressionInput, Input);
    var _super = _createSuper(ExpressionInput);
    function ExpressionInput() {
        _classCallCheck(this, ExpressionInput);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbklucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHZhbHVlID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEV4cHJlc3Npb24gPSB0aGlzLnNldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RXhwcmVzc2lvbixcbiAgICAgIHNldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwcmVzc2lvblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFeHByZXNzaW9uSW5wdXQiLCJnZXRFeHByZXNzaW9uIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRFeHByZXNzaW9uIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNldEV4cHJlc3Npb25SZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFSyxJQUFBLE1BQVUsa0NBQVYsVUFBVSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsZUFBZSxpQkNKakMsQURJWTs7O2FBQU1BLGVBQWU7Ozs7OztZQUNsQ0MsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxVQUFVLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTdCLE9BQU9FLFVBQVUsQ0FBQzthQUNuQjs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxDQUFDRCxVQUFVLEVBQUU7Z0JBQ3hCLElBQU1GLEtBQUssR0FBR0UsVUFBVSxBQUFDLEVBQUMsR0FBRztnQkFFN0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTU4sYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzdDSCxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDN0NDLHFCQUFxQixHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxJQUFJO2dCQUUvRCxPQUFRO29CQUNOUCxhQUFhLEVBQWJBLGFBQWE7b0JBQ2JJLGFBQWEsRUFBYkEsYUFBYTtvQkFDYkkscUJBQXFCLEVBQXJCQSxxQkFBcUI7aUJBQ3RCLENBQUU7YUFDSjs7OztDQU1GLENBOUI0Q0UsTUFBSyxRQUFBLENBOEJqRDtBQUpDLGdCQTFCbUJYLGVBQWUsRUEwQjNCWSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFlBQVk7SUFDdkJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUM7a0JBN0JpQmQsZUFBZSJ9