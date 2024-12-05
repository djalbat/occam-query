"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Expression;
    }
});
var _path = /*#__PURE__*/ _interop_require_default(require("./path"));
var _spread = /*#__PURE__*/ _interop_require_default(require("./spread"));
var _subExpression = /*#__PURE__*/ _interop_require_default(require("./subExpression"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("./expression/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./expression/parser"));
var _node = require("./utilities/node");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var expressionLexer = _lexer.default.fromNothing(), expressionParser = _parser.default.fromNothing();
var Expression = /*#__PURE__*/ function() {
    function Expression(path, spread, subExpression) {
        _class_call_check(this, Expression);
        this.path = path;
        this.spread = spread;
        this.subExpression = subExpression;
    }
    _create_class(Expression, [
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "getSpread",
            value: function getSpread() {
                return this.spread;
            }
        },
        {
            key: "getSubExpression",
            value: function getSubExpression() {
                return this.subExpression;
            }
        },
        {
            key: "getRuleNames",
            value: function getRuleNames() {
                return this.path.getRuleNames();
            }
        },
        {
            key: "getTokenTypes",
            value: function getTokenTypes() {
                return this.path.getTokenTypes();
            }
        },
        {
            key: "isInfiniteDescent",
            value: function isInfiniteDescent() {
                return this.path.isInfiniteDescent();
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode) {
                var pathNode = (0, _node.pathNodeFromExpressionNode)(expressionNode), spreadNode = (0, _node.spreadNodeFromExpressionNode)(expressionNode), subExpressionNode = (0, _node.subExpressionNodeFromExpressionNode)(expressionNode), path = _path.default.fromPathNode(pathNode), spread = _spread.default.fromSpreadNode(spreadNode), subExpression = _subExpression.default.fromSubExpressionNode(subExpressionNode), expression = new Expression(path, spread, subExpression);
                return expression;
            }
        },
        {
            key: "fromExpressionString",
            value: function fromExpressionString(expressionString) {
                var expression = null;
                var lexer = expressionLexer, parser = expressionParser, content = expressionString, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var expressionNode = node, errorNodes = (0, _node.errorNodesFromExpressionNode)(expressionNode), errorNodesLength = errorNodes.length;
                    if (errorNodesLength === 0) {
                        var pathNode = (0, _node.pathNodeFromExpressionNode)(expressionNode), spreadNode = (0, _node.spreadNodeFromExpressionNode)(expressionNode), subExpressionNode = (0, _node.subExpressionNodeFromExpressionNode)(expressionNode), path = _path.default.fromPathNode(pathNode), spread = _spread.default.fromSpreadNode(spreadNode), subExpression = _subExpression.default.fromSubExpressionNode(subExpressionNode);
                        expression = new Expression(path, spread, subExpression);
                    }
                }
                return expression;
            }
        }
    ]);
    return Expression;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuaW1wb3J0IFN1YkV4cHJlc3Npb24gZnJvbSBcIi4vc3ViRXhwcmVzc2lvblwiO1xuaW1wb3J0IEV4cHJlc3Npb25MZXhlciBmcm9tIFwiLi9leHByZXNzaW9uL2xleGVyXCI7XG5pbXBvcnQgRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9leHByZXNzaW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIHNwcmVhZE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUsXG4gICAgICAgICBlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlLFxuICAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBleHByZXNzaW9uTGV4ZXIgPSBFeHByZXNzaW9uTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4cHJlc3Npb25QYXJzZXIgPSBFeHByZXNzaW9uUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBzcHJlYWQsIHN1YkV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRTcHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByZWFkO1xuICB9XG5cbiAgZ2V0U3ViRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWVzKCkgeyByZXR1cm4gdGhpcy5wYXRoLmdldFJ1bGVOYW1lcygpOyB9XG5cbiAgZ2V0VG9rZW5UeXBlcygpIHsgcmV0dXJuIHRoaXMucGF0aC5nZXRUb2tlblR5cGVzKCk7IH1cblxuICBpc0luZmluaXRlRGVzY2VudCgpIHsgcmV0dXJuIHRoaXMucGF0aC5pc0luZmluaXRlRGVzY2VudCgpOyB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSkge1xuICAgIGNvbnN0IHBhdGhOb2RlID0gcGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgIHNwcmVhZE5vZGUgPSBzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICBwYXRoID0gUGF0aC5mcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSxcbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gU3ViRXhwcmVzc2lvbi5mcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihwYXRoLCBzcHJlYWQsIHN1YkV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZykge1xuICAgIGxldCBleHByZXNzaW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGVyID0gZXhwcmVzc2lvbkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZXhwcmVzc2lvblBhcnNlciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBleHByZXNzaW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGVycm9yTm9kZXMgPSBlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgIGVycm9yTm9kZXNMZW5ndGggPSBlcnJvck5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGVycm9yTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgcGF0aE5vZGUgPSBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICAgIHNwcmVhZE5vZGUgPSBzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGUgPSBzdWJFeHByZXNzaW9uTm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICAgIHBhdGggPSBQYXRoLmZyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSxcbiAgICAgICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IFN1YkV4cHJlc3Npb24uZnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKTtcblxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24ocGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV4cHJlc3Npb24iLCJleHByZXNzaW9uTGV4ZXIiLCJFeHByZXNzaW9uTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4cHJlc3Npb25QYXJzZXIiLCJFeHByZXNzaW9uUGFyc2VyIiwicGF0aCIsInNwcmVhZCIsInN1YkV4cHJlc3Npb24iLCJnZXRQYXRoIiwiZ2V0U3ByZWFkIiwiZ2V0U3ViRXhwcmVzc2lvbiIsImdldFJ1bGVOYW1lcyIsImdldFRva2VuVHlwZXMiLCJpc0luZmluaXRlRGVzY2VudCIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwicGF0aE5vZGUiLCJwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInNwcmVhZE5vZGUiLCJzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGUiLCJzdWJFeHByZXNzaW9uTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIlBhdGgiLCJmcm9tUGF0aE5vZGUiLCJTcHJlYWQiLCJmcm9tU3ByZWFkTm9kZSIsIlN1YkV4cHJlc3Npb24iLCJmcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0Zyb21FeHByZXNzaW9uTm9kZSIsImVycm9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjs2REFDRTtvRUFDTzs0REFDRTs2REFDQztvQkFLdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTUMsa0JBQWtCQyxjQUFlLENBQUNDLFdBQVcsSUFDN0NDLG1CQUFt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