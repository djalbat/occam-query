"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var NodesTextarea = function(Textarea) {
    _inherits(NodesTextarea, _textarea.default);
    function NodesTextarea() {
        _classCallCheck(this, NodesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(NodesTextarea).apply(this, arguments));
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
                var value = nodes.reduce(function(value1, node) {
                    var nodeTerminalNode = node.isTerminalNode();
                    if (nodeTerminalNode) {
                        var terminalNode = node, significantToken = terminalNode.getSignificantToken(), significantTokenType = significantToken.getType(), tokenIndex = _token.tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);
                        value1 = "".concat(value1, "[").concat(significantTokenType, "]").concat(tokenIndex, "\n");
                    } else {
                        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), tokenIndexes = _token.tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
                        value1 = "".concat(value1).concat(ruleName).concat(tokenIndexes, "\n");
                    }
                    return value1;
                }, '');
                this.setValue(value);
            }
        },
        {
            key: "clearNodes",
            value: function clearNodes() {
                var value = "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IHRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zLCB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfSR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9XFxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sICcnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJOb2RlcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Tm9kZXMgPSB0aGlzLmdldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Tm9kZXMgPSB0aGlzLnNldE5vZGVzLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJOb2RlcyA9IHRoaXMuY2xlYXJOb2Rlcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXROb2RlcyxcbiAgICAgIHNldE5vZGVzLFxuICAgICAgY2xlYXJOb2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJub2Rlc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTtJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxhQUFBLFlBQUEsUUFBQTtjQUFBLGFBQUEsRUFKQSxTQUFBO2FBSUEsYUFBQTs4QkFBQSxhQUFBO2dFQUFBLGFBQUE7O2lCQUFBLGFBQUE7O0FBQ0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxLQUFBLFFBQUEsUUFBQSxJQUNBLEtBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxRQUFBOzRCQUFBLFFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtvQkFDQSxLQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsVUFBQSxNQUFBLEVBQUEsSUFBQTt3QkFDQSxnQkFBQSxHQUFBLElBQUEsQ0FBQSxjQUFBO3dCQUVBLGdCQUFBOzRCQUNBLFlBQUEsR0FBQSxJQUFBLEVBQ0EsZ0JBQUEsR0FBQSxZQUFBLENBQUEsbUJBQUEsSUFDQSxvQkFBQSxHQUFBLGdCQUFBLENBQUEsT0FBQSxJQUNBLFVBQUEsR0FsQkEsTUFBQSxxQ0FrQkEsWUFBQSxFQUFBLE1BQUE7QUFFQSw4QkFBQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7OzRCQUVBLGVBQUEsR0FBQSxJQUFBLEVBQ0EsUUFBQSxHQUFBLGVBQUEsQ0FBQSxXQUFBLElBQ0EsWUFBQSxHQXhCQSxNQUFBLDBDQXdCQSxlQUFBLEVBQUEsTUFBQTtBQUVBLDhCQUFBLE1BQUEsTUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxZQUFBLEdBQUEsRUFBQTs7MkJBR0EsTUFBQTs7cUJBR0EsUUFBQSxDQUFBLEtBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO29CQUNBLEtBQUE7cUJBRUEsUUFBQSxDQUFBLEtBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsYUFBQTs0QkFBQSxhQUFBO29CQUNBLFFBQUEsUUFBQSxRQUFBLENBQUEsSUFBQSxRQUNBLFFBQUEsUUFBQSxRQUFBLENBQUEsSUFBQSxRQUNBLFVBQUEsUUFBQSxVQUFBLENBQUEsSUFBQTs7QUFHQSw0QkFBQSxFQUFBLFFBQUE7QUFDQSw0QkFBQSxFQUFBLFFBQUE7QUFDQSw4QkFBQSxFQUFBLFVBQUE7Ozs7O1dBL0NBLGFBQUE7RUFKQSxTQUFBO2dCQUlBLGFBQUEsR0FtREEsaUJBQUE7QUFDQSxhQUFBLEdBQUEsS0FBQTtBQUNBLGNBQUEsR0FBQSxLQUFBO0FBQ0EsWUFBQSxFQUFBLElBQUE7O2tCQXREQSxhQUFBIn0=