"use strict";

import { EXCLAMATION_MARK } from "./constants";
import { clear, trim, second, third, fourth } from "./utilities/array";

export default class Spread {
  constructor(startIndex, endIndex, unique) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.unique = unique;
  }

  adjustNodes(nodes) {
    if (this.unique) {
      const nodesLength = nodes.length;

      if (nodesLength > 1) {
        clear(nodes);
      }
    } else {
      trim(nodes, this.startIndex, this.endIndex);
    }
  }

  static fromSpreadExpression(spreadExpression) {
    let startIndex = 0,
        endIndex = Infinity,
        unique = false;

    if (spreadExpression !== null) {
      if (spreadExpression === EXCLAMATION_MARK) {
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

    const spread = new Spread(startIndex, endIndex, unique);

    return spread;
  }
}
