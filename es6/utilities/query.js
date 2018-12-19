'use strict';

function queryByClass(node, Class, nodes = []) {
  if (node instanceof Class) {
    nodes.push(node);
  }

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach(function(childNode) {
      queryByClass(childNode, Class, nodes);
    });
  }

  return nodes;
}

function queryByClasses(node, Classes, nodes = []) {
  Classes.some(function(Class) {
    if (node instanceof Class) {
      nodes.push(node);

      return true;
    }
  });

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach(function(childNode) {
      queryByClasses(childNode, Classes, nodes);
    });
  }

  return nodes;
}

module.exports = {
  queryByClass,
  queryByClasses
};
