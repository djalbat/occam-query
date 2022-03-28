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
exports.default = ExpressionInput;
_defineProperty(ExpressionInput, "defaultProperties", {
    className: "expression",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2V4cHJlc3Npb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25JbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV4cHJlc3Npb247IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFeHByZXNzaW9uID0gdGhpcy5zZXRFeHByZXNzaW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEV4cHJlc3Npb24sXG4gICAgICBzZXRFeHByZXNzaW9uLFxuICAgICAgc2V0RXhwcmVzc2lvblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb25cIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbklucHV0IiwiZ2V0RXhwcmVzc2lvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJleHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzZXRFeHByZXNzaW9uUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsIklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWtCLElBQUEsTUFBVSxrQ0FBVixVQUFVLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFGNUI7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQUllLElBQUEsQUFBTUEsZUFBZSxpQkNKakMsQURJWTtxQ0FKZjs7YUFJcUJBLGVBQWU7OENBSnBDOzs7OztZQUtFQyxHQUFhLEVBQWJBLGVBQWE7WUVMZixPRktFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxVQUFVLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTdCLE9BQU9FLFVBQVUsQ0FBQzthQUNuQjs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTtZRVpmLE9GWUVBLFNBQUFBLGFBQWEsQ0FBQ0QsVUFBVSxFQUFFO2dCQUN4QixJQUFNRixLQUFLLEdBQUdFLFVBQVUsQUFBQyxFQUFDLEdBQUc7Z0JBRTdCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBQzthQUN0Qjs7O1lBRURLLEdBQWEsRUFBYkEsZUFBYTtZRWxCZixPRmtCRUEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1OLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM3Q0gsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzdDQyxxQkFBcUIsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsSUFBSTtnQkFFL0QsT0FBUTtvQkFDTlAsYUFBYSxFQUFiQSxhQUFhO29CQUNiSSxhQUFhLEVBQWJBLGFBQWE7b0JBQ2JJLHFCQUFxQixFQUFyQkEscUJBQXFCO2lCQUN0QixDQUFFO2FBQ0o7O01BNUJIOztDQWtDQyxDQTlCNENFLE1BQUssU0E4QmpEO2tCQTlCb0JYLGVBQWUsQUFKcEM7QUE4QkUsZ0JBMUJtQkEsZUFBZSxFQTBCM0JZLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsVUFBVSxFQUFFLE9BQU87Q0FDcEIsQ0FBQyxBQWpDSiJ9