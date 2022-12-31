"use strict";

import { characters } from "necessary";

import Spread from "./spread";

import { includes, push, clear, second, third, fourth, fifth } from "./utilities/array";

const { BAR_CHARACTER, WILDCARD_CHARACTER, FORWARD_SLASH_CHARACTER } = characters;

export default class Query {
  constructor(types, spread, subQuery,  ruleNames, maximumDepth, infiniteDescent, intermediateNodes) {
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.ruleNames = ruleNames;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
    this.intermediateNodes = intermediateNodes;
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
            type = terminalNode.getType();

      found = includes(this.types, type, WILDCARD_CHARACTER);
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
    let query = null;

    if (expression !== null) {
      const regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/,
            matches = expression.match(regExp),
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches),
            fifthMatch = fifth(matches),
            selectors = thirdMatch.split(BAR_CHARACTER),
            subExpression = fifthMatch || null,
            spreadExpression = fourthMatch || null,
            types = typesFromSelectors(selectors),
            spread = Spread.fromSpreadExpression(spreadExpression),
            subQuery = Query.fromExpression(subExpression),
            ruleNames = ruleNamesFromSelectors(selectors),
            infiniteDescent = (secondMatch === FORWARD_SLASH_CHARACTER),
            intermediateNodes = [];

      query = new Query(types, spread, subQuery, ruleNames, maximumDepth, infiniteDescent, intermediateNodes);
    }

    return query;
  }
}

function typesFromSelectors(selectors) {
  const types = [];

  selectors.forEach((selector) => {
    const selectorTypeSelector = isSelectorTypeSelector(selector);

    if (selectorTypeSelector) {
      const type = selector.substring(1);

      types.push(type);
    }
  });

  return types;
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

function isSelectorTypeSelector(selector) { return /^@/.test(selector); }

function isSelectorRuleNameSelector(selector) { return /^[^@]/.test(selector); }
