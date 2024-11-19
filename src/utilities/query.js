"use strict";

import Query from "../query";
import Expression from "../expression";

export function queryByExpressionString(node, expressionString, maximumDepth) {
  let nodes = null;

  const expression = Expression.fromExpressionString(expressionString);

  if (expression !== null) {
    const query = Query.fromExpression(expression, maximumDepth);

    nodes = query.execute(node);
  }

  return nodes;
}

export default {
  queryByExpressionString
};
