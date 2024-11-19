"use strict";

import { first, second, third, last } from "../utilities/array";
import { ERROR_RULE_NAME,
         UNIQUE_RULE_NAME,
         SPREAD_RULE_NAME,
         END_INDEX_RULE_NAME,
         RULE_NAME_RULE_NAME,
         START_INDEX_RULE_NAME,
         TOKEN_TYPE_RULE_NAME,
         SUB_EXPRESSION_RULE_NAME,
         INFINITE_DESCENT_RULE_NAME } from "../ruleNames";

export function errorNodesFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        errorNodes = childNodes.reduce((errorNodes, childNode) => {
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

export function uniqueFromSpreadNode(spreadNode) {
  let unique = false;

  const nonTerminalNode = spreadNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstChildNodeNonTerminalNode = firstChildNode.isNonTerminalNode();

  if (firstChildNodeNonTerminalNode) {
    const nonTerminalNode = firstChildNode, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameUniqueRuleName = (ruleName === UNIQUE_RULE_NAME);

    if (ruleNameUniqueRuleName) {
      unique = true;
    }
  }

  return unique;
}

export function endIndexFromSpreadNode(spreadNode) {
  let endIndex = Infinity;

  const nonTerminalNode = spreadNode,
        childNodes = nonTerminalNode.getChildNodes(),
        endIndexNode = childNodes.find((childNode) => {
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
    const nonTerminalNode = endIndexNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    endIndex = Number(content);
  }

  return endIndex;

}

export function startIndexFromSpreadNode(spreadNode) {
  let startIndex = 0;

  const nonTerminalNode = spreadNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        startIndexNode = childNodes.find((childNode) => {
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
    const nonTerminalNode = startIndexNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    startIndex = Number(content);
  }

  return startIndex;
}

export function ruleNamesFromPathNode(pathNode) {
  const selectorNodes = selectorNodesFromPathNode(pathNode),
        ruleNameNodes = selectorNodes.reduce((ruleNameNodes, selectorNode) => {
          let nonTerminalNode;

          nonTerminalNode = selectorNode; ///

          const childNodes = nonTerminalNode.getChildNodes(),
                firstChildNode = first(childNodes);

          nonTerminalNode = firstChildNode; ///

          const ruleName = nonTerminalNode.getRuleName(),
                ruleNameRuleNameRuleName = (ruleName === RULE_NAME_RULE_NAME);

          if (ruleNameRuleNameRuleName) {
            const ruleNameNode = nonTerminalNode; ///

            ruleNameNodes.push(ruleNameNode);
          }

          return ruleNameNodes;
        }, []),
        ruleNames = ruleNameNodes.map((ruleNameNode) => {
          const nonTerminalNode = ruleNameNode, ///
                childNodes = nonTerminalNode.getChildNodes(),
                firstChildNode = first(childNodes),
                terminalNode = firstChildNode,  ///
                content = terminalNode.getContent(),
                ruleName = content;

          return ruleName;
        });

  return ruleNames;
}

export function tokenTypesFromPathNode(pathNode) {
  const selectorNodes = selectorNodesFromPathNode(pathNode),
        tokenTYpeNodes = selectorNodes.reduce((tokenTYpeNodes, selectorNode) => {
          let nonTerminalNode;

          nonTerminalNode = selectorNode; ///

          const childNodes = nonTerminalNode.getChildNodes(),
                firstChildNode = first(childNodes);

          nonTerminalNode = firstChildNode; ///

          const ruleName = nonTerminalNode.getRuleName(),
                ruleNameTokenTypeRuleName = (ruleName === TOKEN_TYPE_RULE_NAME);

          if (ruleNameTokenTypeRuleName) {
            const tokenTYpeNode = nonTerminalNode; ///

            tokenTYpeNodes.push(tokenTYpeNode);
          }

          return tokenTYpeNodes;
        }, []),
        tokenTypes = tokenTYpeNodes.map((tokenTypeNode) => {
          const nonTerminalNode = tokenTypeNode, ///
                childNodes = nonTerminalNode.getChildNodes(),
                thirdChildNode = third(childNodes),
                terminalNode = thirdChildNode,  ///
                content = terminalNode.getContent(),
                tokenType = content;

          return tokenType;
        });

  return tokenTypes;
}

export function infiniteDescentFromPathNode(pathNode) {
  let nonTerminalNode;

  nonTerminalNode = pathNode; ///

  const childNodes = nonTerminalNode.getChildNodes(),
        secondChildNode = second(childNodes);

  nonTerminalNode = secondChildNode;  ///

  const ruleName = nonTerminalNode.getRuleName(),
        ruleNameInfiniteDescentRuleName = (ruleName === INFINITE_DESCENT_RULE_NAME),
        infiniteDescent = ruleNameInfiniteDescentRuleName;  ///

  return infiniteDescent;
}

export function pathNodeFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        pathNode = firstChildNode;  ///

  return pathNode;
}

export function pathNodeFromSubExpressionNode(subExpressionNode) {
  const nonTerminalNode = subExpressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        pathNode = firstChildNode;  ///

  return pathNode;
}

export function spreadNodeFromExpressionNode(expressionNode) {
  let spreadNode = null;

  const nonTerminalNode = expressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

  if (childNodesLength > 1) {
    const lastChildNode = last(childNodes),
          lastChildNodeRuleName = lastChildNode.getRuleName(),
          ruleNameSpreadRuleName = (lastChildNodeRuleName === SPREAD_RULE_NAME);

    if (ruleNameSpreadRuleName) {
      spreadNode = lastChildNode;  ///
    }
  }

  return spreadNode;
}

export function subExpressionNodeFromExpressionNode(expressionNode) {
  let subExpressionNode = null;

  const nonTerminalNode = expressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

  if (childNodesLength > 1) {
    const secondChildNode = second(childNodes),
          secondChildNodeRuleName = secondChildNode.getRuleName(),
          ruleNameSubExpressionRuleName = (secondChildNodeRuleName === SUB_EXPRESSION_RULE_NAME);

    if (ruleNameSubExpressionRuleName) {
      subExpressionNode = secondChildNode;  ///
    }
  }

  return subExpressionNode;
}

export function subExpressionNodeFromSubExpressionNode(subExpressionNode) {
  const nonTerminalNode = subExpressionNode; ///

  subExpressionNode = null;

  const childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

  if (childNodesLength > 1) {
    const secondChildNode = second(childNodes),
          secondChildNodeRuleName = secondChildNode.getRuleName(),
          ruleNameSubExpressionRuleName = (secondChildNodeRuleName === SUB_EXPRESSION_RULE_NAME);

    if (ruleNameSubExpressionRuleName) {
      subExpressionNode = secondChildNode;  ///
    }
  }

  return subExpressionNode;
}

function selectorNodesFromPathNode(pathNode) {
  let childNodes,
      nonTerminalNode;

  nonTerminalNode = pathNode; ///

  childNodes = nonTerminalNode.getChildNodes();

  const lastChildNode = last(childNodes),
        selectorsNode = lastChildNode;  ///

  nonTerminalNode = selectorsNode;  ///

  childNodes = nonTerminalNode.getChildNodes();

  const selectorNodes = childNodes.filter((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      return true;
    }
  });

  return selectorNodes;
}
