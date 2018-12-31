'use strict';

const easy = require('easy');

const { InputElement } = easy;

class ParseTreeTextarea extends InputElement {
  setParseTree(parseTree) {
    const value = parseTree || '';  ///

    this.setValue(value);
  }

  parentContext() {
    const setParseTree = this.setParseTree.bind(this);

    return ({
      setParseTree
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(ParseTreeTextarea, properties); }
}

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
