'use strict';

const easy = require('easy');

const { InputElement } = easy;

class MaximumDepthInput extends InputElement {
  getMaximumDepth() {
    const value = this.getValue(),
          maximumDepth = Number(value);

    return maximumDepth;
  }

  setMaximumDepth(maximumDepth) {
    const value = maximumDepth || 0;  ///

    this.setValue(value);
  }

  parentContext() {
    const getMaximumDepth = this.getMaximumDepth.bind(this),
          setMaximumDepth = this.setMaximumDepth.bind(this);

    return ({
      getMaximumDepth,
      setMaximumDepth
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(MaximumDepthInput, properties); }
}

Object.assign(MaximumDepthInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'maximum-depth'
  }
});

module.exports = MaximumDepthInput;
