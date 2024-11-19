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
    function SubExpression(path, subExpression) {
        _class_call_check(this, SubExpression);
        this.path = path;
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
            key: "getSubExpression",
            value: function getSubExpression() {
                return this.subExpression;
            }
        }
    ], [
        {
            key: "fromSubExpressionNode",
            value: function fromSubExpressionNode(subExpressionNode) {
                var subExpression = null;
                if (subExpressionNode !== null) {
                    var pathNode = (0, _node.pathNodeFromSubExpressionNode)(subExpressionNode);
                    subExpressionNode = (0, _node.subExpressionNodeFromSubExpressionNode)(subExpressionNode); ///
                    var path = _path.default.fromPathNode(pathNode);
                    subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);
                    subExpression = new SubExpression(path, subExpression); ///
                }
                return subExpression;
            }
        }
    ]);
    return SubExpression;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJFeHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5cbmltcG9ydCB7IHBhdGhOb2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlLCBzdWJFeHByZXNzaW9uTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBzdWJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0U3ViRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSkge1xuICAgIGxldCBzdWJFeHByZXNzaW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGF0aE5vZGUgPSBwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSk7XG5cbiAgICAgIHN1YkV4cHJlc3Npb25Ob2RlID0gc3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpOyAgLy8vXG5cbiAgICAgIGNvbnN0IHBhdGggPSBQYXRoLmZyb21QYXRoTm9kZShwYXRoTm9kZSk7XG5cbiAgICAgIHN1YkV4cHJlc3Npb24gPSBTdWJFeHByZXNzaW9uLmZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSk7XG5cbiAgICAgIHN1YkV4cHJlc3Npb24gPSBuZXcgU3ViRXhwcmVzc2lvbihwYXRoLCBzdWJFeHByZXNzaW9uKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YkV4cHJlc3Npb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJFeHByZXNzaW9uIiwicGF0aCIsInN1YkV4cHJlc3Npb24iLCJnZXRQYXRoIiwiZ2V0U3ViRXhwcmVzc2lvbiIsImZyb21TdWJFeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlIiwicGF0aE5vZGUiLCJwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlIiwiUGF0aCIsImZyb21QYXRoTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7b0JBRXFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsSUFBSSxFQUFFQyxhQUFhO2dDQURaRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQjtnQkFDNUMsSUFBSUosZ0JBQWdCO2dCQUVwQixJQUFJSSxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBTUMsV0FBV0MsSUFBQUEsbUNBQTZCLEVBQUNGO29CQUUvQ0Esb0JBQW9CRyxJQUFBQSw0Q0FBc0MsRUFBQ0gsb0JBQXFCLEdBQUc7b0JBRW5GLElBQU1MLE9BQU9TLGFBQUksQ0FBQ0MsWUFBWSxDQUFDSjtvQkFFL0JMLGdCQUFnQkYsQUF4QkRBLGNBd0JlSyxxQkFBcUIsQ0FBQ0M7b0JBRXBESixnQkFBZ0IsSUExQkRGLGNBMEJtQkMsTUFBTUMsZ0JBQWdCLEdBQUc7Z0JBQzdEO2dCQUVBLE9BQU9BO1lBQ1Q7OztXQTlCbUJGIn0=