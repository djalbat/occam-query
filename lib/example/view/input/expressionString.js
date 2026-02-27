"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionStringInput;
    }
});
const _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ExpressionStringInput extends _input.default {
    getExpressionString() {
        const value = this.getValue(), expression = value; ///
        return expression;
    }
    setExpressionString(expressionString) {
        const value = expressionString; ///
        this.setValue(value);
    }
    parentContext() {
        const getExpressionString = this.getExpressionString.bind(this), setExpressionString = this.setExpressionString.bind(this); ///;
        return {
            getExpressionString,
            setExpressionString
        };
    }
    static defaultProperties = {
        className: "expression-string",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvZXhwcmVzc2lvblN0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uU3RyaW5nSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldEV4cHJlc3Npb25TdHJpbmcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc2V0RXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKSB7XG4gICAgY29uc3QgdmFsdWUgPSBleHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5nZXRFeHByZXNzaW9uU3RyaW5nLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0RXhwcmVzc2lvblN0cmluZyA9IHRoaXMuc2V0RXhwcmVzc2lvblN0cmluZy5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEV4cHJlc3Npb25TdHJpbmcsXG4gICAgICBzZXRFeHByZXNzaW9uU3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cHJlc3Npb24tc3RyaW5nXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvblN0cmluZ0lucHV0IiwiSW5wdXQiLCJnZXRFeHByZXNzaW9uU3RyaW5nIiwidmFsdWUiLCJnZXRWYWx1ZSIsImV4cHJlc3Npb24iLCJzZXRFeHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7OERBRkg7Ozs7OztBQUVILE1BQU1BLDhCQUE4QkMsY0FBSztJQUN0REMsc0JBQXNCO1FBQ3BCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUFPLEdBQUc7UUFFN0IsT0FBT0U7SUFDVDtJQUVBQyxvQkFBb0JDLGdCQUFnQixFQUFFO1FBQ3BDLE1BQU1KLFFBQVFJLGtCQUFrQixHQUFHO1FBRW5DLElBQUksQ0FBQ0MsUUFBUSxDQUFDTDtJQUNoQjtJQUVBTSxnQkFBZ0I7UUFDZCxNQUFNUCxzQkFBc0IsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FDeERKLHNCQUFzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFFckUsT0FBUTtZQUNOUjtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9