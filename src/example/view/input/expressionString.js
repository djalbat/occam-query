"use strict";

import Input from "../input";

export default class ExpressionStringInput extends Input {
  getExpressionString() {
    const value = this.getValue(),
          expression = value; ///

    return expression;
  }

  setExpressionString(expressionString) {
    const value = expressionString; ///

    this.setValue(value);
  }

  parentContext() {
    const getExpressionString = this.getExpressionString.bind(this),
          setExpressionString = this.setExpressionString.bind(this); ///;

    return ({
      getExpressionString,
      setExpressionString
    });
  }

  static defaultProperties = {
    className: "expression-string",
    spellCheck: "false"
  };
}
