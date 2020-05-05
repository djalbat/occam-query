"use strict";

import Input from "../input";

export default class MaximumDepthInput extends Input {
  getMaximumDepth() {
    const value = this.getValue(),
          maximumDepth = Number(value);

    return maximumDepth;
  }

  setMaximumDepth(maximumDepth) {
    const value = maximumDepth; ///

    this.setValue(value);
  }

  parentContext() {
    const getMaximumDepth = this.getMaximumDepth.bind(this),
        setMaximumDepth = this.setMaximumDepth.bind(this),
        setMaximumDepthReadOnly = this.setReadOnly.bind(this); ///;

    return ({
      getMaximumDepth,
      setMaximumDepth,
      setMaximumDepthReadOnly
    });
  }

  static defaultProperties = {
    className: "maximum-depth",
    spellCheck: "false"
  };
}
