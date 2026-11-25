"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class ExpressionParseTreeTextarea extends ParseTreeTextarea {
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

export default withStyle(ExpressionParseTreeTextarea)`
  
  height: 48rem;
  
`;