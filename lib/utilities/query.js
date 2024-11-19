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
    default: function() {
        return _default;
    },
    queryByExpressionString: function() {
        return queryByExpressionString;
    }
});
var _query = /*#__PURE__*/ _interop_require_default(require("../query"));
var _expression = /*#__PURE__*/ _interop_require_default(require("../expression"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function queryByExpressionString(node, expressionString, maximumDepth) {
    var nodes = null;
    var expression = _expression.default.fromExpressionString(expressionString);
    if (expression !== null) {
        var query = _query.default.fromExpression(expression, maximumDepth);
        nodes = query.execute(node);
    }
    return nodes;
}
var _default = {
    queryByExpressionString: queryByExpressionString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcbmltcG9ydCBFeHByZXNzaW9uIGZyb20gXCIuLi9leHByZXNzaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyhub2RlLCBleHByZXNzaW9uU3RyaW5nLCBtYXhpbXVtRGVwdGgpIHtcbiAgbGV0IG5vZGVzID0gbnVsbDtcblxuICBjb25zdCBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJleHByZXNzaW9uU3RyaW5nIiwibWF4aW11bURlcHRoIiwibm9kZXMiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUJBLE9BRUU7ZUFGRjs7SUFkZ0JBLHVCQUF1QjtlQUF2QkE7Ozs0REFIRTtpRUFDSzs7Ozs7O0FBRWhCLFNBQVNBLHdCQUF3QkMsSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWTtJQUMxRSxJQUFJQyxRQUFRO0lBRVosSUFBTUMsYUFBYUMsbUJBQVUsQ0FBQ0Msb0JBQW9CLENBQUNMO0lBRW5ELElBQUlHLGVBQWUsTUFBTTtRQUN2QixJQUFNRyxRQUFRQyxjQUFLLENBQUNDLGNBQWMsQ0FBQ0wsWUFBWUY7UUFFL0NDLFFBQVFJLE1BQU1HLE9BQU8sQ0FBQ1Y7SUFDeEI7SUFFQSxPQUFPRztBQUNUO0lBRUEsV0FBZTtJQUNiSix5QkFBQUE7QUFDRiJ9