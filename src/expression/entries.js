"use strict";

const entries = [
  {
    "special": "^(?:@|!|\\*|\\||\\/|\\[|\\]|\\.\\.\\.)"
  },
  {
    "name": "^[a-zA-Z0-9\\-]+"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
