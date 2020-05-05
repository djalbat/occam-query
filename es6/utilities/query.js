"use strict";

import Query from "../query";

export function queryByClass(node, Class, nodes = []) {
  if (node instanceof Class) {
    nodes.push(node);
  }

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach((childNode) => queryByClass(childNode, Class, nodes));
  }

  return nodes;
}

export function queryByClasses(node, Classes, nodes = []) {
  Classes.some((Class) => {
    if (node instanceof Class) {
      nodes.push(node);

      return true;
    }
  });

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach((childNode) => queryByClasses(childNode, Classes, nodes));
  }

  return nodes;
}

export function queryByExpression(node, expression, maximumDepth) {
  const query = Query.fromExpression(expression, maximumDepth),
        nodes = query.execute(node);

  return nodes;
}
