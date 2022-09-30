"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodesTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
var _token = require("../utilities/token");
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
var NodesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(NodesTextarea, Textarea);
    var _super = _createSuper(NodesTextarea);
    function NodesTextarea() {
        _classCallCheck(this, NodesTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(NodesTextarea, [
        {
            key: "getNodes",
            value: function getNodes() {
                var value = this.getValue(), nodes = value; ///
                return nodes;
            }
        },
        {
            key: "setNodes",
            value: function setNodes(nodes, tokens) {
                var value = nodes.reduce(function(value, node) {
                    var nodeTerminalNode = node.isTerminalNode();
                    if (nodeTerminalNode) {
                        var terminalNode = node, significantToken = terminalNode.getSignificantToken(), significantTokenType = significantToken.getType(), tokenIndex = (0, _token.tokenIndexFromTerminalNodeAndTokens)(terminalNode, tokens);
                        value = "".concat(value, "[").concat(significantTokenType, "]").concat(tokenIndex, "\n");
                    } else {
                        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), tokenIndexes = (0, _token.tokenIndexesFromNonTerminalNodeAndTokens)(nonTerminalNode, tokens);
                        value = "".concat(value).concat(ruleName).concat(tokenIndexes, "\n");
                    }
                    return value;
                }, _constants.EMPTY_STRING);
                this.setValue(value);
            }
        },
        {
            key: "clearNodes",
            value: function clearNodes() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getNodes = this.getNodes.bind(this), setNodes = this.setNodes.bind(this), clearNodes = this.clearNodes.bind(this);
                return {
                    getNodes: getNodes,
                    setNodes: setNodes,
                    clearNodes: clearNodes
                };
            }
        }
    ]);
    return NodesTextarea;
}(_textarea.default);
_defineProperty(NodesTextarea, "defaultProperties", {
    className: "nodes",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zLCB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX0ke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfVxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhck5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE5vZGVzID0gdGhpcy5nZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Tm9kZXMsXG4gICAgICBzZXROb2RlcyxcbiAgICAgIGNsZWFyTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibm9kZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9kZXNUZXh0YXJlYSIsImdldE5vZGVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm5vZGVzIiwic2V0Tm9kZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4IiwidG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidG9rZW5JbmRleGVzIiwidG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIkVNUFRZX1NUUklORyIsInNldFZhbHVlIiwiY2xlYXJOb2RlcyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NkRBTEE7eUJBRVE7cUJBQ2lFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsUUFBUUYsT0FBTyxHQUFHO2dCQUV4QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNELEtBQUssRUFBRUUsTUFBTSxFQUFFO2dCQUN0QixJQUFNSixRQUFRRSxNQUFNRyxNQUFNLENBQUMsU0FBQ0wsT0FBT00sTUFBUztvQkFDMUMsSUFBTUMsbUJBQW1CRCxLQUFLRSxjQUFjO29CQUU1QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQU1FLGVBQWVILE1BQ2ZJLG1CQUFtQkQsYUFBYUUsbUJBQW1CLElBQ25EQyx1QkFBdUJGLGlCQUFpQkcsT0FBTyxJQUMvQ0MsYUFBYUMsSUFBQUEsMENBQW1DLEVBQUNOLGNBQWNMO3dCQUVyRUosUUFBUSxBQUFDLEdBQVdZLE9BQVRaLE9BQU0sS0FBMkJjLE9BQXhCRixzQkFBcUIsS0FBYyxPQUFYRSxZQUFXO29CQUN6RCxPQUFPO3dCQUNMLElBQU1FLGtCQUFrQlYsTUFDbEJXLFdBQVdELGdCQUFnQkUsV0FBVyxJQUN0Q0MsZUFBZUMsSUFBQUEsK0NBQXdDLEVBQUNKLGlCQUFpQlo7d0JBRS9FSixRQUFRLEFBQUMsR0FBVWlCLE9BQVJqQixPQUFtQm1CLE9BQVhGLFVBQXdCLE9BQWJFLGNBQWE7b0JBQzdDLENBQUM7b0JBRUQsT0FBT25CO2dCQUNULEdBQUdxQix1QkFBWTtnQkFFZixJQUFJLENBQUNDLFFBQVEsQ0FBQ3RCO1lBQ2hCOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQU12QixRQUFRcUIsdUJBQVk7Z0JBRTFCLElBQUksQ0FBQ0MsUUFBUSxDQUFDdEI7WUFDaEI7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNekIsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQzBCLElBQUksQ0FBQyxJQUFJLEdBQ2xDdEIsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLEdBQ2xDRixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRSxJQUFJLENBQUMsSUFBSTtnQkFFNUMsT0FBUTtvQkFDTjFCLFVBQUFBO29CQUNBSSxVQUFBQTtvQkFDQW9CLFlBQUFBO2dCQUNGO1lBQ0Y7OztXQWpEbUJ6QjtFQUFzQjRCLGlCQUFRO0FBbURqRCxnQkFuRG1CNUIsZUFtRFo2QixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxVQUFVLElBQUk7QUFDaEIifQ==