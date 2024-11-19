"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionParseTreeTextarea;
    }
});
var _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ExpressionParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(ExpressionParseTreeTextarea, ParseTreeTextarea);
    function ExpressionParseTreeTextarea() {
        _class_call_check(this, ExpressionParseTreeTextarea);
        return _call_super(this, ExpressionParseTreeTextarea, arguments);
    }
    _create_class(ExpressionParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var setExpressionParseTree = this.setParseTree.bind(this), clearExpressionParseTree = this.clearParseTree.bind(this); ///
                return {
                    setExpressionParseTree: setExpressionParseTree,
                    clearExpressionParseTree: clearExpressionParseTree
                };
            }
        }
    ]);
    return ExpressionParseTreeTextarea;
}(_parseTree.default);
_define_property(ExpressionParseTreeTextarea, "defaultProperties", {
    className: "expression"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25QYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFBhcnNlVHJlZVRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRFeHByZXNzaW9uUGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2xlYXJFeHByZXNzaW9uUGFyc2VUcmVlID0gdGhpcy5jbGVhclBhcnNlVHJlZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0RXhwcmVzc2lvblBhcnNlVHJlZSxcbiAgICAgIGNsZWFyRXhwcmVzc2lvblBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHByZXNzaW9uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0Iiwic2V0RXhwcmVzc2lvblBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImJpbmQiLCJjbGVhckV4cHJlc3Npb25QYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDcERDLDJCQUEyQixJQUFJLENBQUNDLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUVwRSxPQUFRO29CQUNORix3QkFBQUE7b0JBQ0FHLDBCQUFBQTtnQkFDRjtZQUNGOzs7V0FUbUJMO0VBQW9DTyxrQkFBaUI7QUFXeEUsaUJBWG1CUCw2QkFXWlEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==