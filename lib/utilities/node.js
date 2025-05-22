"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get endIndexFromSpreadNode () {
        return endIndexFromSpreadNode;
    },
    get errorNodesFromExpressionNode () {
        return errorNodesFromExpressionNode;
    },
    get indexFromIndexNode () {
        return indexFromIndexNode;
    },
    get indexFromSpreadNode () {
        return indexFromSpreadNode;
    },
    get infiniteDescentFromPathNode () {
        return infiniteDescentFromPathNode;
    },
    get pathNodeFromExpressionNode () {
        return pathNodeFromExpressionNode;
    },
    get pathNodeFromSubExpressionNode () {
        return pathNodeFromSubExpressionNode;
    },
    get ruleNamesFromPathNode () {
        return ruleNamesFromPathNode;
    },
    get selectorNodesFromPathNode () {
        return selectorNodesFromPathNode;
    },
    get spreadNodeFromExpressionNode () {
        return spreadNodeFromExpressionNode;
    },
    get spreadNodeFromSubExpressionNode () {
        return spreadNodeFromSubExpressionNode;
    },
    get startIndexFromSpreadNode () {
        return startIndexFromSpreadNode;
    },
    get subExpressionNodeFromExpressionNode () {
        return subExpressionNodeFromExpressionNode;
    },
    get subExpressionNodeFromSubExpressionNode () {
        return subExpressionNodeFromSubExpressionNode;
    },
    get tokenTypesFromPathNode () {
        return tokenTypesFromPathNode;
    },
    get uniqueFromSpreadNode () {
        return uniqueFromSpreadNode;
    }
});
var _ruleNames = require("../ruleNames");
function indexFromIndexNode(indexNode) {
    var nonTerminalNode = indexNode, index = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
        var terminalNode = firstChildNode, content = terminalNode.getContent(), index = Number(content);
        return index;
    });
    return index;
}
function ruleNamesFromPathNode(pathNode) {
    var selectorNodes = selectorNodesFromPathNode(pathNode), ruleNameNodes = selectorNodes.reduce(function(ruleNameNodes, selectorNode) {
        var nonTerminalNode = selectorNode, ruleNameNode = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
            var ruleNameNode = null;
            var nonTerminalNode = firstChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameRuleNameRuleName = ruleName === _ruleNames.RULE_NAME_RULE_NAME;
            if (ruleNameRuleNameRuleName) {
                ruleNameNode = nonTerminalNode; ///
            }
            return ruleNameNode;
        });
        if (ruleNameNode !== null) {
            ruleNameNodes.push(ruleNameNode);
        }
        return ruleNameNodes;
    }, []), ruleNames = ruleNameNodes.map(function(ruleNameNode) {
        var nonTerminalNode = ruleNameNode, ruleName = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
            var terminalNode = firstChildNode, content = terminalNode.getContent(), ruleName = content; ///
            return ruleName;
        });
        return ruleName;
    });
    return ruleNames;
}
function tokenTypesFromPathNode(pathNode) {
    var selectorNodes = selectorNodesFromPathNode(pathNode), tokenTypeNodes = selectorNodes.reduce(function(tokenTypeNodes, selectorNode) {
        var nonTerminalNode = selectorNode, tokenTypeNode = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
            var tokenTypeNode = null;
            var nonTerminalNode = firstChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameTokenTypeRuleName = ruleName === _ruleNames.TOKEN_TYPE_RULE_NAME;
            if (ruleNameTokenTypeRuleName) {
                tokenTypeNode = nonTerminalNode; ///
            }
            return tokenTypeNode;
        });
        if (tokenTypeNode !== null) {
            tokenTypeNodes.push(tokenTypeNode);
        }
        return tokenTypeNodes;
    }, []), tokenTypes = tokenTypeNodes.map(function(tokenTypeNode) {
        var nonTerminalNode = tokenTypeNode, tokenType = fromThirdChildNode(nonTerminalNode, function(thirdChildNode) {
            var terminalNode = thirdChildNode, content = terminalNode.getContent(), tokenType = content; ///
            return tokenType;
        });
        return tokenType;
    });
    return tokenTypes;
}
function selectorNodesFromPathNode(pathNode) {
    var nonTerminalNode;
    nonTerminalNode = pathNode; ///
    var selectorsNode = fromLastChildNode(nonTerminalNode, function(lastChildNode) {
        var selectorsNode = lastChildNode; ///
        return selectorsNode;
    });
    nonTerminalNode = selectorsNode; ///
    var selectorNodes = nonTerminalNode.filterChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            return true;
        }
    });
    return selectorNodes;
}
function infiniteDescentFromPathNode(pathNode) {
    var nonTerminalNode = pathNode, infiniteDescent = fromSecondChildNode(nonTerminalNode, function(secondChildNode) {
        var nonTerminalNode = secondChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameInfiniteDescentRuleName = ruleName === _ruleNames.INFINITE_DESCENT_RULE_NAME, infiniteDescent = ruleNameInfiniteDescentRuleName; ///
        return infiniteDescent;
    }) || false;
    return infiniteDescent;
}
function uniqueFromSpreadNode(spreadNode) {
    var nonTerminalNode = spreadNode, unique = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
        var unique = false;
        var firstChildNodeNonTerminalNode = firstChildNode.isNonTerminalNode();
        if (firstChildNodeNonTerminalNode) {
            var nonTerminalNode = firstChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameUniqueRuleName = ruleName === _ruleNames.UNIQUE_RULE_NAME;
            if (ruleNameUniqueRuleName) {
                unique = true;
            }
        }
        return unique;
    });
    return unique;
}
function indexFromSpreadNode(spreadNode) {
    var index = null;
    var nonTerminalNode = spreadNode, indexNode = nonTerminalNode.findChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNameIndexRuleName = ruleName === _ruleNames.INDEX_RULE_NAME;
            if (ruleNameIndexRuleName) {
                return true;
            }
        }
    }) || null;
    if (indexNode !== null) {
        index = indexFromIndexNode(indexNode);
    }
    return index;
}
function endIndexFromSpreadNode(spreadNode) {
    var endIndex = Infinity;
    var nonTerminalNode = spreadNode, endIndexNode = nonTerminalNode.findChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNameEndIndexRuleName = ruleName === _ruleNames.END_INDEX_RULE_NAME;
            if (ruleNameEndIndexRuleName) {
                return true;
            }
        }
    }) || null;
    if (endIndexNode !== null) {
        endIndex = indexFromIndexNode(endIndexNode);
    }
    return endIndex;
}
function startIndexFromSpreadNode(spreadNode) {
    var startIndex = 0;
    var nonTerminalNode = spreadNode, startIndexNode = nonTerminalNode.findChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNameStartIndexRuleName = ruleName === _ruleNames.START_INDEX_RULE_NAME;
            if (ruleNameStartIndexRuleName) {
                return true;
            }
        }
    }) || null;
    if (startIndexNode !== null) {
        startIndex = indexFromIndexNode(startIndexNode);
    }
    return startIndex;
}
function pathNodeFromExpressionNode(expressionNode) {
    var nonTerminalNode = expressionNode, pathNode = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
        var pathNode = firstChildNode; ///
        return pathNode;
    });
    return pathNode;
}
function spreadNodeFromExpressionNode(expressionNode) {
    var nonTerminalNode = expressionNode, spreadNode = fromSecondChildNode(nonTerminalNode, function(secondChildNode) {
        var spreadNode = null;
        var nonTerminalNode = secondChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameSpreadRuleName = ruleName === _ruleNames.SPREAD_RULE_NAME;
        if (ruleNameSpreadRuleName) {
            spreadNode = secondChildNode; ///
        }
        return spreadNode;
    }) || null;
    return spreadNode;
}
function errorNodesFromExpressionNode(expressionNode) {
    var nonTerminalNode = expressionNode, errorNodes = nonTerminalNode.reduceChildNode(function(errorNodes, childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNameErrorRuleName = ruleName === _ruleNames.ERROR_RULE_NAME;
            if (ruleNameErrorRuleName) {
                var errorNode = nonTerminalNode; ///
                errorNodes.push(errorNode);
            }
        }
        return errorNodes;
    }, []);
    return errorNodes;
}
function subExpressionNodeFromExpressionNode(expressionNode) {
    var subExpressionNode = null;
    var nonTerminalNode = expressionNode, multiplicity = nonTerminalNode.getMultiplicity();
    if (multiplicity > 1) {
        subExpressionNode = fromLastChildNode(nonTerminalNode, function(lastChildNode) {
            var subExpressionNode = null;
            var nonTerminalNode = lastChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameSubExpressionRuleName = ruleName === _ruleNames.SUB_EXPRESSION_RULE_NAME;
            if (ruleNameSubExpressionRuleName) {
                subExpressionNode = lastChildNode; ///
            }
            return subExpressionNode;
        });
    }
    return subExpressionNode;
}
function pathNodeFromSubExpressionNode(subExpressionNode) {
    var nonTerminalNode = subExpressionNode, pathNode = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
        var pathNode = firstChildNode; ///
        return pathNode;
    });
    return pathNode;
}
function spreadNodeFromSubExpressionNode(subExpressionNode) {
    var spreadNode = null;
    var nonTerminalNode = subExpressionNode, multiplicity = nonTerminalNode.getMultiplicity();
    if (multiplicity > 1) {
        spreadNode = fromSecondChildNode(nonTerminalNode, function(secondChildNode) {
            var spreadNode = null;
            var nonTerminalNode = secondChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameSpreadRuleName = ruleName === _ruleNames.SPREAD_RULE_NAME;
            if (ruleNameSpreadRuleName) {
                spreadNode = secondChildNode; ///
            }
            return spreadNode;
        }) || null;
    }
    return spreadNode;
}
function subExpressionNodeFromSubExpressionNode(subExpressionNode) {
    var nonTerminalNode = subExpressionNode; ///
    subExpressionNode = null;
    var multiplicity = nonTerminalNode.getMultiplicity();
    if (multiplicity > 1) {
        subExpressionNode = fromLastChildNode(nonTerminalNode, function(lastChildNode) {
            var _$subExpressionNode = null;
            var nonTerminalNoe = lastChildNode, ruleName = nonTerminalNoe.getRuleName(), ruleNameSubExpressionRuleName = ruleName === _ruleNames.SUB_EXPRESSION_RULE_NAME;
            if (ruleNameSubExpressionRuleName) {
                _$subExpressionNode = lastChildNode; ///
            }
            return _$subExpressionNode;
        });
    }
    return subExpressionNode;
}
function fromFirstChildNode(nonTerminalNode, callback) {
    var result;
    var firstIndex = 0;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === firstIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondChildNode(nonTerminalNode, callback) {
    var result;
    var secondIndex = 1;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === secondIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdChildNode(nonTerminalNode, callback) {
    var result;
    var thirdIndex = 2;
    nonTerminalNode.forwardsSomeChildNode(function(childNode, index) {
        if (index === thirdIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromLastChildNode(nonTerminalNode, callback) {
    var result;
    var multiplicity = nonTerminalNode.getMultiplicity(), lastIndex = multiplicity - 1;
    nonTerminalNode.backwardsSomeChildNode(function(childNode, index) {
        if (index === lastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVJST1JfUlVMRV9OQU1FLFxuICAgICAgICAgSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgVU5JUVVFX1JVTEVfTkFNRSxcbiAgICAgICAgIFNQUkVBRF9SVUxFX05BTUUsXG4gICAgICAgICBFTkRfSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgUlVMRV9OQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIFRPS0VOX1RZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgU1RBUlRfSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgU1VCX0VYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgSU5GSU5JVEVfREVTQ0VOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleEZyb21JbmRleE5vZGUoaW5kZXhOb2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGluZGV4Tm9kZSwgLy8vXG4gICAgICAgIGluZGV4ID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICBpbmRleCA9IE51bWJlcihjb250ZW50KTtcblxuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVBhdGhOb2RlKHBhdGhOb2RlKSB7XG4gIGNvbnN0IHNlbGVjdG9yTm9kZXMgPSBzZWxlY3Rvck5vZGVzRnJvbVBhdGhOb2RlKHBhdGhOb2RlKSxcbiAgICAgICAgcnVsZU5hbWVOb2RlcyA9IHNlbGVjdG9yTm9kZXMucmVkdWNlKChydWxlTmFtZU5vZGVzLCBzZWxlY3Rvck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzZWxlY3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGVOYW1lTm9kZSA9IGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHJ1bGVOYW1lTm9kZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFJVTEVfTkFNRV9SVUxFX05BTUUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAocnVsZU5hbWVSdWxlTmFtZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlTmFtZU5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBydWxlTmFtZU5vZGVzLnB1c2gocnVsZU5hbWVOb2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWVOb2RlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZU5vZGVzLm1hcCgocnVsZU5hbWVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcnVsZU5hbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5UeXBlc0Zyb21QYXRoTm9kZShwYXRoTm9kZSkge1xuICBjb25zdCBzZWxlY3Rvck5vZGVzID0gc2VsZWN0b3JOb2Rlc0Zyb21QYXRoTm9kZShwYXRoTm9kZSksXG4gICAgICAgIHRva2VuVHlwZU5vZGVzID0gc2VsZWN0b3JOb2Rlcy5yZWR1Y2UoKHRva2VuVHlwZU5vZGVzLCBzZWxlY3Rvck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzZWxlY3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRva2VuVHlwZU5vZGUgPSBmcm9tRmlyc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCB0b2tlblR5cGVOb2RlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lVG9rZW5UeXBlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRPS0VOX1RZUEVfUlVMRV9OQU1FKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lVG9rZW5UeXBlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5UeXBlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlblR5cGVOb2RlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHRva2VuVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRva2VuVHlwZU5vZGVzLnB1c2godG9rZW5UeXBlTm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRva2VuVHlwZU5vZGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHRva2VuVHlwZXMgPSB0b2tlblR5cGVOb2Rlcy5tYXAoKHRva2VuVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0b2tlblR5cGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlID0gZnJvbVRoaXJkQ2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKHRoaXJkQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlyZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlblR5cGU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gdG9rZW5UeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdG9rZW5UeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTm9kZXNGcm9tUGF0aE5vZGUocGF0aE5vZGUpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZTtcblxuICBub25UZXJtaW5hbE5vZGUgPSBwYXRoTm9kZTsgLy8vXG5cbiAgY29uc3Qgc2VsZWN0b3JzTm9kZSA9IGZyb21MYXN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGxhc3RDaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvcnNOb2RlID0gbGFzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc05vZGU7XG4gIH0pO1xuXG4gIG5vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vZGU7ICAvLy9cblxuICBjb25zdCBzZWxlY3Rvck5vZGVzID0gbm9uVGVybWluYWxOb2RlLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzZWxlY3Rvck5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5maW5pdGVEZXNjZW50RnJvbVBhdGhOb2RlKHBhdGhOb2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHBhdGhOb2RlLCAvLy9cbiAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gZnJvbVNlY29uZENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJ1bGVOYW1lSW5maW5pdGVEZXNjZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IElORklOSVRFX0RFU0NFTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSBydWxlTmFtZUluZmluaXRlRGVzY2VudFJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gaW5maW5pdGVEZXNjZW50O1xuICAgICAgICB9KSB8fCBmYWxzZTtcblxuICByZXR1cm4gaW5maW5pdGVEZXNjZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlRnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzcHJlYWROb2RlLFxuICAgICAgICB1bmlxdWUgPSBmcm9tRmlyc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBsZXQgdW5pcXVlID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZVVuaXF1ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBVTklRVUVfUlVMRV9OQU1FKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lVW5pcXVlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgdW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdW5pcXVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdW5pcXVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3ByZWFkTm9kZSwgLy8vXG4gICAgICAgIGluZGV4Tm9kZSA9IG5vblRlcm1pbmFsTm9kZS5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lSW5kZXhSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gSU5ERVhfUlVMRV9OQU1FKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lSW5kZXhSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGluZGV4Tm9kZSAhPT0gbnVsbCkge1xuICAgIGluZGV4ID0gaW5kZXhGcm9tSW5kZXhOb2RlKGluZGV4Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRJbmRleEZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpIHtcbiAgbGV0IGVuZEluZGV4ID0gSW5maW5pdHk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3ByZWFkTm9kZSwgLy8vXG4gICAgICAgIGVuZEluZGV4Tm9kZSA9IG5vblRlcm1pbmFsTm9kZS5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lRW5kSW5kZXhSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gRU5EX0lOREVYX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTmFtZUVuZEluZGV4UnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChlbmRJbmRleE5vZGUgIT09IG51bGwpIHtcbiAgICBlbmRJbmRleCA9IGluZGV4RnJvbUluZGV4Tm9kZShlbmRJbmRleE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVuZEluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRJbmRleEZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpIHtcbiAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHNwcmVhZE5vZGUsIC8vL1xuICAgICAgICBzdGFydEluZGV4Tm9kZSA9IG5vblRlcm1pbmFsTm9kZS5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lU3RhcnRJbmRleFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTVEFSVF9JTkRFWF9SVUxFX05BTUUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU5hbWVTdGFydEluZGV4UnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChzdGFydEluZGV4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXJ0SW5kZXggPSBpbmRleEZyb21JbmRleE5vZGUoc3RhcnRJbmRleE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0SW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoTm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBleHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHBhdGhOb2RlID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGF0aE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHBhdGhOb2RlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGF0aE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3ByZWFkTm9kZSA9IGZyb21TZWNvbmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgbGV0IHNwcmVhZE5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBydWxlTmFtZVNwcmVhZFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTUFJFQURfUlVMRV9OQU1FKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZVNwcmVhZFJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBzcHJlYWROb2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNwcmVhZE5vZGU7XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIHNwcmVhZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgZXJyb3JOb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5yZWR1Y2VDaGlsZE5vZGUoKGVycm9yTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVFcnJvclJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBFUlJPUl9SVUxFX05BTUUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU5hbWVFcnJvclJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGVycm9yTm9kZXMucHVzaChlcnJvck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlcnJvck5vZGVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVycm9yTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJFeHByZXNzaW9uTm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSkge1xuICBsZXQgc3ViRXhwcmVzc2lvbk5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgbXVsdGlwbGljaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE11bHRpcGxpY2l0eSgpO1xuXG4gIGlmIChtdWx0aXBsaWNpdHkgPiAxKSB7XG4gICAgc3ViRXhwcmVzc2lvbk5vZGUgPSBmcm9tTGFzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChsYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgc3ViRXhwcmVzc2lvbk5vZGUgPSBudWxsO1xuXG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZU5hbWVTdWJFeHByZXNzaW9uUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNVQl9FWFBSRVNTSU9OX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChydWxlTmFtZVN1YkV4cHJlc3Npb25SdWxlTmFtZSkge1xuICAgICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IGxhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YkV4cHJlc3Npb25Ob2RlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1YkV4cHJlc3Npb25Ob2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUoc3ViRXhwcmVzc2lvbk5vZGUpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3ViRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBwYXRoTm9kZSA9IGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhdGhOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBwYXRoTm9kZTtcbiAgICAgICAgfSlcblxuICByZXR1cm4gcGF0aE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcHJlYWROb2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKSB7XG4gIGxldCBzcHJlYWROb2RlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdWJFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIG11bHRpcGxpY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICBpZiAobXVsdGlwbGljaXR5ID4gMSkge1xuICAgIHNwcmVhZE5vZGUgPSBmcm9tU2Vjb25kQ2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHNwcmVhZE5vZGUgPSBudWxsO1xuXG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlTmFtZVNwcmVhZFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTUFJFQURfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lU3ByZWFkUnVsZU5hbWUpIHtcbiAgICAgICAgc3ByZWFkTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3ByZWFkTm9kZTtcbiAgICB9KSB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNwcmVhZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJFeHByZXNzaW9uTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdWJFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgc3ViRXhwcmVzc2lvbk5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICBpZiAobXVsdGlwbGljaXR5ID4gMSkge1xuICAgIHN1YkV4cHJlc3Npb25Ob2RlID0gZnJvbUxhc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAobGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHN1YkV4cHJlc3Npb25Ob2RlID0gbnVsbDtcblxuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2UgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2UuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lU3ViRXhwcmVzc2lvblJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTVUJfRVhQUkVTU0lPTl9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVTdWJFeHByZXNzaW9uUnVsZU5hbWUpIHtcbiAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGUgPSBsYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJFeHByZXNzaW9uTm9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdWJFeHByZXNzaW9uTm9kZTtcbn1cblxuZnVuY3Rpb24gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBmaXJzdEluZGV4ID0gMDtcblxuICBub25UZXJtaW5hbE5vZGUuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kQ2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBzZWNvbmRJbmRleCA9IDE7XG5cbiAgbm9uVGVybWluYWxOb2RlLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gc2Vjb25kSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21UaGlyZENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdGhpcmRJbmRleCA9IDI7XG5cbiAgbm9uVGVybWluYWxOb2RlLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUxhc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgbGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMTtcblxuICBub25UZXJtaW5hbE5vZGUuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbImVuZEluZGV4RnJvbVNwcmVhZE5vZGUiLCJlcnJvck5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwiaW5kZXhGcm9tSW5kZXhOb2RlIiwiaW5kZXhGcm9tU3ByZWFkTm9kZSIsImluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZSIsInBhdGhOb2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwicGF0aE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJydWxlTmFtZXNGcm9tUGF0aE5vZGUiLCJzZWxlY3Rvck5vZGVzRnJvbVBhdGhOb2RlIiwic3ByZWFkTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInNwcmVhZE5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJzdGFydEluZGV4RnJvbVNwcmVhZE5vZGUiLCJzdWJFeHByZXNzaW9uTm9kZUZyb21FeHByZXNzaW9uTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlIiwidG9rZW5UeXBlc0Zyb21QYXRoTm9kZSIsInVuaXF1ZUZyb21TcHJlYWROb2RlIiwiaW5kZXhOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiaW5kZXgiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTnVtYmVyIiwicGF0aE5vZGUiLCJzZWxlY3Rvck5vZGVzIiwicnVsZU5hbWVOb2RlcyIsInJlZHVjZSIsInNlbGVjdG9yTm9kZSIsInJ1bGVOYW1lTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVOYW1lUnVsZU5hbWUiLCJSVUxFX05BTUVfUlVMRV9OQU1FIiwicHVzaCIsInJ1bGVOYW1lcyIsIm1hcCIsInRva2VuVHlwZU5vZGVzIiwidG9rZW5UeXBlTm9kZSIsInJ1bGVOYW1lVG9rZW5UeXBlUnVsZU5hbWUiLCJUT0tFTl9UWVBFX1JVTEVfTkFNRSIsInRva2VuVHlwZXMiLCJ0b2tlblR5cGUiLCJmcm9tVGhpcmRDaGlsZE5vZGUiLCJ0aGlyZENoaWxkTm9kZSIsInNlbGVjdG9yc05vZGUiLCJmcm9tTGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGUiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImluZmluaXRlRGVzY2VudCIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJydWxlTmFtZUluZmluaXRlRGVzY2VudFJ1bGVOYW1lIiwiSU5GSU5JVEVfREVTQ0VOVF9SVUxFX05BTUUiLCJzcHJlYWROb2RlIiwidW5pcXVlIiwiZmlyc3RDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZVVuaXF1ZVJ1bGVOYW1lIiwiVU5JUVVFX1JVTEVfTkFNRSIsImZpbmRDaGlsZE5vZGUiLCJydWxlTmFtZUluZGV4UnVsZU5hbWUiLCJJTkRFWF9SVUxFX05BTUUiLCJlbmRJbmRleCIsIkluZmluaXR5IiwiZW5kSW5kZXhOb2RlIiwicnVsZU5hbWVFbmRJbmRleFJ1bGVOYW1lIiwiRU5EX0lOREVYX1JVTEVfTkFNRSIsInN0YXJ0SW5kZXgiLCJzdGFydEluZGV4Tm9kZSIsInJ1bGVOYW1lU3RhcnRJbmRleFJ1bGVOYW1lIiwiU1RBUlRfSU5ERVhfUlVMRV9OQU1FIiwiZXhwcmVzc2lvbk5vZGUiLCJydWxlTmFtZVNwcmVhZFJ1bGVOYW1lIiwiU1BSRUFEX1JVTEVfTkFNRSIsImVycm9yTm9kZXMiLCJyZWR1Y2VDaGlsZE5vZGUiLCJydWxlTmFtZUVycm9yUnVsZU5hbWUiLCJFUlJPUl9SVUxFX05BTUUiLCJlcnJvck5vZGUiLCJzdWJFeHByZXNzaW9uTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInJ1bGVOYW1lU3ViRXhwcmVzc2lvblJ1bGVOYW1lIiwiU1VCX0VYUFJFU1NJT05fUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2UiLCJjYWxsYmFjayIsInJlc3VsdCIsImZpcnN0SW5kZXgiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJzZWNvbmRJbmRleCIsInRoaXJkSW5kZXgi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