"use strict";

import Path from "./path";
import Spread from "./spread";
import SubExpression from "./subExpression";
import ExpressionLexer from "./expression/lexer";
import ExpressionParser from "./expression/parser";

import { pathNodeFromExpressionNode, spreadNodeFromExpressionNode, subExpressionNodeFromExpressionNode } from "./utilities/node";

const expressionLexer = ExpressionLexer.fromNothing(),
      expressionParser = ExpressionParser.fromNothing();

export default class Expression {
  constructor(tokens, node, path, spread, subExpression) {
    this.tokens = tokens;
    this.node = node;
    this.path = path;
    this.spread = spread;
    this.subExpression = subExpression;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getPath() {
    return this.path;
  }

  getSpread() {
    return this.spread;
  }

  getSubExpression() {
    return this.subExpression;
  }

  static fromExpressionString(string) {
    let expression = null;

    const lexer = expressionLexer,  ///
          parser = expressionParser,  ///
          content = string, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      const expressionNode = node, ///
            pathNode = pathNodeFromExpressionNode(expressionNode),
            spreadNode = spreadNodeFromExpressionNode(expressionNode),
            subExpressionNode = subExpressionNodeFromExpressionNode(expressionNode),
            path = Path.fromPathNode(pathNode),
            spread = Spread.fromSpreadNode(spreadNode),
            subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);

      expression = new Expression(tokens, node, path, spread, subExpression);
    }

    return expression;
  }
}
