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
const _path = /*#__PURE__*/ _interop_require_default(require("./path"));
const _spread = /*#__PURE__*/ _interop_require_default(require("./spread"));
const _node = require("./utilities/node");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SubExpression {
    constructor(path, spread, subExpression){
        this.path = path;
        this.spread = spread;
        this.subExpression = subExpression;
    }
    getPath() {
        return this.path;
    }
    getSpread() {
        return this.spread;
    }
    getSubExpression() {
        return this.subExpression;
    }
    getRuleNames() {
        return this.path.getRuleNames();
    }
    getTokenTypes() {
        return this.path.getTokenTypes();
    }
    isInfiniteDescent() {
        return this.path.isInfiniteDescent();
    }
    static fromSubExpressionNode(subExpressionNode) {
        let subExpression = null;
        if (subExpressionNode !== null) {
            const pathNode = (0, _node.pathNodeFromSubExpressionNode)(subExpressionNode), spreadNode = (0, _node.spreadNodeFromSubExpressionNode)(subExpressionNode);
            subExpressionNode = (0, _node.subExpressionNodeFromSubExpressionNode)(subExpressionNode); ///
            const path = _path.default.fromPathNode(pathNode), spread = _spread.default.fromSpreadNode(spreadNode);
            subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);
            subExpression = new SubExpression(path, spread, subExpression); ///
        }
        return subExpression;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJFeHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQgU3ByZWFkIGZyb20gXCIuL3NwcmVhZFwiO1xuXG5pbXBvcnQgeyBwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSwgc3ByZWFkTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSwgc3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0U3ByZWFkKCkge1xuICAgIHJldHVybiB0aGlzLnNwcmVhZDtcbiAgfVxuXG4gIGdldFN1YkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lcygpIHsgcmV0dXJuIHRoaXMucGF0aC5nZXRSdWxlTmFtZXMoKTsgfVxuXG4gIGdldFRva2VuVHlwZXMoKSB7IHJldHVybiB0aGlzLnBhdGguZ2V0VG9rZW5UeXBlcygpOyB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7IHJldHVybiB0aGlzLnBhdGguaXNJbmZpbml0ZURlc2NlbnQoKTsgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpIHtcbiAgICBsZXQgc3ViRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBpZiAoc3ViRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhdGhOb2RlID0gcGF0aE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgc3ByZWFkTm9kZSA9IHNwcmVhZE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKTsgIC8vL1xuXG4gICAgICBjb25zdCBwYXRoID0gUGF0aC5mcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uID0gU3ViRXhwcmVzc2lvbi5mcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgICBzdWJFeHByZXNzaW9uID0gbmV3IFN1YkV4cHJlc3Npb24ocGF0aCwgc3ByZWFkLCBzdWJFeHByZXNzaW9uKTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YkV4cHJlc3Npb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJFeHByZXNzaW9uIiwicGF0aCIsInNwcmVhZCIsInN1YkV4cHJlc3Npb24iLCJnZXRQYXRoIiwiZ2V0U3ByZWFkIiwiZ2V0U3ViRXhwcmVzc2lvbiIsImdldFJ1bGVOYW1lcyIsImdldFRva2VuVHlwZXMiLCJpc0luZmluaXRlRGVzY2VudCIsImZyb21TdWJFeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlIiwicGF0aE5vZGUiLCJwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSIsInNwcmVhZE5vZGUiLCJzcHJlYWROb2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJQYXRoIiwiZnJvbVBhdGhOb2RlIiwiU3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7K0RBQ0U7c0JBRW9HOzs7Ozs7QUFFeEcsTUFBTUE7SUFDbkIsWUFBWUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsQ0FBRTtRQUN2QyxJQUFJLENBQUNGLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNILGFBQWE7SUFDM0I7SUFFQUksZUFBZTtRQUFFLE9BQU8sSUFBSSxDQUFDTixJQUFJLENBQUNNLFlBQVk7SUFBSTtJQUVsREMsZ0JBQWdCO1FBQUUsT0FBTyxJQUFJLENBQUNQLElBQUksQ0FBQ08sYUFBYTtJQUFJO0lBRXBEQyxvQkFBb0I7UUFBRSxPQUFPLElBQUksQ0FBQ1IsSUFBSSxDQUFDUSxpQkFBaUI7SUFBSTtJQUU1RCxPQUFPQyxzQkFBc0JDLGlCQUFpQixFQUFFO1FBQzlDLElBQUlSLGdCQUFnQjtRQUVwQixJQUFJUSxzQkFBc0IsTUFBTTtZQUM5QixNQUFNQyxXQUFXQyxJQUFBQSxtQ0FBNkIsRUFBQ0Ysb0JBQ3pDRyxhQUFhQyxJQUFBQSxxQ0FBK0IsRUFBQ0o7WUFFbkRBLG9CQUFvQkssSUFBQUEsNENBQXNDLEVBQUNMLG9CQUFxQixHQUFHO1lBRW5GLE1BQU1WLE9BQU9nQixhQUFJLENBQUNDLFlBQVksQ0FBQ04sV0FDekJWLFNBQVNpQixlQUFNLENBQUNDLGNBQWMsQ0FBQ047WUFFckNYLGdCQUFnQkgsY0FBY1UscUJBQXFCLENBQUNDO1lBRXBEUixnQkFBZ0IsSUFBSUgsY0FBY0MsTUFBTUMsUUFBUUMsZ0JBQWdCLEdBQUc7UUFDckU7UUFFQSxPQUFPQTtJQUNUO0FBQ0YifQ==