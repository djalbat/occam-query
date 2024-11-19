"use strict";

import ParseTreeTextarea from "../../textarea/parseTree";

export default class ContentParseTreeTextarea extends ParseTreeTextarea {
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
