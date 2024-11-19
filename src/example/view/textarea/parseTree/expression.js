"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class ExpressionParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const setExpressionParseTree = this.setParseTree.bind(this), ///
          clearExpressionParseTree = this.clearParseTree.bind(this); ///

    return ({
      setExpressionParseTree,
      clearExpressionParseTree
    });
  }

  static defaultProperties = {
    className: "expression"
  };
}
