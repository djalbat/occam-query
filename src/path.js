"use strict";

import { ruleNamesFromPathNode, tokenTypesFromPathNode, infiniteDescentFromPathNode } from "./utilities/node";

export default class Path {
  constructor(ruleNames, tokenTypes, infiniteDescent) {
    this.ruleNames = ruleNames;
    this.tokenTypes = tokenTypes;
    this.infiniteDescent = infiniteDescent;
  }

  getRuleNames() {
    return this.ruleNames;
  }

  getTokenTypes() {
    return this.tokenTypes;
  }

  isInfiniteDescent() {
    return this.infiniteDescent;
  }

  static fromPathNode(pathNode) {
    const ruleNames = ruleNamesFromPathNode(pathNode),
          tokenTypes = tokenTypesFromPathNode(pathNode),
          infiniteDescent = infiniteDescentFromPathNode(pathNode),
          path = new Path(ruleNames, tokenTypes, infiniteDescent);

    return path;
  }
}
