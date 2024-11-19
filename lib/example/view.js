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
var _index = require("../index");
var _withstyle = require("with-style");
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
            if (nodes !== null) {
                var contentParseTree = parseTree; ///
                _this.setNodes(nodes, tokens); ///
                _this.setContentParseTree(contentParseTree);
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
_define_property(View, "_initialExpressionString", "/*//@special[2...4]");
_define_property(View, "initialExpressionString", "/*");
_define_property(View, "initialMaximumDepth", 5);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBOb2Rlc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbm9kZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBFeHByZXNzaW9uU3RyaW5nSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9leHByZXNzaW9uU3RyaW5nXCI7XG5pbXBvcnQgQ29udGVudFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2NvbnRlbnRcIjtcbmltcG9ydCBFeHByZXNzaW9uUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvZXhwcmVzc2lvblwiO1xuXG5jb25zdCBjc3NMZXhlciA9IENTU0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jbGVhck5vZGVzKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29udGVudFBhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5jbGVhckV4cHJlc3Npb25QYXJzZVRyZWUoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuXG4gICAgaWYgKHBhcnNlVHJlZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLmdldEV4cHJlc3Npb25TdHJpbmcoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aCgpLFxuICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb25TdHJpbmcobm9kZSwgZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoKTtcblxuICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudFBhcnNlVHJlZSA9IHBhcnNlVHJlZTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMsIHRva2Vucyk7IC8vL1xuXG4gICAgICB0aGlzLnNldENvbnRlbnRQYXJzZVRyZWUoY29udGVudFBhcnNlVHJlZSk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RXhwcmVzc2lvblN0cmluZ0lucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uIHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uUGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50IHBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbEV4cHJlc3Npb25TdHJpbmcsIGluaXRpYWxNYXhpbXVtRGVwdGggfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAgLy8vXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gaW5pdGlhbE1heGltdW1EZXB0aCwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBpbml0aWFsRXhwcmVzc2lvblN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAudmlldyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIF9pbml0aWFsRXhwcmVzc2lvblN0cmluZyA9IFwiLyovL0BzcGVjaWFsWzIuLi40XVwiO1xuXG4gIHN0YXRpYyBpbml0aWFsRXhwcmVzc2lvblN0cmluZyA9IFwiLypcIjtcblxuICBzdGF0aWMgaW5pdGlhbE1heGltdW1EZXB0aCA9IDU7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiY3NzTGV4ZXIiLCJDU1NMZXhlciIsImZyb21Ob3RoaW5nIiwiY3NzUGFyc2VyIiwiQ1NTUGFyc2VyIiwicXVlcnlCeUV4cHJlc3Npb25TdHJpbmciLCJxdWVyeVV0aWxpdGllcyIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjbGVhck5vZGVzIiwiY2xlYXJDb250ZW50UGFyc2VUcmVlIiwiY2xlYXJFeHByZXNzaW9uUGFyc2VUcmVlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFicmlkZ2VkIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZ2V0RXhwcmVzc2lvblN0cmluZyIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwiY29udGVudFBhcnNlVHJlZSIsInNldE5vZGVzIiwic2V0Q29udGVudFBhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkV4cHJlc3Npb25TdHJpbmdJbnB1dCIsIm9uS2V5VXAiLCJNYXhpbXVtRGVwdGhJbnB1dCIsIkV4cHJlc3Npb25QYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJDb250ZW50UGFyc2VUcmVlVGV4dGFyZWEiLCJOb2Rlc1RleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb25TdHJpbmciLCJpbml0aWFsTWF4aW11bURlcHRoIiwic2V0Q29udGVudCIsInNldE1heGltdW1EZXB0aCIsInNldEV4cHJlc3Npb25TdHJpbmciLCJFbGVtZW50IiwiX2luaXRpYWxFeHByZXNzaW9uU3RyaW5nIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SUE7OztlQUFBOzs7b0VBdElzQjtvQkFFRTtxQkFDTzt5QkFDSzswQkFDZ0M7aUVBRTdDOytEQUNDOzREQUNFOzhEQUNFO21FQUNFO3VFQUNJOytEQUNHO2lFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU1BLFdBQVdDLG1CQUFRLENBQUNDLFdBQVcsSUFDL0JDLFlBQVlDLG9CQUFTLENBQUNGLFdBQVc7QUFFdkMsSUFBTSxBQUFFRywwQkFBNEJDLHFCQUFjLENBQTFDRDtBQUVSLElBQUEsQUFBTUUscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsa0JBQ0pDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQixNQUFLQyxVQUFVO1lBRWYsTUFBS0MscUJBQXFCO1lBRTFCLE1BQUtDLHdCQUF3QjtZQUU3QixJQUFNQyxVQUFVLE1BQUtDLFVBQVUsSUFDekJDLFNBQVNoQixTQUFTaUIsUUFBUSxDQUFDSCxVQUMzQkksT0FBT2YsVUFBVWdCLEtBQUssQ0FBQ0g7WUFFN0IsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQjtZQUNGO1lBRUEsSUFBTUUsV0FBVyxNQUNYQyxZQUFZSCxLQUFLSSxXQUFXLENBQUNOLFFBQVFJO1lBRTNDLElBQUlDLGNBQWMsTUFBTTtnQkFDdEI7WUFDRjtZQUVBLElBQU1FLG1CQUFtQixNQUFLQyxtQkFBbUIsSUFDM0NDLGVBQWUsTUFBS0MsZUFBZSxJQUNuQ0MsUUFBUXRCLHdCQUF3QmEsTUFBTUssa0JBQWtCRTtZQUU5RCxJQUFJRSxVQUFVLE1BQU07Z0JBQ2xCLElBQU1DLG1CQUFtQlAsV0FBVyxHQUFHO2dCQUV2QyxNQUFLUSxRQUFRLENBQUNGLE9BQU9YLFNBQVMsR0FBRztnQkFFakMsTUFBS2MsbUJBQW1CLENBQUNGO1lBQzNCO1FBQ0Y7OztrQkFsQ0lyQjs7WUFvQ0p3QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msc0JBQVUsc0JBQ1Qsb0JBQUNDLGlCQUFXLHNCQUNWLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQyw2QkFHWixvQkFBQ0MseUJBQXFCO3dCQUFDQyxTQUFTLElBQUksQ0FBQzdCLFlBQVk7c0NBQ2pELG9CQUFDMkIsbUJBQVUsUUFBQyxnQ0FHWixvQkFBQ0cscUJBQWlCO3dCQUFDRCxTQUFTLElBQUksQ0FBQzdCLFlBQVk7c0NBQzdDLG9CQUFDMkIsbUJBQVUsUUFBQyx3Q0FHWixvQkFBQ0ksbUJBQTJCLHlCQUdoQyxvQkFBQ0MsK0JBQW1CLHVCQUNwQixvQkFBQ0MscUJBQVMsc0JBQ1Isb0JBQUNQLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDTyxnQkFBZTt3QkFBQ0wsU0FBUyxJQUFJLENBQUM3QixZQUFZO3NDQUMzQyxvQkFBQzJCLG1CQUFVLFFBQUMscUNBR1osb0JBQUNRLGlCQUF3Qix1QkFDekIsb0JBQUNSLG1CQUFVLFFBQUMsd0JBR1osb0JBQUNTLGNBQWE7aUJBS3JCO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUF5RSxvQkFBQSxJQUFJLENBQUNDLFdBQVcsRUFBakZDLGlCQUFpRSxrQkFBakVBLGdCQUFnQkMsMEJBQWlELGtCQUFqREEseUJBQXlCQyxzQkFBd0Isa0JBQXhCQSxxQkFDM0NwQyxVQUFVa0MsZ0JBQ1Z2QixlQUFleUIscUJBQ2YzQixtQkFBbUIwQix5QkFBMEIsR0FBRztnQkFFdEQsSUFBSSxDQUFDRSxVQUFVLENBQUNyQztnQkFFaEIsSUFBSSxDQUFDc0MsZUFBZSxDQUFDM0I7Z0JBRXJCLElBQUksQ0FBQzRCLG1CQUFtQixDQUFDOUI7Z0JBRXpCLElBQUksQ0FBQ2YsWUFBWSxJQUFLLEdBQUc7WUFDM0I7OztXQTdGSUQ7cUJBQWErQyxhQUFPO0FBK0Z4QixpQkEvRkkvQyxNQStGR3lDLGtCQUFrQjtBQUt6QixpQkFwR0l6QyxNQW9HR2dELDRCQUEyQjtBQUVsQyxpQkF0R0loRCxNQXNHRzBDLDJCQUEwQjtBQUVqQyxpQkF4R0kxQyxNQXdHRzJDLHVCQUFzQjtBQUU3QixpQkExR0kzQyxNQTBHR2lELFdBQVU7QUFFakIsaUJBNUdJakQsTUE0R0drRCxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNwRCJ9