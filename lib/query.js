"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _spread = _interopRequireDefault(require("./spread"));
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
                    found = (0, _array).includes(this.types, type, WILDCARD_CHARACTER);
                }
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
                    found = (0, _array).includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);
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
            value: function fromExpression(expression) {
                var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTcHJlYWQgZnJvbSBcIi4vc3ByZWFkXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVzLCBwdXNoLCBjbGVhciwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCAgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnNwcmVhZC5hZGp1c3ROb2Rlcyh0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBwdXNoKG5vZGVzLCB0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcy5mb3JFYWNoKChpbnRlcm1lZGlhdGVOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmNsZWFyKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5zdWJRdWVyeS5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc2lvbiwgdHlwZXMpIHtcbiAgICBsZXQgcXVlcnkgPSBudWxsO1xuXG4gICAgaWYgKHN1YkV4cHJlc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzaW9uOyAgLy8vXG5cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFshXSspKFxcW1teXFxdXStdfCEpPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoIHx8IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcyksXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21TcHJlYWRFeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNzaW9uLCB0eXBlcyksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSBcIi9cIiksICAvLy9cbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMoc2VsZWN0b3JzLCB0eXBlcykge1xuICBsZXQgcnVsZU5hbWVzID0gW107XG5cbiAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJXSUxEQ0FSRF9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiUXVlcnkiLCJydWxlTmFtZXMiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiaW5jbHVkZXMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMiLCJzdWJFeHByZXNpb24iLCJxdWVyeSIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsIlNwcmVhZCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTJCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVuQixJQUFBLE9BQVUsa0NBQVYsVUFBVSxFQUFBO0FBRXVDLElBQUEsTUFBbUIsV0FBbkIsbUJBQW1CLENBQUE7Ozs7Ozs7Ozs4REFOdkY7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7O0FBUUEsSUFBTSxBQUFFQSxrQkFBa0IsR0FBS0MsVUFBVSxZQUFqQ0Qsa0JBQWtCLEFBQWUsQUFBQztBQUUzQixJQUFBLEFBQU1FLEtBQUss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