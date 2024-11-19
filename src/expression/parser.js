"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class ExpressionParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(ExpressionParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(ExpressionParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(ExpressionParser, rules); }
}
