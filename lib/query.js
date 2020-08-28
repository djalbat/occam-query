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
    key: "execute",
    value: function execute(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;
      var nodes = [];
      this.clear();
      this.find(node, depth, maximumDepth);
      this.apply(nodes, depth, maximumDepth);
      return nodes;
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
        var intermediateNode = node; ///

        this.intermediateNodes.push(intermediateNode);
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

      this.spread.adjustNodes(this.intermediateNodes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsImludGVybWVkaWF0ZU5vZGVzIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJjbGVhciIsImZpbmQiLCJhcHBseSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJmb3VuZCIsInRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiV0lMRENBUkRfQ0hBUkFDVEVSIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImludGVybWVkaWF0ZU5vZGUiLCJwdXNoIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiYWRqdXN0Tm9kZXMiLCJpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJzdWJFeHByZXNpb24iLCJxdWVyeSIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwiSW5maW5pdHkiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzIiwiU3ByZWFkIiwiZnJvbVNwcmVhZEV4cHJlc3Npb24iLCJmcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWlEQyxZQUFqRCxFQUErREMsZUFBL0QsRUFBZ0ZDLGlCQUFoRixFQUFtRztBQUFBOztBQUNqRyxTQUFLTixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFtRDtBQUFBLFVBQTdDQyxLQUE2Qyx1RUFBckMsQ0FBcUM7QUFBQSxVQUFsQ0osWUFBa0MsdUVBQW5CLEtBQUtBLFlBQWM7QUFDekQsVUFBTUssS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLQyxLQUFMO0FBRUEsV0FBS0MsSUFBTCxDQUFVSixJQUFWLEVBQWdCQyxLQUFoQixFQUF1QkosWUFBdkI7QUFFQSxXQUFLUSxLQUFMLENBQVdILEtBQVgsRUFBa0JELEtBQWxCLEVBQXlCSixZQUF6QjtBQUVBLGFBQU9LLEtBQVA7QUFDRDs7OzRCQUVPO0FBQ04sd0JBQU0sS0FBS0gsaUJBQVg7QUFDRDs7O3lCQUVJQyxJLEVBQU1DLEssRUFBT0osWSxFQUFjO0FBQUE7O0FBQzlCLFVBQUlJLEtBQUssR0FBR0osWUFBWixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFVBQU1TLGdCQUFnQixHQUFHTixJQUFJLENBQUNPLGNBQUwsRUFBekI7QUFBQSxVQUNNQyxtQkFBbUIsR0FBRyxDQUFD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c3ByZWFkXCI7XG5cbmltcG9ydCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5jbHVkZXMsIHB1c2gsIGNsZWFyLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50LCBpbnRlcm1lZGlhdGVOb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5pbnRlcm1lZGlhdGVOb2RlcyA9IGludGVybWVkaWF0ZU5vZGVzO1xuICB9XG5cbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDAsIG1heGltdW1EZXB0aCA9IHRoaXMubWF4aW11bURlcHRoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuZmluZChub2RlLCBkZXB0aCwgbWF4aW11bURlcHRoKTtcblxuICAgIHRoaXMuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2xlYXIodGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gIH1cblxuICBmaW5kKG5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPiBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIGxldCBmb3VuZDtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgaW50ZXJtZWRpYXRlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICB0aGlzLmludGVybWVkaWF0ZU5vZGVzLnB1c2goaW50ZXJtZWRpYXRlTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5maW5kKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KG5vZGVzLCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zcHJlYWQuYWRqdXN0Tm9kZXModGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgcHVzaChub2RlcywgdGhpcy5pbnRlcm1lZGlhdGVOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlTm9kZXMuZm9yRWFjaCgoaW50ZXJtZWRpYXRlTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlID0gaW50ZXJtZWRpYXRlTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnRlcm1lZGlhdGVOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgZGVwdGgrKztcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgdGhpcy5zdWJRdWVyeS5jbGVhcigpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHRoaXMuc3ViUXVlcnkuZmluZChjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpKTtcblxuICAgICAgICAgIHRoaXMuc3ViUXVlcnkuYXBwbHkobm9kZXMsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNpb24sIHR5cGVzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcblxuICAgIGlmIChzdWJFeHByZXNpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHN1YkV4cHJlc2lvbjsgIC8vL1xuXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbIV0rKShcXFtbXlxcXV0rXXwhKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KFwifFwiKSxcbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCB8fCBudWxsLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzKHNlbGVjdG9ycywgdHlwZXMpLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tU3ByZWFkRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMoc3ViRXhwcmVzc2lvbiwgdHlwZXMpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gXCIvXCIpLCAgLy8vXG4gICAgICAgICAgaW50ZXJtZWRpYXRlTm9kZXMgPSBbXSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCwgaW50ZXJtZWRpYXRlTm9kZXMpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JUeXBlU2VsZWN0b3IgPSBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgeyByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9yc0FuZFR5cGVzKHNlbGVjdG9ycywgdHlwZXMpIHtcbiAgbGV0IHJ1bGVOYW1lcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgfVxuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG4iXX0=