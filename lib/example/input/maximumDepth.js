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
var MaximumDepthInput = /*#__PURE__*/ function(Input) {
    _inherits(MaximumDepthInput, Input);
    var _super = _createSuper(MaximumDepthInput);
    function MaximumDepthInput() {
        _classCallCheck(this, MaximumDepthInput);
        return _super.apply(this, arguments);
    }
    _createClass(MaximumDepthInput, [
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
exports.default = MaximumDepthInput;
_defineProperty(MaximumDepthInput, "defaultProperties", {
    className: "maximum-depth",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L21heGltdW1EZXB0aC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF4aW11bURlcHRoSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgcmV0dXJuIG1heGltdW1EZXB0aDtcbiAgfVxuXG4gIHNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1heGltdW1EZXB0aDsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRNYXhpbXVtRGVwdGggPSB0aGlzLnNldE1heGltdW1EZXB0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1heGltdW1EZXB0aFJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE1heGltdW1EZXB0aCxcbiAgICAgIHNldE1heGltdW1EZXB0aCxcbiAgICAgIHNldE1heGltdW1EZXB0aFJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1heGltdW0tZGVwdGhcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiTWF4aW11bURlcHRoSW5wdXQiLCJnZXRNYXhpbXVtRGVwdGgiLCJ2YWx1ZSIsImdldFZhbHVlIiwibWF4aW11bURlcHRoIiwiTnVtYmVyIiwic2V0TWF4aW11bURlcHRoIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNldE1heGltdW1EZXB0aFJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJJbnB1dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVrQixJQUFBLE1BQVUsa0NBQVYsVUFBVSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBRjVCO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFJZSxJQUFBLEFBQU1BLGlCQUFpQixpQkNKbkMsQURJWTt1Q0FKZjs7YUFJcUJBLGlCQUFpQjtnREFKdEM7Ozs7O1lBS0VDLEdBQWUsRUFBZkEsaUJBQWU7WUVMakIsT0ZLRUEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLFlBQVksR0FBR0MsTUFBTSxDQUFDSCxLQUFLLENBQUMsQUFBQztnQkFFbkMsT0FBT0UsWUFBWSxDQUFDO2FBQ3JCOzs7WUFFREUsR0FBZSxFQUFmQSxpQkFBZTtZRVpqQixPRllFQSxTQUFBQSxlQUFlLENBQUNGLFlBQVksRUFBRTtnQkFDNUIsSUFBTUYsS0FBSyxHQUFHRSxZQUFZLEFBQUMsRUFBQyxHQUFHO2dCQUUvQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7YUFDdEI7OztZQUVETSxHQUFhLEVBQWJBLGVBQWE7WUVsQmYsT0ZrQkVBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNUCxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDakRILGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWUsQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNqREMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLElBQUk7Z0JBRWpFLE9BQVE7b0JBQ05SLGVBQWUsRUFBZkEsZUFBZTtvQkFDZkssZUFBZSxFQUFmQSxlQUFlO29CQUNmSSx1QkFBdUIsRUFBdkJBLHVCQUF1QjtpQkFDeEIsQ0FBRTthQUNKOztNQTVCSDs7Q0FrQ0MsQ0E5QjhDRSxNQUFLLFNBOEJuRDtrQkE5Qm9CWixpQkFBaUIsQUFKdEM7QUE4QkUsZ0JBMUJtQkEsaUJBQWlCLEVBMEI3QmEsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxlQUFlO0lBQzFCQyxVQUFVLEVBQUUsT0FBTztDQUNwQixDQUFDLEFBakNKIn0=