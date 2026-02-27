"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        parseTree.shiftLine(); //
        const parseTreeString = parseTree.asString(), value = parseTreeString; ///
        this.setValue(value);
    }
    clearParseTree(parseTree) {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this); ///
        return {
            setParseTree,
            clearParseTree
        };
    }
    static defaultProperties = {
        className: "parse-tree",
        spellCheck: "false",
        readOnly: true
    };
}
const _default = (0, _easywithstyle.default)(ParseTreeTextarea)`
  
  height: 32rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRQYXJzZVRyZWUsXG4gICAgICBjbGVhclBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXJzZS10cmVlXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYXJzZVRyZWVUZXh0YXJlYSlgXG4gIFxuICBoZWlnaHQ6IDMycmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwiVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhclBhcnNlVHJlZSIsIkVNUFRZX1NUUklORyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7OztzRUF2Q3NCO2lFQUVEOzJCQUVROzs7Ozs7QUFFN0IsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUN0Q0MsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCQSxVQUFVQyxTQUFTLElBQUssRUFBRTtRQUUxQixNQUFNQyxrQkFBa0JGLFVBQVVHLFFBQVEsSUFDcENDLFFBQVFGLGlCQUFrQixHQUFHO1FBRW5DLElBQUksQ0FBQ0csUUFBUSxDQUFDRDtJQUNoQjtJQUVBRSxlQUFlTixTQUFTLEVBQUU7UUFDeEIsTUFBTUksUUFBUUcsdUJBQVk7UUFFMUIsSUFBSSxDQUFDRixRQUFRLENBQUNEO0lBQ2hCO0lBRUFJLGdCQUFnQjtRQUNkLE1BQU1ULGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNVLElBQUksQ0FBQyxJQUFJLEdBQzFDSCxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUUxRCxPQUFRO1lBQ05WO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFVBQVU7SUFDWixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakIsa0JBQWtCLENBQUM7Ozs7QUFJNUMsQ0FBQyJ9