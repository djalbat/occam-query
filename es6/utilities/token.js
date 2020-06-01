"use strict";

export function tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  const significantToken = terminalNode.getSignificantToken(),
        significantTokenIndex = significantToken.ofIndex(tokens),
        tokenIndex = `(${significantTokenIndex})`;

  return tokenIndex;
}

export function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantTokenIndex = firstSignificantToken.ofIndex(tokens),
        lastSignificantTokenIndex = lastSignificantToken.ofIndex(tokens),
        tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                        `(${firstSignificantTokenIndex}-${lastSignificantTokenIndex})` :
                          `(${firstSignificantTokenIndex})`;

  return tokenIndexes;
}
