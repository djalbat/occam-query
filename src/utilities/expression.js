"use strict";

import ExpressionLexer from "../expression/lexer";
import ExpressionParser from "../expression/parser";

const expressionLexer = ExpressionLexer.fromNothing(),
      expressionParser = ExpressionParser.fromNothing();

export function nodeFromExpressionString(expressionString) {
  const content = expressionString, ///
        tokens = tokensFromContent(content),
        node = nodeFromTokens(tokens);

  return node;
}

export function tokensFromContent(content) {
  const lexer = expressionLexer,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

export function nodeFromTokens(tokens) {
  const parser = expressionParser,  ///
        node = parser.parse(tokens);

  return node;
}

export default {
  nodeFromExpressionString,
  tokensFromContent,
  nodeFromTokens
}