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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L21heGltdW1EZXB0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXhpbXVtRGVwdGhJbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICByZXR1cm4gbWF4aW11bURlcHRoO1xuICB9XG5cbiAgc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gbWF4aW11bURlcHRoOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRNYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1heGltdW1EZXB0aCA9IHRoaXMuc2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7IC8vLztcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoLFxuICAgICAgc2V0TWF4aW11bURlcHRoUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWF4aW11bS1kZXB0aFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1heGltdW1EZXB0aElucHV0IiwiZ2V0TWF4aW11bURlcHRoIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1heGltdW1EZXB0aCIsIk51bWJlciIsInNldE1heGltdW1EZXB0aCIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzZXRNYXhpbXVtRGVwdGhSZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWtCLElBQUEsTUFBVSw4Q0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUY1QjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSWUsSUFBQSxBQUFNQSxpQkFBaUIsaUJDSm5DLEFESVk7dUNBSmY7O2FBSXFCQSxpQkFBaUI7Z0RBSnRDOzs7OztZQUtFQyxHQUFlLG1CQUFBO1lFTGpCLE9GS0VBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDLEFBQUM7Z0JBRW5DLE9BQU9FLFlBQVksQ0FBQzthQUNyQjs7O1lBRURFLEdBQWUsbUJBQUE7WUVaakIsT0ZZRUEsU0FBQUEsZUFBZSxDQUFDRixZQUFZLEVBQUU7Z0JBQzVCLElBQU1GLEtBQUssR0FBR0UsWUFBWSxBQUFDLEVBQUMsR0FBRztnQkFFL0IsSUFBSSxDQUFDRyxRQUFRLENBQUNMLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFRE0sR0FBYSxpQkFBQTtZRWxCZixPRmtCRUEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1QLGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWUsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNqREgsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2pEQyx1QkFBdUIsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsSUFBSTtnQkFFakUsT0FBUTtvQkFDTlIsZUFBZSxFQUFmQSxlQUFlO29CQUNmSyxlQUFlLEVBQWZBLGVBQWU7b0JBQ2ZJLHVCQUF1QixFQUF2QkEsdUJBQXVCO2lCQUN4QixDQUFFO2FBQ0o7O01BNUJIOztDQWtDQyxDQTlCOENFLE1BQUssU0E4Qm5EO2tCQTlCb0JaLGlCQUFpQixBQUp0QztBQThCRSxnQkExQm1CQSxpQkFBaUIsdUJBMEJUO0lBQ3pCYSxTQUFTLEVBQUUsZUFBZTtJQUMxQkMsVUFBVSxFQUFFLE9BQU87Q0FDcEIsQ0FBQyxBQWpDSiJ9