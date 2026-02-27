"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Query;
    }
});
const _necessary = require("necessary");
const _expression = /*#__PURE__*/ _interop_require_default(require("./expression"));
const _array = require("./utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { WILDCARD_CHARACTER } = _necessary.characters;
class Query {
    constructor(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes){
        this.spread = spread;
        this.subQuery = subQuery;
        this.ruleNames = ruleNames;
        this.tokenTypes = tokenTypes;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
    }
    getSpread() {
        return this.sprea;
    }
    getSubQuery() {
        return this.subQuery;
    }
    getRuleNames() {
        return this.ruleNames;
    }
    getTokenTypes() {
        return this.tokenTypes;
    }
    getMaximumDepth() {
        return this.maximumDepth;
    }
    isInfiniteDescent() {
        return this.infiniteDescent;
    }
    getIntermediateNodes() {
        return this.intermediateNodes;
    }
    execute(node, depth = 0, maximumDepth = this.maximumDepth) {
        const nodes = [];
        this.clear();
        this.find(node, depth, maximumDepth);
        this.apply(nodes, depth, maximumDepth);
        return nodes;
    }
    clear() {
        (0, _array.clear)(this.intermediateNodes);
    }
    find(node, depth, maximumDepth) {
        if (depth > maximumDepth) {
            return;
        }
        const nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
        let found;
        if (nodeTerminalNode) {
            const terminalNode = node, types = this.tokenTypes, type = terminalNode.getType();
            found = (0, _array.includes)(types, type, WILDCARD_CHARACTER);
        }
        if (nodeNonTerminalNode) {
            const nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
            found = (0, _array.includes)(this.ruleNames, ruleName, WILDCARD_CHARACTER);
        }
        if (found) {
            const intermediateNode = node; ///
            this.intermediateNodes.push(intermediateNode);
        }
        if (this.infiniteDescent) {
            if (nodeNonTerminalNode) {
                depth++;
                const nonTerminalNode = node; ///
                nonTerminalNode.forEachChildNode((childNode)=>{
                    this.find(childNode, depth, maximumDepth);
                });
            }
        }
    }
    apply(nodes, depth, maximumDepth) {
        this.spread.adjustNodes(this.intermediateNodes);
        if (this.subQuery === null) {
            (0, _array.push)(nodes, this.intermediateNodes);
        } else {
            this.intermediateNodes.forEach((intermediateNode)=>{
                const intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                if (intermediateNodeNonTerminalNode) {
                    depth++;
                    const nonTerminalNode = intermediateNode; ///
                    this.subQuery.clear();
                    nonTerminalNode.forEachChildNode((childNode)=>{
                        this.subQuery.find(childNode, depth, maximumDepth);
                    });
                    this.subQuery.apply(nodes, depth, maximumDepth);
                }
            });
        }
    }
    static fromExpression(expression, maximumDepth = Infinity) {
        const spread = expression.getSpread(), subQuery = subQueryFromExpression(expression), ruleNames = expression.getRuleNames(), tokenTypes = expression.getTokenTypes(), infiniteDescent = expression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
        return query;
    }
    static fromSubExpression(subExpression) {
        const spread = subExpression.getSpread(), subQuery = subQueryFromSubExpression(subExpression), ruleNames = subExpression.getRuleNames(), tokenTypes = subExpression.getTokenTypes(), maximumDepth = Infinity, infiniteDescent = subExpression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
        return query;
    }
    static fromExpressionString(expressionString, maximumDepth = Infinity) {
        let query = null;
        const expression = _expression.default.fromExpressionString(expressionString);
        if (expression !== null) {
            const spread = expression.getSpread(), subQuery = subQueryFromExpression(expression), ruleNames = expression.getRuleNames(), tokenTypes = expression.getTokenTypes(), infiniteDescent = expression.isInfiniteDescent(), intermediateNodes = [];
            query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
        }
        return query;
    }
}
function subQueryFromExpression(expression) {
    let subQuery = null;
    const subExpression = expression.getSubExpression();
    if (subExpression !== null) {
        const query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}
function subQueryFromSubExpression(subExpression) {
    let subQuery = null;
    subExpression = subExpression.getSubExpression(); ///
    if (subExpression !== null) {
        const query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuXG5pbXBvcnQgeyBwdXNoLCBjbGVhciwgaW5jbHVkZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBXSUxEQ0FSRF9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50b2tlblR5cGVzID0gdG9rZW5UeXBlcztcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBnZXRTcHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByZWE7XG4gIH1cblxuICBnZXRTdWJRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJRdWVyeTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZXM7XG4gIH1cblxuICBnZXRUb2tlblR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VuVHlwZXM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVEZXNjZW50O1xuICB9XG5cbiAgZ2V0SW50ZXJtZWRpYXRlTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gdGhpcy50b2tlblR5cGVzLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5wdXNoKGludGVybWVkaWF0ZU5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgZGVwdGgrKztcblxuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGU7IC8vL1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiksXG4gICAgICAgICAgcnVsZU5hbWVzID0gZXhwcmVzc2lvbi5nZXRSdWxlTmFtZXMoKSxcbiAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gZXhwcmVzc2lvbi5pc0luZmluaXRlRGVzY2VudCgpLFxuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIHtcbiAgICBjb25zdCBzcHJlYWQgPSBzdWJFeHByZXNzaW9uLmdldFNwcmVhZCgpLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBzdWJFeHByZXNzaW9uLmdldFJ1bGVOYW1lcygpLFxuICAgICAgICAgIHRva2VuVHlwZXMgPSBzdWJFeHByZXNzaW9uLmdldFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBzdWJFeHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lcyA9IGV4cHJlc3Npb24uZ2V0UnVsZU5hbWVzKCksXG4gICAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBleHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdO1xuXG4gICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgc3ViUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkV4cHJlc3Npb24gPSBleHByZXNzaW9uLmdldFN1YkV4cHJlc3Npb24oKTtcblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cblxuZnVuY3Rpb24gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSB7XG4gIGxldCBzdWJRdWVyeSA9IG51bGw7XG5cbiAgc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb24uZ2V0U3ViRXhwcmVzc2lvbigpOyAvLy9cblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIldJTERDQVJEX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImdldFNwcmVhZCIsInNwcmVhIiwiZ2V0U3ViUXVlcnkiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiZ2V0TWF4aW11bURlcHRoIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJnZXRJbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZXMiLCJ0eXBlIiwiZ2V0VHlwZSIsImluY2x1ZGVzIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImludGVybWVkaWF0ZU5vZGUiLCJwdXNoIiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImFkanVzdE5vZGVzIiwiZm9yRWFjaCIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsIkluZmluaXR5Iiwic3ViUXVlcnlGcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwiZnJvbVN1YkV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwic3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmlu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