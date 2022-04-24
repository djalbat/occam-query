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
_defineProperty(NodesTextarea, "defaultProperties", {
    className: "nodes",
    spellCheck: "false",
    readOnly: true
});
exports.default = NodesTextarea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zLCB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9XFxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyTm9kZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Tm9kZXMgPSB0aGlzLmdldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Tm9kZXMgPSB0aGlzLnNldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJOb2RlcyA9IHRoaXMuY2xlYXJOb2Rlcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXROb2RlcyxcbiAgICAgIHNldE5vZGVzLFxuICAgICAgY2xlYXJOb2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJub2Rlc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb2Rlc1RleHRhcmVhIiwiZ2V0Tm9kZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwibm9kZXMiLCJzZXROb2RlcyIsInRva2VucyIsInJlZHVjZSIsIm5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJ0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJ0b2tlbkluZGV4ZXMiLCJ0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwiRU1QVFlfU1RSSU5HIiwic2V0VmFsdWUiLCJjbGVhck5vZGVzIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVMLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7QUFDZ0QsSUFBQSxNQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSxhQUFhLGlCQ1AvQixBRE9ZOzs7YUFBTUEsYUFBYTs7Ozs7O1lBQ2hDQyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztn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