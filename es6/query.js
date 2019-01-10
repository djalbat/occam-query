'use strict';

const Spread = require('./spread'),
      constants = require('./constants'),
      arrayUtilities = require('./utilities/array');

const { WILDCARD_CHARACTER } = constants,
      { includes, second, third, fourth, fifth } = arrayUtilities;

class Query {
  constructor(significantTokenTypes, infiniteDescent, ruleNames, spread, subQuery, maximumDepth) {
    this.significantTokenTypes = significantTokenTypes;
    this.infiniteDescent = infiniteDescent;
    this.ruleNames = ruleNames;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
  }
  
  execute(node, depth = 0) {
    let nodes = [];

    if (depth <= this.maximumDepth) {
      depth++;

      const nodeTerminalNode = node.isTerminalNode();

      if (nodeTerminalNode) {
        const terminalNode = node,  ///
              terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

        if (!terminalNodeEpsilonNode) {
          const significantToken = terminalNode.getSignificantToken(),
                significantTokenType = significantToken.getType(),
                found = includes(this.significantTokenTypes, significantTokenType, WILDCARD_CHARACTER);

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
                const childNodeNodes = this.subQuery.execute(childNode, depth);

                nodes = nodes.concat(childNodeNodes);
              });
            }
          }

          this.spread.incrementIndex();
        }

        if (this.infiniteDescent) {
          childNodes.forEach((childNode) => {
            const childNodeNodes = this.execute(childNode, depth);

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
          significantTokenTypes = significantTokenTypesFromSelectors(selectors),
          significantTokenTypesLength = significantTokenTypes.length,
          infiniteDescent = (secondMatch === '/'),  ///
          ruleNames = (significantTokenTypesLength === 0) ?
                        ruleNamesFromSelectors(selectors) :
                          [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = (significantTokenTypesLength === 0) ?
                       Query.fromExpression(subExpression) :
                         null,
          query = new Query(significantTokenTypes, infiniteDescent, ruleNames, spread, subQuery, maximumDepth);
    
    return query;
  }
}

module.exports = Query;

function significantTokenTypesFromSelectors(selectors) {
  const significantTokenTypes = [];

  selectors.forEach(function(selector) {
    const selectorTokenTypeSelector = isSelectorTokenTypeSelector(selector);

    if (selectorTokenTypeSelector) {
      const tokenType = selector.substring(1);

      significantTokenTypes.push(tokenType);
    }
  });

  return significantTokenTypes;
}

function isSelectorTokenTypeSelector(selector) { return /^@/.test(selector); }

function ruleNamesFromSelectors(selectors) { return selectors.filter(isSelectorRuleName); }

function isSelectorRuleName(selector) { return /^[^@]/.test(selector); }
