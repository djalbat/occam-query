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
var _spread = /*#__PURE__*/ _interop_require_default(require("./spread"));
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
var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER, WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER, FORWARD_SLASH_CHARACTER = _necessary.characters.FORWARD_SLASH_CHARACTER;
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
                var spread = _spread.default.fromNothing(), subQuery = subQueryFromSubExpression(subExpression), ruleNames = subExpression.getRuleNames(), tokenTypes = subExpression.getTokenTypes(), maximumDepth = Infinity, infiniteDescent = subExpression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        },
        {
            key: "fromExpressionString",
            value: function fromExpressionString(expressionString) {
                var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var query = null;
                if (expressionString !== null) {
                    var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expressionString.match(regExp), secondMatch = (0, _array.second)(matches), thirdMatch = (0, _array.third)(matches), fourthMatch = (0, _array.fourth)(matches), fifthMatch = (0, _array.fifth)(matches), selectors = thirdMatch.split(BAR_CHARACTER), spreadExpression = fourthMatch || null, subExpressionString = fifthMatch || null, spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromExpressionString(subExpressionString), ruleNames = ruleNamesFromSelectors(selectors), tokenTypes = tokenTypesFromSelectors(selectors), infiniteDescent = secondMatch === FORWARD_SLASH_CHARACTER, intermediateNodes = [];
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
function tokenTypesFromSelectors(selectors) {
    var tokenTypes = [];
    selectors.forEach(function(selector) {
        var selectorTokenTypeSelector = isSelectorTokenTypeSelector(selector);
        if (selectorTokenTypeSelector) {
            var tokenType = selector.substring(1);
            tokenTypes.push(tokenType);
        }
    });
    return tokenTypes;
}
function ruleNamesFromSelectors(selectors) {
    var ruleNames = [];
    selectors.forEach(function(selector) {
        var selectorRuleNameSelector = isSelectorRuleNameSelector(selector);
        if (selectorRuleNameSelector) {
            var ruleName = selector; ///
            ruleNames.push(ruleName);
        }
    });
    return ruleNames;
}
function isSelectorRuleNameSelector(selector) {
    return /^[^@]/.test(selector);
}
function isSelectorTokenTypeSelector(selector) {
    return /^@/.test(selector);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgV0lMRENBUkRfQ0hBUkFDVEVSLCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcykge1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnRva2VuVHlwZXMgPSB0b2tlblR5cGVzO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMgPSBpbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGdldFNwcmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcHJlYTtcbiAgfVxuXG4gIGdldFN1YlF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnN1YlF1ZXJ5O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFRva2VuVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5UeXBlcztcbiAgfVxuXG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gIH1cblxuICBpc0luZmluaXRlRGVzY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmZpbml0ZURlc2NlbnQ7XG4gIH1cblxuICBnZXRJbnRlcm1lZGlhdGVOb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICB9XG5cbiAgZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4aW11bURlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZXMgPSB0aGlzLnRva2VuVHlwZXMsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMuc3ByZWFkLmFkanVzdE5vZGVzKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgIHB1c2gobm9kZXMsIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLmZvckVhY2goKGludGVybWVkaWF0ZU5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICBpZiAoaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuY2xlYXIoKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCBzcHJlYWQgPSBleHByZXNzaW9uLmdldFNwcmVhZCgpLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBleHByZXNzaW9uLmdldFJ1bGVOYW1lcygpLFxuICAgICAgICAgIHRva2VuVHlwZXMgPSBleHByZXNzaW9uLmdldFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBleHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHNwcmVhZCA9IFNwcmVhZC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBzdWJFeHByZXNzaW9uLmdldFJ1bGVOYW1lcygpLFxuICAgICAgICAgIHRva2VuVHlwZXMgPSBzdWJFeHByZXNzaW9uLmdldFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBzdWJFeHByZXNzaW9uLmlzSW5maW5pdGVEZXNjZW50KCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZywgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKGV4cHJlc3Npb25TdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcWyFdKykoXFxbW15cXF1dK118ISk/KFxcLy4qKT8kLyxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uU3RyaW5nLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdChCQVJfQ0hBUkFDVEVSKSxcbiAgICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgICAgc3ViRXhwcmVzc2lvblN0cmluZyA9IGZpZnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoc3ViRXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgICB0b2tlblR5cGVzID0gdG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIpLFxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXTtcblxuICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJRdWVyeUZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgbGV0IHN1YlF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBzdWJFeHByZXNzaW9uID0gZXhwcmVzc2lvbi5nZXRTdWJFeHByZXNzaW9uKCk7XG5cbiAgaWYgKHN1YkV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21TdWJFeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pO1xuXG4gICAgc3ViUXVlcnkgPSBxdWVyeTsgLy8vXG4gIH1cblxuICByZXR1cm4gc3ViUXVlcnk7XG59XG5cbmZ1bmN0aW9uIHN1YlF1ZXJ5RnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbikge1xuICBsZXQgc3ViUXVlcnkgPSBudWxsO1xuXG4gIHN1YkV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uLmdldFN1YkV4cHJlc3Npb24oKTsgLy8vXG5cbiAgaWYgKHN1YkV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21TdWJFeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pO1xuXG4gICAgc3ViUXVlcnkgPSBxdWVyeTsgLy8vXG4gIH1cblxuICByZXR1cm4gc3ViUXVlcnk7XG59XG5cbmZ1bmN0aW9uIHRva2VuVHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0b2tlblR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUb2tlblR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdG9rZW5UeXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0b2tlblR5cGVzLnB1c2godG9rZW5UeXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0b2tlblR5cGVzO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCBydWxlTmFtZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IgPSBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHNlbGVjdG9yOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiQkFSX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiIsInNwcmVhZCIsInN1YlF1ZXJ5IiwicnVsZU5hbWVzIiwidG9rZW5UeXBlcyIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsImludGVybWVkaWF0ZU5vZGVzIiwiZ2V0U3ByZWFkIiwic3ByZWEiLCJnZXRTdWJRdWVyeSIsImdldFJ1bGVOYW1lcyIsImdldFRva2VuVHlwZXMiLCJnZXRNYXhpbXVtRGVwdGgiLCJpc0luZmluaXRlRGVzY2VudCIsImdldEludGVybWVkaWF0ZU5vZGVzIiwiZXhlY3V0ZSIsIm5vZGUiLCJkZXB0aCIsIm5vZGVzIiwiY2xlYXIiLCJmaW5kIiwiYXBwbHkiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiZm91bmQiLCJ0ZXJtaW5hbE5vZGUiLCJ0eXBlcyIsInR5cGUiLCJnZXRUeXBlIiwiaW5jbHVkZXMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsIkluZmluaXR5Iiwic3ViUXVlcnlGcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwiZnJvbVN1YkV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwiU3ByZWFkIiwiZnJvbU5vdGhpbmciLCJzdWJRdWVyeUZyb21TdWJFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb25TdHJpbmciLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMiLCJ0b2tlblR5cGVzRnJvbVNlbGVjdG9ycyIsImdldFN1YkV4cHJlc3Npb24iLCJzZWxlY3RvciIsInNlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJ0b2tlblR5cGUiLCJzdWJzdHJpbmciLCJzZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiLCJpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvciIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJNOzZEQUVSO3FCQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFRQyxnQkFBK0RDLHFCQUFVLENBQXpFRCxlQUFlRSxxQkFBZ0RELHFCQUFVLENBQTFEQyxvQkFBb0JDLDBCQUE0QkYscUJBQVUsQ0FBdENFO0FBRTVCLElBQUEsQUFBTUosc0JBQU47YUFBTUEsTUFDUEssTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCO2dDQURsRlg7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBUlJYOztZQVduQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxLQUFLO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lBQ3RCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixTQUFTO1lBQ3ZCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixVQUFVO1lB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