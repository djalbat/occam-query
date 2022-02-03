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
function queryByClass(node, Class) {
    var nodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
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
function queryByClasses(node, Classes) {
    var nodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QnlDbGFzcyhub2RlLCBDbGFzcywgbm9kZXMgPSBbXSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIG5vZGVzKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3Nlcyhub2RlLCBDbGFzc2VzLCBub2RlcyA9IFtdKSB7XG4gIENsYXNzZXMuc29tZSgoQ2xhc3MpID0+IHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzZXMoY2hpbGROb2RlLCBDbGFzc2VzLCBub2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeUJ5Q2xhc3MsXG4gIHF1ZXJ5QnlDbGFzc2VzLFxuICBxdWVyeUJ5RXhwcmVzc2lvblxufTtcbiJdLCJuYW1lcyI6WyJxdWVyeUJ5Q2xhc3MiLCJxdWVyeUJ5Q2xhc3NlcyIsInF1ZXJ5QnlFeHByZXNzaW9uIiwibm9kZSIsIkNsYXNzIiwibm9kZXMiLCJwdXNoIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiQ2xhc3NlcyIsInNvbWUiLCJleHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUlJQSxZQUFZLEdBQVpBLFlBQVk7UUFnQlpDLGNBQWMsR0FBZEEsY0FBYztRQW9CZEMsaUJBQWlCLEdBQWpCQSxpQkFBaUI7O0FBdENmLEdBQVUsQ0FBVixNQUFVOzs7Ozs7Ozs7Ozs7O1NBRVpGLFlBQVksQ0FBQ0csSUFBSSxFQUFFQyxLQUFLLEVBQWMsQ0FBQztRQUFiQyxLQUFLLG9FQUFHLENBQUMsQ0FBQztJQUNsRCxFQUFFLEVBQUVGLFdBQXFCLENBQXJCQSxJQUFJLEVBQVlDLEtBQUssR0FBRSxDQUFDO1FBQzFCQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSTtJQUNqQixDQUFDO0lBRUQsR0FBSyxDQUFDSSxtQkFBbUIsR0FBR0osSUFBSSxDQUFDSyxpQkFBaUI7SUFFbEQsRUFBRSxFQUFFRCxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQ0UsVUFBVSxHQUFHTixJQUFJLENBQUNPLGFBQWE7UUFFckNELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsU0FBUztZQUFLWixNQUFNLENBQU5BLFlBQVksQ0FBQ1ksU0FBUyxFQUFFUixLQUFLLEVBQUVDLEtBQUs7O0lBQ3hFLENBQUM7SUFFRCxNQUFNLENBQUNBLEtBQUs7QUFDZCxDQUFDO1NBRWVKLGNBQWMsQ0FBQ0UsSUFBSSxFQUFFVSxPQUFPLEVBQWMsQ0FBQztRQUFiUixLQUFLLG9FQUFHLENBQUMsQ0FBQztJQUN0RFEsT0FBTyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFQVixLQUFLLEVBQUssQ0FBQztRQUN2QixFQUFFLEVBQUVELFdBQXFCLENBQXJCQSxJQUFJLEVBQVlDLEtBQUssR0FBRSxDQUFDO1lBQzFCQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSTtZQUVmLE1BQU0sQ0FBQyxJQUFJO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNJLG1CQUFtQixHQUFHSixJQUFJLENBQUNLLGlCQUFpQjtJQUVsRCxFQUFFLEVBQUVELG1CQUFtQixFQUFFLENBQUM7UUFDeEIsR0FBSyxDQUFDRSxVQUFVLEdBQUdOLElBQUksQ0FBQ08sYUFBYTtRQUVyQ0QsVUFBVSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQQyxTQUFTO1lBQUtYLE1BQU0sQ0FBTkEsY0FBYyxDQUFDVyxTQUFTLEVBQUVDLE9BQU8sRUFBRVIsS0FBSzs7SUFDNUUsQ0FBQztJQUVELE1BQU0sQ0FBQ0EsS0FBSztBQUNkLENBQUM7U0FFZUgsaUJBQWlCLENBQUNDLElBQUksRUFBRVksVUFBVSxFQUFFQyxZQUFZLEVBQUUsQ0FBQztJQUNqRSxHQUFLLENBQUNDLEtBQUssR0FBR0MsTUFBSyxTQUFDQyxjQUFjLENBQUNKLFVBQVUsRUFBRUMsWUFBWSxHQUNyRFgsS0FBSyxHQUFHWSxLQUFLLENBQUNHLE9BQU8sQ0FBQ2pCLElBQUk7SUFFaEMsTUFBTSxDQUFDRSxLQUFLO0FBQ2QsQ0FBQztlQUVjLENBQUM7SUFDZEwsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtBQUNuQixDQUFDIn0=