"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _spread = _interopRequireDefault(require("./spread"));

var _constants = require("./constants");

var _array = require("./utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Query = /*#__PURE__*/function () {
  function Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes) {
    _classCallCheck(this, Query);

    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
    this.intermediateNodes = intermediateNodes;
  }

  _createClass(Query, [{
    key: "isUnique",
    value: function isUnique() {
      return this.spread.isUnique();
    }
  }, {
    key: "execute",
    value: function execute(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;
      var nodes = [];
      this.reset();
      this.clear();
      this.find(node, depth, maximumDepth);
      this.apply(nodes, depth, maximumDepth);
      return nodes;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.spread.reset();

      if (this.subQuery !== null) {
        this.subQuery.reset();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      (0, _array.clear)(this.intermediateNodes);
    }
  }, {
    key: "find",
    value: function find(node, depth, maximumDepth) {
      var _this = this;

      if (depth > maximumDepth) {
        return;
      }

      var nodeTerminalNode = node.isTerminalNode(),
          nodeNonTerminalNode = !nodeTerminalNode;
      var found;

      if (nodeTerminalNode) {
        var terminalNode = node,
            ///
        type = terminalNode.getType();
        found = (0, _array.includes)(this.types, type, _constants.WILDCARD_CHARACTER);
      }

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        ruleName = nonTerminalNode.getRuleName();
        found = (0, _array.includes)(this.ruleNames, ruleName, _constants.WILDCARD_CHARACTER);
      }

      if (found) {
        var between = this.spread.isBetween();

        if (between) {
          var intermediateNode = node; ///

          this.intermediateNodes.push(intermediateNode);
        }

        this.spread.incrementIndex();
      }

      if (this.infiniteDescent) {
        if (nodeNonTerminalNode) {
          depth++;

          var _nonTerminalNode = node,
              ///
          childNodes = _nonTerminalNode.getChildNodes();

          childNodes.forEach(function (childNode) {
            return _this.find(childNode, depth, maximumDepth);
          });
        }
      }
    }
  }, {
    key: "apply",
    value: function apply(nodes, depth, maximumDepth) {
      var _this2 = this;

      var unique = this.isUnique();

      if (unique) {
        var intermediateNodesLength = this.intermediateNodes.length;

        if (intermediateNodesLength > 1) {
          this.clear();
        }
      }

      if (this.subQuery === null) {
        (0, _array.push)(nodes, this.intermediateNodes);
      } else {
        this.intermediateNodes.forEach(function (intermediateNode) {
          var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();

          if (intermediateNodeNonTerminalNode) {
            depth++;
            var nonTerminalNode = intermediateNode,
                ///
            childNodes = nonTerminalNode.getChildNodes();

            _this2.subQuery.clear();

            childNodes.forEach(function (childNode) {
              return _this2.subQuery.find(childNode, depth, maximumDepth);
            });

            _this2.subQuery.apply(nodes, depth, maximumDepth);
          }
        });
      }
    }
  }], [{
    key: "fromSubExpressionAndTypes",
    value: function fromSubExpressionAndTypes(subExpresion, types) {
      var query = null;

      if (subExpresion !== null) {
        var typesLength = types.length;

        if (typesLength === 0) {
          var expression = subExpresion; ///

          query = Query.fromExpression(expression);
        }
      }

      return query;
    }
  }, {
    key: "fromExpression",
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = (0, _array.second)(matches),
          thirdMatch = (0, _array.third)(matches),
          fourthMatch = (0, _array.fourth)(matches),
          fifthMatch = (0, _array.fifth)(matches),
          selectors = thirdMatch.split("|"),
          subExpression = fifthMatch || null,
          spreadExpression = fourthMatch || null,
          types = typesFromSelectors(selectors),
          ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types),
          spread = _spread["default"].fromSpreadExpression(spreadExpression),
          subQuery = Query.fromSubExpressionAndTypes(subExpression, types),
          infiniteDescent = secondMatch === "/",
          ///
      intermediateNodes = [],
          query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);

      return query;
    }
  }]);

  return Query;
}();

exports["default"] = Query;

function typesFromSelectors(selectors) {
  var types = [];
  selectors.forEach(function (selector) {
    var selectorTypeSelector = isSelectorTypeSelector(selector);

    if (selectorTypeSelector) {
      var type = selector.substring(1);
      types.push(type);
    }
  });
  return types;
}

function isSelectorTypeSelector(selector) {
  return /^@/.test(selector);
}

function ruleNamesFromSelectors(selectors) {
  return selectors.filter(isSelectorRuleNameSelector);
}

function isSelectorRuleNameSelector(selector) {
  return /^[^@]/.test(selector);
}

