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
var _array = require("./utilities/array");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER;
var Query = /*#__PURE__*/ function() {
    function Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes) {
        _class_call_check(this, Query);
        this.spread = spread;
        this.subQuery = subQuery;
        this.ruleNames = ruleNames;
        this.tokenTypes = tokenTypes;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
    }
    _create_class(Query, [
        {
            key: "getSpread",
            value: function getSpread() {
                return this.sprea;
            }
        },
        {
            key: "getSubQuery",
            value: function getSubQuery() {
                return this.subQuery;
            }
        },
        {
            key: "getRuleNames",
            value: function getRuleNames() {
                return this.ruleNames;
            }
        },
        {
            key: "getTokenTypes",
            value: function getTokenTypes() {
                return this.tokenTypes;
            }
        },
        {
            key: "getMaximumDepth",
            value: function getMaximumDepth() {
                return this.maximumDepth;
            }
        },
        {
            key: "isInfiniteDescent",
            value: function isInfiniteDescent() {
                return this.infiniteDescent;
            }
        },
        {
            key: "getIntermediateNodes",
            value: function getIntermediateNodes() {
                return this.intermediateNodes;
            }
        },
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
                    var terminalNode = node, types = this.tokenTypes, type = terminalNode.getType();
                    found = (0, _array.includes)(types, type, WILDCARD_CHARACTER);
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
                var spread = expression.getSpread(), subQuery = subQueryFromExpression(expression), ruleNames = expression.getRuleNames(), tokenTypes = expression.getTokenTypes(), infiniteDescent = expression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        },
        {
            key: "fromSubExpression",
            value: function fromSubExpression(subExpression) {
                var spread = subExpression.getSpread(), subQuery = subQueryFromSubExpression(subExpression), ruleNames = subExpression.getRuleNames(), tokenTypes = subExpression.getTokenTypes(), maximumDepth = Infinity, infiniteDescent = subExpression.isInfiniteDescent(), intermediateNodes = [], query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
                return query;
            }
        }
    ]);
    return Query;
}();
function subQueryFromExpression(expression) {
    var subQuery = null;
    var subExpression = expression.getSubExpression();
    if (subExpression !== null) {
        var query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}
function subQueryFromSubExpression(subExpression) {
    var subQuery = null;
    subExpression = subExpression.getSubExpression(); ///
    if (subExpression !== null) {
        var query = Query.fromSubExpression(subExpression);
        subQuery = query; ///
    }
    return subQuery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcHVzaCwgY2xlYXIsIGluY2x1ZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHNwcmVhZCwgc3ViUXVlcnksIHJ1bGVOYW1lcywgdG9rZW5UeXBlcywgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKSB7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudG9rZW5UeXBlcyA9IHRva2VuVHlwZXM7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5pbnRlcm1lZGlhdGVOb2RlcyA9IGludGVybWVkaWF0ZU5vZGVzO1xuICB9XG5cbiAgZ2V0U3ByZWFkKCkge1xuICAgIHJldHVybiB0aGlzLnNwcmVhO1xuICB9XG5cbiAgZ2V0U3ViUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViUXVlcnk7XG4gIH1cblxuICBnZXRSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0VG9rZW5UeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlblR5cGVzO1xuICB9XG5cbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGlzSW5maW5pdGVEZXNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmluZmluaXRlRGVzY2VudDtcbiAgfVxuXG4gIGdldEludGVybWVkaWF0ZU5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybWVkaWF0ZU5vZGVzO1xuICB9XG5cbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDAsIG1heGltdW1EZXB0aCA9IHRoaXMubWF4aW11bURlcHRoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2xlYXIodGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gIH1cblxuICBmaW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPiBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIGxldCBmb3VuZDtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IHRoaXMudG9rZW5UeXBlcywgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMucHVzaChpbnRlcm1lZGlhdGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3ViUXVlcnkuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHNwcmVhZCA9IGV4cHJlc3Npb24uZ2V0U3ByZWFkKCksXG4gICAgICAgICAgc3ViUXVlcnkgPSBzdWJRdWVyeUZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IGV4cHJlc3Npb24uZ2V0UnVsZU5hbWVzKCksXG4gICAgICAgICAgdG9rZW5UeXBlcyA9IGV4cHJlc3Npb24uZ2V0VG9rZW5UeXBlcygpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IGV4cHJlc3Npb24uaXNJbmZpbml0ZURlc2NlbnQoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVOb2RlcyA9IFtdLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHNwcmVhZCwgc3ViUXVlcnksIHJ1bGVOYW1lcywgdG9rZW5UeXBlcywgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKTtcblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gc3ViRXhwcmVzc2lvbi5nZXRTcHJlYWQoKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IHN1YlF1ZXJ5RnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgICAgcnVsZU5hbWVzID0gc3ViRXhwcmVzc2lvbi5nZXRSdWxlTmFtZXMoKSxcbiAgICAgICAgICB0b2tlblR5cGVzID0gc3ViRXhwcmVzc2lvbi5nZXRUb2tlblR5cGVzKCksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gSW5maW5pdHksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gc3ViRXhwcmVzc2lvbi5pc0luZmluaXRlRGVzY2VudCgpLFxuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc3ByZWFkLCBzdWJRdWVyeSwgcnVsZU5hbWVzLCB0b2tlblR5cGVzLCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgc3ViUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkV4cHJlc3Npb24gPSBleHByZXNzaW9uLmdldFN1YkV4cHJlc3Npb24oKTtcblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cblxuZnVuY3Rpb24gc3ViUXVlcnlGcm9tU3ViRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSB7XG4gIGxldCBzdWJRdWVyeSA9IG51bGw7XG5cbiAgc3ViRXhwcmVzc2lvbiA9IHN1YkV4cHJlc3Npb24uZ2V0U3ViRXhwcmVzc2lvbigpOyAvLy9cblxuICBpZiAoc3ViRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbVN1YkV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG5cbiAgICBzdWJRdWVyeSA9IHF1ZXJ5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdWJRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeSIsIldJTERDQVJEX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsInJ1bGVOYW1lcyIsInRva2VuVHlwZXMiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJpbnRlcm1lZGlhdGVOb2RlcyIsImdldFNwcmVhZCIsInNwcmVhIiwiZ2V0U3ViUXVlcnkiLCJnZXRSdWxlTmFtZXMiLCJnZXRUb2tlblR5cGVzIiwiZ2V0TWF4aW11bURlcHRoIiwiaXNJbmZpbml0ZURlc2NlbnQiLCJnZXRJbnRlcm1lZGlhdGVOb2RlcyIsImV4ZWN1dGUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsImNsZWFyIiwiZmluZCIsImFwcGx5Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImZvdW5kIiwidGVybWluYWxOb2RlIiwidHlwZXMiLCJ0eXBlIiwiZ2V0VHlwZSIsImluY2x1ZGVzIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImludGVybWVkaWF0ZU5vZGUiLCJwdXNoIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiYWRqdXN0Tm9kZXMiLCJpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInN1YlF1ZXJ5RnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsImZyb21TdWJFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsInN1YlF1ZXJ5RnJvbVN1YkV4cHJlc3Npb24iLCJnZXRTdWJFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOTTtxQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxxQkFBdUJDLHFCQUFVLENBQWpDRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47YUFBTUEsTUFDUEcsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCO2dDQURsRlQ7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBUlJUOztZQVduQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxLQUFLO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixRQUFRO1lBQ3RCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixTQUFTO1lBQ3ZCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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