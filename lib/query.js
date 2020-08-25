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
  function Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent) {
    _classCallCheck(this, Query);

    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }

  _createClass(Query, [{
    key: "execute",
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;
      var resetSpreadsIndexes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var nodes = [];

      if (resetSpreadsIndexes) {
        this.resetSpreadsIndexes();
      }

      if (depth <= maximumDepth) {
        depth++;
        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          if (!terminalNodeEpsilonNode) {
            var type = terminalNode.getType(),
                found = (0, _array.includes)(this.types, type, _constants.WILDCARD_CHARACTER);

            if (found) {
              var between = this.spread.isBetween();

              if (between) {
                nodes = [node];
              }

              this.spread.incrementIndex();
            }
          }
        } else {
          var nonTerminalNode = node,
              ///
          childNodes = nonTerminalNode.getChildNodes(),
              ruleName = nonTerminalNode.getRuleName(),
              _found = (0, _array.includes)(this.ruleNames, ruleName, _constants.WILDCARD_CHARACTER);

          if (_found) {
            var _between = this.spread.isBetween();

            if (_between) {
              if (this.subQuery === null) {
                nodes = [nonTerminalNode];
              } else {
                childNodes.forEach(function (childNode) {
                  var resetSpreadsIndexes = false,
                      childNodeNodes = _this.subQuery.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var resetSpreadsIndexes = false,
                  childNodeNodes = _this.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

              nodes = nodes.concat(childNodeNodes);
            });
          }
        }
      }

      return nodes;
    }
  }, {
    key: "resetSpreadsIndexes",
    value: function resetSpreadsIndexes() {
      this.spread.resetIndex();

      if (this.subQuery !== null) {
        this.subQuery.resetSpreadsIndexes();
      }
    }
  }], [{
    key: "fromSubExpressionAndTypes",
    value: function fromSubExpressionAndTypes(subExpresion, types) {
      var query = null;
      var typesLength = types.length;

      if (typesLength === 0) {
        var expression = subExpresion; ///

        query = Query.fromExpression(expression);
      }

      return query;
    }
  }, {
    key: "fromExpression",
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = (0, _array.second)(matches),
          thirdMatch = (0, _array.third)(matches),
          fourthMatch = (0, _array.fourth)(matches),
          fifthMatch = (0, _array.fifth)(matches),
          selectors = thirdMatch.split("|"),
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      types = typesFromSelectors(selectors),
          ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types),
          spread = _spread["default"].fromSpreadExpression(spreadExpression),
          subQuery = Query.fromSubExpressionAndTypes(subExpression, types),
          infiniteDescent = secondMatch === "/",
          ///
      query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsIm5vZGUiLCJkZXB0aCIsInJlc2V0U3ByZWFkc0luZGV4ZXMiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwicmVzZXRJbmRleCIsInN1YkV4cHJlc2lvbiIsInF1ZXJ5IiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJleHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb24iLCJ0eXBlc0Zyb21TZWxlY3RvcnMiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzQW5kVHlwZXMiLCJTcHJlYWQiLCJmcm9tU3ByZWFkRXhwcmVzc2lvbiIsImZyb21TdWJFeHByZXNzaW9uQW5kVHlwZXMiLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmluZyIsInB1c2giLCJ0ZXN0IiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEQyxZQUFoRCxFQUE4REMsZUFBOUQsRUFBK0U7QUFBQTs7QUFDN0UsU0FBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs0QkFFT0MsSSxFQUErRTtBQUFBOztBQUFBLFVBQXpFQyxLQUF5RSx1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REgsWUFBOEQsdUVBQS9DLEtBQUtBLFlBQTBDO0FBQUEsVUFBNUJJLG1CQUE0Qix1RUFBTixJQUFNO0FBQ3JGLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFVBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLGFBQUtBLG1CQUFMO0FBQ0Q7O0FBRUQsVUFBSUQsS0FBSyxJQUFJSCxZQUFiLEVBQTJCO0FBQ3pCRyxRQUFBQSxLQUFLO0FBRUwsWUFBTUcsZ0JBQWdCLEdBQUdKLElBQUksQ0FBQ0ssY0FBTCxFQUF6Qjs7QUFFQSxZQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNRSxZQUFZLEdBQUdOLElBQXJCO0FBQUEsY0FBNEI7QUFDdEJPLFVBQUFBLHVCQUF1QixHQUFHRCxZQUFZLENBQUNFLGFBQWIsRUFEaEM7O0FBR0EsY0FBSSxDQUFDRCx1QkFBTCxFQUE4QjtBQUM1QixnQkFBTUUsSUFBSSxHQUFHSCxZQUFZLENBQUNJLE9BQWIsRUFBYjtB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QUFWLENBQWtCLFVBQUM4QixRQUFELEVBQWM7QUFDOUIsUUFBTUMsb0JBQW9CLEdBQUdDLHNCQUFzQixDQUFDRixRQUFELENBQW5EOztBQUVBLFFBQUlDLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU0zQyxJQUFJLEdBQUcwQyxRQUFRLENBQUNHLFNBQVQsQ0FBbUIsQ0FBbkIsQ0FBYjtBQUVBM0QsTUFBQUEsS0FBSyxDQUFDNEQsSUFBTixDQUFXOUMsSUFBWDtBQUNEO0FBQ0YsR0FSRDtBQVVBLFNBQU9kLEtBQVA7QUFDRDs7QUFFRCxTQUFTMEQsc0JBQVQsQ0FBZ0NGLFFBQWhDLEVBQTBDO0FBQUUsU0FBTyxLQUFLSyxJQUFMLENBQVVMLFFBQVYsQ0FBUDtBQUE2Qjs7QUFFekUsU0FBU00sc0JBQVQsQ0FBZ0NmLFNBQWhDLEVBQTJDO0FBQUUsU0FBT0EsU0FBUyxDQUFDZ0IsTUFBVixDQUFpQkMsMEJBQWpCLENBQVA7QUFBc0Q7O0FBRW5HLFNBQVNBLDBCQUFULENBQW9DUixRQUFwQyxFQUE4QztBQUFFLFNBQU8sUUFBUUssSUFBUixDQUFhTCxRQUFiLENBQVA7QUFBZ0M7O0FBRWhGLFNBQVNKLDhCQUFULENBQXdDTCxTQUF4QyxFQUFtRC9DLEtBQW5ELEVBQTBEO0FBQ3hELE1BQUlELFNBQVMsR0FBRyxFQUFoQjtBQUVBLE1BQU1tQyxXQUFXLEdBQUdsQyxLQUFLLENBQUNtQyxNQUExQjs7QUFFQSxNQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckJuQyxJQUFBQSxTQUFTLEdBQUcrRCxzQkFBc0IsQ0FBQ2YsU0FBRCxDQUFsQztBQUNEOztBQUVELFNBQU9oRCxTQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgfVxuICBcbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDAsIG1heGltdW1EZXB0aCA9IHRoaXMubWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzID0gdHJ1ZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgaWYgKHJlc2V0U3ByZWFkc0luZGV4ZXMpIHtcbiAgICAgIHRoaXMucmVzZXRTcHJlYWRzSW5kZXhlcygpO1xuICAgIH1cblxuICAgIGlmIChkZXB0aCA8PSBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIGRlcHRoKys7XG5cbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgICAgaWYgKGJldHdlZW4pIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNldFNwcmVhZHNJbmRleGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5LmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzKTtcblxuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFNwcmVhZHNJbmRleGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkc0luZGV4ZXMpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICByZXNldFNwcmVhZHNJbmRleGVzKCkge1xuICAgIHRoaXMuc3ByZWFkLnJlc2V0SW5kZXgoKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN1YlF1ZXJ5LnJlc2V0U3ByZWFkc0luZGV4ZXMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkV4cHJlc3Npb25BbmRUeXBlcyhzdWJFeHByZXNpb24sIHR5cGVzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uID0gc3ViRXhwcmVzaW9uOyAgLy8vXG5cbiAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK10pPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbVNwcmVhZEV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tU3ViRXhwcmVzc2lvbkFuZFR5cGVzKHN1YkV4cHJlc3Npb24sIHR5cGVzKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IFwiL1wiKSwgIC8vL1xuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnNBbmRUeXBlcyhzZWxlY3RvcnMsIHR5cGVzKSB7XG4gIGxldCBydWxlTmFtZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyk7XG4gIH1cblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl19