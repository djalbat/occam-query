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
                (0, _array).clear(this.intermediateNodes);
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
                    found = (0, _array).includes(this.types, type, _constants.WILDCARD);
                }
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
                    found = (0, _array).includes(this.ruleNames, ruleName, _constants.WILDCARD);
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
                    (0, _array).push(nodes, this.intermediateNodes);
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
                var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches), fifthMatch = (0, _array).fifth(matches), selectors = thirdMatch.split("|"), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === "/", intermediateNodes = [], query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGluY2x1ZGVzLCBwdXNoLCBjbGVhciwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksICBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMgPSBpbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICB9XG5cbiAgZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4aW11bURlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkQpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRCk7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc2lvbiwgdHlwZXMpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKHN1YkV4cHJlc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzaW9uOyAgLy8vXG5cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcyksXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNzaW9uLCB0eXBlcyksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSBcIi9cIiksICAvLy9cbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcykge1xuICBsZXQgcnVsZU5hbWVzID0gW107XG5cbiAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVUsQ0FBVixPQUFVO0FBRUosR0FBYSxDQUFiLFVBQWE7QUFDOEIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEUsS0FBSzthQUFMLEtBQUssQ0FDWixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUcsWUFBWSxFQUFFLGVBQWUsRUFBRSxpQkFBaUI7OEJBRDlFLEtBQUs7YUFFakIsU0FBUyxHQUFHLFNBQVM7YUFDckIsS0FBSyxHQUFHLEtBQUs7YUFDYixNQUFNLEdBQUcsTUFBTTthQUNmLFFBQVEsR0FBRyxRQUFRO2FBQ25CLFlBQVksR0FBRyxZQUFZO2FBQzNCLGVBQWUsR0FBRyxlQUFlO2FBQ2pDLGlCQUFpQixHQUFHLGlCQUFpQjs7aUJBUnpCLEtBQUs7O1lBV3hCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBUyxFQUFFLE1BQWdDLEVBQUUsQ0FBQztvQkFBOUMsS0FBSyxHQUFMLEtBQVMsY0FBRCxDQUFDLEdBQVQsS0FBUyxFQUFFLFlBQVksR0FBWixNQUFnQyxt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