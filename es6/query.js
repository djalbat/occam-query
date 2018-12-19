'use strict';

const necessary = require('necessary');

const Spread = require('./spread');

const { arrayUtilities } = necessary,
      { first, second, third, fourth, fifth } = arrayUtilities;

class Query {
  constructor(infiniteDescent, ruleNames, subQuery, spread, maximumDepth) {
    this.infiniteDescent = infiniteDescent;
    this.ruleNames = ruleNames;
    this.subQuery = subQuery;
    this.spread = spread;
    this.maximumDepth = maximumDepth;
  }
  
  execute(node, depth = 0) {
    let nodes = [];

    if (depth > this.maximumDepth) {

    } else {
      depth++;

      const nodeTerminalNode = node.isTerminalNode(),
            firstRuleName = first(this.ruleNames),
            wildcard = (firstRuleName === '*'); ///

      if (false) {
				///
      } else if (nodeTerminalNode) {
        if (wildcard) {
          if (this.spread.isBetween()) {
            if (this.subQuery === null) {
              nodes = [node];
            }
          }

          this.spread.incrementIndex();
        }
      } else {
        const childNodes = node.getChildNodes(),
              ruleName = node.getRuleName(),
              found = this.ruleNames.includes(ruleName);

        if (wildcard || found) {
          if (this.spread.isBetween()) {
            if (this.subQuery === null) {
              nodes = [node];
            } else {
              nodes = childNodes.reduce((nodes, childNode) => {
                const childNodeNodes = this.subQuery.execute(childNode, depth);

                nodes = nodes.concat(childNodeNodes);

                return nodes;
              }, nodes);
            }
          }

          this.spread.incrementIndex();
        }

        if (this.infiniteDescent) {
          nodes = childNodes.reduce((nodes, childNode) => {
            const childNodeNodes = this.execute(childNode, depth);

            nodes = nodes.concat(childNodeNodes);

            return nodes;
          }, nodes);
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
          infiniteDescent = (secondMatch === '/'),  ///
          ruleNames = thirdMatch.split('|'),  ///
          subExpression = fifthMatch,  ///
          spreadExpression = fourthMatch,  ///
          subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, ruleNames, subQuery, spread, maximumDepth);
    
    return query;
  }
}

module.exports = Query;
