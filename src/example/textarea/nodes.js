"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";
import { tokenIndexFromTerminalNodeAndTokens, tokenIndexesFromNonTerminalNodeAndTokens } from "../utilities/token"

export default class NodesTextarea extends Textarea {
  getNodes() {
    const value = this.getValue(),
          nodes = value; ///

    return nodes;
  }

  setNodes(nodes, tokens) { ///
    const value = nodes.reduce((value, node) => {
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
    }, EMPTY_STRING);

    this.setValue(value);
  }

  clearNodes() {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  parentContext() {
    const getNodes = this.getNodes.bind(this),
          setNodes = this.setNodes.bind(this),
          clearNodes = this.clearNodes.bind(this);

    return ({
      getNodes,
      setNodes,
      clearNodes
    });
  }

  static defaultProperties = {
    className: "nodes",
    spellCheck: "false",
    readOnly: true
  };
}
