"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionStringInput;
    }
});
var _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ExpressionStringInput = /*#__PURE__*/ function(Input) {
    _inherits(ExpressionStringInput, Input);
    function ExpressionStringInput() {
        _class_call_check(this, ExpressionStringInput);
        return _call_super(this, ExpressionStringInput, arguments);
    }
    _create_class(ExpressionStringInput, [
        {
            key: "getExpressionString",
            value: function getExpressionString() {
                var value = this.getValue(), expression = value; ///
                return expression;
            }
        },
        {
            key: "setExpressionString",
            value: function setExpressionString(expressionString) {
                var value = expressionString; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getExpressionString = this.getExpressionString.bind(this), setExpressionString = this.setExpressionString.bind(this); ///;
                return {
                    getExpressionString: getExpressionString,
                    setExpressionString: setExpressionString
                };
            }
        }
    ]);
    return ExpressionStringInput;
}(_input.default);
_define_property(ExpressionStringInput, "defaultProperties", {
    className: "expression-string",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvZXhwcmVzc2lvblN0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uU3RyaW5nSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldEV4cHJlc3Npb25TdHJpbmcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5nZXRFeHByZXNzaW9uU3RyaW5nLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvblN0cmluZyA9IHRoaXMuc2V0RXhwcmVzc2lvblN0cmluZy5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEV4cHJlc3Npb25TdHJpbmcsXG4gICAgICBzZXRFeHByZXNzaW9uU3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb24tc3RyaW5nXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvblN0cmluZ0lucHV0IiwiZ2V0RXhwcmVzc2lvblN0cmluZyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJleHByZXNzaW9uIiwic2V0RXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmciLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiSW5wdXQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUFPLEdBQUc7Z0JBRTdCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxnQkFBZ0I7Z0JBQ2xDLElBQU1KLFFBQVFJLGtCQUFrQixHQUFHO2dCQUVuQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0w7WUFDaEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsc0JBQXNCLElBQUksQ0FBQ0EsbUJBQW1CLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQ3hESixzQkFBc0IsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO2dCQUVyRSxPQUFRO29CQUNOUixxQkFBQUE7b0JBQ0FJLHFCQUFBQTtnQkFDRjtZQUNGOzs7V0F0Qm1CTDtFQUE4QlUsY0FBSztBQXdCdEQsaUJBeEJtQlYsdUJBd0JaVyxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=