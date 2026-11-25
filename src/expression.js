"use strict";

import Path from "./path";
import Spread from "./spread";
import SubExpression from "./subExpression";

import { nodeFromExpressionString } from "./utilities/expression";
import { pathNodeFromExpressionNode,
         spreadNodeFromExpressionNode,
         errorNodesFromExpressionNode,
         subExpressionNodeFromExpressionNode } from "./utilities/node";

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

  static fromExpressionNode(expressionNode) {
    const pathNode = pathNodeFromExpressionNode(expressionNode),
          spreadNode = spreadNodeFromExpressionNode(expressionNode),
          subExpressionNode = subExpressionNodeFromExpressionNode(expressionNode),
          path = Path.fromPathNode(pathNode),
          spread = Spread.fromSpreadNode(spreadNode),
          subExpression = SubExpression.fromSubExpressionNode(subExpressionNode),
          expression = new Expression(path, spread, subExpression);

    return expression;
  }

  static fromExpressionString(expressionString) {
    let expression = null;

    const node = nodeFromExpressionString(expressionString);

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
