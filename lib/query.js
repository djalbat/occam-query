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
var WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER, FORWARD_SLASH_CHARACTER = _necessary.characters.FORWARD_SLASH_CHARACTER, EXCLAMATION_MARK_CHARACTER = _necessary.characters.EXCLAMATION_MARK_CHARACTER;
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
                var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array.second)(matches), thirdMatch = (0, _array.third)(matches), fourthMatch = (0, _array.fourth)(matches), fifthMatch = (0, _array.fifth)(matches), selectors = thirdMatch.split(EXCLAMATION_MARK_CHARACTER), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === FORWARD_SLASH_CHARACTER, intermediateNodes = [], query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgV0lMRENBUkRfQ0hBUkFDVEVSLCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiwgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5pbnRlcm1lZGlhdGVOb2RlcyA9IGludGVybWVkaWF0ZU5vZGVzO1xuICB9XG5cbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDAsIG1heGltdW1EZXB0aCA9IHRoaXMubWF4aW11bURlcHRoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2xlYXIodGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gIH1cblxuICBmaW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPiBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIGxldCBmb3VuZDtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHRoaXMuc3ViUXVlcnkuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNzaW9uLCB0eXBlcykge1xuICAgIGxldCBxdWVyeSA9IG51bGw7XG5cbiAgICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzc2lvbjsgIC8vL1xuXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbIV0rKShcXFtbXlxcXV0rXXwhKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSKSxcbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzKHNlbGVjdG9ycywgdHlwZXMpLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMoc3ViRXhwcmVzc2lvbiwgdHlwZXMpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIpLFxuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSB7XG4gIGxldCBydWxlTmFtZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gIH1cblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiV0lMRENBUkRfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIkZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSIiwiRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIiLCJydWxlTmFtZXMiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiaW5jbHVkZXMiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhZGp1c3ROb2RlcyIsImludGVybWVkaWF0ZU5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMiLCJzdWJFeHByZXNzaW9uIiwicXVlcnkiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsIlNwcmVhZCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFVUUEsS0FBSzs7O3lCQVJDLFdBQVc7MkRBRW5CLFVBQVU7cUJBRXVDLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFRQyxrQkFBa0IsR0FBMERDLFVBQVUsV0FBQSxDQUF0RkQsa0JBQWtCLEVBQUVFLHVCQUF1QixHQUFpQ0QsVUFBVSxXQUFBLENBQWxFQyx1QkFBdUIsRUFBRUMsMEJBQTBCLEdBQUtGLFVB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