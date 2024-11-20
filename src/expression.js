"use strict";

import Path from "./path";
import Spread from "./spread";
import SubExpression from "./subExpression";
import ExpressionLexer from "./expression/lexer";
import ExpressionParser from "./expression/parser";

import { pathNodeFromExpressionNode,
         spreadNodeFromExpressionNode,
         errorNodesFromExpressionNode,
         subExpressionNodeFromExpressionNode } from "./utilities/node";

const expressionLexer = ExpressionLexer.fromNothing(),
      expressionParser = ExpressionParser.fromNothing();

export default class Expression {
  constructor(path, spread, subExpression) {
    this.path = path;
    this.spread = spread;
    this.subExpression = subExpression;
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

  getRuleNames() { return this.path.getRuleNames(); }

  getTokenTypes() { return this.path.getTokenTypes(); }

  isInfiniteDescent() { return this.path.isInfiniteDescent(); }

  static fromExpressionString(string) {
    let expression = null;

    const lexer = expressionLexer,  ///
          parser = expressionParser,  ///
          content = string, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      const expressionNode = node, ///
            errorNodes = errorNodesFromExpressionNode(expressionNode),
            errorNodesLength = errorNodes.length;

      if (errorNodesLength === 0) {
        const pathNode = pathNodeFromExpressionNode(expressionNode),
              spreadNode = spreadNodeFromExpressionNode(expressionNode),
              subExpressionNode = subExpressionNodeFromExpressionNode(expressionNode),
              path = Path.fromPathNode(pathNode),
              spread = Spread.fromSpreadNode(spreadNode),
              subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);

        expression = new Expression(path, spread, subExpression);
      }
    }

    return expression;
  }
}
