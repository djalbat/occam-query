"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionInput;
    }
});
var _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ExpressionInput = /*#__PURE__*/ function(Input) {
    _inherits(ExpressionInput, Input);
    var _super = _create_super(ExpressionInput);
    function ExpressionInput() {
        _class_call_check(this, ExpressionInput);
        return _super.apply(this, arguments);
    }
    _create_class(ExpressionInput, [
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
_define_property(ExpressionInput, "defaultProperties", {
    className: "expression",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvZXhwcmVzc2lvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByZXNzaW9uOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFeHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvbiA9IHRoaXMuc2V0RXhwcmVzc2lvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEV4cHJlc3Npb25SZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRFeHByZXNzaW9uLFxuICAgICAgc2V0RXhwcmVzc2lvbixcbiAgICAgIHNldEV4cHJlc3Npb25SZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHByZXNzaW9uXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkV4cHJlc3Npb25JbnB1dCIsImdldEV4cHJlc3Npb24iLCJ2YWx1ZSIsImdldFZhbHVlIiwiZXhwcmVzc2lvbiIsInNldEV4cHJlc3Npb24iLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwic2V0RXhwcmVzc2lvblJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJJbnB1dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NERBRkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsYUFBYUYsT0FBTyxHQUFHO2dCQUU3QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNELFVBQVUsRUFBRTtnQkFDeEIsSUFBTUYsUUFBUUUsWUFBWSxHQUFHO2dCQUU3QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7WUFDaEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1OLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDNUNILGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ0csSUFBSSxDQUFDLElBQUksR0FDNUNDLHdCQUF3QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO2dCQUUvRCxPQUFRO29CQUNOUCxlQUFBQTtvQkFDQUksZUFBQUE7b0JBQ0FJLHVCQUFBQTtnQkFDRjtZQUNGOzs7V0F4Qm1CVDtFQUF3QlcsY0FBSztBQTBCaEQsaUJBMUJtQlgsaUJBMEJaWSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=