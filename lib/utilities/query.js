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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwibmFtZXMiOlsiUXVlcnkiLCJxdWVyeUJ5Q2xhc3MiLCJub2RlIiwiQ2xhc3MiLCJub2RlcyIsInB1c2giLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJxdWVyeUJ5Q2xhc3NlcyIsIkNsYXNzZXMiLCJzb21lIiwicXVlcnlCeUV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwicXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImV4ZWN1dGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFJSSxZQUFZLEdBQVosWUFBWTtRQWdCWixjQUFjLEdBQWQsY0FBYztRQW9CZCxpQkFBaUIsR0FBakIsaUJBQWlCOztBQXRDZixHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7OztTQUVaLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxDQUFDO1FBQWIsS0FBSyxHQUFMLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVixLQUFVO0lBQ2xELEVBQUUsRUFBRSxXQUFxQixDQUFyQixJQUFJLEVBQVksS0FBSyxHQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO0lBQ2pCLENBQUM7SUFFRCxHQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtJQUVsRCxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztRQUN4QixHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBRXJDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFNBQVM7WUFBSyxNQUFNLENBQU4sWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSzs7SUFDeEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQztTQUVlLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQVUsRUFBRSxDQUFDO1FBQWIsS0FBSyxHQUFMLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVixLQUFVO0lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO1FBQ3ZCLEVBQUUsRUFBRSxXQUFxQixDQUFyQixJQUFJLEVBQVksS0FBSyxHQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBRWYsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCO0lBRWxELEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFckMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsU0FBUztZQUFLLE1BQU0sQ0FBTixjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLOztJQUM1RSxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNqRSxHQUFLLENBQUMsS0FBSyxHQXZDSyxNQUFVLFNBdUNOLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxHQUNyRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0lBRWhDLE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQztlQUVjLENBQUM7SUFDZCxZQUFZLEVBQVosWUFBWTtJQUNaLGNBQWMsRUFBZCxjQUFjO0lBQ2QsaUJBQWlCLEVBQWpCLGlCQUFpQjtBQUNuQixDQUFDIn0=