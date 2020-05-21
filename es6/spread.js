"use strict";

import { second, third, fourth } from "./utilities/array";

export default class Spread {
  constructor(startIndex, endIndex, index) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.index = index;
  }

  isBetween() {
    const between = ((this.index >= this.startIndex) && (this.index <= this.endIndex));

    return between;
  }

  resetIndex() {
    this.index = 0;
  }

  incrementIndex() {
    this.index += 1;
  }

  static fromExpression(expression) {
    let startIndex = -1,
        endIndex = Number.POSITIVE_INFINITY;

    if (expression) {
      const regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/,
            matches = expression.match(regExp),
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches);

      if (secondMatch !== undefined) {
        startIndex = parseInt(secondMatch);

        if (thirdMatch === undefined) {
          endIndex = startIndex;
        }
      }

      if (fourthMatch !== undefined) {
        endIndex = parseInt(fourthMatch);

        if (thirdMatch === undefined) {
          startIndex = endIndex;
        }
      }
    }

    const index = 0,
          spread = new Spread(startIndex, endIndex, index);

    return spread;
  }
}
