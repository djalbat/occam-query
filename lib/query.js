'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread'),
    constants = require('./constants'),
    arrayUtilities = require('./utilities/array');

var WILDCARD_CHARACTER = constants.WILDCARD_CHARACTER,
    includes = arrayUtilities.includes,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    fifth = arrayUtilities.fifth;

var Query = function () {
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
    key: 'execute',
    value: function execute(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _this = this;

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
    key: 'resetSpreadsIndexes',
    value: function resetSpreadsIndexes() {
      this.spread.resetIndex();

      if (this.subQuery !== null) {
        this.subQuery.resetSpreadsIndexes();
      }
    }
  }], [{
    key: 'fromExpression',
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
          selectors = thirdMatch.split('|'),
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
          infiniteDescent = secondMatch === '/',
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
  return (/^@/.test(selector)
  );
}

function ruleNamesFromSelectors(selectors) {
  return selectors.filter(isSelectorRuleNameSelector);
}

function isSelectorRuleNameSelector(selector) {
  return (/^[^@]/.test(selector)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJub2RlIiwiZGVwdGgiLCJyZXNldFNwcmVhZHNJbmRleGVzIiwibm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwiYmV0d2VlbiIsImlzQmV0d2VlbiIsImluY3JlbWVudEluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vZGVzIiwiZXhlY3V0ZSIsImNvbmNhdCIsInJlc2V0SW5kZXgiLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInNwcmVhZEV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmluZyIsInB1c2giLCJ0ZXN0IiwiZmlsdGVyIiwiaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsYUFBUixDQURsQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsU0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxRQURGLEdBQzZDRixjQUQ3QyxDQUNFRSxRQURGO0FBQUEsSUFDWUMsTUFEWixHQUM2Q0gsY0FEN0MsQ0FDWUcsTUFEWjtBQUFBLElBQ29CQyxLQURwQixHQUM2Q0osY0FEN0MsQ0FDb0JJLEtBRHBCO0FBQUEsSUFDMkJDLE1BRDNCLEdBQzZDTCxjQUQ3QyxDQUMyQkssTUFEM0I7QUFBQSxJQUNtQ0MsS0FEbkMsR0FDNkNOLGNBRDdDLENBQ21DTSxLQURuQzs7SUFHQUMsSztBQUNKLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEQyxZQUFoRCxFQUE4REMsZUFBOUQsRUFBK0U7QUFBQTs7QUFDN0UsU0FBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs0QkFFT0MsSSxFQUErRTtBQUFBLFVBQXpFQyxLQUF5RSx1RUFBakUsQ0FBaUU7O0FBQUE7O0FBQUEsVUFBOURILFlBQThELHVFQUEvQyxLQUFLQSxZQUEwQztBQUFBLFVBQTVCSSxtQkFBNEIsdUVBQU4sSUFBTTs7QUFDckYsVUFBSUMsUUFBUSxF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SUFBTixDQUFXM0MsSUFBWDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxTQUFPZCxLQUFQO0FBQ0Q7O0FBRUQsU0FBU3VELHNCQUFULENBQWdDRixRQUFoQyxFQUEwQztBQUFFLFNBQU8sTUFBS0ssSUFBTCxDQUFVTCxRQUFWO0FBQVA7QUFBNkI7O0FBRXpFLFNBQVNMLHNCQUFULENBQWdDUCxTQUFoQyxFQUEyQztBQUFFLFNBQU9BLFVBQVVrQixNQUFWLENBQWlCQywwQkFBakIsQ0FBUDtBQUFzRDs7QUFFbkcsU0FBU0EsMEJBQVQsQ0FBb0NQLFFBQXBDLEVBQThDO0FBQUUsU0FBTyxTQUFRSyxJQUFSLENBQWFMLFFBQWI7QUFBUDtBQUFnQyIsImZpbGUiOiJxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGluY2x1ZGVzLCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCkge1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gIH1cbiAgXG4gIGV4ZWN1dGUobm9kZSwgZGVwdGggPSAwLCBtYXhpbXVtRGVwdGggPSB0aGlzLm1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IHRydWUpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChyZXNldFNwcmVhZHNJbmRleGVzKSB7XG4gICAgICB0aGlzLnJlc2V0U3ByZWFkc0luZGV4ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoZGVwdGggPD0gbWF4aW11bURlcHRoKSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgICBpZiAoIXRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnR5cGVzLCB0eXBlLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICBjb25zdCBiZXR3ZWVuID0gdGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCk7XG5cbiAgICAgICAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICBjb25zdCBiZXR3ZWVuID0gdGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCk7XG5cbiAgICAgICAgICBpZiAoYmV0d2Vlbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRzSW5kZXhlcyk7XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTcHJlYWRzSW5kZXhlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTm9kZXMgPSB0aGlzLmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzKTtcblxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcmVzZXRTcHJlYWRzSW5kZXhlcygpIHtcbiAgICB0aGlzLnNwcmVhZC5yZXNldEluZGV4KCk7XG5cbiAgICBpZiAodGhpcy5zdWJRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdWJRdWVyeS5yZXNldFNwcmVhZHNJbmRleGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK10pPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoJ3wnKSwgIC8vL1xuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aCxcbiAgICAgICAgICBydWxlTmFtZXMgPSAodHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG4iXX0=