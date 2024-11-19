"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _withstyle = require("with-style");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("./view/textarea/nodes"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _maximumDepth = /*#__PURE__*/ _interop_require_default(require("./view/input/maximumDepth"));
var _expressionString = /*#__PURE__*/ _interop_require_default(require("./view/input/expressionString"));
var _content1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/content"));
var _expression = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/expression"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var cssLexer = _withstyle.CSSLexer.fromNothing(), cssParser = _withstyle.CSSParser.fromNothing();
var queryByExpressionString = _index.queryUtilities.queryByExpressionString;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            _this.clearNodes();
            _this.clearContentParseTree();
            _this.clearExpressionParseTree();
            var content = _this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
            if (node === null) {
                return;
            }
            var abridged = true, parseTree = node.asParseTree(tokens, abridged);
            if (parseTree === null) {
                return;
            }
            var expressionString = _this.getExpressionString(), maximumDepth = _this.getMaximumDepth(), nodes = queryByExpressionString(node, expressionString, maximumDepth);
            _this.setNodes(nodes, tokens); ///
            var contentParseTree = parseTree; ///
            _this.setContentParseTree(contentParseTree);
            {
                var expressionString1 = _this.getExpressionString(), expression = _index.Expression.fromExpressionString(expressionString1), tokens1 = expression.getTokens(), node1 = expression.getNode();
                if (node1 === null) {
                    return;
                }
                var abridged1 = true, parseTree1 = node1.asParseTree(tokens1, abridged1), expressionParseTree = parseTree1; ///
                _this.setExpressionParseTree(expressionParseTree);
            }
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expressionString.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression parse tree"), /*#__PURE__*/ React.createElement(_expression.default, null))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content parse tree"), /*#__PURE__*/ React.createElement(_content1.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialExpressionString = _this_constructor.initialExpressionString, initialMaximumDepth = _this_constructor.initialMaximumDepth, content = initialContent, maximumDepth = initialMaximumDepth, expressionString = initialExpressionString; ///
                this.setContent(content);
                this.setMaximumDepth(maximumDepth);
                this.setExpressionString(expressionString);
                this.keyUpHandler(); ///
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", ".view {\n  background: red;\n}\n");
_define_property(View, "initialExpressionString", "/*//@special[2...4]");
_define_property(View, "initialMaximumDepth", 5);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgUXVlcnksIEV4cHJlc3Npb24gfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL25vZGVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IE1heGltdW1EZXB0aElucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvbWF4aW11bURlcHRoXCI7XG5pbXBvcnQgRXhwcmVzc2lvblN0cmluZ0lucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvZXhwcmVzc2lvblN0cmluZ1wiO1xuaW1wb3J0IENvbnRlbnRQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9jb250ZW50XCI7XG5pbXBvcnQgRXhwcmVzc2lvblBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2V4cHJlc3Npb25cIjtcblxuY29uc3QgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb25TdHJpbmcgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuXG4gICAgdGhpcy5jbGVhckNvbnRlbnRQYXJzZVRyZWUoKTtcblxuICAgIHRoaXMuY2xlYXJFeHByZXNzaW9uUGFyc2VUcmVlKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhYnJpZGdlZCA9IHRydWUsXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcblxuICAgIGlmIChwYXJzZVRyZWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gdGhpcy5nZXRFeHByZXNzaW9uU3RyaW5nKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uU3RyaW5nKG5vZGUsIGV4cHJlc3Npb25TdHJpbmcsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnRQYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50UGFyc2VUcmVlKGNvbnRlbnRQYXJzZVRyZWUpO1xuXG4gICAge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IHRoaXMuZ2V0RXhwcmVzc2lvblN0cmluZygpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgICAgICB0b2tlbnMgPSBleHByZXNzaW9uLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgICBleHByZXNzaW9uUGFyc2VUcmVlID0gcGFyc2VUcmVlOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RXhwcmVzc2lvblBhcnNlVHJlZShleHByZXNzaW9uUGFyc2VUcmVlKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uU3RyaW5nSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTWF4aW11bSBkZXB0aFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEV4cHJlc3Npb24gcGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25QYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnQgcGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsRXhwcmVzc2lvblN0cmluZywgaW5pdGlhbE1heGltdW1EZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBpbml0aWFsTWF4aW11bURlcHRoLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGluaXRpYWxFeHByZXNzaW9uU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYC52aWV3IHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuYDtcblxuICBzdGF0aWMgaW5pdGlhbEV4cHJlc3Npb25TdHJpbmcgPSBcIi8qLy9Ac3BlY2lhbFsyLi4uNF1cIjtcblxuICBzdGF0aWMgaW5pdGlhbE1heGltdW1EZXB0aCA9IDU7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tTm90aGluZyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsInF1ZXJ5QnlFeHByZXNzaW9uU3RyaW5nIiwicXVlcnlVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2xlYXJOb2RlcyIsImNsZWFyQ29udGVudFBhcnNlVHJlZSIsImNsZWFyRXhwcmVzc2lvblBhcnNlVHJlZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhYnJpZGdlZCIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvblN0cmluZyIsImdldEV4cHJlc3Npb25TdHJpbmciLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJub2RlcyIsInNldE5vZGVzIiwiY29udGVudFBhcnNlVHJlZSIsInNldENvbnRlbnRQYXJzZVRyZWUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImV4cHJlc3Npb25QYXJzZVRyZWUiLCJzZXRFeHByZXNzaW9uUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiRXhwcmVzc2lvblN0cmluZ0lucHV0Iiwib25LZXlVcCIsIk1heGltdW1EZXB0aElucHV0IiwiRXhwcmVzc2lvblBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIkNvbnRlbnRQYXJzZVRyZWVUZXh0YXJlYSIsIk5vZGVzVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsRXhwcmVzc2lvblN0cmluZyIsImluaXRpYWxNYXhpbXVtRGVwdGgiLCJzZXRDb250ZW50Iiwic2V0TWF4aW11bURlcHRoIiwic2V0RXhwcmVzc2lvblN0cmluZyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFKQTs7O2VBQUE7OztvRUFuSnNCO29CQUVFO3lCQUNZO3FCQUNjOzBCQUNrQjtpRUFFN0M7K0RBQ0M7NERBQ0U7OERBQ0U7bUVBQ0U7dUVB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