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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function queryByExpressionString(node, expressionString, maximumDepth) {
    var query = _query.default.fromExpressionString(expressionString, maximumDepth), nodes = query.execute(node);
    return nodes;
}
var _default = {
    queryByExpressionString: queryByExpressionString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBRdWVyeSBmcm9tIFwiLi4vcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QnlFeHByZXNzaW9uU3RyaW5nKG5vZGUsIGV4cHJlc3Npb25TdHJpbmcsIG1heGltdW1EZXB0aCkge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcsIG1heGltdW1EZXB0aCksXG4gICAgICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnlCeUV4cHJlc3Npb25TdHJpbmdcbn07XG4iXSwibmFtZXMiOlsicXVlcnlCeUV4cHJlc3Npb25TdHJpbmciLCJub2RlIiwiZXhwcmVzc2lvblN0cmluZyIsIm1heGltdW1EZXB0aCIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm5vZGVzIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBV0EsT0FFRTtlQUZGOztJQVBnQkEsdUJBQXVCO2VBQXZCQTs7OzREQUZFOzs7Ozs7QUFFWCxTQUFTQSx3QkFBd0JDLElBQUksRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVk7SUFDMUUsSUFBTUMsUUFBUUMsY0FBSyxDQUFDQyxvQkFBb0IsQ0FBQ0osa0JBQWtCQyxlQUNyREksUUFBUUgsTUFBTUksT0FBTyxDQUFDUDtJQUU1QixPQUFPTTtBQUNUO0lBRUEsV0FBZTtJQUNiUCx5QkFBQUE7QUFDRiJ9