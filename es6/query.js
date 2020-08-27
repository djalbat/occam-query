"use strict";

import Spread from "./spread";

import { WILDCARD_CHARACTER } from "./constants";
import { includes, push, clear, second, third, fourth, fifth } from "./utilities/array";

export default class Query {
  constructor(ruleNames, types, spread, subQuery,  maximumDepth, infiniteDescent, intermediateNodes) {
    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
    this.intermediateNodes = intermediateNodes;
  }

  isUnique() { return this.spread.isUnique(); }
  
  execute(node, depth = 0, maximumDepth = this.maximumDepth) {
    const nodes = [];

    this.reset();

    this.clear();

    this.find(node, depth, maximumDepth);

    this.apply(nodes, depth, maximumDepth);

    return nodes;
  }

  reset() {
    this.spread.reset();

    if (this.subQuery !== null) {
      this.subQuery.reset();
    }
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
      const between = this.spread.isBetween();

      if (between) {
        const intermediateNode = node; ///

        this.intermediateNodes.push(intermediateNode);
      }

      this.spread.incrementIndex();
    }

    if (this.infiniteDescent) {
      if (nodeNonTerminalNode) {
        depth++;

        const nonTerminalNode = node, ///
              childNodes = nonTerminalNode.getChildNodes();

        childNodes.forEach((childNode) => this.find(childNode, depth, maximumDepth));
      }
    }
  }

  apply(nodes, depth, maximumDepth) {
    const unique = this.isUnique();

    if (unique) {
      const intermediateNodesLength = this.intermediateNodes.length;

      if (intermediateNodesLength > 1) {
        this.clear();
      }
    }

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

          childNodes.forEach((childNode) => this.subQuery.find(childNode, depth, maximumDepth));

          this.subQuery.apply(nodes, depth, maximumDepth);
        }
      });
    }
  }

  static fromSubExpressionAndTypes(subExpresion, types) {
    let query = null;

    if (subExpresion !== null) {
      const typesLength = types.length;

      if (typesLength === 0) {
        const expression = subExpresion;  ///

        query = Query.fromExpression(expression);
      }
    }

    return query;
  }

  static fromExpression(expression, maximumDepth = Infinity) {
    const regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          selectors = thirdMatch.split("|"),
          subExpression = fifthMatch || null,
          spreadExpression = fourthMatch || null,
          types = typesFromSelectors(selectors),
          ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types),
          spread = Spread.fromSpreadExpression(spreadExpression),
          subQuery = Query.fromSubExpressionAndTypes(subExpression, types),
          infiniteDescent = (secondMatch === "/"),  ///
          intermediateNodes = [],
          query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
    
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

function isSelectorTypeSelector(selector) { return /^@/.test(selector); }

function ruleNamesFromSelectors(selectors) { return selectors.filter(isSelectorRuleNameSelector); }

function isSelectorRuleNameSelector(selector) { return /^[^@]/.test(selector); }

function ruleNamesFromSelectorsAndTypes(selectors, types) {
  let ruleNames = [];

  const typesLength = types.length;

  if (typesLength === 0) {
    ruleNames = ruleNamesFromSelectors(selectors);
  }

  return ruleNames;
}
