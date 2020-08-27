"use strict";

import { second, third, fourth } from "./utilities/array";
import { UNIQUE_SPREAD_EXPRESSION } from "./constants";

export default class Spread {
  constructor(startIndex, endIndex, unique, index) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.unique = unique;
    this.index = index;
  }

  isUnique() {
    return this.unique;
  }

  isBetween() {
    const between = ((this.index >= this.startIndex) && (this.index <= this.endIndex));

    return between;
  }

  reset() {
    this.index = 0;
  }

  incrementIndex() {
    this.index += 1;
  }

  static fromSpreadExpression(spreadExpression) {
    let startIndex = -1,
        endIndex = Infinity,
        unique = false;

    if (spreadExpression !== null) {
      if (spreadExpression === UNIQUE_SPREAD_EXPRESSION) {
        unique = true;
      } else {
        const regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/,
              matches = spreadExpression.match(regExp),
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
    }

    const index = 0,
          spread = new Spread(startIndex, endIndex, unique, index);

    return spread;
  }
}
