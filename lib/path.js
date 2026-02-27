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
const _node = require("./utilities/node");
class Path {
    constructor(ruleNames, tokenTypes, infiniteDescent){
        this.ruleNames = ruleNames;
        this.tokenTypes = tokenTypes;
        this.infiniteDescent = infiniteDescent;
    }
    getRuleNames() {
        return this.ruleNames;
    }
    getTokenTypes() {
        return this.tokenTypes;
    }
    isInfiniteDescent() {
        return this.infiniteDescent;
    }
    static fromPathNode(pathNode) {
        const ruleNames = (0, _node.ruleNamesFromPathNode)(pathNode), tokenTypes = (0, _node.tokenTypesFromPathNode)(pathNode), infiniteDescent = (0, _node.infiniteDescentFromPathNode)(pathNode), path = new Path(ruleNames, tokenTypes, infiniteDescent);
        return path;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tUGF0aE5vZGUsIHRva2VuVHlwZXNGcm9tUGF0aE5vZGUsIGluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHRva2VuVHlwZXMsIGluZmluaXRlRGVzY2VudCkge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudG9rZW5UeXBlcyA9IHRva2VuVHlwZXM7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0VG9rZW5UeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlblR5cGVzO1xuICB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVEZXNjZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoTm9kZShwYXRoTm9kZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgICAgdG9rZW5UeXBlcyA9IHRva2VuVHlwZXNGcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgICAgcGF0aCA9IG5ldyBQYXRoKHJ1bGVOYW1lcywgdG9rZW5UeXBlcywgaW5maW5pdGVEZXNjZW50KTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGF0aCIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJpbmZpbml0ZURlc2NlbnQiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJmcm9tUGF0aE5vZGUiLCJwYXRoTm9kZSIsInJ1bGVOYW1lc0Zyb21QYXRoTm9kZSIsInRva2VuVHlwZXNGcm9tUGF0aE5vZGUiLCJpbmZpbml0ZURlc2NlbnRGcm9tUGF0aE5vZGUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NCQUZzRTtBQUU1RSxNQUFNQTtJQUNuQixZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQ2xELElBQUksQ0FBQ0YsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsU0FBUztJQUN2QjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQSxPQUFPSSxhQUFhQyxRQUFRLEVBQUU7UUFDNUIsTUFBTVAsWUFBWVEsSUFBQUEsMkJBQXFCLEVBQUNELFdBQ2xDTixhQUFhUSxJQUFBQSw0QkFBc0IsRUFBQ0YsV0FDcENMLGtCQUFrQlEsSUFBQUEsaUNBQTJCLEVBQUNILFdBQzlDSSxPQUFPLElBQUlaLEtBQUtDLFdBQVdDLFlBQVlDO1FBRTdDLE9BQU9TO0lBQ1Q7QUFDRiJ9