"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamGrammars = require("occam-grammars");
var _index = require("../index");
var _easyLayout = require("easy-layout");
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _nodes = _interopRequireDefault(require("./textarea/nodes"));
var _expression = _interopRequireDefault(require("./input/expression"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _maximumDepth = _interopRequireDefault(require("./input/maximumDepth"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
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
        _defineProperty(_assertThisInitialized(_this), "initialContent", "Type NaturalNumber\n\nConstructor zero:NaturalNumber\n");
        _defineProperty(_assertThisInitialized(_this), "initialExpression", "//declaration//@name");
        _defineProperty(_assertThisInitialized(_this), "initialMaximumDepth", 5);
        return _this;
    }
    _createClass(View, [
        {
            key: "keyUpHandler",
            value: function keyUpHandler() {
                try {
                    var content = this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens), parseTree = node.asParseTree(tokens), expression = this.getExpression(), maximumDepth = this.getMaximumDepth(), nodes = queryByExpression(node, expression, maximumDepth);
                    this.setNodes(nodes, tokens); ///
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
                    this.clearNodes();
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expression.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var content = this.initialContent, expression = this.initialExpression, maximumDepth = this.initialMaximumDepth; ///
                this.setContent(content);
                this.setExpression(expression);
                this.setMaximumDepth(maximumDepth);
                this.keyUpHandler(); ///
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTm9kZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub2Rlc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tIFwiLi9pbnB1dC9leHByZXNzaW9uXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBNYXhpbXVtRGVwdGhJbnB1dCBmcm9tIFwiLi9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbENvbnRlbnQgPSBgVHlwZSBOYXR1cmFsTnVtYmVyXG5cbkNvbnN0cnVjdG9yIHplcm86TmF0dXJhbE51bWJlclxuYDtcblxuICBpbml0aWFsRXhwcmVzc2lvbiA9IFwiLy9kZWNsYXJhdGlvbi8vQG5hbWVcIjtcblxuICBpbml0aWFsTWF4aW11bURlcHRoID0gNTtcblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgICBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCk7XG5cbiAgICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMsIHRva2Vucyk7IC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTm9kZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOb2Rlc1RleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmluaXRpYWxFeHByZXNzaW9uLCAgLy8vXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5pbml0aWFsTWF4aW11bURlcHRoOyAgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldEV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICB0aGlzLnNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbImZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiZnJvbU5vdGhpbmciLCJmbG9yZW5jZVBhcnNlciIsIkZsb3JlbmNlUGFyc2VyIiwicXVlcnlCeUV4cHJlc3Npb24iLCJxdWVyeVV0aWxpdGllcyIsIlZpZXciLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxFeHByZXNzaW9uIiwiaW5pdGlhbE1heGltdW1EZXB0aCIsImtleVVwSGFuZGxlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwibm9kZXMiLCJzZXROb2RlcyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyTm9kZXMiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiRXhwcmVzc2lvbklucHV0Iiwib25LZXlVcCIsIk1heGltdW1EZXB0aElucHV0IiwiTm9kZXNUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Q29udGVudCIsInNldEV4cHJlc3Npb24iLCJzZXRNYXhpbXVtRGVwdGgiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRXNCLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWYsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBQ0EsSUFBQSxjQUFnQixXQUFoQixnQkFBZ0IsQ0FBQTtBQUVmLElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTtBQUMyQixJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFMUQsSUFBQSxXQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNiLElBQUEsU0FBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ2QsSUFBQSxNQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFDaEIsSUFBQSxXQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDcEIsSUFBQSxRQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDbEIsSUFBQSxhQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7QUFDdEIsSUFBQSxVQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQWhCcEQ7Ozs7Ozs7O3NDQUFBOzs7Ozs7aUNBQUE7OztpRUFBQTs7U0FBQTs7Ozs7Ozs4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