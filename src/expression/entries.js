"use strict";

const entries = [
  {
    "special": "^(?:@|!|\\*|\\||\\/|\\[|\\]|\\.\\.\\.)"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "name": "^[\\w~]+"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
