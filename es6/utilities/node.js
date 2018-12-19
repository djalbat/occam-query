'use strict';

const parsers = require('occam-parsers'), ///
      necessary = require('necessary');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { replace } = arrayUtilities;

function asContent(node, tokens) {
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken),
        lastTokenIndex = tokens.indexOf(lastToken);

  let content = '';

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}

function replaceNodes(node, mappings, parentNode = null) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    return;
  }

  const ruleName = node.getRuleName(),
        childNodes = node.getChildNodes(),
        replacementNodeClass = mappings[ruleName] || null;

  if (replacementNodeClass) {
    const replacedNode = node, ///
          replacementNode = NonTerminalNode.fromRuleNameAndChildNodes(replacementNodeClass, ruleName, childNodes);

    if (parentNode === null) {
      node = replacementNode; ///
    } else {
      const childNodes = parentNode.getChildNodes();

      replace(childNodes, replacementNode, function(childNode) {
        if (childNode === replacedNode) {
          return true;
        }
      });
    }
  }

  parentNode = node;  ///

  childNodes.forEach(function(childNode) {
    const node = childNode; ///

    replaceNodes(node, mappings, parentNode);
  });

  return node;
}

module.exports = {
  asContent,
  replaceNodes
};
