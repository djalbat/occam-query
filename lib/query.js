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
var _spread = /*#__PURE__*/ _interopRequireDefault(require("./spread"));
var _array = require("./utilities/array");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER, WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER, FORWARD_SLASH_CHARACTER = _necessary.characters.FORWARD_SLASH_CHARACTER;
var Query = /*#__PURE__*/ function() {
    function Query(types, spread, subQuery, ruleNames, maximumDepth, infiniteDescent, intermediateNodes) {
        _classCallCheck(this, Query);
        this.types = types;
        this.spread = spread;
        this.subQuery = subQuery;
        this.ruleNames = ruleNames;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
    }
    _createClass(Query, [
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
                    var terminalNode = node, type = terminalNode.getType();
                    found = (0, _array.includes)(this.types, type, WILDCARD_CHARACTER);
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
                var query = null;
                if (expression !== null) {
                    var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array.second)(matches), thirdMatch = (0, _array.third)(matches), fourthMatch = (0, _array.fourth)(matches), fifthMatch = (0, _array.fifth)(matches), selectors = thirdMatch.split(BAR_CHARACTER), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromExpression(subExpression), ruleNames = ruleNamesFromSelectors(selectors), infiniteDescent = secondMatch === FORWARD_SLASH_CHARACTER, intermediateNodes = [];
                    query = new Query(types, spread, subQuery, ruleNames, maximumDepth, infiniteDescent, intermediateNodes);
                }
                return query;
            }
        }
    ]);
    return Query;
}();
function typesFromSelectors(selectors) {
    var types = [];
    selectors.forEach(function(selector) {
        var selectorTypeSelector = isSelectorTypeSelector(selector);
        if (selectorTypeSelector) {
            var type = selector.substring(1);
            types.push(type);
        }
    });
    return types;
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
function isSelectorTypeSelector(selector) {
    return /^@/.test(selector);
}
function isSelectorRuleNameSelector(selector) {
    return /^[^@]/.test(selector);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgV0lMRENBUkRfQ0hBUkFDVEVSLCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3Rvcih0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgIHJ1bGVOYW1lcywgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3ViUXVlcnkuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBxdWVyeSA9IG51bGw7XG5cbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbIV0rKShcXFtbXlxcXV0rXXwhKT8oXFwvLiopPyQvLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KEJBUl9DSEFSQUNURVIpLFxuICAgICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSKSxcbiAgICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW107XG5cbiAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBydWxlTmFtZXMsIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCBydWxlTmFtZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IgPSBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHNlbGVjdG9yOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIkJBUl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiV0lMRENBUkRfQ0hBUkFDVEVSIiwiRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwicnVsZU5hbWVzIiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiaW5jbHVkZXMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsIkluZmluaXR5IiwicXVlcnkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsIlNwcmVhZCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsInNlbGVjdG9yIiwic2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVHlwZVNlbGVjdG9yIiwic3Vic3RyaW5nIiwic2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIiwiaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSTTsyREFFUjtxQkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBUUMsZ0JBQStEQyxxQkFBVSxDQUF6RUQsZUFBZUUscUJBQWdERCxxQkFBVSxDQUExREMsb0JBQW9CQywwQkFBNEJGLHFCQUFVLENBQXRDRTtBQUU1QixJQUFBLEFBQU1KLHNCQTZIbEIsQUE3SFk7YUFBTUEsTUFDUEssS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBR0MsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCOzhCQUQ5RVg7UUFFakIsSUFBSSxDQUFDSyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztpQkFSUlg7O1lBV25CWSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSSxFQUErQztvQkFBN0NDLFFBQUFBLGlFQUFRLENB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