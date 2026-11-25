"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class ContentParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const setContentParseTree = this.setParseTree.bind(this), ///
          clearContentParseTree = this.clearParseTree.bind(this); ///

    return ({
      setContentParseTree,
      clearContentParseTree
    });
  }

  static defaultProperties = {
    className: "content"
  };
}


export default withStyle(ContentParseTreeTextarea)`
  
  height: 32rem;
  
`;