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
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;

      var nodes = [];

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
              if (this.spread.isBetween()) {
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
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [nonTerminalNode];
              } else {
                childNodes.forEach(function (childNode) {
                  var childNodeNodes = _this.subQuery.execute(childNode, depth, maximumDepth);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var childNodeNodes = _this.execute(childNode, depth, maximumDepth);

              nodes = nodes.concat(childNodeNodes);
            });
          }
        }
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJpc0JldHdlZW4iLCJpbmNyZW1lbnRJbmRleCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsImV4ZWN1dGUiLCJjb25jYXQiLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInNwcmVhZEV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmlu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QSxVQWVNdEMsV0FBWXlDLGdCQUFnQixDQUFqQixHQUNFN0MsTUFBTWdELGNBQU4sQ0FBcUJMLGFBQXJCLENBREYsR0FFSSxJQWpCckI7QUFBQSxVQWtCTXJDLGtCQUFtQjhCLGdCQUFnQixHQWxCekM7QUFBQSxVQWtCZ0Q7QUFDMUNhLGNBQVEsSUFBSWpELEtBQUosQ0FBVUMsU0FBVixFQUFxQkMsS0FBckIsRUFBNEJDLE1BQTVCLEVBQW9DQyxRQUFwQyxFQUE4Q0MsWUFBOUMsRUFBNERDLGVBQTVELENBbkJkOztBQXFCQSxhQUFPMkMsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQm5ELEtBQWpCOztBQUVBLFNBQVM0QyxrQkFBVCxDQUE0QkosU0FBNUIsRUFBdUM7QUFDckMsTUFBTXRDLFFBQVEsRUFBZDs7QUFFQXNDLFlBQVVmLE9BQVYsQ0FBa0IsVUFBUzJCLFFBQVQsRUFBbUI7QUFDbkMsUUFBTUMsdUJBQXVCQyx1QkFBdUJGLFFBQXZCLENBQTdCOztBQUVBLFFBQUlDLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU10QyxPQUFPcUMsU0FBU0csU0FBVCxDQUFtQixDQUFuQixDQUFiOztBQUVBckQsWUFBTXNELElBQU4sQ0FBV3pDLElBQVg7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsU0FBT2IsS0FBUDtBQUNEOztBQUVELFNBQVNvRCxzQkFBVCxDQUFnQ0YsUUFBaEMsRUFBMEM7QUFBRSxTQUFPLE1BQUtLLElBQUwsQ0FBVUwsUUFBVjtBQUFQO0FBQTZCOztBQUV6RSxTQUFTTCxzQkFBVCxDQUFnQ1AsU0FBaEMsRUFBMkM7QUFBRSxTQUFPQSxVQUFVa0IsTUFBVixDQUFpQkMsMEJBQWpCLENBQVA7QUFBc0Q7O0FBRW5HLFNBQVNBLDBCQUFULENBQW9DUCxRQUFwQyxFQUE4QztBQUFFLFNBQU8sU0FBUUssSUFBUixDQUFhTCxRQUFiO0FBQVA7QUFBZ0MiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChkZXB0aCA8PSBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIGRlcHRoKys7XG5cbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStdKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KCd8JyksICAvLy9cbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGgsXG4gICAgICAgICAgcnVsZU5hbWVzID0gKHR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSAodHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSAnLycpLCAgLy8vXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG5mdW5jdGlvbiB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuIl19