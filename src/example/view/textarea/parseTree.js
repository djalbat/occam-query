"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../../constants";

class ParseTreeTextarea extends Textarea {
  setParseTree(parseTree) {
    parseTree.shiftLine();  //

    const parseTreeString = parseTree.asString(),
          value = parseTreeString;  ///

    this.setValue(value);
  }

  clearParseTree(parseTree) {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  static defaultProperties = {
    className: "parse-tree",
    spellCheck: "false",
    readOnly: true
  };
}

export default withStyle(ParseTreeTextarea)`
  
  height: 32rem;
  
`;