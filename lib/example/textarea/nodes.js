"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
var _token = require("../../utilities/token");
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
                var value1 = nodes.reduce(function(value, node) {
                    var nodeTerminalNode = node.isTerminalNode();
                    if (nodeTerminalNode) {
                        var terminalNode = node, significantToken = terminalNode.getSignificantToken(), significantTokenType = significantToken.getType(), tokenIndex = (0, _token).tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);
                        value = "".concat(value, "[").concat(significantTokenType, "]").concat(tokenIndex, "\n");
                    } else {
                        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), tokenIndexes = (0, _token).tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
                        value = "".concat(value).concat(ruleName).concat(tokenIndexes, "\n");
                    }
                    return value;
                }, _constants.EMPTY_STRING);
                this.setValue(value1);
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
exports.default = NodesTextarea;
_defineProperty(NodesTextarea, "defaultProperties", {
    className: "nodes",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucywgdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rlc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXROb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBub2RlcyA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHNldE5vZGVzKG5vZGVzLCB0b2tlbnMpIHsgLy8vXG4gICAgY29uc3QgdmFsdWUgPSBub2Rlcy5yZWR1Y2UoKHZhbHVlLCBub2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0b2tlbkluZGV4ID0gdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpO1xuXG4gICAgICAgIHZhbHVlID0gYCR7dmFsdWV9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XSR7dG9rZW5JbmRleH1cXG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX0ke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfVxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhck5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE5vZGVzID0gdGhpcy5nZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Tm9kZXMsXG4gICAgICBzZXROb2RlcyxcbiAgICAgIGNsZWFyTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibm9kZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiTm9kZXNUZXh0YXJlYSIsImdldE5vZGVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm5vZGVzIiwic2V0Tm9kZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4IiwidG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidG9rZW5JbmRleGVzIiwidG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIkVNUFRZX1NUUklORyIsInNldFZhbHVlIiwiY2xlYXJOb2RlcyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVxQixJQUFBLFNBQWEsa0NBQWIsYUFBYSxFQUFBO0FBRUwsSUFBQSxVQUFpQixXQUFqQixpQkFBaUIsQ0FBQTtBQUNnRCxJQUFBLE1BQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBTHJIO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7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