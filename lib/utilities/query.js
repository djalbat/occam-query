"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    queryByClass: function() {
        return queryByClass;
    },
    queryByClasses: function() {
        return queryByClasses;
    },
    queryByExpression: function() {
        return queryByExpression;
    },
    default: function() {
        return _default;
    }
});
var _query = /*#__PURE__*/ _interopRequireDefault(require("../query"));
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QnlDbGFzcyhub2RlLCBDbGFzcywgbm9kZXMgPSBbXSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIG5vZGVzKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3Nlcyhub2RlLCBDbGFzc2VzLCBub2RlcyA9IFtdKSB7XG4gIENsYXNzZXMuc29tZSgoQ2xhc3MpID0+IHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gcXVlcnlCeUNsYXNzZXMoY2hpbGROb2RlLCBDbGFzc2VzLCBub2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeUV4cHJlc3Npb24obm9kZSwgZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKSxcbiAgICAgICAgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeUJ5Q2xhc3MsXG4gIHF1ZXJ5QnlDbGFzc2VzLFxuICBxdWVyeUJ5RXhwcmVzc2lvblxufTtcbiJdLCJuYW1lcyI6WyJxdWVyeUJ5Q2xhc3MiLCJxdWVyeUJ5Q2xhc3NlcyIsInF1ZXJ5QnlFeHByZXNzaW9uIiwibm9kZSIsIkNsYXNzIiwibm9kZXMiLCJwdXNoIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiQ2xhc3NlcyIsInNvbWUiLCJleHByZXNzaW9uIiwibWF4aW11bURlcHRoIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlHQSxZQUFZO2VBQVpBLFlBQVk7O0lBZ0JaQyxjQUFjO2VBQWRBLGNBQWM7O0lBb0JkQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFPakMsT0FJRTtlQUpGLFFBSUU7OzswREFqRGdCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFFckIsU0FBU0YsWUFBWSxDQUFDRyxJQUFJLEVBQUVDLEtBQUssRUFBYztRQUFaQyxLQUFLLEdBQUxBLCtDQUFVLGtCQUFGLEVBQUU7SUFDbEQsSUFBSUYsQUFBSSxXQUFZQyxDQUFoQkQsSUFBSSxFQUFZQyxLQUFLLENBQUEsRUFBRTtRQUN6QkMsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsSUFBTUksbUJBQW1CLEdBQUdKLElBQUksQ0FBQ0ssaUJBQWlCLEVBQUUsQUFBQztJQUVyRCxJQUFJRCxtQkFBbUIsRUFBRTtRQUN2QixJQUFNRSxVQUFVLEdBQUdOLElBQUksQ0FBQ08sYUFBYSxFQUFFLEFBQUM7UUFFeENELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFNBQUNDLFNBQVM7bUJBQUtaLFlBQVksQ0FBQ1ksU0FBUyxFQUFFUixLQUFLLEVBQUVDLEtBQUssQ0FBQztTQUFBLENBQUMsQ0FBQztLQUMxRTtJQUVELE9BQU9BLEtBQUssQ0FBQztDQUNkO0FBRU0sU0FBU0osY0FBYyxDQUFDRSxJQUFJLEVBQUVVLE9BQU8sRUFBYztRQUFaUixLQUFLLEdBQUxBLCtDQUFVLGtCQUFGLEVBQUU7SUFDdERRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFNBQUNWLEtBQUssRUFBSztRQUN0QixJQUFJRCxBQUFJLFdBQVlDLENBQWhCRCxJQUFJLEVBQVlDLEtBQUssQ0FBQSxFQUFFO1lBQ3pCQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7WUFFakIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQ0FBQztJQUVILElBQU1JLG1CQUFtQixHQUFHSixJQUFJLENBQUNLLGlCQUFpQixFQUFFLEFBQUM7SUFFckQsSUFBSUQsbUJBQW1CLEVBQUU7UUFDdkIsSUFBTUUsVUFBVSxHQUFHTixJQUFJLENBQUNPLGFBQWEsRUFBRSxBQUFDO1FBRXhDRCxVQUFVLENBQUNFLE9BQU8sQ0FBQyxTQUFDQyxTQUFTO21CQUFLWCxjQUFjLENBQUNXLFNBQVMsRUFBRUMsT0FBTyxFQUFFUixLQUFLLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDOUU7SUFFRCxPQUFPQSxLQUFLLENBQUM7Q0FDZDtBQUVNLFNBQVNILGlCQUFpQixDQUFDQyxJQUFJLEVBQUVZLFVBQVUsRUFBRUMsWUFBWSxFQUFFO0lBQ2hFLElBQU1DLEtBQUssR0FBR0MsTUFBSyxRQUFBLENBQUNDLGNBQWMsQ0FBQ0osVUFBVSxFQUFFQyxZQUFZLENBQUMsRUFDdERYLEtBQUssR0FBR1ksS0FBSyxDQUFDRyxPQUFPLENBQUNqQixJQUFJLENBQUMsQUFBQztJQUVsQyxPQUFPRSxLQUFLLENBQUM7Q0FDZDtJQUVELFFBSUUsR0FKYTtJQUNiTCxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsY0FBYyxFQUFkQSxjQUFjO0lBQ2RDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0NBQ2xCIn0=