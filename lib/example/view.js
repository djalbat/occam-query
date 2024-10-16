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
var _expression = /*#__PURE__*/ _interop_require_default(require("./view/input/expression"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _maximumDepth = /*#__PURE__*/ _interop_require_default(require("./view/input/maximumDepth"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
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
var queryByExpression = _index.queryUtilities.queryByExpression;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            try {
                var content = _this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens), abridged = true, parseTree = node.asParseTree(tokens, abridged), expression = _this.getExpression(), maximumDepth = _this.getMaximumDepth(), nodes = queryByExpression(node, expression, maximumDepth);
                _this.setNodes(nodes, tokens); ///
                _this.setParseTree(parseTree);
            } catch (error) {
                console.log(error);
                _this.clearNodes();
            }
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expression.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialExpression = _this_constructor.initialExpression, initialMaximumDepth = _this_constructor.initialMaximumDepth, content = initialContent, expression = initialExpression, maximumDepth = initialMaximumDepth; ///
                this.setContent(content);
                this.setExpression(expression);
                this.setMaximumDepth(maximumDepth);
                this.keyUpHandler(); ///
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", ".view {\n  background: red;\n}\n");
_define_property(View, "initialExpression", "//@special[2...4]");
_define_property(View, "initialMaximumDepth", 5);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBOb2Rlc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbm9kZXNcIjtcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9leHByZXNzaW9uXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IE1heGltdW1EZXB0aElucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvbWF4aW11bURlcHRoXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY29uc3QgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIGFicmlkZ2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5nZXRFeHByZXNzaW9uKCksXG4gICAgICAgICAgICBtYXhpbXVtRGVwdGggPSB0aGlzLmdldE1heGltdW1EZXB0aCgpLFxuICAgICAgICAgICAgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbihub2RlLCBleHByZXNzaW9uLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyTm9kZXMoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTWF4aW11bSBkZXB0aFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsRXhwcmVzc2lvbiwgaW5pdGlhbE1heGltdW1EZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb24sICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBpbml0aWFsTWF4aW11bURlcHRoOyAgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICB0aGlzLnNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYC52aWV3IHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuYDtcblxuICBzdGF0aWMgaW5pdGlhbEV4cHJlc3Npb24gPSBcIi8vQHNwZWNpYWxbMi4uLjRdXCI7XG5cbiAgc3RhdGljIGluaXRpYWxNYXhpbXVtRGVwdGggPSA1O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbU5vdGhpbmciLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsInF1ZXJ5VXRpbGl0aWVzIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhYnJpZGdlZCIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJub2RlcyIsInNldE5vZGVzIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJOb2RlcyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkV4cHJlc3Npb25JbnB1dCIsIm9uS2V5VXAiLCJNYXhpbXVtRGVwdGhJbnB1dCIsIk5vZGVzVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsRXhwcmVzc2lvbiIsImluaXRpYWxNYXhpbXVtRGVwdGgiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInNldE1heGltdW1EZXB0aCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1IQTs7O2VBQUE7OztvRUFqSHNCO29CQUVFO3FCQUNPO3lCQUNLOzBCQUNnQztpRUFFN0M7K0RBQ0M7NERBQ0U7aUVBQ0U7OERBQ0E7bUVBQ0U7Z0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsb0JBQVMsQ0FBQ0YsV0FBVztBQUV2QyxJQUFNLEFBQUVHLG9CQUFzQkMscUJBQWMsQ0FBcENEO0FBRVIsSUFBQSxBQUFNRSxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2tDQUFBQSxrQkFDSkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQUk7Z0JBQ0YsSUFBTUMsVUFBVSxNQUFLQyxVQUFVLElBQ3pCQyxTQUFTYixTQUFTYyxRQUFRLENBQUNILFVBQzNCSSxPQUFPWixVQUFVYSxLQUFLLENBQUNILFNBQ3ZCSSxXQUFXLE1BQ1hDLFlBQVlILEtBQUtJLFdBQVcsQ0FBQ04sUUFBUUksV0FDckNHLGFBQWEsTUFBS0MsYUFBYSxJQUMvQkMsZUFBZSxNQUFLQyxlQUFlLElBQ25DQyxRQUFRbkIsa0JBQWtCVSxNQUFNSyxZQUFZRTtnQkFFbEQsTUFBS0csUUFBUSxDQUFDRCxPQUFPWCxTQUFTLEdBQUc7Z0JBRWpDLE1BQUthLFlBQVksQ0FBQ1I7WUFDcEIsRUFBRSxPQUFPUyxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO2dCQUVaLE1BQUtHLFVBQVU7WUFDakI7UUFDRjs7O2tCQXBCSXZCOztZQXNCSndCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsaUJBQVcsc0JBQ1Ysb0JBQUNDLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDZCQUdaLG9CQUFDQyxtQkFBZTt3QkFBQ0MsU0FBUyxJQUFJLENBQUM3QixZQUFZO3NDQUMzQyxvQkFBQzJCLG1CQUFVLFFBQUMsZ0NBR1osb0JBQUNHLHFCQUFpQjt3QkFBQ0QsU0FBUyxJQUFJLENBQUM3QixZQUFZO3NDQUM3QyxvQkFBQzJCLG1CQUFVLFFBQUMsd0JBR1osb0JBQUNJLGNBQWEseUJBR2xCLG9CQUFDQywrQkFBbUIsdUJBQ3BCLG9CQUFDQyxxQkFBUyxzQkFDUixvQkFBQ1AsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsMEJBR1osb0JBQUNPLGdCQUFlO3dCQUFDTCxTQUFTLElBQUksQ0FBQzdCLFlBQVk7c0NBQzNDLG9CQUFDMkIsbUJBQVUsUUFBQyw2QkFHWixvQkFBQ1Esa0JBQWlCO2lCQUt6QjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBbUUsb0JBQUEsSUFBSSxDQUFDQyxXQUFXLEVBQTNFQyxpQkFBMkQsa0JBQTNEQSxnQkFBZ0JDLG9CQUEyQyxrQkFBM0NBLG1CQUFtQkMsc0JBQXdCLGtCQUF4QkEscUJBQ3JDdEMsVUFBVW9DLGdCQUNWM0IsYUFBYTRCLG1CQUNiMUIsZUFBZTJCLHFCQUFzQixHQUFHO2dCQUU5QyxJQUFJLENBQUNDLFVBQVUsQ0FBQ3ZDO2dCQUVoQixJQUFJLENBQUN3QyxhQUFhLENBQUMvQjtnQkFFbkIsSUFBSSxDQUFDZ0MsZUFBZSxDQUFDOUI7Z0JBRXJCLElBQUksQ0FBQ2QsWUFBWSxJQUFLLEdBQUc7WUFDM0I7OztXQTNFSUQ7cUJBQWE4QyxhQUFPO0FBNkV4QixpQkE3RUk5QyxNQTZFR3dDLGtCQUFrQjtBQUt6QixpQkFsRkl4QyxNQWtGR3lDLHFCQUFvQjtBQUUzQixpQkFwRkl6QyxNQW9GRzBDLHVCQUFzQjtBQUU3QixpQkF0RkkxQyxNQXNGRytDLFdBQVU7QUFFakIsaUJBeEZJL0MsTUF3RkdnRCxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNsRCJ9