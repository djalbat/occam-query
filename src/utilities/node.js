"use strict";

import { ERROR_RULE_NAME,
         INDEX_RULE_NAME,
         UNIQUE_RULE_NAME,
         SPREAD_RULE_NAME,
         END_INDEX_RULE_NAME,
         RULE_NAME_RULE_NAME,
         TOKEN_TYPE_RULE_NAME,
         START_INDEX_RULE_NAME,
         SUB_EXPRESSION_RULE_NAME,
         INFINITE_DESCENT_RULE_NAME } from "../ruleNames";

export function indexFromIndexNode(indexNode) {
  const nonTerminalNode = indexNode, ///
        index = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
          const terminalNode = firstChildNode,  ///
                content = terminalNode.getContent(),
                index = Number(content);

          return index;
        });

  return index;
}

export function ruleNamesFromPathNode(pathNode) {
  const selectorNodes = selectorNodesFromPathNode(pathNode),
        ruleNameNodes = selectorNodes.reduce((ruleNameNodes, selectorNode) => {
          const nonTerminalNode = selectorNode, ///
                ruleNameNode = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
                  let ruleNameNode = null;

                  const nonTerminalNode = firstChildNode, ///
                        ruleName = nonTerminalNode.getRuleName(),
                        ruleNameRuleNameRuleName = (ruleName === RULE_NAME_RULE_NAME);

                  if (ruleNameRuleNameRuleName) {
                    ruleNameNode = nonTerminalNode; ///
                  }

                  return ruleNameNode;
                });

          if (ruleNameNode !== null) {
            ruleNameNodes.push(ruleNameNode);
          }

          return ruleNameNodes;
        }, []),
        ruleNames = ruleNameNodes.map((ruleNameNode) => {
          const nonTerminalNode = ruleNameNode, ///
                ruleName = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
                  const terminalNode = firstChildNode,  ///
                        content = terminalNode.getContent(),
                        ruleName = content; ///

                  return ruleName;
                });

          return ruleName;
        });

  return ruleNames;
}

export function tokenTypesFromPathNode(pathNode) {
  const selectorNodes = selectorNodesFromPathNode(pathNode),
        tokenTYpeNodes = selectorNodes.reduce((tokenTYpeNodes, selectorNode) => {
          const nonTerminalNode = selectorNode, ///
                tokenTypeNode = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
                  let tokenTYpeNode = null;

                  const nonTerminalNode = firstChildNode, ///
                        ruleName = nonTerminalNode.getRuleName(),
                        ruleNameTokenTypeRuleName = (ruleName === TOKEN_TYPE_RULE_NAME);

                  if (ruleNameTokenTypeRuleName) {
                    tokenTYpeNode = nonTerminalNode; ///
                  }

                  return tokenTYpeNode;
                });

          if (tokenTypeNode !== null) {
            tokenTYpeNodes.push(tokenTypeNode);
          }

          return tokenTYpeNodes;
        }, []),
        tokenTypes = tokenTYpeNodes.map((tokenTypeNode) => {
          const nonTerminalNode = tokenTypeNode,  ///
                tokenType = fromThirdChildNode(nonTerminalNode, (thirdChildNode) => {
                  const terminalNode = thirdChildNode,  ///
                        content = terminalNode.getContent(),
                        tokenType = content;  ///

                  return tokenType;
                });

          return tokenType;
        });

  return tokenTypes;
}

export function selectorNodesFromPathNode(pathNode) {
  let nonTerminalNode;

  nonTerminalNode = pathNode; ///

  const selectorsNode = fromLastChildNode(nonTerminalNode, (lastChildNode) => {
    const selectorsNode = lastChildNode;  ///

    return selectorsNode;
  });

  nonTerminalNode = selectorsNode;  ///

  const selectorNodes = nonTerminalNode.filterChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      return true;
    }
  });

  return selectorNodes;
}

export function infiniteDescentFromPathNode(pathNode) {
  const nonTerminalNode = pathNode, ///
        infiniteDescent = fromSecondChildNode(nonTerminalNode, (secondChildNode) => {
          const nonTerminalNode = secondChildNode,  ///
                ruleName = nonTerminalNode.getRuleName(),
                ruleNameInfiniteDescentRuleName = (ruleName === INFINITE_DESCENT_RULE_NAME),
                infiniteDescent = ruleNameInfiniteDescentRuleName;  ///

          return infiniteDescent;
        }) || false;

  return infiniteDescent;
}

export function uniqueFromSpreadNode(spreadNode) {
  const nonTerminalNode = spreadNode,
        unique = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
          let unique = false;

          const firstChildNodeNonTerminalNode = firstChildNode.isNonTerminalNode();

          if (firstChildNodeNonTerminalNode) {
            const nonTerminalNode = firstChildNode, ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNameUniqueRuleName = (ruleName === UNIQUE_RULE_NAME);

            if (ruleNameUniqueRuleName) {
              unique = true;
            }
          }

          return unique;
        });

  return unique;
}

export function indexFromSpreadNode(spreadNode) {
  let index = null;

  const nonTerminalNode = spreadNode, ///
        indexNode = nonTerminalNode.findChildNode((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const nonTerminalNode = childNode,  ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNameIndexRuleName = (ruleName === INDEX_RULE_NAME);

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

export function endIndexFromSpreadNode(spreadNode) {
  let endIndex = Infinity;

  const nonTerminalNode = spreadNode, ///
        endIndexNode = nonTerminalNode.findChildNode((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const nonTerminalNode = childNode,  ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNameEndIndexRuleName = (ruleName === END_INDEX_RULE_NAME);

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

export function startIndexFromSpreadNode(spreadNode) {
  let startIndex = 0;

  const nonTerminalNode = spreadNode, ///
        startIndexNode = nonTerminalNode.findChildNode((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const nonTerminalNode = childNode,  ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNameStartIndexRuleName = (ruleName === START_INDEX_RULE_NAME);

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

export function pathNodeFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        pathNode = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
          const pathNode = firstChildNode;  ///

          return pathNode;
        });

  return pathNode;
}

export function spreadNodeFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        spreadNode = fromSecondChildNode(nonTerminalNode, (secondChildNode) => {
          let spreadNode = null;

          const nonTerminalNode = secondChildNode,  ///
                ruleName = nonTerminalNode.getRuleName(),
                ruleNameSpreadRuleName = (ruleName === SPREAD_RULE_NAME);

          if (ruleNameSpreadRuleName) {
            spreadNode = secondChildNode;  ///
          }

          return spreadNode;
        }) || null;

  return spreadNode;
}

export function errorNodesFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        errorNodes = nonTerminalNode.reduceChildNode((errorNodes, childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const nonTerminalNode = childNode,  ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNameErrorRuleName = (ruleName === ERROR_RULE_NAME);

            if (ruleNameErrorRuleName) {
              const errorNode = nonTerminalNode;  ///

              errorNodes.push(errorNode);
            }
          }

          return errorNodes;
        }, []);

  return errorNodes;
}

export function subExpressionNodeFromExpressionNode(expressionNode) {
  let subExpressionNode = null;

  const nonTerminalNode = expressionNode, ///
        multiplicity = nonTerminalNode.getMultiplicity();

  if (multiplicity > 1) {
    subExpressionNode = fromLastChildNode(nonTerminalNode, (lastChildNode) => {
      let subExpressionNode = null;

      const nonTerminalNode = lastChildNode,  ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNameSubExpressionRuleName = (ruleName === SUB_EXPRESSION_RULE_NAME);

      if (ruleNameSubExpressionRuleName) {
        subExpressionNode = lastChildNode;  ///
      }

      return subExpressionNode;
    });
  }

  return subExpressionNode;
}

export function pathNodeFromSubExpressionNode(subExpressionNode) {
  const nonTerminalNode = subExpressionNode, ///
        pathNode = fromFirstChildNode(nonTerminalNode, (firstChildNode) => {
          const pathNode = firstChildNode;  ///

          return pathNode;
        })

  return pathNode;
}

export function spreadNodeFromSubExpressionNode(subExpressionNode) {
  let spreadNode = null;

  const nonTerminalNode = subExpressionNode, ///
        multiplicity = nonTerminalNode.getMultiplicity();

  if (multiplicity > 1) {
    spreadNode = fromSecondChildNode(nonTerminalNode, (secondChildNode) => {
      let spreadNode = null;

      const nonTerminalNode = secondChildNode,  ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNameSpreadRuleName = (ruleName === SPREAD_RULE_NAME);

      if (ruleNameSpreadRuleName) {
        spreadNode = secondChildNode;  ///
      }

      return spreadNode;
    }) || null;
  }

  return spreadNode;
}

export function subExpressionNodeFromSubExpressionNode(subExpressionNode) {
  const nonTerminalNode = subExpressionNode; ///

  subExpressionNode = null;

  const multiplicity = nonTerminalNode.getMultiplicity();

  if (multiplicity > 1) {
    subExpressionNode = fromLastChildNode(nonTerminalNode, (lastChildNode) => {
      let subExpressionNode = null;

      const nonTerminalNoe = lastChildNode, ///
            ruleName = nonTerminalNoe.getRuleName(),
            ruleNameSubExpressionRuleName = (ruleName === SUB_EXPRESSION_RULE_NAME);

      if (ruleNameSubExpressionRuleName) {
        subExpressionNode = lastChildNode;  ///
      }

      return subExpressionNode;
    });
  }

  return subExpressionNode;
}

function fromFirstChildNode(nonTerminalNode, callback) {
  let result;

  const firstIndex = 0;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === firstIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromSecondChildNode(nonTerminalNode, callback) {
  let result;

  const secondIndex = 1;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === secondIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromThirdChildNode(nonTerminalNode, callback) {
  let result;

  const thirdIndex = 2;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === thirdIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromLastChildNode(nonTerminalNode, callback) {
  let result;

  const multiplicity = nonTerminalNode.getMultiplicity(),
        lastIndex = multiplicity - 1;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    if (index === lastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}
