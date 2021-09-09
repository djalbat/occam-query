"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _occamGrammars = require("occam-grammars");
var _index = require("../index");
var _easyLayout = require("easy-layout");
var _heading = _interopRequireDefault(require("./heading"));
var _column = _interopRequireDefault(require("./div/column"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _nodes = _interopRequireDefault(require("./textarea/nodes"));
var _expression = _interopRequireDefault(require("./input/expression"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _maximumDepth = _interopRequireDefault(require("./input/maximumDepth"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
var _typeof = function(obj) {
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
var florenceLexer = _occamGrammars.FlorenceLexer.fromNothing(), florenceParser = _occamGrammars.FlorenceParser.fromNothing();
var queryByExpression = _index.queryUtilities.queryByExpression;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
                    /*#__PURE__*/ React.createElement(_heading.default, null, "DOM example"),
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expression.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsInF1ZXJ5VXRpbGl0aWVzIiwiUm93c0RpdiIsIkNvbHVtbnNEaXYiLCJIZWFkaW5nIiwiQ29sdW1uRGl2IiwiU3ViSGVhZGluZyIsIlNpemVhYmxlRGl2IiwiTm9kZXNUZXh0YXJlYSIsIkV4cHJlc3Npb25JbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIk1heGltdW1EZXB0aElucHV0IiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJxdWVyeUJ5RXhwcmVzc2lvbiIsIlZpZXciLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxFeHByZXNzaW9uIiwiaW5pdGlhbE1heGltdW1EZXB0aCIsImtleVVwSGFuZGxlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwibm9kZXMiLCJzZXROb2RlcyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyTm9kZXMiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIm9uS2V5VXAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldENvbnRlbnQiLCJzZXRFeHByZXNzaW9uIiwic2V0TWF4aW11bURlcHRoIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUNBLEdBQWdCLENBQWhCLGNBQWdCO0FBRWYsR0FBVSxDQUFWLE1BQVU7QUFDTCxHQUFhLENBQWIsV0FB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