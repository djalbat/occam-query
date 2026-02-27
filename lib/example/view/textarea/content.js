"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentTextarea extends _textarea.default {
    getContent() {
        const value = this.getValue(), content = value; ///
        return content;
    }
    setContent(content) {
        const value = content;
        this.setValue(value);
    }
    parentContext() {
        const getContent = this.getContent.bind(this), setContent = this.setContent.bind(this);
        return {
            getContent,
            setContent
        };
    }
    static defaultProperties = {
        className: "content",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50O1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBzZXRDb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50VGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2lFQUZBOzs7Ozs7QUFFTixNQUFNQSx3QkFBd0JDLGlCQUFRO0lBQ25EQyxhQUFhO1FBQ1gsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFVBQVVGLE9BQU8sR0FBRztRQUUxQixPQUFPRTtJQUNUO0lBRUFDLFdBQVdELE9BQU8sRUFBRTtRQUNsQixNQUFNRixRQUFRRTtRQUVkLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxnQkFBZ0I7UUFDZCxNQUFNTixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUN0Q0gsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLElBQUk7UUFFNUMsT0FBUTtZQUNOUDtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9