'use strict';

const easy = require('easy');

const tokenUtilities = require('../../utilities/token');

const { InputElement } = easy,
      { tokenIndexFromTerminalNodeAndTokens, tokenIndexesFromNonTerminalNodeAndTokens } = tokenUtilities;

class NodesTextarea extends InputElement {
  setNodes(nodes, tokens) { ///
    const value = nodes.reduce(function(value, node) {
            const nodeTerminalNode = node.isTerminalNode();

            if (nodeTerminalNode) {
              const terminalNode = node,  ///
                    significantToken = terminalNode.getSignificantToken(),
                    significantTokenType = significantToken.getType(),
                    tokenIndex = tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens);

              value = `${value}[${significantTokenType}]${tokenIndex}\n`;
            } else {
              const nonTerminalNode = node, ///
                    ruleName = nonTerminalNode.getRuleName(),
                    tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);

              value = `${value}${ruleName}${tokenIndexes}\n`;
            }

            return value;
          }, '');

    this.setValue(value);
  }

  clearNodes() {
    const value = '';

    this.setValue(value);
  }

  parentContext() {
    const setNodes = this.setNodes.bind(this),
          clearNodes = this.clearNodes.bind(this);

    return ({
      setNodes,
      clearNodes
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(NodesTextarea, properties); }
}

Object.assign(NodesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'nodes',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = NodesTextarea;
