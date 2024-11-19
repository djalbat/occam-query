"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Path;
    }
});
var _node = require("./utilities/node");
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
var Path = /*#__PURE__*/ function() {
    function Path(ruleNames, tokenTypes, infiniteDescent) {
        _class_call_check(this, Path);
        this.ruleNames = ruleNames;
        this.tokenTypes = tokenTypes;
        this.infiniteDescent = infiniteDescent;
    }
    _create_class(Path, [
        {
            key: "getRuleNames",
            value: function getRuleNames() {
                return this.ruleNames;
            }
        },
        {
            key: "getTokenTypes",
            value: function getTokenTypes() {
                return this.tokenTypes;
            }
        },
        {
            key: "isInfiniteDescent",
            value: function isInfiniteDescent() {
                return this.infiniteDescent;
            }
        }
    ], [
        {
            key: "fromPathNode",
            value: function fromPathNode(pathNode) {
                var ruleNames = (0, _node.ruleNamesFromPathNode)(pathNode), tokenTypes = (0, _node.tokenTypesFromPathNode)(pathNode), infiniteDescent = (0, _node.infiniteDescentFromPathNode)(pathNode), path = new Path(ruleNames, tokenTypes, infiniteDescent);
                return path;
            }
        }
    ]);
    return Path;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tUGF0aE5vZGUsIHRva2VuVHlwZXNGcm9tUGF0aE5vZGUsIGluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHRva2VuVHlwZXMsIGluZmluaXRlRGVzY2VudCkge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudG9rZW5UeXBlcyA9IHRva2VuVHlwZXM7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0VG9rZW5UeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlblR5cGVzO1xuICB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVEZXNjZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoTm9kZShwYXRoTm9kZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgICAgdG9rZW5UeXBlcyA9IHRva2VuVHlwZXNGcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgICAgcGF0aCA9IG5ldyBQYXRoKHJ1bGVOYW1lcywgdG9rZW5UeXBlcywgaW5maW5pdGVEZXNjZW50KTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGF0aCIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJpbmZpbml0ZURlc2NlbnQiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJmcm9tUGF0aE5vZGUiLCJwYXRoTm9kZSIsInJ1bGVOYW1lc0Zyb21QYXRoTm9kZSIsInRva2VuVHlwZXNGcm9tUGF0aE5vZGUiLCJpbmZpbml0ZURlc2NlbnRGcm9tUGF0aE5vZGUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztvQkFGc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLGVBQWU7Z0NBRC9CSDtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBSk5IOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQU1QLFlBQVlRLElBQUFBLDJCQUFxQixFQUFDRCxXQUNsQ04sYUFBYVEsSUFBQUEsNEJBQXNCLEVBQUNGLFdBQ3BDTCxrQkFBa0JRLElBQUFBLGlDQUEyQixFQUFDSCxXQUM5Q0ksT0FBTyxJQXZCSVosS0F1QktDLFdBQVdDLFlBQVlDO2dCQUU3QyxPQUFPUztZQUNUOzs7V0ExQm1CWiJ9