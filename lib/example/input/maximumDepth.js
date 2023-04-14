"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MaximumDepthInput;
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
var MaximumDepthInput = /*#__PURE__*/ function(Input) {
    _inherits(MaximumDepthInput, Input);
    var _super = _create_super(MaximumDepthInput);
    function MaximumDepthInput() {
        _class_call_check(this, MaximumDepthInput);
        return _super.apply(this, arguments);
    }
    _create_class(MaximumDepthInput, [
        {
            key: "getMaximumDepth",
            value: function getMaximumDepth() {
                var value = this.getValue(), maximumDepth = Number(value);
                return maximumDepth;
            }
        },
        {
            key: "setMaximumDepth",
            value: function setMaximumDepth(maximumDepth) {
                var value = maximumDepth; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getMaximumDepth = this.getMaximumDepth.bind(this), setMaximumDepth = this.setMaximumDepth.bind(this), setMaximumDepthReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getMaximumDepth: getMaximumDepth,
                    setMaximumDepth: setMaximumDepth,
                    setMaximumDepthReadOnly: setMaximumDepthReadOnly
                };
            }
        }
    ]);
    return MaximumDepthInput;
}(_input.default);
_define_property(MaximumDepthInput, "defaultProperties", {
    className: "maximum-depth",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L21heGltdW1EZXB0aC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXhpbXVtRGVwdGhJbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICByZXR1cm4gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gbWF4aW11bURlcHRoOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRNYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1heGltdW1EZXB0aCA9IHRoaXMuc2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWF4aW11bS1kZXB0aFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNYXhpbXVtRGVwdGhJbnB1dCIsImdldE1heGltdW1EZXB0aCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXhpbXVtRGVwdGgiLCJOdW1iZXIiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwic2V0TWF4aW11bURlcHRoUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsIklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsZUFBZUMsT0FBT0g7Z0JBRTVCLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCRixZQUFZLEVBQUU7Z0JBQzVCLElBQU1GLFFBQVFFLGNBQWMsR0FBRztnQkFFL0IsSUFBSSxDQUFDRyxRQUFRLENBQUNMO1lBQ2hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNUCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQ2hESCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNHLElBQUksQ0FBQyxJQUFJLEdBQ2hEQywwQkFBMEIsSUFBSSxDQUFDQyxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtnQkFFakUsT0FBUTtvQkFDTlIsaUJBQUFBO29CQUNBSyxpQkFBQUE7b0JBQ0FJLHlCQUFBQTtnQkFDRjtZQUNGOzs7V0F4Qm1CVjtFQUEwQlksY0FBSztBQTBCbEQsaUJBMUJtQlosbUJBMEJaYSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=