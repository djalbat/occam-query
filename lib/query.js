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
                        var _this = this;
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
                this.spread.adjustNodes(this.intermediateNodes);
                if (this.subQuery === null) {
                    (0, _array).push(nodes, this.intermediateNodes);
                } else {
                    var _this = this;
                    this.intermediateNodes.forEach(function(intermediateNode) {
                        var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                        if (intermediateNodeNonTerminalNode) {
                            var _this1 = _this;
                            depth++;
                            var nonTerminalNode = intermediateNode, childNodes = nonTerminalNode.getChildNodes();
                            _this.subQuery.clear();
                            childNodes.forEach(function(childNode) {
                                return _this1.subQuery.find(childNode, depth, maximumDepth);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGluY2x1ZGVzLCBwdXNoLCBjbGVhciwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksICBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMgPSBpbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICB9XG5cbiAgZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4aW11bURlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkQpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRCk7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc2lvbiwgdHlwZXMpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKHN1YkV4cHJlc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzaW9uOyAgLy8vXG5cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcyksXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNzaW9uLCB0eXBlcyksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSBcIi9cIiksICAvLy9cbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcykge1xuICBsZXQgcnVsZU5hbWVzID0gW107XG5cbiAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMiLCJzdWJFeHByZXNpb24iLCJxdWVyeSIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmluZyIsInRlc3QiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZmlsdGVyIiwiaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRU8sR0FBVSxDQUFWLE9BQVU7QUFFSixHQUFhLENBQWIsVUFBYTtBQUM4QixHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRUEsS0FBSyxpQkFBWCxRQUFRO2FBQUZBLEtBQUssQ0FDWkMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFHQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCOzhCQUQ5RVAsS0FBSztRQUV0QixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztRQUMxQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztRQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtRQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtRQUN4QixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTtRQUNoQyxJQUFJLENBQUNDLGVBQWUsR0FBR0EsZUFBZTtRQUN0QyxJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7O2lCQVJ6QlAsS0FBSzs7WUFXeEJRLEdBQU8sRUFBUEEs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