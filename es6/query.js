'use strict';

const Spread = require('./spread'),
      constants = require('./constants'),
      arrayUtilities = require('./utilities/array');

const { WILDCARD_CHARACTER } = constants,
      { includes, second, third, fourth, fifth } = arrayUtilities;

class Query {
  constructor(significantTokenTypes, ruleNames, spread, subQuery, maximumDepth, infiniteDescent) {
    this.significantTokenTypes = significantTokenTypes;
    this.ruleNames = ruleNames;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }
  
  execute(node, depth = 0) {
    let nodes = [];

    if (depth > this.maximumDepth) {
      ///
    } else {
      depth++;

      const nodeTerminalNode = node.isTerminalNode();

      if (false) {
				///
      } else if (nodeTerminalNode) {
        const terminalNode = node,  ///
              significantToken = terminalNode.getSignificantToken(),
              significantTokenType = significantToken.getType(),
              found = includes(this.significantTokenTypes, significantTokenType, WILDCARD_CHARACTER);

        if (found) {
          if (this.spread.isBetween()) {
            nodes = [node];
          }

          this.spread.incrementIndex();
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

  static fromExpression(expression, depth) {
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
          significantTokenTypesLength = significantTokenTypes.length;

    let ruleNames,
        subQuery;

    if (significantTokenTypesLength > 0) {
      ruleNames = [];
      subQuery = null;
    } else {
      ruleNames = ruleNamesFromSelectors(selectors);
      subQuery = Query.fromExpression(subExpression);
    }

    const spread = Spread.fromExpression(spreadExpression),
          maximumDepth = depth || Infinity,
          infiniteDescent = (secondMatch === '/'),  ///
          query = new Query(significantTokenTypes, ruleNames, spread, subQuery, maximumDepth, infiniteDescent);
    
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
