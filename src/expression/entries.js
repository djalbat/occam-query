"use strict";

const entries = [
  {
    "special": "^(?:@|!|\\*|\\||\\/|\\[|\\]|\\.\\.\\.)"
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
