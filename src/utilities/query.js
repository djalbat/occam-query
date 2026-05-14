"use strict";

import { arrayUtilities } from "necessary";

import Query from "../query";
import Expression from "../expression";

const { push } = arrayUtilities;

export function nodeQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    node = nodes.shift() || null; ///

    return node;
  }
}

export function nodesQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  }
}

export function nodeFromNodeAndQuery(node, query) {
  const queryNodes = query.execute(node),
        queryNode = queryNodes.shift() || null;

  node = queryNode;  ///

  return node;
}

export function nodesFromNodeAndQuery(node, query, nodes = []) {
  const queryNodes = query.execute(node);

  push(nodes, queryNodes);

  return nodes;
}

export function nodesFromNodeAndQueries(node, queries, nodes = []) {
  queries.forEach((query) => {
    const queryNodes = query.execute(node);

    push(nodes, queryNodes);
  });

  return nodes;
}

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
  nodeQuery,
  nodesQuery,
  nodeFromNodeAndQuery,
  nodesFromNodeAndQuery,
  nodesFromNodeAndQueries,
  queryByExpressionString
};
