"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Spread;
    }
});
const _necessary = require("necessary");
const _array = require("./utilities/array");
const _node = require("./utilities/node");
const { EXCLAMATION_MARK_CHARACTER } = _necessary.characters;
class Spread {
    constructor(startIndex, endIndex, unique){
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.unique = unique;
    }
    adjustNodes(nodes) {
        if (this.unique) {
            const nodesLength = nodes.length;
            if (nodesLength > 1) {
                (0, _array.clear)(nodes);
            }
        } else {
            (0, _array.trim)(nodes, this.startIndex, this.endIndex);
        }
    }
    static fromNothing() {
        const startIndex = 0, endIndex = Infinity, unique = false, spread = new Spread(startIndex, endIndex, unique);
        return spread;
    }
    static fromSpreadNode(spreadNode) {
        let startIndex = 0, endIndex = Infinity, unique = false;
        if (spreadNode !== null) {
            const index = (0, _node.indexFromSpreadNode)(spreadNode);
            if (index !== null) {
                startIndex = index; ///
                endIndex = index; ///
            } else {
                startIndex = (0, _node.startIndexFromSpreadNode)(spreadNode);
                endIndex = (0, _node.endIndexFromSpreadNode)(spreadNode);
            }
            unique = (0, _node.uniqueFromSpreadNode)(spreadNode);
        }
        const spread = new Spread(startIndex, endIndex, unique);
        return spread;
    }
    static fromSpreadExpression(spreadExpression) {
        let startIndex = 0, endIndex = Infinity, unique = false;
        if (spreadExpression !== null) {
            if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
                unique = true;
            } else {
                const regExp = /\[(-?\d+)?(\.\.\.)?(-?\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array.second)(matches) || null, thirdMatch = (0, _array.third)(matches) || null, fourthMatch = (0, _array.fourth)(matches) || null;
                if (secondMatch !== null) {
                    startIndex = parseInt(secondMatch);
                    if (thirdMatch === null) {
                        endIndex = startIndex; ///
                    }
                }
                if (fourthMatch !== null) {
                    endIndex = parseInt(fourthMatch);
                    if (thirdMatch === null) {
                        startIndex = endIndex; ///
                    }
                }
            }
        }
        const spread = new Spread(startIndex, endIndex, unique);
        return spread;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcHJlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsZWFyLCB0cmltLCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGluZGV4RnJvbVNwcmVhZE5vZGUsXG4gICAgICAgICB1bmlxdWVGcm9tU3ByZWFkTm9kZSxcbiAgICAgICAgIGVuZEluZGV4RnJvbVNwcmVhZE5vZGUsXG4gICAgICAgICBzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWQge1xuICBjb25zdHJ1Y3RvcihzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKSB7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgdGhpcy51bmlxdWUgPSB1bmlxdWU7XG4gIH1cblxuICBhZGp1c3ROb2Rlcyhub2Rlcykge1xuICAgIGlmICh0aGlzLnVuaXF1ZSkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xlYXIobm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmltKG5vZGVzLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgICBlbmRJbmRleCA9IEluZmluaXR5LFxuICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlLFxuICAgICAgICAgIHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgsIHVuaXF1ZSk7XG5cbiAgICByZXR1cm4gc3ByZWFkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpIHtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgIGVuZEluZGV4ID0gSW5maW5pdHksXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNwcmVhZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleDsgLy8vXG5cbiAgICAgICAgZW5kSW5kZXggPSBpbmRleDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydEluZGV4ID0gc3RhcnRJbmRleEZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpO1xuXG4gICAgICAgIGVuZEluZGV4ID0gZW5kSW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKTtcbiAgICAgIH1cblxuICAgICAgdW5pcXVlID0gdW5pcXVlRnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbikge1xuICAgIGxldCBzdGFydEluZGV4ID0gMCxcbiAgICAgICAgZW5kSW5kZXggPSBJbmZpbml0eSxcbiAgICAgICAgdW5pcXVlID0gZmFsc2U7XG5cbiAgICBpZiAoc3ByZWFkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNwcmVhZEV4cHJlc3Npb24gPT09IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSB7XG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdFeHAgPSAvXFxbKC0/XFxkKyk/KFxcLlxcLlxcLik/KC0/XFxkKyk/XS8sXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBzcHJlYWRFeHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSB8fCBudWxsLFxuICAgICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzZWNvbmRNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBwYXJzZUludChzZWNvbmRNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgICBpZiAodGhpcmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gbmV3IFNwcmVhZChzdGFydEluZGV4LCBlbmRJbmRleCwgdW5pcXVlKTtcblxuICAgIHJldHVybiBzcHJlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTcHJlYWQiLCJFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1bmlxdWUiLCJhZGp1c3ROb2RlcyIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjbGVhciIsInRyaW0iLCJmcm9tTm90aGluZyIsIkluZmluaXR5Iiwic3ByZWFkIiwiZnJvbVNwcmVhZE5vZGUiLCJzcHJlYWROb2RlIiwiaW5kZXgiLCJpbmRleEZyb21TcHJlYWROb2RlIiwic3RhcnRJbmRleEZyb21TcHJlYWROb2RlIiwiZW5kSW5kZXhGcm9tU3ByZWFkTm9kZSIsInVuaXF1ZUZyb21TcHJlYWROb2RlIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXFCQTs7OzJCQVZNO3VCQUV3QjtzQkFJVjtBQUV6QyxNQUFNLEVBQUVDLDBCQUEwQixFQUFFLEdBQUdDLHFCQUFVO0FBRWxDLE1BQU1GO0lBQ25CLFlBQVlHLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUU7UUFDeEMsSUFBSSxDQUFDRixVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWUMsS0FBSyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDRixNQUFNLEVBQUU7WUFDZixNQUFNRyxjQUFjRCxNQUFNRSxNQUFNO1lBRWhDLElBQUlELGNBQWMsR0FBRztnQkFDbkJFLElBQUFBLFlBQUssRUFBQ0g7WUFDUjtRQUNGLE9BQU87WUFDTEksSUFBQUEsV0FBSSxFQUFDSixPQUFPLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsUUFBUTtRQUM1QztJQUNGO0lBRUEsT0FBT1EsY0FBYztRQUNuQixNQUFNVCxhQUFhLEdBQ2JDLFdBQVdTLFVBQ1hSLFNBQVMsT0FDVFMsU0FBUyxJQUFJZCxPQUFPRyxZQUFZQyxVQUFVQztRQUVoRCxPQUFPUztJQUNUO0lBRUEsT0FBT0MsZUFBZUMsVUFBVSxFQUFFO1FBQ2hDLElBQUliLGFBQWEsR0FDYkMsV0FBV1MsVUFDWFIsU0FBUztRQUViLElBQUlXLGVBQWUsTUFBTTtZQUN2QixNQUFNQyxRQUFRQyxJQUFBQSx5QkFBbUIsRUFBQ0Y7WUFFbEMsSUFBSUMsVUFBVSxNQUFNO2dCQUNsQmQsYUFBYWMsT0FBTyxHQUFHO2dCQUV2QmIsV0FBV2EsT0FBTyxHQUFHO1lBQ3ZCLE9BQU87Z0JBQ0xkLGFBQWFnQixJQUFBQSw4QkFBd0IsRUFBQ0g7Z0JBRXRDWixXQUFXZ0IsSUFBQUEsNEJBQXNCLEVBQUNKO1lBQ3BDO1lBRUFYLFNBQVNnQixJQUFBQSwwQkFBb0IsRUFBQ0w7UUFDaEM7UUFFQSxNQUFNRixTQUFTLElBQUlkLE9BQU9HLFlBQVlDLFVBQVVDO1FBRWhELE9BQU9TO0lBQ1Q7SUFFQSxPQUFPUSxxQkFBcUJDLGdCQUFnQixFQUFFO1FBQzVDLElBQUlwQixhQUFhLEdBQ2JDLFdBQVdTLFVBQ1hSLFNBQVM7UUFFYixJQUFJa0IscUJBQXFCLE1BQU07WUFDN0IsSUFBSUEscUJBQXFCdEIsNEJBQTRCO2dCQUNuREksU0FBUztZQUNYLE9BQU87Z0JBQ0wsTUFBTW1CLFNBQVMsZ0NBQ1RDLFVBQVVGLGlCQUFpQkcsS0FBSyxDQUFDRixTQUNqQ0csY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxZQUFZLE1BQ2pDSSxhQUFhQyxJQUFBQSxZQUFLLEVBQUNMLFlBQVksTUFDL0JNLGNBQWNDLElBQUFBLGFBQU0sRUFBQ1AsWUFBWTtnQkFFdkMsSUFBSUUsZ0JBQWdCLE1BQU07b0JBQ3hCeEIsYUFBYThCLFNBQVNOO29CQUV0QixJQUFJRSxlQUFlLE1BQU07d0JBQ3ZCekIsV0FBV0QsWUFBYSxHQUFHO29CQUM3QjtnQkFDRjtnQkFFQSxJQUFJNEIsZ0JBQWdCLE1BQU07b0JBQ3hCM0IsV0FBVzZCLFNBQVNGO29CQUVwQixJQUFJRixlQUFlLE1BQU07d0JBQ3ZCMUIsYUFBYUMsVUFBVyxHQUFHO29CQUM3QjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxNQUFNVSxTQUFTLElBQUlkLE9BQU9HLFlBQVlDLFVBQVVDO1FBRWhELE9BQU9TO0lBQ1Q7QUFDRiJ9