"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubExpression;
    }
});
var _path = /*#__PURE__*/ _interop_require_default(require("./path"));
var _spread = /*#__PURE__*/ _interop_require_default(require("./spread"));
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
var SubExpression = /*#__PURE__*/ function() {
    function SubExpression(path, spread, subExpression) {
        _class_call_check(this, SubExpression);
        this.path = path;
        this.spread = spread;
        this.subExpression = subExpression;
    }
    _create_class(SubExpression, [
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
            key: "fromSubExpressionNode",
            value: function fromSubExpressionNode(subExpressionNode) {
                var subExpression = null;
                if (subExpressionNode !== null) {
                    var pathNode = (0, _node.pathNodeFromSubExpressionNode)(subExpressionNode), spreadNode = (0, _node.spreadNodeFromSubExpressionNode)(subExpressionNode);
                    subExpressionNode = (0, _node.subExpressionNodeFromSubExpressionNode)(subExpressionNode); ///
                    var path = _path.default.fromPathNode(pathNode), spread = _spread.default.fromSpreadNode(spreadNode);
                    subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);
                    subExpression = new SubExpression(path, spread, subExpression); ///
                }
                return subExpression;
            }
        }
    ]);
    return SubExpression;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJFeHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSwgc3ByZWFkTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSwgc3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0U3ByZWFkKCkge1xuICAgIHJldHVybiB0aGlzLnNwcmVhZDtcbiAgfVxuXG4gIGdldFN1YkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lcygpIHsgcmV0dXJuIHRoaXMucGF0aC5nZXRSdWxlTmFtZXMoKTsgfVxuXG4gIGdldFRva2VuVHlwZXMoKSB7IHJldHVybiB0aGlzLnBhdGguZ2V0VG9rZW5UeXBlcygpOyB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7IHJldHVybiB0aGlzLnBhdGguaXNJbmZpbml0ZURlc2NlbnQoKTsgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpIHtcbiAgICBsZXQgc3ViRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBpZiAoc3ViRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhdGhOb2RlID0gcGF0aE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgc3ByZWFkTm9kZSA9IHNwcmVhZE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKTsgIC8vL1xuXG4gICAgICBjb25zdCBwYXRoID0gUGF0aC5mcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uID0gU3ViRXhwcmVzc2lvbi5mcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uID0gbmV3IFN1YkV4cHJlc3Npb24ocGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YkV4cHJlc3Npb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJFeHByZXNzaW9uIiwicGF0aCIsInNwcmVhZCIsInN1YkV4cHJlc3Npb24iLCJnZXRQYXRoIiwiZ2V0U3ByZWFkIiwiZ2V0U3ViRXhwcmVzc2lvbiIsImdldFJ1bGVOYW1lcyIsImdldFRva2VuVHlwZXMiLCJpc0luZmluaXRlRGVzY2VudCIsImZyb21TdWJFeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlIiwicGF0aE5vZGUiLCJwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSIsInNwcmVhZE5vZGUiLCJzcHJlYWROb2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJQYXRoIiwiZnJvbVBhdGhOb2RlIiwiU3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKOzZEQUNFO29CQUVvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RyxJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxhQUFhO2dDQURwQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFKSkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDTixJQUFJLENBQUNNLFlBQVk7WUFBSTs7O1lBRWxEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDUCxJQUFJLENBQUNPLGFBQWE7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXNCLE9BQU8sSUFBSSxDQUFDUixJQUFJLENBQUNRLGlCQUFpQjtZQUFJOzs7O1lBRXJEQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQjtnQkFDNUMsSUFBSVIsZ0JBQWdCO2dCQUVwQixJQUFJUSxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBTUMsV0FBV0MsSUFBQUEsbUNBQTZCLEVBQUNGLG9CQUN6Q0csYUFBYUMsSUFBQUEscUNBQStCLEVBQUNKO29CQUVuREEsb0JBQW9CSyxJQUFBQSw0Q0FBc0MsRUFBQ0wsb0JBQXFCLEdBQUc7b0JBRW5GLElBQU1WLE9BQU9nQixhQUFJLENBQUNDLFlBQVksQ0FBQ04sV0FDekJWLFNBQVNpQixlQUFNLENBQUNDLGNBQWMsQ0FBQ047b0JBRXJDWCxnQkFBZ0JILEFBckNEQSxjQXFDZVUscUJBQXFCLENBQUNDO29CQUVwRFIsZ0JBQWdCLElBdkNESCxjQXVDbUJDLE1BQU1DLFFBQVFDLGdCQUFnQixHQUFHO2dCQUNyRTtnQkFFQSxPQUFPQTtZQUNUOzs7V0EzQ21CSCJ9