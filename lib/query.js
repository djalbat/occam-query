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
    function Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes) {
        _classCallCheck(this, Query);
        this.ruleNames = ruleNames;
        this.types = types;
        this.spread = spread;
        this.subQuery = subQuery;
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
                            return _this.find(childNode, depth, maximumDepth);
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
                                return _this.subQuery.find(childNode, depth, maximumDepth);
                            });
                            _this.subQuery.apply(nodes, depth, maximumDepth);
                        }
                    });
                }
            }
        }
    ], [
        {
            key: "fromSubExpressionAndTypes",
            value: function fromSubExpressionAndTypes(subExpression, types) {
                var query = null;
                if (subExpression !== null) {
                    var typesLength = types.length;
                    if (typesLength === 0) {
                        var expression = subExpression; ///
                        query = Query.fromExpression(expression);
                    }
                }
                return query;
            }
        },
        {
            key: "fromExpression",
            value: function fromExpression(expression) {
                var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array.second)(matches), thirdMatch = (0, _array.third)(matches), fourthMatch = (0, _array.fourth)(matches), fifthMatch = (0, _array.fifth)(matches), selectors = thirdMatch.split(BAR_CHARACTER), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === FORWARD_SLASH_CHARACTER, intermediateNodes = [], query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
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
function isSelectorTypeSelector(selector) {
    return /^@/.test(selector);
}
function ruleNamesFromSelectors(selectors) {
    return selectors.filter(isSelectorRuleNameSelector);
}
function isSelectorRuleNameSelector(selector) {
    return /^[^@]/.test(selector);
}
function ruleNamesFromSelectorsAndTypes(selectors, types) {
    var ruleNames = [];
    var typesLength = types.length;
    if (typesLength === 0) {
        ruleNames = ruleNamesFromSelectors(selectors);
    }
    return ruleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiwgV0lMRENBUkRfQ0hBUkFDVEVSLCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCAgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc3Npb24sIHR5cGVzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcblxuICAgIGlmIChzdWJFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzdWJFeHByZXNzaW9uOyAgLy8vXG5cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoQkFSX0NIQVJBQ1RFUiksXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc3Npb24sIHR5cGVzKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcykge1xuICBsZXQgcnVsZU5hbWVzID0gW107XG5cbiAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIkJBUl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiV0lMRENBUkRfQ0hBUkFDVEVSIiwiRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIiLCJydWxlTmFtZXMiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiaW5jbHVkZXMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMiLCJzdWJFeHByZXNzaW9uIiwicXVlcnkiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsIlNwcmVhZCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFVUUEsS0FBSzs7O3lCQVJDLFdBQVc7MkRBRW5CLFVBQVU7cUJBRXVDLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFRQyxhQUFhLEdBQWtEQyxVQUFVLFdBQUEsQ0FBekVELGFBQWEsRUFBRUUsa0JBQWtCLEdBQThCRCxVQUFVLFdBQUEsQ0FBMURDLGtCQUFrQixFQUFFQyx1QkFBdUIsR0FBS0YsVUFBVSxXQUFBLENBQXRDRSx1QkFBdUIsQUFBZ0I7QUFFbkUsSUFBQSxBQUFN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