'use strict';

const easy = require('easy');

const { InputElement } = easy;

class NodesTextarea extends InputElement {
  setNodes(nodes) {
    const value = nodes.reduce(function(value, node) {
            const nodeTerminalNode = node.isTerminalNode();

            if (nodeTerminalNode) {
              const terminalNode = node,  ///
                    significantToken = terminalNode.getSignificantToken(),
                    significantTokenType = significantToken.getType();

              value = `${value}[${significantTokenType}]\n`;
            } else {
              const nonTerminalNode = node, ///
                    ruleName = nonTerminalNode.getRuleName();

              value = `${value}${ruleName}\n`;
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
