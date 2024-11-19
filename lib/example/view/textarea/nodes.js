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
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../../constants");
var _token = require("../../utilities/token");
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
var NodesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(NodesTextarea, Textarea);
    function NodesTextarea() {
        _class_call_check(this, NodesTextarea);
        return _call_super(this, NodesTextarea, arguments);
    }
    _create_class(NodesTextarea, [
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
                var setNodes = this.setNodes.bind(this), clearNodes = this.clearNodes.bind(this);
                return {
                    setNodes: setNodes,
                    clearNodes: clearNodes
                };
            }
        }
    ]);
    return NodesTextarea;
}(_textarea.default);
_define_property(NodesTextarea, "defaultProperties", {
    className: "nodes",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMsIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2VuXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX0ke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfVxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhck5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5vZGVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTm9kZXNUZXh0YXJlYSIsInNldE5vZGVzIiwibm9kZXMiLCJ0b2tlbnMiLCJ2YWx1ZSIsInJlZHVjZSIsIm5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJ0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJ0b2tlbkluZGV4ZXMiLCJ0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwiRU1QVFlfU1RSSU5HIiwic2V0VmFsdWUiLCJjbGVhck5vZGVzIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMQTt5QkFFUTtxQkFDaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLEtBQUssRUFBRUMsTUFBTTtnQkFDcEIsSUFBTUMsUUFBUUYsTUFBTUcsTUFBTSxDQUFDLFNBQUNELE9BQU9FO29CQUNqQyxJQUFNQyxtQkFBbUJELEtBQUtFLGNBQWM7b0JBRTVDLElBQUlELGtCQUFrQjt3QkFDcEIsSUFBTUUsZUFBZUgsTUFDZkksbUJBQW1CRCxhQUFhRSxtQkFBbUIsSUFDbkRDLHVCQUF1QkYsaUJBQWlCRyxPQUFPLElBQy9DQyxhQUFhQyxJQUFBQSwwQ0FBbUMsRUFBQ04sY0FBY047d0JBRXJFQyxRQUFRLEFBQUMsR0FBV1EsT0FBVFIsT0FBTSxLQUEyQlUsT0FBeEJGLHNCQUFxQixLQUFjLE9BQVhFLFlBQVc7b0JBQ3pELE9BQU87d0JBQ0wsSUFBTUUsa0JBQWtCVixNQUNsQlcsV0FBV0QsZ0JBQWdCRSxXQUFXLElBQ3RDQyxlQUFlQyxJQUFBQSwrQ0FBd0MsRUFBQ0osaUJBQWlCYjt3QkFFL0VDLFFBQVEsQUFBQyxHQUFVYSxPQUFSYixPQUFtQmUsT0FBWEYsVUFBd0IsT0FBYkUsY0FBYTtvQkFDN0M7b0JBRUEsT0FBT2Y7Z0JBQ1QsR0FBR2lCLHVCQUFZO2dCQUVmLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7WUFDaEI7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1uQixRQUFRaUIsdUJBQVk7Z0JBRTFCLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7WUFDaEI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12QixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDd0IsSUFBSSxDQUFDLElBQUksR0FDbENGLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNFLElBQUksQ0FBQyxJQUFJO2dCQUU1QyxPQUFRO29CQUNOeEIsVUFBQUE7b0JBQ0FzQixZQUFBQTtnQkFDRjtZQUNGOzs7V0F4Q21CdkI7RUFBc0IwQixpQkFBUTtBQTBDakQsaUJBMUNtQjFCLGVBMENaMkIscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsVUFBVTtBQUNaIn0=