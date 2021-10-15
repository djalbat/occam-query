"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryByClass = queryByClass;
exports.queryByClasses = queryByClasses;
exports.queryByExpression = queryByExpression;
exports.default = void 0;
var _query = _interopRequireDefault(require("../query"));
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function queryByClass(node, Class, param) {
    var nodes = param === void 0 ? [] : param;
    if (_instanceof(node, Class)) {
        nodes.push(node);
    }
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
            return queryByClass(childNode, Class, nodes);
        });
    }
    return nodes;
}
function queryByClasses(node, Classes, param) {
    var nodes = param === void 0 ? [] : param;
    Classes.some(function(Class) {
        if (_instanceof(node, Class)) {
            nodes.push(node);
            return true;
        }
    });
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
            return queryByClasses(childNode, Classes, nodes);
        });
    }
    return nodes;
}
function queryByExpression(node, expression, maximumDepth) {
    var query = _query.default.fromExpression(expression, maximumDepth), nodes = query.execute(node);
    return nodes;
}
var _default = {
    queryByClass: queryByClass,
    queryByClasses: queryByClasses,
    queryByExpression: queryByExpression
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwibmFtZXMiOlsiUXVlcnkiLCJxdWVyeUJ5Q2xhc3MiLCJub2RlIiwiQ2xhc3MiLCJub2RlcyIsInB1c2giLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJxdWVyeUJ5Q2xhc3NlcyIsIkNsYXNzZXMiLCJzb21lIiwicXVlcnlCeUV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwicXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImV4ZWN1dGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFJSSxZQUFZLEdBQVosWUFBWTtRQWdCWixjQUFjLEdBQWQsY0FBYztRQW9CZCxpQkFBaUIsR0FBakIsaUJBQWlCOztBQXRDZixHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7OztTQUVaLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxDQUFDO1FBQWIsS0FBSyxHQUFMLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVixLQUFVO0lBQ2xELEVBQUUsRUFBRSxXQUFxQixDQUFyQixJQUFJLEVBQVksS0FBSyxHQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO0lBQ2pCLENBQUM7SUFFRCxHQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtJQUVsRCxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztRQUN4QixHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBRXJDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFNBQVM7WUFBSyxNQUFNLENBQU4sWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSzs7SUFDeEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQztTQUVlLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQVUsRUFBRSxDQUFDO1FBQWIsS0FBSyxHQUFMLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVixLQUFVO0lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO1FBQ3ZCLEVBQUUsRUFBRSxXQUFxQixDQUFyQixJQUFJLEVBQVksS0FBSyxHQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBRWYsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCO0lBRWxELEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFckMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsU0FBUztZQUFLLE1BQU0sQ0FBTixjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLOztJQUM1RSxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNqRSxHQUFLLENBQUMsS0FBSyxHQXZDSyxNQUFVLFNBdUNOLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxHQUNyRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0lBRWhDLE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQztlQUVjLENBQUM7SUFDZCxZQUFZLEVBQVosWUFBWTtJQUNaLGNBQWMsRUFBZCxjQUFjO0lBQ2QsaUJBQWlCLEVBQWpCLGlCQUFpQjtBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QnlDbGFzcyhub2RlLCBDbGFzcywgbm9kZXMgPSBbXSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIG5vZGVzKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3Nlcyhub2RlLCBDbGFzc2VzLCBub2RlcyA9IFtdKSB7XG4gIENsYXNzZXMuc29tZSgoQ2xhc3MpID0+IHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzZXMoY2hpbGROb2RlLCBDbGFzc2VzLCBub2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeUJ5Q2xhc3MsXG4gIHF1ZXJ5QnlDbGFzc2VzLFxuICBxdWVyeUJ5RXhwcmVzc2lvblxufTtcbiJdfQ==