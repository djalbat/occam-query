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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamGrammars = require("occam-grammars");
var _index = require("../index");
var _easyLayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _nodes = /*#__PURE__*/ _interopRequireDefault(require("./textarea/nodes"));
var _expression = /*#__PURE__*/ _interopRequireDefault(require("./input/expression"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _maximumDepth = /*#__PURE__*/ _interopRequireDefault(require("./input/maximumDepth"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var florenceLexer = _occamGrammars.FlorenceLexer.fromNothing(), florenceParser = _occamGrammars.FlorenceParser.fromNothing();
var queryByExpression = _index.queryUtilities.queryByExpression;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            try {
                var content = _this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens), parseTree = node.asParseTree(tokens), expression = _this.getExpression(), maximumDepth = _this.getMaximumDepth(), nodes = queryByExpression(node, expression, maximumDepth);
                _this.setNodes(nodes, tokens); ///
                _this.setParseTree(parseTree);
            } catch (error) {
                console.log(error);
                _this.clearNodes();
            }
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expression.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialContent", "Type NaturalNumber\n\nConstructor zero:NaturalNumber\n");
_defineProperty(View, "initialExpression", "//document//@name");
_defineProperty(View, "initialMaximumDepth", 5);
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub2Rlc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tIFwiLi9pbnB1dC9leHByZXNzaW9uXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBNYXhpbXVtRGVwdGhJbnB1dCBmcm9tIFwiLi9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCk7XG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMsIHRva2Vucyk7IC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRXhwcmVzc2lvblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEV4cHJlc3Npb25JbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBNYXhpbXVtIGRlcHRoXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TWF4aW11bURlcHRoSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTm9kZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOb2Rlc1RleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxFeHByZXNzaW9uLCBpbml0aWFsTWF4aW11bURlcHRoIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbiwgIC8vL1xuICAgICAgICAgIG1heGltdW1EZXB0aCA9IGluaXRpYWxNYXhpbXVtRGVwdGg7ICAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0RXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgIHRoaXMuc2V0TWF4aW11bURlcHRoKG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgVHlwZSBOYXR1cmFsTnVtYmVyXG5cbkNvbnN0cnVjdG9yIHplcm86TmF0dXJhbE51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbEV4cHJlc3Npb24gPSBcIi8vZG9jdW1lbnQvL0BuYW1lXCI7XG5cbiAgc3RhdGljIGluaXRpYWxNYXhpbXVtRGVwdGggPSA1O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJmbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJub2RlcyIsInNldE5vZGVzIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJOb2RlcyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkV4cHJlc3Npb25JbnB1dCIsIm9uS2V5VXAiLCJNYXhpbXVtRGVwdGhJbnB1dCIsIk5vZGVzVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsRXhwcmVzc2lvbiIsImluaXRpYWxNYXhpbXVtRGVwdGgiLCJzZXRDb250ZW50Iiwic2V0RXhwcmVzc2lvbiIsInNldE1heGltdW1EZXB0aCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1IQTs7O2VBQUE7OztrRUFqSHNCO29CQUVFOzZCQUNNO3FCQUVDOzBCQUNxQzsrREFFN0M7NkRBQ0M7MERBQ0U7K0RBQ0U7NERBQ0E7aUVBQ0U7OERBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNQSxnQkFBZ0JDLDRCQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMsNkJBQWMsQ0FBQ0YsV0FBVztBQUVqRCxJQUFNLEFBQUVHLG9CQUFzQkMscUJBQWMsQ0FBcENEO0FBRVIsSUFBQSxBQUFNRSxxQkE0RkgsQUE1Rkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ0pDLCtDQUFBQSxnQkFBZSxTQUFDQyxPQUFPQyxTQUFZO1lBQ2pDLElBQUk7Z0JBQ0YsSUFBTUMsVUFBVSxNQUFLQyxVQUFVLElBQ3pCQyxTQUFTYixjQUFjYyxRQUFRLENBQUNILFVBQ2hDSSxPQUFPWixlQUFlYSxLQUFLLENBQUNILFNBQzVCSSxZQUFZRixLQUFLRyxXQUFXLENBQUNMLFNBQzdCTSxhQUFhLE1BQUtDLGFBQWEsSUFDL0JDLGVBQWUsTUFBS0MsZUFBZSxJQUNuQ0MsUUFBUWxCLGtCQUFrQlUsTUFBTUksWUFBWUU7Z0JBRWxELE1BQUtHLFFBQVEsQ0FBQ0QsT0FBT1YsU0FBUyxHQUFHO2dCQUVqQyxNQUFLWSxZQUFZLENBQUNSO1lBQ3BCLEVBQUUsT0FBT1MsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFFWixNQUFLRyxVQUFVO1lBQ2pCO1FBQ0Y7OztpQkFuQkl0Qjs7WUFxQkp1QixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQVE7a0NBRU4sb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxpQkFBVyxzQkFDVixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsNkJBR1osb0JBQUNDLG1CQUFlO3dCQUFDQyxTQUFTLElBQUksQ0FBQzVCLFlBQVk7c0NBQzNDLG9CQUFDMEIsbUJBQVUsUUFBQyxnQ0FHWixvQkFBQ0cscUJBQWlCO3dCQUFDRCxTQUFTLElBQUksQ0FBQzVCLFlBQVk7c0NBQzdDLG9CQUFDMEIsbUJBQVUsUUFBQyx3QkFHWixvQkFBQ0ksY0FBYSx5QkFHbEIsb0JBQUNDLCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDUCxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQywwQkFHWixvQkFBQ08sZ0JBQWU7d0JBQUNMLFNBQVMsSUFBSSxDQUFDNUIsWUFBWTtzQ0FDM0Msb0JBQUMwQixtQkFBVSxRQUFDLDZCQUdaLG9CQUFDUSxrQkFBaUI7aUJBS3pCO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQW1FLG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUEzRUMsaUJBQTJELGtCQUEzREEsZ0JBQWdCQyxvQkFBMkMsa0JBQTNDQSxtQkFBbUJDLHNCQUF3QixrQkFBeEJBLHFCQUNyQ3JDLFVBQVVtQyxnQkFDVjNCLGFBQWE0QixtQkFDYjFCLGVBQWUyQixxQkFBc0IsR0FBRztnQkFFOUMsSUFBSSxDQUFDQyxVQUFVLENBQUN0QztnQkFFaEIsSUFBSSxDQUFDdUMsYUFBYSxDQUFDL0I7Z0JBRW5CLElBQUksQ0FBQ2dDLGVBQWUsQ0FBQzlCO2dCQUVyQixJQUFJLENBQUNiLFlBQVksSUFBSyxHQUFHO1lBQzNCOzs7V0ExRUlEO21CQUFhNkMsYUFBTztBQTRFeEIsZ0JBNUVJN0MsTUE0RUd1QyxrQkFBa0I7QUFLekIsZ0JBakZJdkMsTUFpRkd3QyxxQkFBb0I7QUFFM0IsZ0JBbkZJeEMsTUFtRkd5Qyx1QkFBc0I7QUFFN0IsZ0JBckZJekMsTUFxRkc4QyxXQUFVO0FBRWpCLGdCQXZGSTlDLE1BdUZHK0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakQifQ==