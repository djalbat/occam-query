"use strict";

function tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  const significantToken = terminalNode.getSignificantToken(),
        significantTokenIndex = tokens.indexOf(significantToken),
        tokenIndex = `(${significantTokenIndex})`;

  return tokenIndex;
}

function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  let tokenIndexes;

  const nonTerminalNodeNullified = nonTerminalNode.isNullified();

  if (nonTerminalNodeNullified) {
    tokenIndexes = "";
  } else {
    const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken);

    tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                    `(${firstSignificantTokenIndex}-${lastSignificantTokenIndex})` :
                      `(${firstSignificantTokenIndex})`;
  }

  return tokenIndexes;
}

module.exports = {
  tokenIndexFromTerminalNodeAndTokens,
  tokenIndexesFromNonTerminalNodeAndTokens
};
