"use strict";

import { characters } from "necessary";

import { clear, trim, second, third, fourth } from "./utilities/array";

const { EXCLAMATION_MARK_CHARACTER } = characters;

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
      if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
        unique = true;
      } else {
        const regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/,
              matches = spreadExpression.match(regExp),
              secondMatch = second(matches) || null,
              thirdMatch = third(matches) || null,
              fourthMatch = fourth(matches) || null;

        if (secondMatch !== null) {
          startIndex = parseInt(secondMatch);

          if (thirdMatch === null) {
            endIndex = startIndex;
          }
        }

        if (fourthMatch !== null) {
          endIndex = parseInt(fourthMatch);

          if (thirdMatch === null) {
            startIndex = endIndex;
          }
        }
      }
    }

    const spread = new Spread(startIndex, endIndex, unique);

    return spread;
  }
}
