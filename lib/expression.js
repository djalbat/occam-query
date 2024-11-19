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
    function Expression(tokens, node, path, spread, subExpression) {
        _class_call_check(this, Expression);
        this.tokens = tokens;
        this.node = node;
        this.path = path;
        this.spread = spread;
        this.subExpression = subExpression;
    }
    _create_class(Expression, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
        }
    ], [
        {
            key: "fromExpressionString",
            value: function fromExpressionString(string) {
                var expression = null;
                var lexer = expressionLexer, parser = expressionParser, content = string, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var expressionNode = node, pathNode = (0, _node.pathNodeFromExpressionNode)(expressionNode), spreadNode = (0, _node.spreadNodeFromExpressionNode)(expressionNode), subExpressionNode = (0, _node.subExpressionNodeFromExpressionNode)(expressionNode), path = _path.default.fromPathNode(pathNode), spread = _spread.default.fromSpreadNode(spreadNode), subExpression = _subExpression.default.fromSubExpressionNode(subExpressionNode);
                    expression = new Expression(tokens, node, path, spread, subExpression);
                }
                return expression;
            }
        }
    ]);
    return Expression;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuaW1wb3J0IFN1YkV4cHJlc3Npb24gZnJvbSBcIi4vc3ViRXhwcmVzc2lvblwiO1xuaW1wb3J0IEV4cHJlc3Npb25MZXhlciBmcm9tIFwiLi9leHByZXNzaW9uL2xleGVyXCI7XG5pbXBvcnQgRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9leHByZXNzaW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSwgc3ByZWFkTm9kZUZyb21FeHByZXNzaW9uTm9kZSwgc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBleHByZXNzaW9uTGV4ZXIgPSBFeHByZXNzaW9uTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4cHJlc3Npb25QYXJzZXIgPSBFeHByZXNzaW9uUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIG5vZGUsIHBhdGgsIHNwcmVhZCwgc3ViRXhwcmVzc2lvbikge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldFNwcmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcHJlYWQ7XG4gIH1cblxuICBnZXRTdWJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoc3RyaW5nKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBleHByZXNzaW9uTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBleHByZXNzaW9uUGFyc2VyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHN0cmluZywgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBwYXRoTm9kZSA9IHBhdGhOb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgIHNwcmVhZE5vZGUgPSBzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YkV4cHJlc3Npb25Ob2RlID0gc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgcGF0aCA9IFBhdGguZnJvbVBhdGhOb2RlKHBhdGhOb2RlKSxcbiAgICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSxcbiAgICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBTdWJFeHByZXNzaW9uLmZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSk7XG5cbiAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbih0b2tlbnMsIG5vZGUsIHBhdGgsIHNwcmVhZCwgc3ViRXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uIiwiZXhwcmVzc2lvbkxleGVyIiwiRXhwcmVzc2lvbkxleGVyIiwiZnJvbU5vdGhpbmciLCJleHByZXNzaW9uUGFyc2VyIiwiRXhwcmVzc2lvblBhcnNlciIsInRva2VucyIsIm5vZGUiLCJwYXRoIiwic3ByZWFkIiwic3ViRXhwcmVzc2lvbiIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRQYXRoIiwiZ2V0U3ByZWFkIiwiZ2V0U3ViRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwic3RyaW5nIiwiZXhwcmVzc2lvbiIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJleHByZXNzaW9uTm9kZSIsInBhdGhOb2RlIiwicGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzcHJlYWROb2RlIiwic3ByZWFkTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJQYXRoIiwiZnJvbVBhdGhOb2RlIiwiU3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiLCJTdWJFeHByZXNzaW9uIiwiZnJvbVN1YkV4cHJlc3Npb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjs2REFDRTtvRUFDTzs0REFDRTs2REFDQztvQkFFaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUcsSUFBTUMsa0JBQWtCQyxjQUFlLENBQUNDLFdBQVcsSUFDN0NDLG1CQUFtQkMsZUFBZ0IsQ0FBQ0YsV0FBVztBQUV0QyxJQUFBLEFBQU1ILDJCQUFOO2FBQU1BLFdBQ1BNLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsYUFBYTtnQ0FEbENWO1FBRWpCLElBQUksQ0FBQ00sTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBTkpWOztZQVNuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxhQUFhO1lBQzNCOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQkMsTUFBTTtnQkFDaEMsSUFBSUMsYUFBYTtnQkFFakIsSUFBTUMsUUFBUWxCLGlCQUNSbUIsU0FBU2hCLGtCQUNUaUIsVUFBVUosUUFDVlgsU0FBU2EsTUFBTUcsUUFBUSxDQUFDRCxVQUN4QmQsT0FBT2EsT0FBT0csS0FBSyxDQUFDakI7Z0JBRTFCLElBQUlDLFNBQVMsTUFBTTtvQkFDakIsSUFBTWlCLGlCQUFpQmpCLE1BQ2pCa0IsV0FBV0MsSUFBQUEsZ0NBQTBCLEVBQUNGLGlCQUN0Q0csYUFBYUMsSUFBQUEsa0NBQTRCLEVBQUNKLGlCQUMxQ0ssb0JBQW9CQyxJQUFBQSx5Q0FBbUMsRUFBQ04saUJBQ3hEaEIsT0FBT3VCLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUCxXQUN6QmhCLFNBQVN3QixlQUFNLENBQUNDLGNBQWMsQ0FBQ1AsYUFDL0JqQixnQkFBZ0J5QixzQkFBYSxDQUFDQyxxQkFBcUIsQ0FBQ1A7b0JBRTFEWCxhQUFhLElBL0NFbEIsV0ErQ2FNLFFBQVFDLE1BQU1DLE1BQU1DLFFBQVFDO2dCQUMxRDtnQkFFQSxPQUFPUTtZQUNUOzs7V0FuRG1CbEIifQ==