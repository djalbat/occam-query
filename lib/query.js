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
                        var nonTerminalNode1 = node, childNodes = nonTerminalNode1.getChildNodes();
                        childNodes.forEach(function(childNode) {
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
                            var nonTerminalNode = intermediateNode, childNodes = nonTerminalNode.getChildNodes();
                            _this.subQuery.clear();
                            childNodes.forEach(function(childNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuXG5pbXBvcnQgeyBwdXNoLCBjbGVhciwgaW5jbHVkZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgeyBXSUxEQ0FSRF9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50b2tlblR5cGVzID0gdG9rZW5UeXBlcztcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBnZXRTcHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByZWE7XG4gIH1cblxuICBnZXRTdWJRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJRdWVyeTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZXM7XG4gIH1cblxuICBnZXRUb2tlblR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VuVHlwZXM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgaXNJbmZpbml0ZURlc2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5maW5pdGVEZXNjZW50O1xuICB9XG5cbiAgZ2V0SW50ZXJtZWRpYXRlTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gdGhpcy50b2tlblR5cGVzLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5wdXNoKGludGVybWVkaWF0ZU5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgZGVwdGgrKztcblxuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiksXG4gICAgICAgICAgcnVsZU5hbWVzID0gZXhwcmVzc2lvbi5nZXRSdWxlTmFtZXMoKSxcbiAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gZXhwcmVzc2lvbi5pc0luZmluaXRlRGVzY2VudCgpLFxuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIHtcbiAgICBjb25zdCBzcHJlYWQgPSBzdWJFeHByZXNzaW9uLmdldFNwcmVhZCgpLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBzdWJFeHByZXNzaW9uLmdldFJ1bGVOYW1lcygpLFxuICAgICAgICAgIHRva2VuVHlwZXMgPSBzdWJFeHByZXNzaW9uLmdldFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBzdWJFeHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ByZWFkID0gZXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lcyA9IGV4cHJlc3Npb24uZ2V0UnVsZU5hbWVzKCksXG4gICAgICAgICAgICB0b2tlblR5cGVzID0gZXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBleHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdO1xuXG4gICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgc3ViUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkV4cHJlc3Npb24gPSBleHByZXNzaW9uLmdldFN1YkV4cHJlc3Npb24oKTtcblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cblxuZnVuY3Rpb24gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSB7XG4gIGxldCBzdWJRdWVyeSA9IG51bGw7XG5cbiAgc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb24uZ2V0U3ViRXhwcmVzc2lvbigpOyAvLy9cblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIldJTERDQVJEX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImdldFNwcmVhZCIsInNwcmVhIiwiZ2V0U3ViUXVlcnkiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiZ2V0TWF4aW11bURlcHRoIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJnZXRJbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZXMiLCJ0eXBlIiwiZ2V0VHlwZSIsImluY2x1ZGVzIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImludGVybWVkaWF0ZU5vZGUiLCJwdXNoIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiYWRqdXN0Tm9kZXMiLCJpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsImZyb21TdWJFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsInN1YlF1ZXJ5RnJvbVN1YkV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmciLCJFeHByZXNzaW9uIiwiZ2V0U3ViRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUk07aUVBRUo7cUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxxQkFBdUJDLHFCQUFVLENBQWpDRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47YUFBTUEsTUFDUEcsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCO2dDQURsRlQ7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBUlJUOztZQVduQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxLQUFLO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lBQ3RCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixTQUFTO1lBQ3ZCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixVQUFVO1lBQ3hCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixZQUFZO1lBQzFCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFB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