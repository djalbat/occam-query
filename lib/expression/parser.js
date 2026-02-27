"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ExpressionParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(ExpressionParser);
    }
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(ExpressionParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(ExpressionParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzaW9uL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKEV4cHJlc3Npb25QYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihFeHByZXNzaW9uUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhFeHByZXNzaW9uUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7OEJBSlE7NERBRWI7Ozs7OztBQUVELE1BQU1BLHlCQUF5QkMsMEJBQVk7SUFDeEQsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPRiwwQkFBWSxDQUFDRSxXQUFXLENBQUNIO0lBQW1CO0lBRTFFLE9BQU9JLFFBQVFGLEdBQUcsRUFBRTtRQUFFLE9BQU9ELDBCQUFZLENBQUNHLE9BQU8sQ0FBQ0osa0JBQWtCRTtJQUFNO0lBRTFFLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ0wsa0JBQWtCTTtJQUFRO0FBQ3BGIn0=