function ruleNamesFromSelectorsAndTypes(selectors, types) {
  var ruleNames = [];
  var typesLength = types.length;

  if (typesLength === 0) {
    ruleNames = ruleNamesFromSelectors(selectors);
  }

  return ruleNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsImludGVybWVkaWF0ZU5vZGVzIiwiaXNVbmlxdWUiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsInJlc2V0IiwiY2xlYXIiLCJmaW5kIiwiYXBwbHkiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiZm91bmQiLCJ0ZXJtaW5hbE5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsIldJTERDQVJEX0NIQVJBQ1RFUiIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW50ZXJtZWRpYXRlTm9kZSIsInB1c2giLCJpbmNyZW1lbnRJbmRleCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInVuaXF1ZSIsImludGVybWVkaWF0ZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3ViRXhwcmVzaW9uIiwicXVlcnkiLCJ0eXBlc0xlbmd0aCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsIkluZmluaXR5IiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyIsIlNwcmVhZCIsImZyb21TcHJlYWRFeHByZXNzaW9uIiwiZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyIsInNlbGVjdG9yIiwic2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVHlwZVNlbGVjdG9yIiwic3Vic3RyaW5nIiwidGVzdCIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMiLCJmaWx0ZXIiLCJpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSztBQUNuQixpQkFBWUMsU0FBWixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDQyxRQUF0QyxFQUFpREMsWUFBakQsRUFBK0RDLGVBQS9ELEVBQWdGQyxpQkFBaEYsRUFBbUc7QUFBQTs7QUFDakcsU0FBS04sU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7K0JBRVU7QUFBRSxhQUFPLEtBQUtKLE1BQUwsQ0FBWUssUUFBWixFQUFQO0FBQWdDOzs7NEJBRXJDQyxJLEVBQW1EO0FBQUEsVUFBN0NDLEtBQTZDLHVFQUFyQyxDQUFxQztBQUFBLFVBQWxDTCxZQUFrQyx1RUFBbkIsS0FBS0EsWUFBYztBQUN6RCxVQUFNTSxLQUFLLEdBQUcsRUFBZDtBQUVBLFdBQUtDLEtBQUw7QUFFQSxXQUFLQyxLQUFMO0FBRUEsV0FBS0MsSUFBTCxDQUFVTCxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QkwsWUFBdkI7QUFFQSxXQUFLVSxLQUFMLENBQVdKLEtBQVgsRUFBa0JELEtBQWxCLEVBQXlCTCxZQUF6QjtBQUVBLGFBQU9NLEtBQVA7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS1IsTUFBTCxDQUFZUyxLQUFaOztBQUVBLFVBQUks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QUtJLElBQUwsQ0FBVUosUUFBVixDQUFQO0FBQTZCOztBQUV6RSxTQUFTSyxzQkFBVCxDQUFnQ2QsU0FBaEMsRUFBMkM7QUFBRSxTQUFPQSxTQUFTLENBQUNlLE1BQVYsQ0FBaUJDLDBCQUFqQixDQUFQO0FBQXNEOztBQUVuRyxTQUFTQSwwQkFBVCxDQUFvQ1AsUUFBcEMsRUFBOEM7QUFBRSxTQUFPLFFBQVFJLElBQVIsQ0FBYUosUUFBYixDQUFQO0FBQWdDOztBQUVoRixTQUFTSiw4QkFBVCxDQUF3Q0wsU0FBeEMsRUFBbURwRCxLQUFuRCxFQUEwRDtBQUN4RCxNQUFJRCxTQUFTLEdBQUcsRUFBaEI7QUFFQSxNQUFNMEMsV0FBVyxHQUFHekMsS0FBSyxDQUFDb0MsTUFBMUI7O0FBRUEsTUFBSUssV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCMUMsSUFBQUEsU0FBUyxHQUFHbUUsc0JBQXNCLENBQUNkLFNBQUQsQ0FBbEM7QUFDRDs7QUFFRCxTQUFPckQsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcHJlYWQgZnJvbSBcIi4vc3ByZWFkXCI7XG5cbmltcG9ydCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5pbnRlcm1lZGlhdGVOb2RlcyA9IGludGVybWVkaWF0ZU5vZGVzO1xuICB9XG5cbiAgaXNVbmlxdWUoKSB7IHJldHVybiB0aGlzLnNwcmVhZC5pc1VuaXF1ZSgpOyB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5maW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5hcHBseShub2RlcywgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNwcmVhZC5yZXNldCgpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3ViUXVlcnkucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmludGVybWVkaWF0ZU5vZGVzKTtcbiAgfVxuXG4gIGZpbmQobm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heGltdW1EZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBiZXR3ZWVuID0gdGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCk7XG5cbiAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgIGNvbnN0IGludGVybWVkaWF0ZU5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgY29uc3QgdW5pcXVlID0gdGhpcy5pc1VuaXF1ZSgpO1xuXG4gICAgaWYgKHVuaXF1ZSkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZXNMZW5ndGggPSB0aGlzLmludGVybWVkaWF0ZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGludGVybWVkaWF0ZU5vZGVzTGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgIHB1c2gobm9kZXMsIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLmZvckVhY2goKGludGVybWVkaWF0ZU5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICBpZiAoaW50ZXJtZWRpYXRlTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgIGRlcHRoKys7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBpbnRlcm1lZGlhdGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuY2xlYXIoKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLnN1YlF1ZXJ5LmZpbmQoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKSk7XG5cbiAgICAgICAgICB0aGlzLnN1YlF1ZXJ5LmFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMoc3ViRXhwcmVzaW9uLCB0eXBlcykge1xuICAgIGxldCBxdWVyeSA9IG51bGw7XG5cbiAgICBpZiAoc3ViRXhwcmVzaW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzdWJFeHByZXNpb247ICAvLy9cblxuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcWyFdKykoXFxbW15cXF1dK118ISk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdChcInxcIiksXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2ggfHwgbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc3Npb24sIHR5cGVzKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IFwiL1wiKSwgIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZU5vZGVzID0gW10sXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQsIGludGVybWVkaWF0ZU5vZGVzKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSB7XG4gIGxldCBydWxlTmFtZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gIH1cblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl19