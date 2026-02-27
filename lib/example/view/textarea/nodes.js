"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodesTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../../constants");
const _token = require("../../utilities/token");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NodesTextarea extends _textarea.default {
    setNodes(nodes, tokens) {
        const value = nodes.reduce((value, node)=>{
            const nodeTerminalNode = node.isTerminalNode();
            if (nodeTerminalNode) {
                const terminalNode = node, significantToken = terminalNode.getSignificantToken(), significantTokenType = significantToken.getType(), tokenIndex = (0, _token.tokenIndexFromTerminalNodeAndTokens)(terminalNode, tokens);
                value = `${value}[${significantTokenType}]${tokenIndex}\n`;
            } else {
                const nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), tokenIndexes = (0, _token.tokenIndexesFromNonTerminalNodeAndTokens)(nonTerminalNode, tokens);
                value = `${value}${ruleName}${tokenIndexes}\n`;
            }
            return value;
        }, _constants.EMPTY_STRING);
        this.setValue(value);
    }
    clearNodes() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const setNodes = this.setNodes.bind(this), clearNodes = this.clearNodes.bind(this);
        return {
            setNodes,
            clearNodes
        };
    }
    static defaultProperties = {
        className: "nodes",
        spellCheck: "false",
        readOnly: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdG9rZW5JbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMsIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2VuXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0Tm9kZXMobm9kZXMsIHRva2VucykgeyAvLy9cbiAgICBjb25zdCB2YWx1ZSA9IG5vZGVzLnJlZHVjZSgodmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRva2VuSW5kZXggPSB0b2tlbkluZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dJHt0b2tlbkluZGV4fVxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX0ke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfVxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhck5vZGVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldE5vZGVzID0gdGhpcy5zZXROb2Rlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9kZXMgPSB0aGlzLmNsZWFyTm9kZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0Tm9kZXMsXG4gICAgICBjbGVhck5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5vZGVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTm9kZXNUZXh0YXJlYSIsIlRleHRhcmVhIiwic2V0Tm9kZXMiLCJub2RlcyIsInRva2VucyIsInZhbHVlIiwicmVkdWNlIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwidG9rZW5JbmRleCIsInRva2VuSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJFTVBUWV9TVFJJTkciLCJzZXRWYWx1ZSIsImNsZWFyTm9kZXMiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2lFQUxBOzJCQUVRO3VCQUNpRTs7Ozs7O0FBRS9FLE1BQU1BLHNCQUFzQkMsaUJBQVE7SUFDakRDLFNBQVNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1FBQ3RCLE1BQU1DLFFBQVFGLE1BQU1HLE1BQU0sQ0FBQyxDQUFDRCxPQUFPRTtZQUNqQyxNQUFNQyxtQkFBbUJELEtBQUtFLGNBQWM7WUFFNUMsSUFBSUQsa0JBQWtCO2dCQUNwQixNQUFNRSxlQUFlSCxNQUNmSSxtQkFBbUJELGFBQWFFLG1CQUFtQixJQUNuREMsdUJBQXVCRixpQkFBaUJHLE9BQU8sSUFDL0NDLGFBQWFDLElBQUFBLDBDQUFtQyxFQUFDTixjQUFjTjtnQkFFckVDLFFBQVEsR0FBR0EsTUFBTSxDQUFDLEVBQUVRLHFCQUFxQixDQUFDLEVBQUVFLFdBQVcsRUFBRSxDQUFDO1lBQzVELE9BQU87Z0JBQ0wsTUFBTUUsa0JBQWtCVixNQUNsQlcsV0FBV0QsZ0JBQWdCRSxXQUFXLElBQ3RDQyxlQUFlQyxJQUFBQSwrQ0FBd0MsRUFBQ0osaUJBQWlCYjtnQkFFL0VDLFFBQVEsR0FBR0EsUUFBUWEsV0FBV0UsYUFBYSxFQUFFLENBQUM7WUFDaEQ7WUFFQSxPQUFPZjtRQUNULEdBQUdpQix1QkFBWTtRQUVmLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7SUFDaEI7SUFFQW1CLGFBQWE7UUFDWCxNQUFNbkIsUUFBUWlCLHVCQUFZO1FBRTFCLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7SUFDaEI7SUFFQW9CLGdCQUFnQjtRQUNkLE1BQU12QixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDd0IsSUFBSSxDQUFDLElBQUksR0FDbENGLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNFLElBQUksQ0FBQyxJQUFJO1FBRTVDLE9BQVE7WUFDTnhCO1lBQ0FzQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxVQUFVO0lBQ1osRUFBRTtBQUNKIn0=