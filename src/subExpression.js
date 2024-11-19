"use strict";

import Path from "./path";

import { pathNodeFromSubExpressionNode, subExpressionNodeFromSubExpressionNode } from "./utilities/node";

export default class SubExpression {
  constructor(path, subExpression) {
    this.path = path;
    this.subExpression = subExpression;
  }

  getPath() {
    return this.path;
  }

  getSubExpression() {
    return this.subExpression;
  }

  static fromSubExpressionNode(subExpressionNode) {
    let subExpression = null;

    if (subExpressionNode !== null) {
      const pathNode = pathNodeFromSubExpressionNode(subExpressionNode);

      subExpressionNode = subExpressionNodeFromSubExpressionNode(subExpressionNode);  ///

      const path = Path.fromPathNode(pathNode);

      subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);

      subExpression = new SubExpression(path, subExpression); ///
    }

    return subExpression;
  }
}
