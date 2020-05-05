"use strict";

import Input from "../input";

export default class ExpressionInput extends Input {
  getExpression() {
    const value = this.getValue(),
          expression = value; ///

    return expression;
  }

  setExpression(expression) {
    const value = expression; ///

    this.setValue(value);
  }

  parentContext() {
    const getExpression = this.getExpression.bind(this),
          setExpression = this.setExpression.bind(this),
          setExpressionReadOnly = this.setReadOnly.bind(this); ///;

    return ({
      getExpression,
      setExpression,
      setExpressionReadOnly
    });
  }

  static defaultProperties = {
    className: "expression",
    spellCheck: "false"
  };
}
