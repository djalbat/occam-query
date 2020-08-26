"use strict";

import Spread from "./spread";

import { WILDCARD_CHARACTER } from "./constants";
import { includes, second, third, fourth, fifth } from "./utilities/array";

export default class Query {
  constructor(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent) {
    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }
  
  execute(node, depth = 0, maximumDepth = this.maximumDepth, resetSpreadsIndexes = true) {
    let nodes = [];

    if (resetSpreadsIndexes) {
      this.resetSpreadsIndexes();
    }

    if (depth <= maximumDepth) {
      depth++;

      const nodeTerminalNode = node.isTerminalNode();

      if (nodeTerminalNode) {
        const terminalNode = node,  ///
              terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

        if (!terminalNodeEpsilonNode) {
          const type = terminalNode.getType(),
                found = includes(this.types, type, WILDCARD_CHARACTER);

          if (found) {
            const between = this.spread.isBetween();

            if (between) {
              nodes = [node];
            }

            this.spread.incrementIndex();
          }
        }
      } else {
        const nonTerminalNode = node, ///
              childNodes = nonTerminalNode.getChildNodes(),
              ruleName = nonTerminalNode.getRuleName(),
              found = includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);

        if (found) {
          const between = this.spread.isBetween();

          if (between) {
            if (this.subQuery === null) {
              nodes = [nonTerminalNode];
            } else {
              childNodes.forEach((childNode) => {
                const resetSpreadsIndexes = false,
                      childNodeNodes = this.subQuery.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

                nodes = nodes.concat(childNodeNodes);
              });
            }
          }

          this.spread.incrementIndex();
        }

        if (this.infiniteDescent) {
          childNodes.forEach((childNode) => {
            const resetSpreadsIndexes = false,
                  childNodeNodes = this.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

            nodes = nodes.concat(childNodeNodes);
          });
        }
      }
    }

    return nodes;
  }

  resetSpreadsIndexes() {
    this.spread.resetIndex();

    if (this.subQuery !== null) {
      this.subQuery.resetSpreadsIndexes();
    }
  }

  static fromSubExpressionAndTypes(subExpresion, types) {
    let query = null;

    const typesLength = types.length;

    if (typesLength === 0) {
      const expression = subExpresion;  ///

      query = Query.fromExpression(expression);
    }

    return query;
  }

  static fromExpression(expression, maximumDepth = Infinity) {
    if (expression === undefined) { ///
      return null;
    }
    
    const regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          selectors = thirdMatch.split("|"),  ///
          spreadExpression = fourthMatch,  ///
          subExpression = fifthMatch,  ///
          types = typesFromSelectors(selectors),
          ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types),
          spread = Spread.fromSpreadExpression(spreadExpression),
          subQuery = Query.fromSubExpressionAndTypes(subExpression, types),
          infiniteDescent = (secondMatch === "/"),  ///
          query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);
    
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
