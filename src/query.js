"use strict";

import { characters } from "necessary";

import Spread from "./spread";

import { includes, push, clear, second, third, fourth, fifth } from "./utilities/array";

const { BAR_CHARACTER, WILDCARD_CHARACTER, FORWARD_SLASH_CHARACTER } = characters;

export default class Query {
  constructor(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes) {
    this.spread = spread;
    this.subQuery = subQuery;
    this.ruleNames = ruleNames;
    this.tokenTypes = tokenTypes;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
    this.intermediateNodes = intermediateNodes;
  }

  getSpread() {
    return this.sprea;
  }

  getSubQuery() {
    return this.subQuery;
  }

  getRuleNames() {
    return this.ruleNames;
  }

  getTokenTypes() {
    return this.tokenTypes;
  }

  getMaximumDepth() {
    return this.maximumDepth;
  }

  isInfiniteDescent() {
    return this.infiniteDescent;
  }

  getIntermediateNodes() {
    return this.intermediateNodes;
  }

  execute(node, depth = 0, maximumDepth = this.maximumDepth) {
    const nodes = [];

    this.clear();

    this.find(node, depth, maximumDepth);

    this.apply(nodes, depth, maximumDepth);

    return nodes;
  }

  clear() {
    clear(this.intermediateNodes);
  }

  find(node, depth, maximumDepth) {
    if (depth > maximumDepth) {
      return;
    }

    const nodeTerminalNode = node.isTerminalNode(),
          nodeNonTerminalNode = !nodeTerminalNode;

    let found;

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            types = this.tokenTypes,  ///
            type = terminalNode.getType();

      found = includes(types, type, WILDCARD_CHARACTER);
    }

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            ruleName = nonTerminalNode.getRuleName();

      found = includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);
    }

    if (found) {
      const intermediateNode = node; ///

      this.intermediateNodes.push(intermediateNode);
    }

    if (this.infiniteDescent) {
      if (nodeNonTerminalNode) {
        depth++;

        const nonTerminalNode = node, ///
              childNodes = nonTerminalNode.getChildNodes();

        childNodes.forEach((childNode) => {
          this.find(childNode, depth, maximumDepth);
        });
      }
    }
  }

  apply(nodes, depth, maximumDepth) {
    this.spread.adjustNodes(this.intermediateNodes);

    if (this.subQuery === null) {
      push(nodes, this.intermediateNodes);
    } else {
      this.intermediateNodes.forEach((intermediateNode) => {
        const intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();

        if (intermediateNodeNonTerminalNode) {
          depth++;

          const nonTerminalNode = intermediateNode, ///
                childNodes = nonTerminalNode.getChildNodes();

          this.subQuery.clear();

          childNodes.forEach((childNode) => {
            this.subQuery.find(childNode, depth, maximumDepth);
          });

          this.subQuery.apply(nodes, depth, maximumDepth);
        }
      });
    }
  }

  static fromExpression(expression, maximumDepth = Infinity) {
    const spread = expression.getSpread(),
          subQuery = subQueryFromExpression(expression),
          ruleNames = expression.getRuleNames(),
          tokenTypes = expression.getTokenTypes(),
          infiniteDescent = expression.isInfiniteDescent(),
          intermediateNodes = [],
          query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);

    return query;
  }

  static fromSubExpression(subExpression) {
    const spread = Spread.fromNothing(),
          subQuery = subQueryFromSubExpression(subExpression),
          ruleNames = subExpression.getRuleNames(),
          tokenTypes = subExpression.getTokenTypes(),
          maximumDepth = Infinity,
          infiniteDescent = subExpression.isInfiniteDescent(),
          intermediateNodes = [],
          query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);

    return query;
  }

  static fromExpressionString(expressionString, maximumDepth = Infinity) {
    let query = null;

    if (expressionString !== null) {
      const regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/,
            matches = expressionString.match(regExp),
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches),
            fifthMatch = fifth(matches),
            selectors = thirdMatch.split(BAR_CHARACTER),
            spreadExpression = fourthMatch || null,
            subExpressionString = fifthMatch || null,
            spread = Spread.fromSpreadExpression(spreadExpression),
            subQuery = Query.fromExpressionString(subExpressionString),
            ruleNames = ruleNamesFromSelectors(selectors),
            tokenTypes = tokenTypesFromSelectors(selectors),
            infiniteDescent = (secondMatch === FORWARD_SLASH_CHARACTER),
            intermediateNodes = [];

      query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);
    }

    return query;
  }
}

function subQueryFromExpression(expression) {
  let subQuery = null;

  const subExpression = expression.getSubExpression();

  if (subExpression !== null) {
    const query = Query.fromSubExpression(subExpression);

    subQuery = query; ///
  }

  return subQuery;
}

function subQueryFromSubExpression(subExpression) {
  let subQuery = null;

  subExpression = subExpression.getSubExpression(); ///

  if (subExpression !== null) {
    const query = Query.fromSubExpression(subExpression);

    subQuery = query; ///
  }

  return subQuery;
}

function tokenTypesFromSelectors(selectors) {
  const tokenTypes = [];

  selectors.forEach((selector) => {
    const selectorTokenTypeSelector = isSelectorTokenTypeSelector(selector);

    if (selectorTokenTypeSelector) {
      const tokenType = selector.substring(1);

      tokenTypes.push(tokenType);
    }
  });

  return tokenTypes;
}

function ruleNamesFromSelectors(selectors) {
  const ruleNames = [];

  selectors.forEach((selector) => {
    const selectorRuleNameSelector = isSelectorRuleNameSelector(selector);

    if (selectorRuleNameSelector) {
      const ruleName = selector;  ///

      ruleNames.push(ruleName);
    }
  });

  return ruleNames;
}

function isSelectorRuleNameSelector(selector) { return /^[^@]/.test(selector); }

function isSelectorTokenTypeSelector(selector) { return /^@/.test(selector); }
