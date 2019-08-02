'use strict';

const Spread = require('./spread'),
      constants = require('./constants'),
      arrayUtilities = require('./utilities/array');

const { WILDCARD_CHARACTER } = constants,
      { includes, second, third, fourth, fifth } = arrayUtilities;

class Query {
  constructor(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent) {
    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }
  
  execute(node, depth = 0, maximumDepth = this.maximumDepth) {
    let nodes = [];

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
            if (this.spread.isBetween()) {
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
          if (this.spread.isBetween()) {
            if (this.subQuery === null) {
              nodes = [nonTerminalNode];
            } else {
              childNodes.forEach((childNode) => {
                const childNodeNodes = this.subQuery.execute(childNode, depth, maximumDepth);

                nodes = nodes.concat(childNodeNodes);
              });
            }
          }

          this.spread.incrementIndex();
        }

        if (this.infiniteDescent) {
          childNodes.forEach((childNode) => {
            const childNodeNodes = this.execute(childNode, depth, maximumDepth);

            nodes = nodes.concat(childNodeNodes);
          });
        }
      }
    }

    return nodes;
  }

  static fromExpression(expression, maximumDepth = Infinity) {
    if (expression === undefined) { ///
      return null;
    }
    
    const regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          selectors = thirdMatch.split('|'),  ///
          spreadExpression = fourthMatch,  ///
          subExpression = fifthMatch,  ///
          types = typesFromSelectors(selectors),
          typesLength = types.length,
          ruleNames = (typesLength === 0) ?
                        ruleNamesFromSelectors(selectors) :
                          [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = (typesLength === 0) ?
                       Query.fromExpression(subExpression) :
                         null,
          infiniteDescent = (secondMatch === '/'),  ///
          query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);
    
    return query;
  }
}

module.exports = Query;

function typesFromSelectors(selectors) {
  const types = [];

  selectors.forEach(function(selector) {
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
