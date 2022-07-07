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
var WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER;
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
                    (0, _array.push)(nodes, this.intermediateNodes);
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
                var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array.second)(matches), thirdMatch = (0, _array.third)(matches), fourthMatch = (0, _array.fourth)(matches), fifthMatch = (0, _array.fifth)(matches), selectors = thirdMatch.split("|"), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === "/", intermediateNodes = [], query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksICBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMgPSBpbnRlcm1lZGlhdGVOb2RlcztcbiAgfVxuXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICB9XG5cbiAgZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4aW11bURlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5wdXNoKGludGVybWVkaWF0ZU5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgZGVwdGgrKztcblxuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHRoaXMuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMuc3ByZWFkLmFkanVzdE5vZGVzKHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgIHB1c2gobm9kZXMsIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLmZvckVhY2goKGludGVybWVkaWF0ZU5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICBpZiAoaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuY2xlYXIoKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLnN1YlF1ZXJ5LmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMoc3ViRXhwcmVzc2lvbiwgdHlwZXMpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKHN1YkV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb247ICAvLy9cblxuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcWyFdKykoXFxbW15cXF1dK118ISk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdChcInxcIiksXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc3Npb24sIHR5cGVzKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IFwiL1wiKSwgIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSB7XG4gIGxldCBydWxlTmFtZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gIH1cblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiV0lMRENBUkRfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJpbmNsdWRlcyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbnRlcm1lZGlhdGVOb2RlIiwicHVzaCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImFkanVzdE5vZGVzIiwiaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyIsInN1YkV4cHJlc3Npb24iLCJxdWVyeSIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzcHJlYWRFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzIiwiU3ByZWFkIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmluZyIsInRlc3QiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZmlsdGVyIiwiaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVVRQSxLQUFLOzs7eUJBUkMsV0FBVzsyREFFbkIsVUFBVTtxQkFFdUMsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQU0sQUFBRUMsa0JBQWtCLEdBQUtDLFVBQVUsV0FBQSxDQUFqQ0Qsa0JBQWtCLEFBQWUsQUFBQztBQUUzQixJQUFBLEFBQU1ELEtBQUssaUJBb0l2QixBQXBJWTthQUFNQSxLQUFLLENBQ1pHLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBR0MsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGlCQUFpQjs7UUFDL0YsSUFBSSxDQUFDTixTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLEtBQUssR0FBR0Es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