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
                        expression = new Expression(tokens, node, path, spread, subExpression);
                    }
                }
                return expression;
            }
        }
    ]);
    return Expression;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuaW1wb3J0IFN1YkV4cHJlc3Npb24gZnJvbSBcIi4vc3ViRXhwcmVzc2lvblwiO1xuaW1wb3J0IEV4cHJlc3Npb25MZXhlciBmcm9tIFwiLi9leHByZXNzaW9uL2xleGVyXCI7XG5pbXBvcnQgRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9leHByZXNzaW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIHNwcmVhZE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUsXG4gICAgICAgICBlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlLFxuICAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBleHByZXNzaW9uTGV4ZXIgPSBFeHByZXNzaW9uTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4cHJlc3Npb25QYXJzZXIgPSBFeHByZXNzaW9uUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIG5vZGUsIHBhdGgsIHNwcmVhZCwgc3ViRXhwcmVzc2lvbikge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldFNwcmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcHJlYWQ7XG4gIH1cblxuICBnZXRTdWJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSdWxlTmFtZXMoKSB7IHJldHVybiB0aGlzLnBhdGguZ2V0UnVsZU5hbWVzKCk7IH1cblxuICBnZXRUb2tlblR5cGVzKCkgeyByZXR1cm4gdGhpcy5wYXRoLmdldFRva2VuVHlwZXMoKTsgfVxuXG4gIGlzSW5maW5pdGVEZXNjZW50KCkgeyByZXR1cm4gdGhpcy5wYXRoLmlzSW5maW5pdGVEZXNjZW50KCk7IH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoc3RyaW5nKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBleHByZXNzaW9uTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBleHByZXNzaW9uUGFyc2VyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHN0cmluZywgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICBlcnJvck5vZGVzTGVuZ3RoID0gZXJyb3JOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChlcnJvck5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGhOb2RlID0gcGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgICBzcHJlYWROb2RlID0gc3ByZWFkTm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICAgIHN1YkV4cHJlc3Npb25Ob2RlID0gc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgICBwYXRoID0gUGF0aC5mcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSksXG4gICAgICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBTdWJFeHByZXNzaW9uLmZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSk7XG5cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHRva2Vucywgbm9kZSwgcGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV4cHJlc3Npb24iLCJleHByZXNzaW9uTGV4ZXIiLCJFeHByZXNzaW9uTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4cHJlc3Npb25QYXJzZXIiLCJFeHByZXNzaW9uUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhdGgiLCJzcHJlYWQiLCJzdWJFeHByZXNzaW9uIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldFBhdGgiLCJnZXRTcHJlYWQiLCJnZXRTdWJFeHByZXNzaW9uIiwiZ2V0UnVsZU5hbWVzIiwiZ2V0VG9rZW5UeXBlcyIsImlzSW5maW5pdGVEZXNjZW50IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJzdHJpbmciLCJleHByZXNzaW9uIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImV4cHJlc3Npb25Ob2RlIiwiZXJyb3JOb2RlcyIsImVycm9yTm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJlcnJvck5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGF0aE5vZGUiLCJwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInNwcmVhZE5vZGUiLCJzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGUiLCJzdWJFeHByZXNzaW9uTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIlBhdGgiLCJmcm9tUGF0aE5vZGUiLCJTcHJlYWQiLCJmcm9tU3ByZWFkTm9kZSIsIlN1YkV4cHJlc3Npb24iLCJmcm9tU3ViRXhwcmVzc2lvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjs2REFDRTtvRUFDTzs0REFDRTs2REFDQztvQkFLdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTUMsa0JBQWtCQyxjQUFlLENBQUNDLFdBQVcsSUFDN0NDLG1CQUFtQkMsZUFBZ0IsQ0FBQ0YsV0FBVztBQUV0QyxJQUFBLEFBQU1ILDJCQUFOO2FBQU1BLFdBQ1BNLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsYUFBYTtnQ0FEbENWO1FBRWpCLElBQUksQ0FBQ00sTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBTkpWOztZQVNuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxhQUFhO1lBQzNCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ1IsSUFBSSxDQUFDUSxZQUFZO1lBQUk7OztZQUVsREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ1QsSUFBSSxDQUFDUyxhQUFhO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFzQixPQUFPLElBQUksQ0FBQ1YsSUFBSSxDQUFDVSxpQkFBaUI7WUFBSTs7OztZQUVyREMsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxNQUFNO2dCQUNoQyxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxRQUFRckIsaUJBQ1JzQixTQUFTbkIsa0JBQ1RvQixVQUFVSixRQUNWZCxTQUFTZ0IsTUFBTUcsUUFBUSxDQUFDRCxVQUN4QmpCLE9BQU9nQixPQUFPRyxLQUFLLENBQUNwQjtnQkFFMUIsSUFBSUMsU0FBUyxNQUFNO29CQUNqQixJQUFNb0IsaUJBQWlCcEIsTUFDakJxQixhQUFhQyxJQUFBQSxrQ0FBNEIsRUFBQ0YsaUJBQzFDRyxtQkFBbUJGLFdBQVdHLE1BQU07b0JBRTFDLElBQUlELHFCQUFxQixHQUFHO3dCQUMxQixJQUFNRSxXQUFXQyxJQUFBQSxnQ0FBMEIsRUFBQ04saUJBQ3RDTyxhQUFhQyxJQUFBQSxrQ0FBNEIsRUFBQ1IsaUJBQzFDUyxvQkFBb0JDLElBQUFBLHlDQUFtQyxFQUFDVixpQkFDeERuQixPQUFPOEIsYUFBSSxDQUFDQyxZQUFZLENBQUNQLFdBQ3pCdkIsU0FBUytCLGVBQU0sQ0FBQ0MsY0FBYyxDQUFDUCxhQUMvQnhCLGdCQUFnQmdDLHNCQUFhLENBQUNDLHFCQUFxQixDQUFDUDt3QkFFMURmLGFBQWEsSUF6REFyQixXQXlEZU0sUUFBUUMsTUFBTUMsTUFBTUMsUUFBUUM7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9XO1lBQ1Q7OztXQTlEbUJyQiJ9