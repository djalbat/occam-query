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
            key: "fromExpressionString",
            value: function fromExpressionString(string) {
                var expression = null;
                var lexer = expressionLexer, parser = expressionParser, content = string, tokens = lexer.tokenise(content), node = parser.parse(tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuaW1wb3J0IFN1YkV4cHJlc3Npb24gZnJvbSBcIi4vc3ViRXhwcmVzc2lvblwiO1xuaW1wb3J0IEV4cHJlc3Npb25MZXhlciBmcm9tIFwiLi9leHByZXNzaW9uL2xleGVyXCI7XG5pbXBvcnQgRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9leHByZXNzaW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIHNwcmVhZE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUsXG4gICAgICAgICBlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlLFxuICAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBleHByZXNzaW9uTGV4ZXIgPSBFeHByZXNzaW9uTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4cHJlc3Npb25QYXJzZXIgPSBFeHByZXNzaW9uUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBzcHJlYWQsIHN1YkV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRTcHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByZWFkO1xuICB9XG5cbiAgZ2V0U3ViRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWVzKCkgeyByZXR1cm4gdGhpcy5wYXRoLmdldFJ1bGVOYW1lcygpOyB9XG5cbiAgZ2V0VG9rZW5UeXBlcygpIHsgcmV0dXJuIHRoaXMucGF0aC5nZXRUb2tlblR5cGVzKCk7IH1cblxuICBpc0luZmluaXRlRGVzY2VudCgpIHsgcmV0dXJuIHRoaXMucGF0aC5pc0luZmluaXRlRGVzY2VudCgpOyB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uU3RyaW5nKHN0cmluZykge1xuICAgIGxldCBleHByZXNzaW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGVyID0gZXhwcmVzc2lvbkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZXhwcmVzc2lvblBhcnNlciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZXJyb3JOb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBwYXRoTm9kZSA9IHBhdGhOb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgICAgc3ByZWFkTm9kZSA9IHNwcmVhZE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgICAgcGF0aCA9IFBhdGguZnJvbVBhdGhOb2RlKHBhdGhOb2RlKSxcbiAgICAgICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpLFxuICAgICAgICAgICAgICBzdWJFeHByZXNzaW9uID0gU3ViRXhwcmVzc2lvbi5mcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihwYXRoLCBzcHJlYWQsIHN1YkV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbiIsImV4cHJlc3Npb25MZXhlciIsIkV4cHJlc3Npb25MZXhlciIsImZyb21Ob3RoaW5nIiwiZXhwcmVzc2lvblBhcnNlciIsIkV4cHJlc3Npb25QYXJzZXIiLCJwYXRoIiwic3ByZWFkIiwic3ViRXhwcmVzc2lvbiIsImdldFBhdGgiLCJnZXRTcHJlYWQiLCJnZXRTdWJFeHByZXNzaW9uIiwiZ2V0UnVsZU5hbWVzIiwiZ2V0VG9rZW5UeXBlcyIsImlzSW5maW5pdGVEZXNjZW50IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJzdHJpbmciLCJleHByZXNzaW9uIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJleHByZXNzaW9uTm9kZSIsImVycm9yTm9kZXMiLCJlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhdGhOb2RlIiwicGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzcHJlYWROb2RlIiwic3ByZWFkTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJQYXRoIiwiZnJvbVBhdGhOb2RlIiwiU3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiLCJTdWJFeHByZXNzaW9uIiwiZnJvbVN1YkV4cHJlc3Npb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7MkRBZEo7NkRBQ0U7b0VBQ087NERBQ0U7NkRBQ0M7b0JBS3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU1DLGtCQUFrQkMsY0FBZSxDQUFDQyxXQUFXLElBQzdDQyxtQkFBbUJDLGVBQWdCLENBQUNGLFdBQVc7QUFFdEMsSUFBQSxBQUFNSCwyQkFBTjthQUFNQSxXQUNQTSxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsYUFBYTtnQ0FEcEJSO1FBRWpCLElBQUksQ0FBQ00sSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSkpSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxZQUFZO1lBQUk7OztZQUVsREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ1AsSUFBSSxDQUFDTyxhQUFhO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFzQixPQUFPLElBQUksQ0FBQ1IsSUFBSSxDQUFDUSxpQkFBaUI7WUFBSTs7OztZQUVyREMsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxNQUFNO2dCQUNoQyxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxRQUFRakIsaUJBQ1JrQixTQUFTZixrQkFDVGdCLFVBQVVKLFFBQ1ZLLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9KLE9BQU9LLEtBQUssQ0FBQ0g7Z0JBRTFCLElBQUlFLFNBQVMsTUFBTTtvQkFDakIsSUFBTUUsaUJBQWlCRixNQUNqQkcsYUFBYUMsSUFBQUEsa0NBQTRCLEVBQUNGLGlCQUMxQ0csbUJBQW1CRixXQUFXRyxNQUFNO29CQUUxQyxJQUFJRCxxQkFBcUIsR0FBRzt3QkFDMUIsSUFBTUUsV0FBV0MsSUFBQUEsZ0NBQTBCLEVBQUNOLGlCQUN0Q08sYUFBYUMsSUFBQUEsa0NBQTRCLEVBQUNSLGlCQUMxQ1Msb0JBQW9CQyxJQUFBQSx5Q0FBbUMsRUFBQ1YsaUJBQ3hEbkIsT0FBTzhCLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUCxXQUN6QnZCLFNBQVMrQixlQUFNLENBQUNDLGNBQWMsQ0FBQ1AsYUFDL0J4QixnQkFBZ0JnQyxzQkFBYSxDQUFDQyxxQkFBcUIsQ0FBQ1A7d0JBRTFEakIsYUFBYSxJQS9DQWpCLFdBK0NlTSxNQUFNQyxRQUFRQztvQkFDNUM7Z0JBQ0Y7Z0JBRUEsT0FBT1M7WUFDVDs7O1dBcERtQmpCIn0=