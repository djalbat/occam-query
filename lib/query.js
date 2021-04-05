"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _spread = _interopRequireDefault(require("./spread"));
var _constants = require("./constants");
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
var Query = function() {
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
            value: function execute(node, param, param1) {
                var depth = param === void 0 ? 0 : param, maximumDepth = param1 === void 0 ? this.maximumDepth : param1;
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
                _array.clear(this.intermediateNodes);
            }
        },
        {
            key: "find",
            value: function find(node, depth, maximumDepth) {
                if (depth > maximumDepth) {
                    return;
                }
                var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
                var found;
                if (nodeTerminalNode) {
                    var terminalNode = node, type = terminalNode.getType();
                    found = _array.includes(this.types, type, _constants.WILDCARD_CHARACTER);
                }
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
                    found = _array.includes(this.ruleNames, ruleName, _constants.WILDCARD_CHARACTER);
                }
                if (found) {
                    var intermediateNode = node; ///
                    this.intermediateNodes.push(intermediateNode);
                }
                if (this.infiniteDescent) {
                    if (nodeNonTerminalNode) {
                        depth++;
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                        childNodes.forEach((function(childNode) {
                            return this.find(childNode, depth, maximumDepth);
                        }).bind(this));
                    }
                }
            }
        },
        {
            key: "apply",
            value: function apply(nodes, depth, maximumDepth) {
                this.spread.adjustNodes(this.intermediateNodes);
                if (this.subQuery === null) {
                    _array.push(nodes, this.intermediateNodes);
                } else {
                    this.intermediateNodes.forEach((function(intermediateNode) {
                        var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                        if (intermediateNodeNonTerminalNode) {
                            depth++;
                            var nonTerminalNode = intermediateNode, childNodes = nonTerminalNode.getChildNodes();
                            this.subQuery.clear();
                            childNodes.forEach((function(childNode) {
                                return this.subQuery.find(childNode, depth, maximumDepth);
                            }).bind(this));
                            this.subQuery.apply(nodes, depth, maximumDepth);
                        }
                    }).bind(this));
                }
            }
        }
    ], [
        {
            key: "fromSubExpressionAndTypes",
            value: function fromSubExpressionAndTypes(subExpresion, types) {
                var query = null;
                if (subExpresion !== null) {
                    var typesLength = types.length;
                    if (typesLength === 0) {
                        var expression = subExpresion; ///
                        query = Query.fromExpression(expression);
                    }
                }
                return query;
            }
        },
        {
            key: "fromExpression",
            value: function fromExpression(expression, param) {
                var maximumDepth = param === void 0 ? Infinity : param;
                var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = _array.second(matches), thirdMatch = _array.third(matches), fourthMatch = _array.fourth(matches), fifthMatch = _array.fifth(matches), selectors = thirdMatch.split("|"), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === "/", intermediateNodes = [], query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        }
    ]);
    return Query;
}();
exports.default = Query;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbmNsdWRlcywgcHVzaCwgY2xlYXIsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCAgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc2lvbiwgdHlwZXMpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKHN1YkV4cHJlc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzaW9uOyAgLy8vXG5cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcyksXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNzaW9uLCB0eXBlcyksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSBcIi9cIiksICAvLy9cbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcykge1xuICBsZXQgcnVsZU5hbWVzID0gW107XG5cbiAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVPLE9BQVU7SUFFTSxVQUFhO0lBQ29CLE1BQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxFLEtBQUs7YUFBTCxLQUFLLENBQ1osU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFHLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCOzhCQUQ5RSxLQUFLO2FBRWpCLFNBQVMsR0FBRyxTQUFTO2FBQ3JCLEtBQUssR0FBRyxLQUFLO2FBQ2IsTUFBTSxHQUFHLE1BQU07YUFDZixRQUFRLEdBQUcsUUFBUTthQUNuQixZQUFZLEdBQUcsWUFBWTthQUMzQixlQUFlLEdBQUcsZUFBZTthQUNqQyxpQkFBaUIsR0FBRyxpQkFBaUI7O2lCQVJ6QixLQUFLOztBQVd4QixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQVMsRUFBRSxNQUFnQztvQkFBM0MsS0FBSyxHQUFMLEtBQVMsY0FBRCxDQUFDLEdBQVQsS0FBUyxFQUFFLFlBQVksR0FBWixNQUFnQyxtQkFBWixZQUFZLEdB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