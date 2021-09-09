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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJXSUxEQ0FSRCIsImluY2x1ZGVzIiwicHVzaCIsImNsZWFyIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIlF1ZXJ5IiwiY29uc3RydWN0b3IiLCJydWxlTmFtZXMiLCJ0eXBlcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50IiwiaW50ZXJtZWRpYXRlTm9kZXMiLCJleGVjdXRlIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJmaW5kIiwiYXBwbHkiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiZm91bmQiLCJ0ZXJtaW5hbE5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbnRlcm1lZGlhdGVOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiYWRqdXN0Tm9kZXMiLCJpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzIiwic3ViRXhwcmVzaW9uIiwicXVlcnkiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVUsQ0FBVixPQUFVO0FBRUosR0FBYSxDQUFiLFVBQWE7QUFDOEIsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEUsS0FBSyxpQkFBWCxRQUFRO2FBQUYsS0FBSyxDQUNaLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjs4QkFEOUUsS0FBSztRQUV0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCOztpQkFSekIsS0FBSzs7WUFXeEIsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBUyxFQUFFLE1BQWdDLEVBQUUsQ0FBQztvQkFBOUMsS0FBSyxHQUFMLEtBQVMsY0FBRCxDQUFDLEdBQVQsS0FBUyxFQUFFLFlBQVksR0FBWixNQUFnQyxjQUFqQixJQUFJLENBQUMsWUFBWSxHQUFoQyxNQUFnQztnQkFDdkQsR0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBRWhCLElBQUksQ0FBQyxLQUFLO2dCQUVWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZO2dC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