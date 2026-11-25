"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";

export default class ParseTreeTextarea extends Textarea {
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
