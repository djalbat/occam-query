"use strict";

const entries = [
  {
    "symbol": "^(?:@|!|\\*|\\||\\/|\\[|\\]|\\.\\.\\.)"
  },
  {
    "name": "^[a-zA-Z\-]+"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
