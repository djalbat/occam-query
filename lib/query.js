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
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJXSUxEQ0FSRCIsImluY2x1ZGVzIiwicHVzaCIsImNsZWFyIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIlF1ZXJ5IiwiY29uc3RydWN0b3IiLCJydWxlTmFtZXMiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJmaW5kIiwiYXBwbHkiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiZm91bmQiLCJ0ZXJtaW5hbE5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbnRlcm1lZGlhdGVOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiYWRqdXN0Tm9kZXMiLCJpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzIiwic3ViRXhwcmVzaW9uIiwicXVlcnkiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVPLEdBQVUsQ0FBVixPQUFVO0FBRUosR0FBYSxDQUFiLFVBQWE7QUFDOEIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEUsS0FBSyxpQkFBWCxRQUFRO2FBQUYsS0FBSyxDQUNaLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjs4QkFEOUUsS0FBSztRQUV0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCOztpQkFSekIsS0FBSzs7WUFXeEIsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBUyxFQUFFLE1BQWdDLEVBQUUsQ0FBQztvQkFBOUMsS0FBSyxHQUFMLEtBQVMsY0FBRCxDQUFDLEdBQVQsS0FBUyxFQUFFLFlBQVksR0FBWixNQUFnQyxjQUFqQixJQUFJLENBQUMsWUFBWSxHQUFoQyxNQUFnQztnQkFDdkQsR0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBRWhCLElBQUksQ0FBQyxLQUFLO2dCQUVWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZO2dC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QU0sQ0FBQywwQkFBMEI7QUFBRyxDQUFDO1NBRTFGLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQUMsTUFBTSxTQUFTLElBQUksQ0FBQyxRQUFRO0FBQUcsQ0FBQztTQUV2RSw4QkFBOEIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDekQsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFbEIsR0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTtJQUVoQyxFQUFFLEVBQUUsV0FBVyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3RCLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTO0lBQzlDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcHJlYWQgZnJvbSBcIi4vc3ByZWFkXCI7XG5cbmltcG9ydCB7IFdJTERDQVJEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbmNsdWRlcywgcHVzaCwgY2xlYXIsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCAgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzID0gaW50ZXJtZWRpYXRlTm9kZXM7XG4gIH1cblxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkQpO1xuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHRoaXMuc3ViUXVlcnkuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNpb24sIHR5cGVzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcblxuICAgIGlmIChzdWJFeHByZXNpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHN1YkV4cHJlc2lvbjsgIC8vL1xuXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbIV0rKShcXFtbXlxcXV0rXXwhKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KFwifFwiKSxcbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzKHNlbGVjdG9ycywgdHlwZXMpLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMoc3ViRXhwcmVzc2lvbiwgdHlwZXMpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gXCIvXCIpLCAgLy8vXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JUeXBlU2VsZWN0b3IgPSBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgeyByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzKHNlbGVjdG9ycywgdHlwZXMpIHtcbiAgbGV0IHJ1bGVOYW1lcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgfVxuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG4iXX0=