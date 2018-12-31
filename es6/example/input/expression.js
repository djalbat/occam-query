'use strict';

const easy = require('easy');

const { InputElement } = easy;

class ExpressionInput extends InputElement {
  showError() {
    this.addClass('error');
  }

  hideError() {
    this.removeClass('error');
  }

  getExpression() {
    const value = this.getValue(),
          expression = value;  ///

    return expression;
  }

  setExpression(expression) {
    const value = expression || '';  ///

    this.setValue(value);
  }

  parentContext() {
    const showError = this.showError.bind(this), ///
          hideError = this.hideError.bind(this), ///
          getExpression = this.getExpression.bind(this),
          setExpression = this.setExpression.bind(this);

    return ({
      getExpression,
      setExpression,
      showError,
      hideError
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(ExpressionInput, properties); }
}

Object.assign(ExpressionInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});

module.exports = ExpressionInput;
