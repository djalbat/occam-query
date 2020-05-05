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
          typesLength = types.length,
          ruleNames = typesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = _spread["default"].fromExpression(spreadExpression),
          subQuery = typesLength === 0 ? Query.fromExpression(subExpression) : null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsIm5vZGUiLCJkZXB0aCIsInJlc2V0U3ByZWFkc0luZGV4ZXMiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwicmVzZXRJbmRleCIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb24iLCJ0eXBlc0Zyb21TZWxlY3RvcnMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMiLCJTcHJlYWQiLCJmcm9tRXhwcmVzc2lvbiIsInF1ZXJ5Iiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdz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QUEwQztBQUFFLFNBQU8sS0FBS0ssSUFBTCxDQUFVTCxRQUFWLENBQVA7QUFBNkI7O0FBRXpFLFNBQVNKLHNCQUFULENBQWdDUCxTQUFoQyxFQUEyQztBQUFFLFNBQU9BLFNBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJDLDBCQUFqQixDQUFQO0FBQXNEOztBQUVuRyxTQUFTQSwwQkFBVCxDQUFvQ1AsUUFBcEMsRUFBOEM7QUFBRSxTQUFPLFFBQVFLLElBQVIsQ0FBYUwsUUFBYixDQUFQO0FBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcHJlYWQgZnJvbSBcIi4vc3ByZWFkXCI7XG5cbmltcG9ydCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5jbHVkZXMsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCkge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gIH1cbiAgXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IHRydWUpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChyZXNldFNwcmVhZHNJbmRleGVzKSB7XG4gICAgICB0aGlzLnJlc2V0U3ByZWFkc0luZGV4ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoZGVwdGggPD0gbWF4aW11bURlcHRoKSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgICBpZiAoIXRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICBjb25zdCBiZXR3ZWVuID0gdGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCk7XG5cbiAgICAgICAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICBjb25zdCBiZXR3ZWVuID0gdGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCk7XG5cbiAgICAgICAgICBpZiAoYmV0d2Vlbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRzSW5kZXhlcyk7XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTm9kZXMgPSB0aGlzLmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzKTtcblxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcmVzZXRTcHJlYWRzSW5kZXhlcygpIHtcbiAgICB0aGlzLnNwcmVhZC5yZXNldEluZGV4KCk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdWJRdWVyeS5yZXNldFNwcmVhZHNJbmRleGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK10pPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoXCJ8XCIpLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gKHR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gXCIvXCIpLCAgLy8vXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuIl19