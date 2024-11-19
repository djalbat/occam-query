"use strict";

import Query from "../query";

export function queryByExpressionString(node, expressionString, maximumDepth) {
  const query = Query.fromExpressionString(expressionString, maximumDepth),
        nodes = query.execute(node);

  return nodes;
}

export default {
  queryByExpressionString
};
