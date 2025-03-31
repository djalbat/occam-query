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
var _necessary = require("necessary");
var _expression = /*#__PURE__*/ _interop_require_default(require("./expression"));
var _array = require("./utilities/array");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER;
var Query = /*#__PURE__*/ function() {
    function Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes) {
        _class_call_check(this, Query);
        this.spread = spread;
        this.subQuery = subQuery;
        this.ruleNames = ruleNames;
        this.tokenTypes = tokenTypes;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
    }
    _create_class(Query, [
        {
            key: "getSpread",
            value: function getSpread() {
                return this.sprea;
            }
        },
        {
            key: "getSubQuery",
            value: function getSubQuery() {
                return this.subQuery;
            }
        },
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
            key: "getMaximumDepth",
            value: function getMaximumDepth() {
                return this.maximumDepth;
            }
        },
        {
            key: "isInfiniteDescent",
            value: function isInfiniteDescent() {
                return this.infiniteDescent;
            }
        },
        {
            key: "getIntermediateNodes",
            value: function getIntermediateNodes() {
                return this.intermediateNodes;
            }
        },
        {
            key: "execute",
            value: function execute(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, maximumDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.maximumDepth;
                var nodes = [];
                this.clear();
                this.find(node, depth, maximumDepth);
                this.apply(nodes, depth, maximumDepth);
                return nodes;
            }
        },
        {
            key: "clear",
            value: function clear() {
                (0, _array.clear)(this.intermediateNodes);
            }
        },
        {
            key: "find",
            value: function find(node, depth, maximumDepth) {
                var _this = this;
                if (depth > maximumDepth) {
                    return;
                }
                var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
                var found;
                if (nodeTerminalNode) {
                    var terminalNode = node, types = this.tokenTypes, type = terminalNode.getType();
                    found = (0, _array.includes)(types, type, WILDCARD_CHARACTER);
                }
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
                    found = (0, _array.includes)(this.ruleNames, ruleName, WILDCARD_CHARACTER);
                }
                if (found) {
                    var intermediateNode = node; ///
                    this.intermediateNodes.push(intermediateNode);
                }
                if (this.infiniteDescent) {
                    if (nodeNonTerminalNode) {
                        depth++;
                        var nonTerminalNode1 = node; ///
                        nonTerminalNode1.forEachChildNode(function(childNode) {
                            _this.find(childNode, depth, maximumDepth);
                        });
                    }
                }
            }
        },
        {
            key: "apply",
            value: function apply(nodes, depth, maximumDepth) {
                var _this = this;
                this.spread.adjustNodes(this.intermediateNodes);
                if (this.subQuery === null) {
                    (0, _array.push)(nodes, this.intermediateNodes);
                } else {
                    this.intermediateNodes.forEach(function(intermediateNode) {
                        var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                        if (intermediateNodeNonTerminalNode) {
                            depth++;
                            var nonTerminalNode = intermediateNode; ///
                            _this.subQuery.clear();
                            nonTerminalNode.forEachChildNode(function(childNode) {
                                _this.subQuery.find(childNode, depth, maximumDepth);
                            });
                            _this.subQuery.apply(nodes, depth, maximumDepth);
                        }
                    });
                }
            }
        }
    ], [
        {
            key: "fromExpression",
            value: function fromExpression(expression) {
                var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var spread = expression.getSpread(), subQuery = subQueryFromExpression(expression), ruleNames = expression.getRuleNames(), tokenTypes = expression.getTokenTypes(), infiniteDescent = expression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        },
        {
            key: "fromSubExpression",
            value: function fromSubExpression(subExpression) {
                var spread = subExpression.getSpread(), subQuery = subQueryFromSubExpression(subExpression), ruleNames = subExpression.getRuleNames(), tokenTypes = subExpression.getTokenTypes(), maximumDepth = Infinity, infiniteDescent = subExpression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        },
        {
            key: "fromExpressionString",
            value: function fromExpressionString(expressionString) {
                var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var query = null;
                var expression = _expression.default.fromExpressionString(expressionString);
                if (expression !== null) {
                    var spread = expression.getSpread(), subQuery = subQueryFromExpression(expression), ruleNames = expression.getRuleNames(), tokenTypes = expression.getTokenTypes(), infiniteDescent = expression.isInfiniteDescent(), intermediateNodes = [];
                    query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                }
                return query;
            }
        }
    ]);
    return Query;
}();
function subQueryFromExpression(expression) {
    var subQuery = null;
    var subExpression = expression.getSubExpression();
    if (subExpression !== null) {
        var query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}
function subQueryFromSubExpression(subExpression) {
    var subQuery = null;
    subExpression = subExpression.getSubExpression(); ///
    if (subExpression !== null) {
        var query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuXG5pbXBvcnQgeyBwdXNoLCBjbGVhciwgaW5jbHVkZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBXSUxEQ0FSRF9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50b2tlblR5cGVzID0gdG9rZW5UeXBlcztcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBnZXRTcHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByZWE7XG4gIH1cblxuICBnZXRTdWJRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJRdWVyeTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZXM7XG4gIH1cblxuICBnZXRUb2tlblR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VuVHlwZXM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVEZXNjZW50O1xuICB9XG5cbiAgZ2V0SW50ZXJtZWRpYXRlTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gdGhpcy50b2tlblR5cGVzLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5wdXNoKGludGVybWVkaWF0ZU5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgZGVwdGgrKztcblxuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGU7IC8vL1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiksXG4gICAgICAgICAgcnVsZU5hbWVzID0gZXhwcmVzc2lvbi5nZXRSdWxlTmFtZXMoKSxcbiAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gZXhwcmVzc2lvbi5pc0luZmluaXRlRGVzY2VudCgpLFxuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIHtcbiAgICBjb25zdCBzcHJlYWQgPSBzdWJFeHByZXNzaW9uLmdldFNwcmVhZCgpLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBzdWJFeHByZXNzaW9uLmdldFJ1bGVOYW1lcygpLFxuICAgICAgICAgIHRva2VuVHlwZXMgPSBzdWJFeHByZXNzaW9uLmdldFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBzdWJFeHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lcyA9IGV4cHJlc3Npb24uZ2V0UnVsZU5hbWVzKCksXG4gICAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBleHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdO1xuXG4gICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgc3ViUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkV4cHJlc3Npb24gPSBleHByZXNzaW9uLmdldFN1YkV4cHJlc3Npb24oKTtcblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cblxuZnVuY3Rpb24gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSB7XG4gIGxldCBzdWJRdWVyeSA9IG51bGw7XG5cbiAgc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb24uZ2V0U3ViRXhwcmVzc2lvbigpOyAvLy9cblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIldJTERDQVJEX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImdldFNwcmVhZCIsInNwcmVhIiwiZ2V0U3ViUXVlcnkiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiZ2V0TWF4aW11bURlcHRoIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJnZXRJbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZXMiLCJ0eXBlIiwiZ2V0VHlwZSIsImluY2x1ZGVzIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImludGVybWVkaWF0ZU5vZGUiLCJwdXNoIiwiZm9yRWFjaENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImFkanVzdE5vZGVzIiwiZm9yRWFjaCIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsIkluZmluaXR5Iiwic3ViUXVlcnlGcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwiZnJvbVN1YkV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwic3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsIkV4cHJlc3Npb24iLCJnZXRTdWJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSTTtpRUFFSjtxQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEFBQUVDLHFCQUF1QkMscUJBQVUsQ0FBakNEO0FBRU8sSUFBQSxBQUFNRCxzQkFBTjthQUFNQSxNQUNQRyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUI7Z0NBRGxGVDtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFSUlQ7O1lBV25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLEtBQUs7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLFFBQVE7WUFDdEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLFNBQVM7WUFDdkI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLFVBQVU7WUFDeEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLFlBQVk7WUFDMUI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLGVBQWU7WUFDN0I7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLGlCQUFpQjtZQUMvQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO29CQUFFQyxRQUFBQSxpRUFBUSxHQUFHYixlQUFBQSxpRUFBZSxJQUFJLENBQUNBLFlBQVk7Z0JBQ3ZELElBQU1jLFFBQVEsRUFBRTtnQkFFaEIsSUFBSSxDQUFDQyxLQUFLO2dCQUVWLElBQUksQ0FBQ0MsSUFBSSxDQUFDSixNQUFNQyxPQUFPYjtnQkFFdkIsSUFBSSxDQUFDaUIsS0FBSyxDQUFDSCxPQUFPRCxPQUFPYjtnQkFFekIsT0FBT2M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUEsSUFBQUEsWUFBSyxFQUFDLElBQUksQ0FBQ2IsaUJBQWlCO1lBQzlCOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtKLElBQUksRUFBRUMsS0FBSyxFQUFFYixZQUFZOztnQkFDNUIsSUFBSWEsUUFBUWIsY0FBYztvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTWtCLG1CQUFtQk4sS0FBS08sY0FBYyxJQUN0Q0Msc0JBQXNCLENBQUNGO2dCQUU3QixJQUFJRztnQkFFSixJQUFJSCxrQkFBa0I7b0JBQ3BCLElBQU1JLGVBQWVWLE1BQ2ZXLFFBQVEsSUFBSSxDQUFDeEIsVUFBVSxFQUN2QnlCLE9BQU9GLGFBQWFHLE9BQU87b0JBRWpDSixRQUFRSyxJQUFBQSxlQUFRLEVBQUNILE9BQU9DLE1BQU05QjtnQkFDaEM7Z0JBRUEsSUFBSTBCLHFCQUFxQjtvQkFDdkIsSUFBTU8sa0JBQWtCZixNQUNsQmdCLFdBQVdELGdCQUFnQkUsV0FBVztvQkFFNUNSLFFBQVFLLElBQUFBLGVBQVEsRUFBQyxJQUFJLENBQUM1QixTQUFTLEVBQUU4QixVQUFVbEM7Z0JBQzdDO2dCQUVBLElBQUkyQixPQUFPO29CQUNULElBQU1TLG1CQUFtQmxCLE1BQU0sR0FBRztvQkFFbEMsSUFBSSxDQUFDVixpQkFBaUIsQ0FBQzZCLElBQUksQ0FBQ0Q7Z0JBQzlCO2dCQUVBLElBQUksSUFBSSxDQUFDN0IsZUFBZSxFQUFFO29CQUN4QixJQUFJbUIscUJBQXFCO3dCQUN2QlA7d0JBRUEsSUFBTWMsbUJBQWtCZixNQUFNLEdBQUc7d0JBRWpDZSxpQkFBZ0JLLGdCQUFnQixDQUFDLFNBQUNDOzRCQUNoQyxNQUFLakIsSUFBSSxDQUFDaUIsV0FBV3BCLE9BQU9iO3dCQUM5QjtvQkFDRjtnQkFDRjtZQUNGOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSCxLQUFLLEVBQUVELEtBQUssRUFBRWIsWUFBWTs7Z0JBQzlCLElBQUksQ0FBQ0osTUFBTSxDQUFDc0MsV0FBVyxDQUFDLElBQUksQ0FBQ2hDLGlCQUFpQjtnQkFFOUMsSUFBSSxJQUFJLENBQUNMLFFBQVEsS0FBSyxNQUFNO29CQUMxQmtDLElBQUFBLFdBQUksRUFBQ2pCLE9BQU8sSUFBSSxDQUFDWixpQkFBaUI7Z0JBQ3BDLE9BQU87b0JBQ0wsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ2lDLE9BQU8sQ0FBQyxTQUFDTDt3QkFDOUIsSUFBTU0sa0NBQWtDTixpQkFBaUJPLGlCQUFpQjt3QkFFMUUsSUFBSUQsaUNBQWlDOzRCQUNuQ3ZCOzRCQUVBLElBQU1jLGtCQUFrQkcsa0JBQWtCLEdBQUc7NEJBRTdDLE1BQUtqQyxRQUFRLENBQUNrQixLQUFLOzRCQUVuQlksZ0JBQWdCSyxnQkFBZ0IsQ0FBQyxTQUFDQztnQ0FDaEMsTUFBS3BDLFFBQVEsQ0FBQ21CLElBQUksQ0FBQ2lCLFdBQVdwQixPQUFPYjs0QkFDdkM7NEJBRUEsTUFBS0gsUUFBUSxDQUFDb0IsS0FBSyxDQUFDSCxPQUFPRCxPQUFPYjt3QkFDcEM7b0JBQ0Y7Z0JBQ0Y7WUFDRjs7OztZQUVPc0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtvQkFBRXZDLGVBQUFBLGlFQUFld0M7Z0JBQy9DLElBQU01QyxTQUFTMkMsV0FBV3BDLFNBQVMsSUFDN0JOLFdBQVc0Qyx1QkFBdUJGLGFBQ2xDekMsWUFBWXlDLFdBQVdqQyxZQUFZLElBQ25DUCxhQUFhd0MsV0FBV2hDLGFBQWEsSUFDckNOLGtCQUFrQnNDLFdBQVc5QixpQkFBaUIsSUFDOUNQLG9CQUFvQixFQUFFLEVBQ3RCd0MsUUFBUSxJQXBJR2pELE1Bb0lPRyxRQUFRQyxVQUFVQyxXQUFXQyxZQUFZQyxjQUFjQyxpQkFBaUJDO2dCQUVoRyxPQUFPd0M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYTtnQkFDcEMsSUFBTWhELFNBQVNnRCxjQUFjekMsU0FBUyxJQUNoQ04sV0FBV2dELDBCQUEwQkQsZ0JBQ3JDOUMsWUFBWThDLGNBQWN0QyxZQUFZLElBQ3RDUCxhQUFhNkMsY0FBY3JDLGFBQWEsSUFDeENQLGVBQWV3QyxVQUNmdkMsa0JBQWtCMkMsY0FBY25DLGlCQUFpQixJQUNqRFAsb0JBQW9CLEVBQUUsRUFDdEJ3QyxRQUFRLElBakpHakQsTUFpSk9HLFFBQVFDLFVBQVVDLFdBQVdDLFlBQVlDLGNBQWNDLGlCQUFpQkM7Z0JBRWhHLE9BQU93QztZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxnQkFBZ0I7b0JBQUUvQyxlQUFBQSxpRUFBZXdDO2dCQUMzRCxJQUFJRSxRQUFRO2dCQUVaLElBQU1ILGFBQWFTLG1CQUFVLENBQUNGLG9CQUFvQixDQUFDQztnQkFFbkQsSUFBSVIsZUFBZSxNQUFNO29CQUN2QixJQUFNM0MsU0FBUzJDLFdBQVdwQyxTQUFTLElBQzdCTixXQUFXNEMsdUJBQXVCRixhQUNsQ3pDLFlBQVl5QyxXQUFXakMsWUFBWSxJQUNuQ1AsYUFBYXdDLFdBQVdoQyxhQUFhLElBQ3JDTixrQkFBa0JzQyxXQUFXOUIsaUJBQWlCLElBQzlDUCxvQkFBb0IsRUFBRTtvQkFFNUJ3QyxRQUFRLElBbktPakQsTUFtS0dHLFFBQVFDLFVBQVVDLFdBQVdDLFlBQVlDLGNBQWNDLGlCQUFpQkM7Z0JBQzVGO2dCQUVBLE9BQU93QztZQUNUOzs7V0F2S21CakQ7O0FBMEtyQixTQUFTZ0QsdUJBQXVCRixVQUFVO0lBQ3hDLElBQUkxQyxXQUFXO0lBRWYsSUFBTStDLGdCQUFnQkwsV0FBV1UsZ0JBQWdCO0lBRWpELElBQUlMLGtCQUFrQixNQUFNO1FBQzFCLElBQU1GLFFBQVFqRCxNQUFNa0QsaUJBQWlCLENBQUNDO1FBRXRDL0MsV0FBVzZDLE9BQU8sR0FBRztJQUN2QjtJQUVBLE9BQU83QztBQUNUO0FBRUEsU0FBU2dELDBCQUEwQkQsYUFBYTtJQUM5QyxJQUFJL0MsV0FBVztJQUVmK0MsZ0JBQWdCQSxjQUFjSyxnQkFBZ0IsSUFBSSxHQUFHO0lBRXJELElBQUlMLGtCQUFrQixNQUFNO1FBQzFCLElBQU1GLFFBQVFqRCxNQUFNa0QsaUJBQWlCLENBQUNDO1FBRXRDL0MsV0FBVzZDLE9BQU8sR0FBRztJQUN2QjtJQUVBLE9BQU83QztBQUNUIn0=