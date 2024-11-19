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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgV0lMRENBUkRfQ0hBUkFDVEVSLCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIHRva2VuVHlwZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcykge1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnRva2VuVHlwZXMgPSB0b2tlblR5cGVzO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMgPSBpbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGdldFNwcmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcHJlYTtcbiAgfVxuXG4gIGdldFN1YlF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnN1YlF1ZXJ5O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFRva2VuVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5UeXBlcztcbiAgfVxuXG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gIH1cblxuICBpc0luZmluaXRlRGVzY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmZpbml0ZURlc2NlbnQ7XG4gIH1cblxuICBnZXRJbnRlcm1lZGlhdGVOb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICB9XG5cbiAgZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4aW11bURlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZXMgPSB0aGlzLnRva2VuVHlwZXMsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMuc3ByZWFkLmFkanVzdE5vZGVzKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgIHB1c2gobm9kZXMsIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLmZvckVhY2goKGludGVybWVkaWF0ZU5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICBpZiAoaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuY2xlYXIoKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcblxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcblxuICAgIGlmIChleHByZXNzaW9uU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvblN0cmluZy5tYXRjaChyZWdFeHApLFxuICAgICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoQkFSX0NIQVJBQ1RFUiksXG4gICAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICAgIHN1YkV4cHJlc3Npb25TdHJpbmcgPSBmaWZ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKHN1YkV4cHJlc3Npb25TdHJpbmcpLFxuICAgICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgICAgdG9rZW5UeXBlcyA9IHRva2VuVHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSKSxcbiAgICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW107XG5cbiAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHNwcmVhZCwgc3ViUXVlcnksIHJ1bGVOYW1lcywgdG9rZW5UeXBlcywgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHRva2VuVHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0b2tlblR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHRva2VuVHlwZXMucHVzaCh0b2tlblR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRva2VuVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yUnVsZU5hbWVTZWxlY3RvciA9IGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gc2VsZWN0b3I7ICAvLy9cblxuICAgICAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG4iXSwibmFtZXMiOlsiUXVlcnkiLCJCQVJfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIldJTERDQVJEX0NIQVJBQ1RFUiIsIkZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSIiwic3ByZWFkIiwic3ViUXVlcnkiLCJydWxlTmFtZXMiLCJ0b2tlblR5cGVzIiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJnZXRTcHJlYWQiLCJzcHJlYSIsImdldFN1YlF1ZXJ5IiwiZ2V0UnVsZU5hbWVzIiwiZ2V0VG9rZW5UeXBlcyIsImdldE1heGltdW1EZXB0aCIsImlzSW5maW5pdGVEZXNjZW50IiwiZ2V0SW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGVzIiwidHlwZSIsImdldFR5cGUiLCJpbmNsdWRlcyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbnRlcm1lZGlhdGVOb2RlIiwicHVzaCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImFkanVzdE5vZGVzIiwiaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiZnJvbUV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmciLCJxdWVyeSIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJmaWZ0aE1hdGNoIiwiZmlmdGgiLCJzZWxlY3RvcnMiLCJzcGxpdCIsInNwcmVhZEV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uU3RyaW5nIiwiU3ByZWFkIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwidG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMiLCJzZWxlY3RvciIsInNlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJ0b2tlblR5cGUiLCJzdWJzdHJpbmciLCJzZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiLCJpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvciIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJNOzZEQUVSO3FCQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFRQyxnQkFBK0RDLHFCQUFVLENBQXpFRCxlQUFlRSxxQkFBZ0RELHFCQUFVLENBQTFEQyxvQkFBb0JDLDBCQUE0QkYscUJBQVUsQ0FBdENFO0FBRTVCLElBQUEsQUFBTUosc0JBQU47YUFBTUEsTUFDUEssTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCO2dDQURsRlg7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBUlJYOztZQVduQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxLQUFLO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lB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