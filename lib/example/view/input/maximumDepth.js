"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MaximumDepthInput;
    }
});
const _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MaximumDepthInput extends _input.default {
    getMaximumDepth() {
        const value = this.getValue(), maximumDepth = Number(value);
        return maximumDepth;
    }
    setMaximumDepth(maximumDepth) {
        const value = maximumDepth; ///
        this.setValue(value);
    }
    parentContext() {
        const getMaximumDepth = this.getMaximumDepth.bind(this), setMaximumDepth = this.setMaximumDepth.bind(this), setMaximumDepthReadOnly = this.setReadOnly.bind(this); ///;
        return {
            getMaximumDepth,
            setMaximumDepth,
            setMaximumDepthReadOnly
        };
    }
    static defaultProperties = {
        className: "maximum-depth",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvbWF4aW11bURlcHRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1heGltdW1EZXB0aElucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gTnVtYmVyKHZhbHVlKTtcblxuICAgIHJldHVybiBtYXhpbXVtRGVwdGg7XG4gIH1cblxuICBzZXRNYXhpbXVtRGVwdGgobWF4aW11bURlcHRoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXhpbXVtRGVwdGg7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TWF4aW11bURlcHRoID0gdGhpcy5zZXRNYXhpbXVtRGVwdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGgsXG4gICAgICBzZXRNYXhpbXVtRGVwdGhSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXhpbXVtLWRlcHRoXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTWF4aW11bURlcHRoSW5wdXQiLCJJbnB1dCIsImdldE1heGltdW1EZXB0aCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXhpbXVtRGVwdGgiLCJOdW1iZXIiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwic2V0TWF4aW11bURlcHRoUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs4REFGSDs7Ozs7O0FBRUgsTUFBTUEsMEJBQTBCQyxjQUFLO0lBQ2xEQyxrQkFBa0I7UUFDaEIsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGVBQWVDLE9BQU9IO1FBRTVCLE9BQU9FO0lBQ1Q7SUFFQUUsZ0JBQWdCRixZQUFZLEVBQUU7UUFDNUIsTUFBTUYsUUFBUUUsY0FBYyxHQUFHO1FBRS9CLElBQUksQ0FBQ0csUUFBUSxDQUFDTDtJQUNoQjtJQUVBTSxnQkFBZ0I7UUFDZCxNQUFNUCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQ2hESCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNHLElBQUksQ0FBQyxJQUFJLEdBQ2hEQywwQkFBMEIsSUFBSSxDQUFDQyxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUVqRSxPQUFRO1lBQ05SO1lBQ0FLO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKIn0=