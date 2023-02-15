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
var _index = require("../index");
var _withStyle = require("with-style");
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
var cssLexer = _withStyle.CSSLexer.fromNothing(), cssParser = _withStyle.CSSParser.fromNothing();
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
_defineProperty(View, "initialContent", ".view {\n  background: red;\n}\n");
_defineProperty(View, "initialExpression", "//@special[2...4]");
_defineProperty(View, "initialMaximumDepth", 5);
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IE5vZGVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbm9kZXNcIjtcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSBcIi4vaW5wdXQvZXhwcmVzc2lvblwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vaW5wdXQvbWF4aW11bURlcHRoXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmNvbnN0IGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgICBhYnJpZGdlZCA9IHRydWUsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgICAgbWF4aW11bURlcHRoID0gdGhpcy5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICAgIG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgICAgdGhpcy5zZXROb2Rlcyhub2RlcywgdG9rZW5zKTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhck5vZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBFeHByZXNzaW9uXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RXhwcmVzc2lvbklucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1heGltdW0gZGVwdGhcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxNYXhpbXVtRGVwdGhJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOb2Rlc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5vZGVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbEV4cHJlc3Npb24sIGluaXRpYWxNYXhpbXVtRGVwdGggfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uLCAgLy8vXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gaW5pdGlhbE1heGltdW1EZXB0aDsgIC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgdGhpcy5zZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAudmlldyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxFeHByZXNzaW9uID0gXCIvL0BzcGVjaWFsWzIuLi40XVwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTWF4aW11bURlcHRoID0gNTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiY3NzTGV4ZXIiLCJDU1NMZXhlciIsImZyb21Ob3RoaW5nIiwiY3NzUGFyc2VyIiwiQ1NTUGFyc2VyIiwicXVlcnlCeUV4cHJlc3Npb24iLCJxdWVyeVV0aWxpdGllcyIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYWJyaWRnZWQiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwibm9kZXMiLCJzZXROb2RlcyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyTm9kZXMiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJFeHByZXNzaW9uSW5wdXQiLCJvbktleVVwIiwiTWF4aW11bURlcHRoSW5wdXQiLCJOb2Rlc1RleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEV4cHJlc3Npb24iLCJpbml0aWFsTWF4aW11bURlcHRoIiwic2V0Q29udGVudCIsInNldEV4cHJlc3Npb24iLCJzZXRNYXhpbXVtRGVwdGgiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSEE7OztlQUFBOzs7a0VBakhzQjtvQkFFRTtxQkFDTzt5QkFDSzswQkFDZ0M7K0RBRTdDOzZEQUNDOzBEQUNFOytEQUNFOzREQUNBO2lFQUNFOzhEQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsb0JBQVMsQ0FBQ0YsV0FBVztBQUV2QyxJQUFNLEFBQUVHLG9CQUFzQkMscUJBQWMsQ0FBcENEO0FBRVIsSUFBQSxBQUFNRSxxQkE2RkgsQUE3Rkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ0pDLCtDQUFBQSxnQkFBZSxTQUFDQyxPQUFPQyxTQUFZO1lBQ2pDLElBQUk7Z0JBQ0YsSUFBTUMsVUFBVSxNQUFLQyxVQUFVLElBQ3pCQyxTQUFTYixTQUFTYyxRQUFRLENBQUNILFVBQzNCSSxPQUFPWixVQUFVYSxLQUFLLENBQUNILFNBQ3ZCSSxXQUFXLElBQUksRUFDZkMsWUFBWUgsS0FBS0ksV0FBVyxDQUFDTixRQUFRSSxXQUNyQ0csYUFBYSxNQUFLQyxhQUFhLElBQy9CQyxlQUFlLE1BQUtDLGVBQWUsSUFDbkNDLFFBQVFuQixrQkFBa0JVLE1BQU1LLFlBQVlFO2dCQUVsRCxNQUFLRyxRQUFRLENBQUNELE9BQU9YLFNBQVMsR0FBRztnQkFFakMsTUFBS2EsWUFBWSxDQUFDUjtZQUNwQixFQUFFLE9BQU9TLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBRVosTUFBS0csVUFBVTtZQUNqQjtRQUNGOzs7aUJBcEJJdkI7O1lBc0JKd0IsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFRO2tDQUVOLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsaUJBQVcsc0JBQ1Ysb0JBQUNDLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDZCQUdaLG9CQUFDQyxtQkFBZTt3QkFBQ0MsU0FBUyxJQUFJLENBQUM3QixZQUFZO3NDQUMzQyxvQkFBQzJCLG1CQUFVLFFBQUMsZ0NBR1osb0JBQUNHLHFCQUFpQjt3QkFBQ0QsU0FBUyxJQUFJLENBQUM3QixZQUFZO3NDQUM3QyxvQkFBQzJCLG1CQUFVLFFBQUMsd0JBR1osb0JBQUNJLGNBQWEseUJBR2xCLG9CQUFDQywrQkFBbUIsdUJBQ3BCLG9CQUFDQyxxQkFBUyxzQkFDUixvQkFBQ1AsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsMEJBR1osb0JBQUNPLGdCQUFlO3dCQUFDTCxTQUFTLElBQUksQ0FBQzdCLFlBQVk7c0NBQzNDLG9CQUFDMkIsbUJBQVUsUUFBQyw2QkFHWixvQkFBQ1Esa0JBQWlCO2lCQUt6QjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFtRSxvQkFBQSxJQUFJLENBQUNDLFdBQVcsRUFBM0VDLGlCQUEyRCxrQkFBM0RBLGdCQUFnQkMsb0JBQTJDLGtCQUEzQ0EsbUJBQW1CQyxzQkFBd0Isa0JBQXhCQSxxQkFDckN0QyxVQUFVb0MsZ0JBQ1YzQixhQUFhNEIsbUJBQ2IxQixlQUFlMkIscUJBQXNCLEdBQUc7Z0JBRTlDLElBQUksQ0FBQ0MsVUFBVSxDQUFDdkM7Z0JBRWhCLElBQUksQ0FBQ3dDLGFBQWEsQ0FBQy9CO2dCQUVuQixJQUFJLENBQUNnQyxlQUFlLENBQUM5QjtnQkFFckIsSUFBSSxDQUFDZCxZQUFZLElBQUssR0FBRztZQUMzQjs7O1dBM0VJRDttQkFBYThDLGFBQU87QUE2RXhCLGdCQTdFSTlDLE1BNkVHd0Msa0JBQWtCO0FBS3pCLGdCQWxGSXhDLE1Ba0ZHeUMscUJBQW9CO0FBRTNCLGdCQXBGSXpDLE1Bb0ZHMEMsdUJBQXNCO0FBRTdCLGdCQXRGSTFDLE1Bc0ZHK0MsV0FBVTtBQUVqQixnQkF4RkkvQyxNQXdGR2dELHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xEIn0=