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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var NodesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(NodesTextarea, Textarea);
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
                var value = nodes.reduce(function(value, node) {
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
exports.default = NodesTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vZGVzLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiRU1QVFlfU1RSSU5HIiwidG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJ0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwiTm9kZXNUZXh0YXJlYSIsImdldE5vZGVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm5vZGVzIiwic2V0Tm9kZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJub2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInNldFZhbHVlIiwiY2xlYXJOb2RlcyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVMsR0FBYSxDQUFiLFNBQWE7QUFFTCxHQUFpQixDQUFqQixVQUFpQjtBQUNnRCxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRyxhQUFhLGlCQUFuQixRQUFRO2NBQUYsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNoQyxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLEtBQUssR0FBRyxJ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