"use strict";

export function tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  const significantToken = terminalNode.getSignificantToken(),
        significantTokenIndex = tokens.indexOf(significantToken),
        tokenIndex = `(${significantTokenIndex})`;

  return tokenIndex;
}

export function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  const firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
        lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
        tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                        `(${firstSignificantTokenIndex}-${lastSignificantTokenIndex})` :
                          `(${firstSignificantTokenIndex})`;

  return tokenIndexes;
}
