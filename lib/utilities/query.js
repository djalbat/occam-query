"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get queryByExpressionString () {
        return queryByExpressionString;
    }
});
const _query = /*#__PURE__*/ _interop_require_default(require("../query"));
const _expression = /*#__PURE__*/ _interop_require_default(require("../expression"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function queryByExpressionString(node, expressionString, maximumDepth) {
    let nodes = null;
    const expression = _expression.default.fromExpressionString(expressionString);
    if (expression !== null) {
        const query = _query.default.fromExpression(expression, maximumDepth);
        nodes = query.execute(node);
    }
    return nodes;
}
const _default = {
    queryByExpressionString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcbmltcG9ydCBFeHByZXNzaW9uIGZyb20gXCIuLi9leHByZXNzaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyhub2RlLCBleHByZXNzaW9uU3RyaW5nLCBtYXhpbXVtRGVwdGgpIHtcbiAgbGV0IG5vZGVzID0gbnVsbDtcblxuICBjb25zdCBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoKTtcblxuICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJleHByZXNzaW9uU3RyaW5nIiwibWF4aW11bURlcHRoIiwibm9kZXMiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBbUJBO2VBQUE7O1FBZGdCQTtlQUFBQTs7OzhEQUhFO21FQUNLOzs7Ozs7QUFFaEIsU0FBU0Esd0JBQXdCQyxJQUFJLEVBQUVDLGdCQUFnQixFQUFFQyxZQUFZO0lBQzFFLElBQUlDLFFBQVE7SUFFWixNQUFNQyxhQUFhQyxtQkFBVSxDQUFDQyxvQkFBb0IsQ0FBQ0w7SUFFbkQsSUFBSUcsZUFBZSxNQUFNO1FBQ3ZCLE1BQU1HLFFBQVFDLGNBQUssQ0FBQ0MsY0FBYyxDQUFDTCxZQUFZRjtRQUUvQ0MsUUFBUUksTUFBTUcsT0FBTyxDQUFDVjtJQUN4QjtJQUVBLE9BQU9HO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JKO0FBQ0YifQ==