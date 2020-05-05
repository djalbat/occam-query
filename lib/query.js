"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spread = require("./spread"),
    constants = require("./constants"),
    arrayUtilities = require("./utilities/array");

var WILDCARD_CHARACTER = constants.WILDCARD_CHARACTER,
    includes = arrayUtilities.includes,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    fifth = arrayUtilities.fifth;

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
                found = includes(this.types, type, WILDCARD_CHARACTER);

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
              _found = includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);

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
    key: "fromExpression",
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          selectors = thirdMatch.split("|"),
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      types = typesFromSelectors(selectors),
          typesLength = types.length,
          ruleNames = typesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = typesLength === 0 ? Query.fromExpression(subExpression) : null,
          infiniteDescent = secondMatch === "/",
          ///
      query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);
      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlNwcmVhZCIsInJlcXVpcmUiLCJjb25zdGFudHMiLCJhcnJheVV0aWxpdGllcyIsIldJTERDQVJEX0NIQVJBQ1RFUiIsImluY2x1ZGVzIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsIm5vZGUiLCJkZXB0aCIsInJlc2V0U3ByZWFkc0luZGV4ZXMiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwicmVzZXRJbmRleCIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb24iLCJ0eXBlc0Zyb21TZWxlY3RvcnMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMiLCJmcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsInNlbGVjdG9yIiwic2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVHlwZVNlbGVjdG9yIiwic3Vic3RyaW5nIiwicHVzaCIsInRlc3QiLCJmaWx0ZXIiLCJpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0QjtBQUFBLElBQ01DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FEekI7QUFBQSxJQUVNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQUY5Qjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsU0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxRQURGLEdBQzZDRixjQUQ3QyxDQUNFRSxRQURGO0FBQUEsSUFDWUMsTUFEWixHQUM2Q0gsY0FEN0MsQ0FDWUcsTUFEWjtBQUFBLElBQ29CQyxLQURwQixHQUM2Q0osY0FEN0MsQ0FDb0JJLEtBRHBCO0FBQUEsSUFDMkJDLE1BRDNCLEdBQzZDTCxjQUQ3QyxDQUMyQkssTUFEM0I7QUFBQSxJQUNtQ0MsS0FEbkMsR0FDNkNOLGNBRDdDLENBQ21DTSxLQURuQzs7SUFHQUMsSztBQUNKLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEQyxZQUFoRCxFQUE4REMsZUFBOUQsRUFBK0U7QUFBQTs7QUFDN0UsU0FBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs0QkFFT0MsSSxFQUErRTtBQUFBOztBQUFBLFVBQXpFQyxLQUF5RSx1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REgsWUFBOEQsdUVBQS9DLEtBQUtBLFlBQTBDO0FBQUEsVUFBNUJJLG1CQUE0Qix1RUFBTixJ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MUNhLE1BQUFBLEtBQUssR0FBRyxJQUFJcEQsS0FBSixDQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDQyxZQUE5QyxFQUE0REMsZUFBNUQsQ0FuQmQ7QUFxQkEsYUFBTzhDLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRELEtBQWpCOztBQUVBLFNBQVMrQyxrQkFBVCxDQUE0QkosU0FBNUIsRUFBdUM7QUFDckMsTUFBTXpDLEtBQUssR0FBRyxFQUFkO0FBRUF5QyxFQUFBQSxTQUFTLENBQUNoQixPQUFWLENBQWtCLFVBQVM0QixRQUFULEVBQW1CO0FBQ25DLFFBQU1DLG9CQUFvQixHQUFHQyxzQkFBc0IsQ0FBQ0YsUUFBRCxDQUFuRDs7QUFFQSxRQUFJQyxvQkFBSixFQUEwQjtBQUN4QixVQUFNeEMsSUFBSSxHQUFHdUMsUUFBUSxDQUFDRyxTQUFULENBQW1CLENBQW5CLENBQWI7QUFFQXhELE1BQUFBLEtBQUssQ0FBQ3lELElBQU4sQ0FBVzNDLElBQVg7QUFDRDtBQUNGLEdBUkQ7QUFVQSxTQUFPZCxLQUFQO0FBQ0Q7O0FBRUQsU0FBU3VELHNCQUFULENBQWdDRixRQUFoQyxFQUEwQztBQUFFLFNBQU8sS0FBS0ssSUFBTCxDQUFVTCxRQUFWLENBQVA7QUFBNkI7O0FBRXpFLFNBQVNMLHNCQUFULENBQWdDUCxTQUFoQyxFQUEyQztBQUFFLFNBQU9BLFNBQVMsQ0FBQ2tCLE1BQVYsQ0FBaUJDLDBCQUFqQixDQUFQO0FBQXNEOztBQUVuRyxTQUFTQSwwQkFBVCxDQUFvQ1AsUUFBcEMsRUFBOEM7QUFBRSxTQUFPLFFBQVFLLElBQVIsQ0FBYUwsUUFBYixDQUFQO0FBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoXCIuL3NwcmVhZFwiKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkc0luZGV4ZXMgPSB0cnVlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBpZiAocmVzZXRTcHJlYWRzSW5kZXhlcykge1xuICAgICAgdGhpcy5yZXNldFNwcmVhZHNJbmRleGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoIDw9IG1heGltdW1EZXB0aCkge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCF0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgY29uc3QgYmV0d2VlbiA9IHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpO1xuXG4gICAgICAgICAgICBpZiAoYmV0d2Vlbikge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgY29uc3QgYmV0d2VlbiA9IHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpO1xuXG4gICAgICAgICAgaWYgKGJldHdlZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2V0U3ByZWFkc0luZGV4ZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkc0luZGV4ZXMpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U3ByZWFkc0luZGV4ZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRzSW5kZXhlcyk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHJlc2V0U3ByZWFkc0luZGV4ZXMoKSB7XG4gICAgdGhpcy5zcHJlYWQucmVzZXRJbmRleCgpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3ViUXVlcnkucmVzZXRTcHJlYWRzSW5kZXhlcygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStdKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KFwifFwiKSwgIC8vL1xuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aCxcbiAgICAgICAgICBydWxlTmFtZXMgPSAodHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09IFwiL1wiKSwgIC8vL1xuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JUeXBlU2VsZWN0b3IgPSBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgeyByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cbiJdfQ==