"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    endIndexFromSpreadNode: function() {
        return endIndexFromSpreadNode;
    },
    errorNodesFromExpressionNode: function() {
        return errorNodesFromExpressionNode;
    },
    indexFromIndexNode: function() {
        return indexFromIndexNode;
    },
    indexFromSpreadNode: function() {
        return indexFromSpreadNode;
    },
    infiniteDescentFromPathNode: function() {
        return infiniteDescentFromPathNode;
    },
    pathNodeFromExpressionNode: function() {
        return pathNodeFromExpressionNode;
    },
    pathNodeFromSubExpressionNode: function() {
        return pathNodeFromSubExpressionNode;
    },
    ruleNamesFromPathNode: function() {
        return ruleNamesFromPathNode;
    },
    selectorNodesFromPathNode: function() {
        return selectorNodesFromPathNode;
    },
    spreadNodeFromExpressionNode: function() {
        return spreadNodeFromExpressionNode;
    },
    spreadNodeFromSubExpressionNode: function() {
        return spreadNodeFromSubExpressionNode;
    },
    startIndexFromSpreadNode: function() {
        return startIndexFromSpreadNode;
    },
    subExpressionNodeFromExpressionNode: function() {
        return subExpressionNodeFromExpressionNode;
    },
    subExpressionNodeFromSubExpressionNode: function() {
        return subExpressionNodeFromSubExpressionNode;
    },
    tokenTypesFromPathNode: function() {
        return tokenTypesFromPathNode;
    },
    uniqueFromSpreadNode: function() {
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
    var selectorNodes = selectorNodesFromPathNode(pathNode), tokenTYpeNodes = selectorNodes.reduce(function(tokenTYpeNodes, selectorNode) {
        var nonTerminalNode = selectorNode, tokenTypeNode = fromFirstChildNode(nonTerminalNode, function(firstChildNode) {
            var tokenTYpeNode = null;
            var nonTerminalNode = firstChildNode, ruleName = nonTerminalNode.getRuleName(), ruleNameTokenTypeRuleName = ruleName === _ruleNames.TOKEN_TYPE_RULE_NAME;
            if (ruleNameTokenTypeRuleName) {
                tokenTYpeNode = nonTerminalNode; ///
            }
            return tokenTYpeNode;
        });
        if (tokenTypeNode !== null) {
            tokenTYpeNodes.push(tokenTypeNode);
        }
        return tokenTYpeNodes;
    }, []), tokenTypes = tokenTYpeNodes.map(function(tokenTypeNode) {
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
    });
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
    });
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
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVJST1JfUlVMRV9OQU1FLFxuICAgICAgICAgSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgVU5JUVVFX1JVTEVfTkFNRSxcbiAgICAgICAgIFNQUkVBRF9SVUxFX05BTUUsXG4gICAgICAgICBFTkRfSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgUlVMRV9OQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIFRPS0VOX1RZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgU1RBUlRfSU5ERVhfUlVMRV9OQU1FLFxuICAgICAgICAgU1VCX0VYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgSU5GSU5JVEVfREVTQ0VOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleEZyb21JbmRleE5vZGUoaW5kZXhOb2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGluZGV4Tm9kZSwgLy8vXG4gICAgICAgIGluZGV4ID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGluZGV4ID0gTnVtYmVyKGNvbnRlbnQpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZXNGcm9tUGF0aE5vZGUocGF0aE5vZGUpIHtcbiAgY29uc3Qgc2VsZWN0b3JOb2RlcyA9IHNlbGVjdG9yTm9kZXNGcm9tUGF0aE5vZGUocGF0aE5vZGUpLFxuICAgICAgICBydWxlTmFtZU5vZGVzID0gc2VsZWN0b3JOb2Rlcy5yZWR1Y2UoKHJ1bGVOYW1lTm9kZXMsIHNlbGVjdG9yTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWVOb2RlID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgcnVsZU5hbWVOb2RlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gUlVMRV9OQU1FX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChydWxlTmFtZVJ1bGVOYW1lUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lTm9kZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJ1bGVOYW1lTm9kZXMucHVzaChydWxlTmFtZU5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZU5vZGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lTm9kZXMubWFwKChydWxlTmFtZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBydWxlTmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblR5cGVzRnJvbVBhdGhOb2RlKHBhdGhOb2RlKSB7XG4gIGNvbnN0IHNlbGVjdG9yTm9kZXMgPSBzZWxlY3Rvck5vZGVzRnJvbVBhdGhOb2RlKHBhdGhOb2RlKSxcbiAgICAgICAgdG9rZW5UWXBlTm9kZXMgPSBzZWxlY3Rvck5vZGVzLnJlZHVjZSgodG9rZW5UWXBlTm9kZXMsIHNlbGVjdG9yTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlTm9kZSA9IGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHRva2VuVFlwZU5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVUb2tlblR5cGVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVE9LRU5fVFlQRV9SVUxFX05BTUUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAocnVsZU5hbWVUb2tlblR5cGVSdWxlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlblRZcGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuVFlwZU5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodG9rZW5UeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9rZW5UWXBlTm9kZXMucHVzaCh0b2tlblR5cGVOb2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdG9rZW5UWXBlTm9kZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgdG9rZW5UeXBlcyA9IHRva2VuVFlwZU5vZGVzLm1hcCgodG9rZW5UeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRva2VuVHlwZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSBmcm9tVGhpcmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAodGhpcmRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXJkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IGNvbnRlbnQ7ICAvLy9cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRva2VuVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rvck5vZGVzRnJvbVBhdGhOb2RlKHBhdGhOb2RlKSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGU7XG5cbiAgbm9uVGVybWluYWxOb2RlID0gcGF0aE5vZGU7IC8vL1xuXG4gIGNvbnN0IHNlbGVjdG9yc05vZGUgPSBmcm9tTGFzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChsYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTm9kZSA9IGxhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3RvcnNOb2RlO1xuICB9KTtcblxuICBub25UZXJtaW5hbE5vZGUgPSBzZWxlY3RvcnNOb2RlOyAgLy8vXG5cbiAgY29uc3Qgc2VsZWN0b3JOb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2VsZWN0b3JOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmluaXRlRGVzY2VudEZyb21QYXRoTm9kZShwYXRoTm9kZSkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBwYXRoTm9kZSwgLy8vXG4gICAgICAgIGluZmluaXRlRGVzY2VudCA9IGZyb21TZWNvbmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBydWxlTmFtZUluZmluaXRlRGVzY2VudFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBJTkZJTklURV9ERVNDRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gcnVsZU5hbWVJbmZpbml0ZURlc2NlbnRSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIGluZmluaXRlRGVzY2VudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZmluaXRlRGVzY2VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUZyb21TcHJlYWROb2RlKHNwcmVhZE5vZGUpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3ByZWFkTm9kZSxcbiAgICAgICAgdW5pcXVlID0gZnJvbUZpcnN0Q2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgbGV0IHVuaXF1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0Q2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVVbmlxdWVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVU5JUVVFX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTmFtZVVuaXF1ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHVuaXF1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVuaXF1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHVuaXF1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4RnJvbVNwcmVhZE5vZGUoc3ByZWFkTm9kZSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHNwcmVhZE5vZGUsIC8vL1xuICAgICAgICBpbmRleE5vZGUgPSBub25UZXJtaW5hbE5vZGUuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUluZGV4UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IElOREVYX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTmFtZUluZGV4UnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbmRleE5vZGUgIT09IG51bGwpIHtcbiAgICBpbmRleCA9IGluZGV4RnJvbUluZGV4Tm9kZShpbmRleE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kSW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSB7XG4gIGxldCBlbmRJbmRleCA9IEluZmluaXR5O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHNwcmVhZE5vZGUsIC8vL1xuICAgICAgICBlbmRJbmRleE5vZGUgPSBub25UZXJtaW5hbE5vZGUuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUVuZEluZGV4UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IEVORF9JTkRFWF9SVUxFX05BTUUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU5hbWVFbmRJbmRleFJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZW5kSW5kZXhOb2RlICE9PSBudWxsKSB7XG4gICAgZW5kSW5kZXggPSBpbmRleEZyb21JbmRleE5vZGUoZW5kSW5kZXhOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBlbmRJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0SW5kZXhGcm9tU3ByZWFkTm9kZShzcHJlYWROb2RlKSB7XG4gIGxldCBzdGFydEluZGV4ID0gMDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzcHJlYWROb2RlLCAvLy9cbiAgICAgICAgc3RhcnRJbmRleE5vZGUgPSBub25UZXJtaW5hbE5vZGUuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZVN0YXJ0SW5kZXhSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBUlRfSU5ERVhfUlVMRV9OQU1FKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lU3RhcnRJbmRleFJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3RhcnRJbmRleE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGFydEluZGV4ID0gaW5kZXhGcm9tSW5kZXhOb2RlKHN0YXJ0SW5kZXhOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFydEluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBwYXRoTm9kZSA9IGZyb21GaXJzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhdGhOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBwYXRoTm9kZTtcbiAgICAgICAgfSlcblxuICByZXR1cm4gcGF0aE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3ByZWFkTm9kZSA9IGZyb21TZWNvbmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgbGV0IHNwcmVhZE5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBydWxlTmFtZVNwcmVhZFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTUFJFQURfUlVMRV9OQU1FKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZVNwcmVhZFJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBzcHJlYWROb2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNwcmVhZE5vZGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzcHJlYWROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JOb2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBleHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIGVycm9yTm9kZXMgPSBub25UZXJtaW5hbE5vZGUucmVkdWNlQ2hpbGROb2RlKChlcnJvck5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lRXJyb3JSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gRVJST1JfUlVMRV9OQU1FKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lRXJyb3JSdWxlTmFtZSkge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvck5vZGUgPSBub25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgICAgICAgICAgICBlcnJvck5vZGVzLnB1c2goZXJyb3JOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZXJyb3JOb2RlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBlcnJvck5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRXhwcmVzc2lvbk5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpIHtcbiAgbGV0IHN1YkV4cHJlc3Npb25Ob2RlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBleHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIG11bHRpcGxpY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICBpZiAobXVsdGlwbGljaXR5ID4gMSkge1xuICAgIHN1YkV4cHJlc3Npb25Ob2RlID0gZnJvbUxhc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAobGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHN1YkV4cHJlc3Npb25Ob2RlID0gbnVsbDtcblxuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lU3ViRXhwcmVzc2lvblJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTVUJfRVhQUkVTU0lPTl9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVTdWJFeHByZXNzaW9uUnVsZU5hbWUpIHtcbiAgICAgICAgc3ViRXhwcmVzc2lvbk5vZGUgPSBsYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJFeHByZXNzaW9uTm9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdWJFeHByZXNzaW9uTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhOb2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgcGF0aE5vZGUgPSBmcm9tRmlyc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCAoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXRoTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gcGF0aE5vZGU7XG4gICAgICAgIH0pXG5cbiAgcmV0dXJuIHBhdGhOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ByZWFkTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZShzdWJFeHByZXNzaW9uTm9kZSkge1xuICBsZXQgc3ByZWFkTm9kZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3ViRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBtdWx0aXBsaWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0TXVsdGlwbGljaXR5KCk7XG5cbiAgaWYgKG11bHRpcGxpY2l0eSA+IDEpIHtcbiAgICBzcHJlYWROb2RlID0gZnJvbVNlY29uZENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBzcHJlYWROb2RlID0gbnVsbDtcblxuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZU5hbWVTcHJlYWRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1BSRUFEX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChydWxlTmFtZVNwcmVhZFJ1bGVOYW1lKSB7XG4gICAgICAgIHNwcmVhZE5vZGUgPSBzZWNvbmRDaGlsZE5vZGU7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwcmVhZE5vZGU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3ByZWFkTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkV4cHJlc3Npb25Ob2RlRnJvbVN1YkV4cHJlc3Npb25Ob2RlKHN1YkV4cHJlc3Npb25Ob2RlKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN1YkV4cHJlc3Npb25Ob2RlOyAvLy9cblxuICBzdWJFeHByZXNzaW9uTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE11bHRpcGxpY2l0eSgpO1xuXG4gIGlmIChtdWx0aXBsaWNpdHkgPiAxKSB7XG4gICAgc3ViRXhwcmVzc2lvbk5vZGUgPSBmcm9tTGFzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIChsYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgc3ViRXhwcmVzc2lvbk5vZGUgPSBudWxsO1xuXG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZSA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZU5hbWVTdWJFeHByZXNzaW9uUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNVQl9FWFBSRVNTSU9OX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChydWxlTmFtZVN1YkV4cHJlc3Npb25SdWxlTmFtZSkge1xuICAgICAgICBzdWJFeHByZXNzaW9uTm9kZSA9IGxhc3RDaGlsZE5vZGU7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YkV4cHJlc3Npb25Ob2RlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1YkV4cHJlc3Npb25Ob2RlO1xufVxuXG5mdW5jdGlvbiBmcm9tRmlyc3RDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IGZpcnN0SW5kZXggPSAwO1xuXG4gIG5vblRlcm1pbmFsTm9kZS5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRDaGlsZE5vZGUobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHNlY29uZEluZGV4ID0gMTtcblxuICBub25UZXJtaW5hbE5vZGUuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaXJzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbVRoaXJkQ2hpbGROb2RlKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0aGlyZEluZGV4ID0gMjtcblxuICBub25UZXJtaW5hbE5vZGUuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlyZEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tTGFzdENoaWxkTm9kZShub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gIG5vblRlcm1pbmFsTm9kZS5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwibmFtZXMiOlsiZW5kSW5kZXhGcm9tU3ByZWFkTm9kZSIsImVycm9yTm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJpbmRleEZyb21JbmRleE5vZGUiLCJpbmRleEZyb21TcHJlYWROb2RlIiwiaW5maW5pdGVEZXNjZW50RnJvbVBhdGhOb2RlIiwicGF0aE5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJwYXRoTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSIsInJ1bGVOYW1lc0Zyb21QYXRoTm9kZSIsInNlbGVjdG9yTm9kZXNGcm9tUGF0aE5vZGUiLCJzcHJlYWROb2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwic3ByZWFkTm9kZUZyb21TdWJFeHByZXNzaW9uTm9kZSIsInN0YXJ0SW5kZXhGcm9tU3ByZWFkTm9kZSIsInN1YkV4cHJlc3Npb25Ob2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwic3ViRXhwcmVzc2lvbk5vZGVGcm9tU3ViRXhwcmVzc2lvbk5vZGUiLCJ0b2tlblR5cGVzRnJvbVBhdGhOb2RlIiwidW5pcXVlRnJvbVNwcmVhZE5vZGUiLCJpbmRleE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJpbmRleCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJOdW1iZXIiLCJwYXRoTm9kZSIsInNlbGVjdG9yTm9kZXMiLCJydWxlTmFtZU5vZGVzIiwicmVkdWNlIiwic2VsZWN0b3JOb2RlIiwicnVsZU5hbWVOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWVSdWxlTmFtZSIsIlJVTEVfTkFNRV9SVUxFX05BTUUiLCJwdXNoIiwicnVsZU5hbWVzIiwibWFwIiwidG9rZW5UWXBlTm9kZXMiLCJ0b2tlblR5cGVOb2RlIiwidG9rZW5UWXBlTm9kZSIsInJ1bGVOYW1lVG9rZW5UeXBlUnVsZU5hbWUiLCJUT0tFTl9UWVBFX1JVTEVfTkFNRSIsInRva2VuVHlwZXMiLCJ0b2tlblR5cGUiLCJmcm9tVGhpcmRDaGlsZE5vZGUiLCJ0aGlyZENoaWxkTm9kZSIsInNlbGVjdG9yc05vZGUiLCJmcm9tTGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGUiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImluZmluaXRlRGVzY2VudCIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJydWxlTmFtZUluZmluaXRlRGVzY2VudFJ1bGVOYW1lIiwiSU5GSU5JVEVfREVTQ0VOVF9SVUxFX05BTUUiLCJzcHJlYWROb2RlIiwidW5pcXVlIiwiZmlyc3RDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZVVuaXF1ZVJ1bGVOYW1lIiwiVU5JUVVFX1JVTEVfTkFNRSIsImZpbmRDaGlsZE5vZGUiLCJydWxlTmFtZUluZGV4UnVsZU5hbWUiLCJJTkRFWF9SVUxFX05BTUUiLCJlbmRJbmRleCIsIkluZmluaXR5IiwiZW5kSW5kZXhOb2RlIiwicnVsZU5hbWVFbmRJbmRleFJ1bGVOYW1lIiwiRU5EX0lOREVYX1JVTEVfTkFNRSIsInN0YXJ0SW5kZXgiLCJzdGFydEluZGV4Tm9kZSIsInJ1bGVOYW1lU3RhcnRJbmRleFJ1bGVOYW1lIiwiU1RBUlRfSU5ERVhfUlVMRV9OQU1FIiwiZXhwcmVzc2lvbk5vZGUiLCJydWxlTmFtZVNwcmVhZFJ1bGVOYW1lIiwiU1BSRUFEX1JVTEVfTkFNRSIsImVycm9yTm9kZXMiLCJyZWR1Y2VDaGlsZE5vZGUiLCJydWxlTmFtZUVycm9yUnVsZU5hbWUiLCJFUlJPUl9SVUxFX05BTUUiLCJlcnJvck5vZGUiLCJzdWJFeHByZXNzaW9uTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInJ1bGVOYW1lU3ViRXhwcmVzc2lvblJ1bGVOYW1lIiwiU1VCX0VYUFJFU1NJT05fUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2UiLCJjYWxsYmFjayIsInJlc3VsdCIsImZpcnN0SW5kZXgiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJzZWNvbmRJbmRleCIsInRoaXJkSW5kZXgiLCJsYXN0SW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnTWdCQSxzQkFBc0I7ZUFBdEJBOztJQWdGQUMsNEJBQTRCO2VBQTVCQTs7SUFuUUFDLGtCQUFrQjtlQUFsQkE7O0lBMEpBQyxtQkFBbUI7ZUFBbkJBOztJQXJDQUMsMkJBQTJCO2VBQTNCQTs7SUFnSEFDLDBCQUEwQjtlQUExQkE7O0lBOEVBQyw2QkFBNkI7ZUFBN0JBOztJQXRTQUMscUJBQXFCO2VBQXJCQTs7SUFnRkFDLHlCQUF5QjtlQUF6QkE7O0lBbUpBQyw0QkFBNEI7ZUFBNUJBOztJQThFQUMsK0JBQStCO2VBQS9CQTs7SUFsSEFDLHdCQUF3QjtlQUF4QkE7O0lBOEVBQyxtQ0FBbUM7ZUFBbkNBOztJQTZEQUMsc0NBQXNDO2VBQXRDQTs7SUFsU0FDLHNCQUFzQjtlQUF0QkE7O0lBOEVBQyxvQkFBb0I7ZUFBcEJBOzs7eUJBckkyQjtBQUVwQyxTQUFTYixtQkFBbUJjLFNBQVM7SUFDMUMsSUFBTUMsa0JBQWtCRCxXQUNsQkUsUUFBUUMsbUJBQW1CRixpQkFBaUIsU0FBQ0c7UUFDM0MsSUFBTUMsZUFBZUQsZ0JBQ2pCRSxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDTCxRQUFRTSxPQUFPRjtRQUVuQixPQUFPSjtJQUNUO0lBRU4sT0FBT0E7QUFDVDtBQUVPLFNBQVNYLHNCQUFzQmtCLFFBQVE7SUFDNUMsSUFBTUMsZ0JBQWdCbEIsMEJBQTBCaUIsV0FDMUNFLGdCQUFnQkQsY0FBY0UsTUFBTSxDQUFDLFNBQUNELGVBQWVFO1FBQ25ELElBQU1aLGtCQUFrQlksY0FDbEJDLGVBQWVYLG1CQUFtQkYsaUJBQWlCLFNBQUNHO1lBQ2xELElBQUlVLGVBQWU7WUFFbkIsSUFBTWIsa0JBQWtCRyxnQkFDbEJXLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0Q0MsMkJBQTRCRixhQUFhRyw4QkFBbUI7WUFFbEUsSUFBSUQsMEJBQTBCO2dCQUM1QkgsZUFBZWIsaUJBQWlCLEdBQUc7WUFDckM7WUFFQSxPQUFPYTtRQUNUO1FBRU4sSUFBSUEsaUJBQWlCLE1BQU07WUFDekJILGNBQWNRLElBQUksQ0FBQ0w7UUFDckI7UUFFQSxPQUFPSDtJQUNULEdBQUcsRUFBRSxHQUNMUyxZQUFZVCxjQUFjVSxHQUFHLENBQUMsU0FBQ1A7UUFDN0IsSUFBTWIsa0JBQWtCYSxjQUNsQkMsV0FBV1osbUJBQW1CRixpQkFBaUIsU0FBQ0c7WUFDOUMsSUFBTUMsZUFBZUQsZ0JBQ2ZFLFVBQVVELGFBQWFFLFVBQVUsSUFDakNRLFdBQVdULFNBQVMsR0FBRztZQUU3QixPQUFPUztRQUNUO1FBRU4sT0FBT0E7SUFDVDtJQUVOLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTdEIsdUJBQXVCVyxRQUFRO0lBQzdDLElBQU1DLGdCQUFnQmxCLDBCQUEwQmlCLFdBQzFDYSxpQkFBaUJaLGNBQWNFLE1BQU0sQ0FBQyxTQUFDVSxnQkFBZ0JUO1FBQ3JELElBQU1aLGtCQUFrQlksY0FDbEJVLGdCQUFnQnBCLG1CQUFtQkYsaUJBQWlCLFNBQUNHO1lBQ25ELElBQUlvQixnQkFBZ0I7WUFFcEIsSUFBTXZCLGtCQUFrQkcsZ0JBQ2xCVyxXQUFXZCxnQkFBZ0JlLFdBQVcsSUFDdENTLDRCQUE2QlYsYUFBYVcsK0JBQW9CO1lBRXBFLElBQUlELDJCQUEyQjtnQkFDN0JELGdCQUFnQnZCLGlCQUFpQixHQUFHO1lBQ3RDO1lBRUEsT0FBT3VCO1FBQ1Q7UUFFTixJQUFJRCxrQkFBa0IsTUFBTTtZQUMxQkQsZUFBZUgsSUFBSSxDQUFDSTtRQUN0QjtRQUVBLE9BQU9EO0lBQ1QsR0FBRyxFQUFFLEdBQ0xLLGFBQWFMLGVBQWVELEdBQUcsQ0FBQyxTQUFDRTtRQUMvQixJQUFNdEIsa0JBQWtCc0IsZUFDbEJLLFlBQVlDLG1CQUFtQjVCLGlCQUFpQixTQUFDNkI7WUFDL0MsSUFBTXpCLGVBQWV5QixnQkFDZnhCLFVBQVVELGFBQWFFLFVBQVUsSUFDakNxQixZQUFZdEIsU0FBVSxHQUFHO1lBRS9CLE9BQU9zQjtRQUNUO1FBRU4sT0FBT0E7SUFDVDtJQUVOLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTbkMsMEJBQTBCaUIsUUFBUTtJQUNoRCxJQUFJUjtJQUVKQSxrQkFBa0JRLFVBQVUsR0FBRztJQUUvQixJQUFNc0IsZ0JBQWdCQyxrQkFBa0IvQixpQkFBaUIsU0FBQ2dDO1FBQ3hELElBQU1GLGdCQUFnQkUsZUFBZ0IsR0FBRztRQUV6QyxPQUFPRjtJQUNUO0lBRUE5QixrQkFBa0I4QixlQUFnQixHQUFHO0lBRXJDLElBQU1yQixnQkFBZ0JULGdCQUFnQmlDLGVBQWUsQ0FBQyxTQUFDQztRQUNyRCxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPMUI7QUFDVDtBQUVPLFNBQVN0Qiw0QkFBNEJxQixRQUFRO0lBQ2xELElBQU1SLGtCQUFrQlEsVUFDbEI2QixrQkFBa0JDLG9CQUFvQnRDLGlCQUFpQixTQUFDdUM7UUFDdEQsSUFBTXZDLGtCQUFrQnVDLGlCQUNsQnpCLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0Q3lCLGtDQUFtQzFCLGFBQWEyQixxQ0FBMEIsRUFDMUVKLGtCQUFrQkcsaUNBQWtDLEdBQUc7UUFFN0QsT0FBT0g7SUFDVDtJQUVOLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTdkMscUJBQXFCNEMsVUFBVTtJQUM3QyxJQUFNMUMsa0JBQWtCMEMsWUFDbEJDLFNBQVN6QyxtQkFBbUJGLGlCQUFpQixTQUFDRztRQUM1QyxJQUFJd0MsU0FBUztRQUViLElBQU1DLGdDQUFnQ3pDLGVBQWVpQyxpQkFBaUI7UUFFdEUsSUFBSVEsK0JBQStCO1lBQ2pDLElBQU01QyxrQkFBa0JHLGdCQUNsQlcsV0FBV2QsZ0JBQWdCZSxXQUFXLElBQ3RDOEIseUJBQTBCL0IsYUFBYWdDLDJCQUFnQjtZQUU3RCxJQUFJRCx3QkFBd0I7Z0JBQzFCRixTQUFTO1lBQ1g7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFTixPQUFPQTtBQUNUO0FBRU8sU0FBU3pELG9CQUFvQndELFVBQVU7SUFDNUMsSUFBSXpDLFFBQVE7SUFFWixJQUFNRCxrQkFBa0IwQyxZQUNsQjNDLFlBQVlDLGdCQUFnQitDLGFBQWEsQ0FBQyxTQUFDYjtRQUN6QyxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTW5DLGtCQUFrQmtDLFdBQ2xCcEIsV0FBV2QsZ0JBQWdCZSxXQUFXLElBQ3RDaUMsd0JBQXlCbEMsYUFBYW1DLDBCQUFlO1lBRTNELElBQUlELHVCQUF1QjtnQkFDekIsT0FBTztZQUNUO1FBQ0Y7SUFDRixNQUFNO0lBRVosSUFBSWpELGNBQWMsTUFBTTtRQUN0QkUsUUFBUWhCLG1CQUFtQmM7SUFDN0I7SUFFQSxPQUFPRTtBQUNUO0FBRU8sU0FBU2xCLHVCQUF1QjJELFVBQVU7SUFDL0MsSUFBSVEsV0FBV0M7SUFFZixJQUFNbkQsa0JBQWtCMEMsWUFDbEJVLGVBQWVwRCxnQkFBZ0IrQyxhQUFhLENBQUMsU0FBQ2I7UUFDNUMsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1uQyxrQkFBa0JrQyxXQUNsQnBCLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0Q3NDLDJCQUE0QnZDLGFBQWF3Qyw4QkFBbUI7WUFFbEUsSUFBSUQsMEJBQTBCO2dCQUM1QixPQUFPO1lBQ1Q7UUFDRjtJQUNGLE1BQU07SUFFWixJQUFJRCxpQkFBaUIsTUFBTTtRQUN6QkYsV0FBV2pFLG1CQUFtQm1FO0lBQ2hDO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVN4RCx5QkFBeUJnRCxVQUFVO0lBQ2pELElBQUlhLGFBQWE7SUFFakIsSUFBTXZELGtCQUFrQjBDLFlBQ2xCYyxpQkFBaUJ4RCxnQkFBZ0IrQyxhQUFhLENBQUMsU0FBQ2I7UUFDOUMsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1uQyxrQkFBa0JrQyxXQUNsQnBCLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0QzBDLDZCQUE4QjNDLGFBQWE0QyxnQ0FBcUI7WUFFdEUsSUFBSUQsNEJBQTRCO2dCQUM5QixPQUFPO1lBQ1Q7UUFDRjtJQUNGLE1BQU07SUFFWixJQUFJRCxtQkFBbUIsTUFBTTtRQUMzQkQsYUFBYXRFLG1CQUFtQnVFO0lBQ2xDO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNuRSwyQkFBMkJ1RSxjQUFjO0lBQ3ZELElBQU0zRCxrQkFBa0IyRCxnQkFDbEJuRCxXQUFXTixtQkFBbUJGLGlCQUFpQixTQUFDRztRQUM5QyxJQUFNSyxXQUFXTCxnQkFBaUIsR0FBRztRQUVyQyxPQUFPSztJQUNUO0lBRU4sT0FBT0E7QUFDVDtBQUVPLFNBQVNoQiw2QkFBNkJtRSxjQUFjO0lBQ3pELElBQU0zRCxrQkFBa0IyRCxnQkFDbEJqQixhQUFhSixvQkFBb0J0QyxpQkFBaUIsU0FBQ3VDO1FBQ2pELElBQUlHLGFBQWE7UUFFakIsSUFBTTFDLGtCQUFrQnVDLGlCQUNsQnpCLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0QzZDLHlCQUEwQjlDLGFBQWErQywyQkFBZ0I7UUFFN0QsSUFBSUQsd0JBQXdCO1lBQzFCbEIsYUFBYUgsaUJBQWtCLEdBQUc7UUFDcEM7UUFFQSxPQUFPRztJQUNUO0lBRU4sT0FBT0E7QUFDVDtBQUVPLFNBQVMxRCw2QkFBNkIyRSxjQUFjO0lBQ3pELElBQU0zRCxrQkFBa0IyRCxnQkFDbEJHLGFBQWE5RCxnQkFBZ0IrRCxlQUFlLENBQUMsU0FBQ0QsWUFBWTVCO1FBQ3hELElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNbkMsa0JBQWtCa0MsV0FDbEJwQixXQUFXZCxnQkFBZ0JlLFdBQVcsSUFDdENpRCx3QkFBeUJsRCxhQUFhbUQsMEJBQWU7WUFFM0QsSUFBSUQsdUJBQXVCO2dCQUN6QixJQUFNRSxZQUFZbEUsaUJBQWtCLEdBQUc7Z0JBRXZDOEQsV0FBVzVDLElBQUksQ0FBQ2dEO1lBQ2xCO1FBQ0Y7UUFFQSxPQUFPSjtJQUNULEdBQUcsRUFBRTtJQUVYLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTbkUsb0NBQW9DZ0UsY0FBYztJQUNoRSxJQUFJUSxvQkFBb0I7SUFFeEIsSUFBTW5FLGtCQUFrQjJELGdCQUNsQlMsZUFBZXBFLGdCQUFnQnFFLGVBQWU7SUFFcEQsSUFBSUQsZUFBZSxHQUFHO1FBQ3BCRCxvQkFBb0JwQyxrQkFBa0IvQixpQkFBaUIsU0FBQ2dDO1lBQ3RELElBQUltQyxvQkFBb0I7WUFFeEIsSUFBTW5FLGtCQUFrQmdDLGVBQ2xCbEIsV0FBV2QsZ0JBQWdCZSxXQUFXLElBQ3RDdUQsZ0NBQWlDeEQsYUFBYXlELG1DQUF3QjtZQUU1RSxJQUFJRCwrQkFBK0I7Z0JBQ2pDSCxvQkFBb0JuQyxlQUFnQixHQUFHO1lBQ3pDO1lBRUEsT0FBT21DO1FBQ1Q7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTOUUsOEJBQThCOEUsaUJBQWlCO0lBQzdELElBQU1uRSxrQkFBa0JtRSxtQkFDbEIzRCxXQUFXTixtQkFBbUJGLGlCQUFpQixTQUFDRztRQUM5QyxJQUFNSyxXQUFXTCxnQkFBaUIsR0FBRztRQUVyQyxPQUFPSztJQUNUO0lBRU4sT0FBT0E7QUFDVDtBQUVPLFNBQVNmLGdDQUFnQzBFLGlCQUFpQjtJQUMvRCxJQUFJekIsYUFBYTtJQUVqQixJQUFNMUMsa0JBQWtCbUUsbUJBQ2xCQyxlQUFlcEUsZ0JBQWdCcUUsZUFBZTtJQUVwRCxJQUFJRCxlQUFlLEdBQUc7UUFDcEIxQixhQUFhSixvQkFBb0J0QyxpQkFBaUIsU0FBQ3VDO1lBQ2pELElBQUlHLGFBQWE7WUFFakIsSUFBTTFDLGtCQUFrQnVDLGlCQUNsQnpCLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0QzZDLHlCQUEwQjlDLGFBQWErQywyQkFBZ0I7WUFFN0QsSUFBSUQsd0JBQXdCO2dCQUMxQmxCLGFBQWFILGlCQUFrQixHQUFHO1lBQ3BDO1lBRUEsT0FBT0c7UUFDVDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVM5Qyx1Q0FBdUN1RSxpQkFBaUI7SUFDdEUsSUFBTW5FLGtCQUFrQm1FLG1CQUFtQixHQUFHO0lBRTlDQSxvQkFBb0I7SUFFcEIsSUFBTUMsZUFBZXBFLGdCQUFnQnFFLGVBQWU7SUFFcEQsSUFBSUQsZUFBZSxHQUFHO1FBQ3BCRCxvQkFBb0JwQyxrQkFBa0IvQixpQkFBaUIsU0FBQ2dDO1lBQ3RELElBQUltQyxzQkFBb0I7WUFFeEIsSUFBTUssaUJBQWlCeEMsZUFDakJsQixXQUFXMEQsZUFBZXpELFdBQVcsSUFDckN1RCxnQ0FBaUN4RCxhQUFheUQsbUNBQXdCO1lBRTVFLElBQUlELCtCQUErQjtnQkFDakNILHNCQUFvQm5DLGVBQWdCLEdBQUc7WUFDekM7WUFFQSxPQUFPbUM7UUFDVDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNqRSxtQkFBbUJGLGVBQWUsRUFBRXlFLFFBQVE7SUFDbkQsSUFBSUM7SUFFSixJQUFNQyxhQUFhO0lBRW5CM0UsZ0JBQWdCNEUscUJBQXFCLENBQUMsU0FBQzFDLFdBQVdqQztRQUNoRCxJQUFJQSxVQUFVMEUsWUFBWTtZQUN4QixJQUFNeEUsaUJBQWlCK0IsV0FBVyxHQUFHO1lBRXJDd0MsU0FBU0QsU0FBU3RFO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT3VFO0FBQ1Q7QUFFQSxTQUFTcEMsb0JBQW9CdEMsZUFBZSxFQUFFeUUsUUFBUTtJQUNwRCxJQUFJQztJQUVKLElBQU1HLGNBQWM7SUFFcEI3RSxnQkFBZ0I0RSxxQkFBcUIsQ0FBQyxTQUFDMUMsV0FBV2pDO1FBQ2hELElBQUlBLFVBQVU0RSxhQUFhO1lBQ3pCLElBQU0xRSxpQkFBaUIrQixXQUFXLEdBQUc7WUFFckN3QyxTQUFTRCxTQUFTdEU7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPdUU7QUFDVDtBQUVBLFNBQVM5QyxtQkFBbUI1QixlQUFlLEVBQUV5RSxRQUFRO0lBQ25ELElBQUlDO0lBRUosSUFBTUksYUFBYTtJQUVuQjlFLGdCQUFnQjRFLHFCQUFxQixDQUFDLFNBQUMxQyxXQUFXakM7UUFDaEQsSUFBSUEsVUFBVTZFLFlBQVk7WUFDeEIsSUFBTWpELGlCQUFpQkssV0FBVyxHQUFHO1lBRXJDd0MsU0FBU0QsU0FBUzVDO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTzZDO0FBQ1Q7QUFFQSxTQUFTM0Msa0JBQWtCL0IsZUFBZSxFQUFFeUUsUUFBUTtJQUNsRCxJQUFJQztJQUVKLElBQU1OLGVBQWVwRSxnQkFBZ0JxRSxlQUFlLElBQzlDVSxZQUFZWCxlQUFlO0lBRWpDcEUsZ0JBQWdCZ0Ysc0JBQXNCLENBQUMsU0FBQzlDLFdBQVdqQztRQUNqRCxJQUFJQSxVQUFVOEUsV0FBVztZQUN2QixJQUFNbEQsaUJBQWlCSyxXQUFXLEdBQUc7WUFFckN3QyxTQUFTRCxTQUFTNUM7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPNkM7QUFDVCJ9