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
      var resetSpreadIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var nodes = [];

      if (resetSpreadIndex) {
        this.spread.resetIndex();
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
                  var childNodeNodes = _this.subQuery.execute(childNode, depth, maximumDepth);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var resetSpreadIndex = false,
                  ///
              childNodeNodes = _this.execute(childNode, depth, maximumDepth, resetSpreadIndex);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJub2RlIiwiZGVwdGgiLCJyZXNldFNwcmVhZEluZGV4Iiwibm9kZXMiLCJyZXNldEluZGV4Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwidHlwZSIsImdldFR5cGUiLCJmb3VuZCIsImJldHdlZW4iLCJpc0JldHdlZW4iLCJpbmNyZW1lbnRJbmRleCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsImV4ZWN1dGUiLCJjb25jYXQiLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInNwcmVhZEV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmluZyIsInB1c2giLCJ0ZXN0IiwiZmlsdGVyIiwiaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsYUFBUixDQURsQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsU0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxRQURGLEdBQzZDRixjQUQ3QyxDQUNFRSxRQURGO0FBQUEsSUFDWUMsTUFEWixHQUM2Q0gsY0FEN0MsQ0FDWUcsTUFEWjtBQUFBLElBQ29CQyxLQURwQixHQUM2Q0osY0FEN0MsQ0FDb0JJLEtBRHBCO0FBQUEsSUFDMkJDLE1BRDNCLEdBQzZDTCxjQUQ3QyxDQUMyQkssTUFEM0I7QUFBQSxJQUNtQ0MsS0FEbkMsR0FDNkNOLGNBRDdDLENBQ21DTSxLQURuQzs7SUFHQUMsSztBQUNKLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEQyxZQUFoRCxFQUE4REMsZUFBOUQsRUFBK0U7QUFBQTs7QUFDN0UsU0FBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs0QkFFT0MsSSxFQUE0RTtBQUFBLFVBQXRFQyxLQUFzRSx1RUFBOUQsQ0FBOEQ7O0FBQUE7O0FBQUEsVUFBM0RILFlBQTJELHVFQUE1QyxLQUFLQSxZQUF1QztBQUFBLFVBQXpCSSxnQkFBeUIsdUVBQU4sSUFBTTs7QUFDbEYsVUFBSUMsUUFBUSxFQUFa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QUFTTCxzQkFBVCxDQUFnQ1AsU0FBaEMsRUFBMkM7QUFBRSxTQUFPQSxVQUFVa0IsTUFBVixDQUFpQkMsMEJBQWpCLENBQVA7QUFBc0Q7O0FBRW5HLFNBQVNBLDBCQUFULENBQW9DUCxRQUFwQyxFQUE4QztBQUFFLFNBQU8sU0FBUUssSUFBUixDQUFhTCxRQUFiO0FBQVA7QUFBZ0MiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkSW5kZXggPSB0cnVlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBpZiAocmVzZXRTcHJlYWRJbmRleCkge1xuICAgICAgdGhpcy5zcHJlYWQucmVzZXRJbmRleCgpO1xuICAgIH1cblxuICAgIGlmIChkZXB0aCA8PSBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIGRlcHRoKys7XG5cbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgICAgaWYgKGJldHdlZW4pIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U3ByZWFkSW5kZXggPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkSW5kZXgpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXSk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gKHR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JUeXBlU2VsZWN0b3IgPSBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgeyByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cbiJdfQ==